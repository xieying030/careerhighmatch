package handlers

import (
    "html/template"
    "net/http"
)

func AboutHandler(w http.ResponseWriter, r *http.Request) {
    tmpl := template.Must(template.ParseFiles("aboutus.html"))
    tmpl.Execute(w, nil)
}
