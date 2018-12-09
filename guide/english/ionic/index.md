---
title: Ionic
---
## Ionic framework

Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps.

Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

### Building Hybrid Apps With Ionic

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it’s just a web page running in a native app shell! That means we can use any kind of HTML, CSS, and Javascript we want. 

As of Ionic 2, the framwork uses Angular (previously using AngularJS), please see seperate freeCodeCamp guides on Angular.

### Before we can start playing with Ionic. Let’s prepare our system first:

The easiest way to use Ionic is via its [CLI](https://ionicframework.com/docs/cli/). Those familiar with [Angular's CLI](https://cli.angular.io/) should see some resemblances.

Prerequisites:

- nodejs / npm 
- xcode (if wanting to build iOS apps)
- Android SDK (if building Android apps)

Install ionic CLI:

```shell
  npm i -g ionic cordova    
```
 
Create a new project and run in the browser:

```shell
  ionic start MyFirstApp blank
  cd MyFirstApp 
  ionic serve
```

### Ionic 4 Beta:
The latest release of Ionic is [Ionic 4](https://blog.ionicframework.com/announcing-ionic-4-beta/). Having completly rewritten all their Angular components as web compoents, Ionic is now platform agnostic with the ability to use Anguar, Vue, React, or plain JavaScript.

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

Ionic 4's CLI now uses Angular's CLI for its building and routing. For other frameworks see the quickstarts:

- [Ionic Angular](https://github.com/ionic-team/ionic/tree/master/angular)
- [Ionic Vue](https://github.com/ionic-team/ionic/blob/master/vue/README.md)
- [Ionic React](https://github.com/ionic-team/ionic/tree/master/react)
