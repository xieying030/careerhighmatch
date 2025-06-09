
package handlers

import (
	"encoding/json"
	"net/http"
)

type MatchRequest struct {
	Personality string   `json:"personality"`
	Values      []string `json:"values"`
	Interests   []string `json:"interests"`
	Skills      []string `json:"skills"`
}

type MatchResponse struct {
	TeamName string  `json:"team_name"`
	FitScore float64 `json:"fit_score"`
}

func MatchHandler(w http.ResponseWriter, r *http.Request) {
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
