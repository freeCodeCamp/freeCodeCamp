---
title: Mixins
---

## Mixins

A constant problem is that we use some small functions in a lot of Vue components.  Instead of copying them into each of them, we can create mixins. Those can be included and will then be merged into the current component.

### Examples

Let's look at the following example:

We see here that the mixin is merged into the context of the Vue Component, data of the mixin will be merged as well.
```javascript
var myMixin = {
  methods: {
    hello: function(name) {
      return "Hello " + name;
    }
  }
};

new Vue({
  mixins: [myMixin],
  created: function() {
    console.log(this.hello("John"));
  }
});

// this will return print: Hello John
```

```javascript
var myMixin = {
  created: function() {
    console.log("running mixin constructor");
  }
};

Here we see that the constructor of the mixin is always executed before that of the component.
new Vue({
  mixins: [myMixin],
  created: function() {
    console.log("running component constructor");
  }
})
// this will print:
// running mixin constructor
// running component constructor
```

Here we see that the Component will override the definitions in the mixin if there is a conflict.
```javascript
var myMixin = {
  methods: {
    foo: {
      console.log('mixin foo');
    },
    bar: {
      console.log('mixin bar');
    }
  }
};

var comp = new Vue({
  mixins: [myMixin],
  methods: {
    bar: function() {
      console.log('component bar');
    }
  }
});

comp.foo(); // prints "mixin foo"
comp.bar(); // prints "component bar"
```

In this case we can use it to make a global readOnly Variable
```javascript
// use global mixins carefully
Vue.mixin({
  data: function() {
    return {
      get greeting() {
        return "World";
      }
    }
  }
});

Vue.component('page-greeting', {
  props: ,
  template: `
    <div>
      <h1>
        Hello {{ greeting }}
      </h1>
    </div>
  `
});
```
