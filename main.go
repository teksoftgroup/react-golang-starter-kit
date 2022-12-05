package main

import (
	"github/one-app/web"
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	rest := echo.New()

	web.RegisterHandlers(rest)

	rest.GET("/api", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello Rambo!")
	})

	rest.Logger.Fatal(rest.Start(":8989"))
}
