---
title: Declarative Rendering
---

## Instalation

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
recomended for beginners.

## Declarative Rendering

Vue.js is a great tool for creating dynamic pages, and a first way to get in
touch with that is what's called Declarative Rendering.

The use of term "declarative" intends to straighten this concept to
declarative languages, such as SQL: you order something, it's not implied
any implementation. Vue.js allows you to declare what data you want to be
rendered, as simply as that:

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, world!'
  }
});
```

With those snippets, you're telling Vue to dynamically render whatever is stored
inside `message` variable. And the fun: whenever `message` is changed,
Vue.js manages to reload that specific part of the DOM and you see the
change. 

If you want to try this reactivity out, open the console and change the value
of `app.message` to say, `"Hello from console"`. Did you notice the change in
the page?

The `{{ ... }}` is the syntax for that behavior: outputting the value
of a variable or of an expression. For instance, this is also a valid use and
will result in `hello`:

```html
<div id="app">
  {{ 1 < 2 ? "hello" : "goodbye" }}
</div>
```

There're cases in which what we want is to set an attribute using our Vue app's
variable.  You might think that the same syntax applies, but Vue has something
specific for that, what we call "binding".

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

The syntax `v-bind` is what Vue.js calls a "directive". It's a way to set a new
attribute to the tag that will be handled by Vue -- there are more
directives, they all begin with `v-`.
