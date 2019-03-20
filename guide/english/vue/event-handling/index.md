---
title: Event Handling
---

## Creating an Event
We can create an event using the directive `v-on`:

```html
<div id="app">
  <button v-on:click="buttonClicked">Click Me</button>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  methods: {
    buttonClicked: function (event) {
      alert("You clicked on a " + event.target.tagName + " element");
    }
  }
})
```

Note: A shorthand for any event handler is using the `@` symbol and the event name. For example `@click` is short for `v-on:click`.
