---
title: Vuex
---
## Introduction

Vuex is a state management pattern + library for `Vue.js` applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension.

State management is not necessary in all applications, but becomes necessary when multiple components share common state. This can lead to developing brittle and hard to maintain hacks to keep the views in sync. 

Instead with Vuex, you can extract the shared state out of the components, and manage it in a global singleton. This makes the code more maintainable and gives it a better structure. 

![Vuex reactivity flowchart](https://vuex.vuejs.org/vuex.png)

### More Information

- [Vuex](https://vuex.vuejs.org/)
- [Vuex articles on FreeCodeCamp](https://medium.freecodecamp.org/tagged/vuex)