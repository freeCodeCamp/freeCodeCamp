---
title: Router
---

## Introduction
Vue router is the official router for Vue.js. With it you can easily create your Single Page Apps.

## Basics
If you want to use Vue Router in your app, first you'll need to inject it in your root instance to make your whole application aware of the router.
```javascript
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```
Now, to use the power of Vue Router all you need to do is map Vue.js componenets with routes and specify where to render them.
For example, your main template may look like that:
```javascript
<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
```
Then in `<router-view />` place it will render a component which is specified for this route. We map components to routes in router itself:
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
```
You can add as many routes as you need. It is also possible to use wildcards, aliases, redirects, dynamic route mapping, etc.

## Read more
- [Vue Router official docs](https://router.vuejs.org/)
- [Vue Router's Github repository](https://github.com/vuejs/vue-router)
