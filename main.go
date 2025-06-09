package main

import (
	"log"
	"net/http"
)

func main() {
	SetupRoutes()

	log.Println("Server started at http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
