---
title: Ionic
---
## Ionic framework

Ionic is an HTML5 mobile app development framework targeted at building hybrid mobile apps.

Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

### Building Hybrid Apps With Ionic

Those familiar with web development will find the structure of an Ionic app straightforward. At its core, it’s just a web page running in an native app shell! That means we can use any kind of HTML, CSS, and Javascript we want. 

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

