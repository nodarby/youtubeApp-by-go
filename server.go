package main

import (
	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/sirupsen/logrus"
	"youtubeApp-by-go/routes"
)

func init(){
	err := godotenv.Load()
	if err != nil{
		logrus.Fatal("Error loading ./env")
	}

	logrus.SetLevel(logrus.DebugLevel)
	logrus.SetFormatter(&logrus.JSONFormatter{})
}

func main()  {
	e := echo.New()

	//Middlewares
	e.Use(middleware.Logger())
	e.Use(middleware.CORS())

	//Routes
	routes.Init(e)

	e.Logger.Fatal(e.Start(":8080"))
}