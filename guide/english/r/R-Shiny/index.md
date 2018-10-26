# R-Shiny

##What is R-Shiny ?

Open Source web application framework for R, developed by R Studio. 
Shiny makes it easy to turn analytical analysis into stylish, interactive web apps,presentable to a wider audience.

##What is needed to build the app using Shiny?

Latest version of R installed in system. “Shiny” package installed.
Yes, you need to have some knowledge of HTML, CSS or Javascript. However, Shiny makes it simple and easy.

##Getting Started : UI.R and Server.R

Install.packages(“shiny”)
Create user interface in UI.R file.
Create the server.R file for computational purposes

##Structure of ui.R

library(shiny)                   #Remember to load the shiny package
#Define UI for the shiny application here.

shinyUI(fluidPage(

titlePanel(),                    #Application title

sidebarPanel(),                  #sidebarLayout(

mainPanel(),

))

)
