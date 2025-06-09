// File: main.go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type MatchRequest struct {
	Personality string `json:"personality"`
	Values      []string `json:"values"`
	Interests   []string `json:"interests"`
}

type MatchResponse struct {
	TeamName string  `json:"team_name"`
	FitScore float64 `json:"fit_score"`
}

func matchHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req MatchRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Bad request", http.StatusBadRequest)
		return
	}

	// Stub logic for match score
	resp := MatchResponse{
		TeamName: "Team AI Pioneers",
		FitScore: 0.82,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/match", matchHandler)
	fmt.Println("Server started at :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
