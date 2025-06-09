
package main

import (
	"net/http"
	"careerhighmatch/handlers"
)

func SetupRoutes() {
	http.HandleFunc("/users", handlers.CreateUserHandler)
}
