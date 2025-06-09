// user info
package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"sync"
)

// User model
type User struct {
	Name     string   `json:"name"`
	Email    string   `json:"email"`
	Skills   []string `json:"skills"`
	Interests []string `json:"interests"`
}

// In-memory storage (temporary for prototype)
var (
	userStore = make([]User, 0)
	mu        sync.Mutex
)

// CreateUserHandler handles POST /users
func CreateUserHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	mu.Lock()
	userStore = append(userStore, user)
	mu.Unlock()

	w.WriteHeader(http.StatusCreated)
	fmt.Fprintf(w, "User %s added successfully", user.Name)
}
