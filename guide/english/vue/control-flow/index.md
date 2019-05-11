---
title: Control Flow
---

## Control Flow


### Conditionals

With Vue.js you can decide whether to show or not a piece of code in your final page, depending on some condition. For example, imagine a form input that requires a text input at least 8 characters long: if the user input is shorter than 8, an error message should appear; but if the input is longer than 8, the message disappears.

Let's make a simpler example. We want to condition the exibition of a message to a counter:

```html
<div id="app">
  <p v-if="counter > 10">
    The counter is greater than 10!
  </p>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
});
```

If you go to the console and start to increment `app.counter`, the message will be shown when the counter goes higher than 10! Then, if you decrement `app.counter`, Vue.js will hide the message again once it's lower than 10. For that, we used the directive `v-if`.

You might be wondering if there's an `else` for that `if`. And there is! The `v-else`.

Note that the `v-else` will always:
* expect a `v-if` prior to it
* refer to the closest `v-if` in the page

Let's alter our first example a little bit to get this straight.

```html
<div id="app">
  <button type="button" @click="counter = counter + 1">Click Me!</button>
  <p v-if="counter > 10">
    The counter is greater than 10!
  </p>
  <p v-else>
    The counter is less than 10!
  </p>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
});
```

Play a little with that by changing `app.counter` and pay attention to the
message shown.

Vue.js also has the `v-else-if` directive, which works just like `else if` in regular JavaScript.


### Loops

Vue.js Loops help with the repetition of chunks of code. The classic example is a dynamically rendered list:

```html
<div id="app">
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ item }}
    </li>
  </ul>
</div>
```

```javascript
let app = new Vue({
  el: '#app',
  data: {
    list: [
      "shave",
      "do the dishes",
      "clean the sink",
      "pay the bill"
    ]
  }
});
```

Way easier than inserting a lot of `<li>`! And notice that whenever the `list` changes, the resulting html will change accordingly. Try it out: open the console and `push` some string to the `list` with

```javascript
app.list.push("something else");
```

As expected, the list now has our brand new item!

### Accessing current index in loops and :key

`v-for` also supports an optional second argument for the index of the current item:

```html
<div id="app">
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ index }}: {{ item }}
    </li>
  </ul>
</div>
```
This way, we can use `index` to style the first, last or even/odd list elements differently, or apply extra logic to our component.

In the example above, check out the `:key` attribute. This is a unique variable that Vue uses to help handle dynamically changing data quickly, without having to spend extra time figuring out what elements to add and remove from the html DOM.

Sometimes, examples will use another variable to pass to `:key`, like a unique ID for each element in a list. We've used a sneaky trick here. You can get the _index_ of the element in an array by using `(element, index) in yourArray`, and set that as the loop's `key`.

You don't absolutely have to use a `key` attribute, but it is _highly_ recommended.
