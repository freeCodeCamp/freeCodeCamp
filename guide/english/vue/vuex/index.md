---
title: Vuex
---

## VUEX

Vuex is a state management framework for Vue. It gives your application a single object that defines application state that can be injected into any of your components.

A relationship of data in vuex is called a `store` and can be attributed to several core principles to change state

a vuex `store` contains the following objects that give you the ability to change and mutate the state.

`state` is defined as the schema for the attributes the store is responsible for changing.

`getters` are like computed properties where state can filterd or calculated based on the stores state.

`actions` are the methods that provide the ability for components to ask the store to mutate the state. They can be asynchronous.

`mutations` are the only methods that can actully mutate the state of a store. Mutations methods can only be called from actions. They are only synchronous.

### VUEX Store Sample

```
const store = new Vuex.store({
  state: {
    currentName: null
  },
  actions: {
    setName ({ commit }, name) {
      commit('currentName', name)
    }
  },
  mutations: {
    currentName (state, name) {
      state.currentName = name
    }
  }
})
```
