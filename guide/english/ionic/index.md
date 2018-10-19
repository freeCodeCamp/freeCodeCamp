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

### Ionic 4 Beta:
The latest release of Ionic is [Ionic 4](https://blog.ionicframework.com/announcing-ionic-4-beta/) (still in beta although now pretty much stable as of October 2018). Having completly re-written all there Angular components as web compoents (see seperate freeCodeCamp guide), Ionic is now platform agnostic with the ability to use Anguar, Vue, React, or plain js.

To use Ionic 4 make sure you have the latest version of the Ionic CLI:
```shell
npm i -g ionic
```

and use the type arguments
```shell
ionic start MyFirstIonic4App tabs --type=angular
cd MyFirstIonic4App
ionic serve
```

Ionic 4's CLI now uses Angular's CLI for its building and Routing. For other frameworks see the quickstarts:

- [Ionic Angular](https://github.com/ionic-team/ionic/tree/master/angular)

- [Ionic Vue](https://github.com/ionic-team/ionic/blob/master/vue/README.md)

- [Ionic React](https://github.com/ionic-team/ionic/tree/master/react)