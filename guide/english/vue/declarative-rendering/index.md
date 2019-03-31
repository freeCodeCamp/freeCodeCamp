---
title: Declarative Rendering
---

## Installation

Before we get started, there are a couple of ways to use Vue.js, namely via CDN and via
installation. For a first experience, it's easier to use the CDN.

For development, use this:
```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

When jumping to production, this:
```html
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

As mentioned before, you can also install the `vue-cli`, but this is not
recommended for beginners.

## Declarative Rendering

Vue.js is a great tool for creating dynamic pages, and a first way to get in
touch with that is what's called *Declarative Rendering*.

"Declarative", because it is somewhat similar to declarative languages such as SQL. Using Vue.js straightforward syntax, you just *declare* what data you want to see, and the framework will take care of the rendering, as simply as that:

```html
<div id="app">
  {{ message }} <!-- declaring what we want to see -->
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world!' // Vue.js fetches its value here
  }
});
```

With those snipets, you're telling Vue to dynamically render whatever is stored
inside the `message` variable. And the fun part: whenever `message` is changed,
Vue.js manages to instantly update that specific part of the DOM. 

To experience this reactivity, once you've set up a new project and displayed it in your browser open the console and change the value of app.message to, say, "Hello from console". 

`app.message = "Hello from console"`

Did you notice the change in the page? It's just like magic.

The `{{ ... }}`, or double mustache brakets, is the syntax for that behavior: outputting the value
of a variable or of an expression. For instance, this is also a valid use and
will result in `hello` :

```html
<div id="app">
  {{ 1 < 2 ? "hello" : "goodbye" }}
</div>
```

There will be cases when we want to dynamically set a DOM element's attribute.
Vue has a way to do exactly that, and it is called "binding" :

```html
<div id="app">
  <a v-bind:href="dynamicLink">This link</a>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    dynamicLink: 'medium.freecodecamp.org'
  }
}
```

The `v-bind:` syntax is what Vue.js calls a "directive". It's a way to dynamically bind an attribute to data.
As a shorthand, `v-bind:` can be replaced with `:`. You will often see it used that way, as this type of directive is widely used across projects. See more shorthands in the shorthand section of this Vue.js guide.

As a general rule, Vue.js makes it easy to recognize its declarations by always using the `v-` prefix :
`v-bind`, `v-for`, `v-if`, `v-else`, `v-on`, and more.
