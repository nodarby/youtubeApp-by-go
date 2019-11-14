package main

import (
	"github.com/labstack/echo"
	"youtubeApp-by-go/routes"
)

func main()  {
	e := echo.New()

	//Routes
	routes.Init(e)

	e.Logger.Fatal(e.Start(":8080"))
}