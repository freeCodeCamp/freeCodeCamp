---
title: Ionic
---
## Ionic framework

Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps.

Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

### Building Hybrid Apps With Ionic

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it’s just a web page running in an native app shell! That means we can use any kind of HTML, CSS, and Javascript we want. 

The bulk of an Ionic app will be written in HTML, Javascript, and CSS. Ionic also uses AngularJS for a lot of the core functionality of the framework.

### Before we can start playing with Ionic. Let’s prepare our system first:

```
  nodeJS and npm
  Ionic 2
  Cordova
  Android Environment (or iOS if you’re working on a MacOS)
```
  
### First thing first, we need to have Node.js and npm.

```
  sudo apt-get update
  sudo apt-get install nodejs
```
  
### Node.js package manager (npm)

```  
  sudo apt-get install npm
```
  
### Ionic 2 and cordova

```
  sudo npm install -g ionic cordova
```
  
### Now sit back and relax, give it some time to finish, it can take several minutes depending on your internet connection.
Once that’s done, Let’s start off by generating a new project based on the “blank” template

```
  ionic start MyFirstApp blank
  cd MyFirstApp 
  ionic serve
```

