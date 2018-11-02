---
title: Control Flow
---

## Control Flow


### Conditionals

With Vue.js you can decide wheter to show or not a piece of code in you final
page, depending on some condition. For example, imagine a form input that is
required a text at least 8 characters long: if the user input is shorter than 8,
than an error message should appear; but if the input is longer than 8, the
message disappears.

But let's make a simpler example. We want to condition the exibition of a
message to a counter:

```html
<div id="app">
  <p v-if="counter > 10">
    This message is only rendered when the counter is greater than 10
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

If you go to the console and start to increment the counter, when it crosses our
threshold of 10, the message will be shown! Then, if you decrement `counter`,
Vue.js will hide the message when `counter` gets lower than 10. For that, we
used the directive `v-if`.

And you might be wondering if there's an `else` for that `if`. And there is the
`v-else`. Notice that the `v-else` will always
* expect a `v-if` prior to it
* refers to the closest `v-if` in the page

Let's alter a little bit our first example to get this straight.

```html
<div id="app">
  <p v-if="counter > 10">
    This message is only rendered when the counter is greater than 10
  </p>
  <p v-else>
    And this is the "otherwise" option
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

Play a little with that by changing `counter` values and pay attention to the
message shown.

Vue.js also has the `v-else-if` directive.


### Loops

Vue.js also helps with the generation of multiple copies of the same code
structure, with loops. The classic example is a list dynamically rendered.

```html
<div id="app">
  <ul>
    <li v-for="item in list">
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

Way easier than inserting a lot of `<li>`. And notice that whenever the `list`
changes, the result will change acordingly. Try it out: open the console and
`push` some string to the `list` with

```javascript
app.list.push("something else");
```

As expected, the page rendered now has our brand new item!

### Accessing current index in loops

`v-for` also supports an optional second argument for the index of the current item:

```html
<div id="app">
  <ul>
    <li v-for="(item, index) in items">
      {{ index }}: {{ item }}
    </li>
  </ul>
</div>
```
This way, we can use `index` to style the first, last or even/odd list elements differently, or apply extra logic to our component.

