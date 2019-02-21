---
title: Vuex
---

## Introduction
Vuex is a state management pattern and a library for Vue.js apps. It allows the developer to store all data for the app in one location. And not just store - Vuex provides ways to get and modify the data. This is especially useful in larger applications with many components where some components are nested: with Vuex each component has an access to the data store.
Vuex was inspired by Redux, Flux and Elm architecture, if you happen to know either of them, you might see some similarities in the concept.

## Basics
Basic structure of Vuex store looks like this:
```javascript
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},         
    modules: {}
})
```
### State
You store the data in `state` of your Vuex store in a form of simple JSON object. You can use that data in a componenet by returning it from a computed property:
```javascript
computed: {
    data () {
      return store.state.movies
    }
  }
```
### Getters
Getters are useful when you need to apply some changes to the data before using it: often it involves filtering or sorting data entries. It would be tedious to do that at each component separately, so you can do that once in your Vuex store.
```javascript
getters: {
    moviesSorted: 
      state => state.movies.sort(
        (a, b) => b.rating - a.rating
      )
}
```
Getters are exposed in `store.getters` and you can easily access them in any componenent with the code like `this.$store.getters.moviesSorted`.

### Mutations
If you want to change the state in Vuex store, you'll have to commit a mutation.
```javascript
mutations: {
    ADD_MOVIE(state, movie) {
        state.movies.push(movie)
    }
}
```
You cannot directly call such mutation handler, instead you commit it with `store.commit('ADD_MOVIE')`. If needed, you can pass an additional argument to the mutation handler - it is called mutation payload.
Mutations must be synchronous!

### Actions
Actions use mutations to change the state and they can contain asynchronous code. For example, you can make a server request and change the state depending on response. You can compose your action of several mutations.
Action handlers receive a context object:
```javascript
actions: {
    myAction (context) {
      context.commit('ADD_MOVIE')
    }
  }
```
Actions can be called from any component using `dispatch` method.

### Modules
When you have a really big app modules come as handy way of organizing your code. You can divide your store into modules and each module can contain state, getters, mutations, actions and even nested modules. By default getters, mutations and actions in modules are global, but you can make them namespaced.
