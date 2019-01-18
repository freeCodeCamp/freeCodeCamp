---
title: Vue CLI
---
# Vue CLI

Vue CLI is the Standard Tooling for Vue.js Development. The Vue CLI allows a developer to quickly scaffold a project and instantly prototype them.

## Components of the System

### CLI

The CLI (`@vue/cli`) is a globally installed npm package and provides the vue command in your terminal. It provides the ability to quickly scaffold a new project via `vue create`, or instantly prototype new ideas via `vue serve`. You can also manage your projects using a graphical user interface via `vue ui`.

### CLI Service

The CLI Service (`@vue/cli-service`) is a development dependency. It's an npm package installed locally into every project created by `@vue/cli`.

The CLI Service is built on top of [webpack](https://webpack.js.org/) and [webpack-dev-server](https://github.com/webpack/webpack-dev-server). 

### CLI Plugins

CLI Plugins are npm packages that provide optional features to your Vue CLI projects, such as Babel/TypeScript transpilation, ESLint integration, unit testing, and end-to-end testing. It's easy to spot a Vue CLI plugin as their names start with either `@vue/cli-plugin-` (for built-in plugins) or `vue-cli-plugin-` (for community plugins).

# More Information

- [Official Documentation](https://cli.vuejs.org/)
