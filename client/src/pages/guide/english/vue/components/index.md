---
title: Components
---

## Components

A classic problem that web developers face when working is HTML duplication, not
in a simple example such as a list, but sometimes all you want is a "import" to
be able to use the same code in several different places. Well, Vue.js gives you
this feature with Components.

Suppose you're developing a landing page for your company's product and you need
to display the 4 main features of it following the same structure of a card-like
object, with a icon, a title and a short description.

```javascript
Vue.component('feature-card', {
  props: ["iconSrc", "iconAltText", "featureTitle", "featureDescription"],
  template: `
    <div class="card">
      <div class="icon-wrapper">
        <img
          class="icon"
          :src="iconSrc"
          :alt="iconAltText">
      </div>
      <h4 class="title">
        {{ featureTitle }}
      </h4>
      <p class="description">
        {{ featureDescription }}
      </p>
    </div>
  `
});
```

> Note that here we binded the image `src` attribute with another syntax `:src`.
This changes nothing, it is simply a syntax sugar to `v-bind:src` -- whenever
you want to bind some attribute to a variable, you can prepend a `:` to the
attribute name instead of using the full form `v-bind`.

With this code, we did a lot of new things:
* we created a new component called `feature-card`
* we defined `feature-card` default **structure** with the `template` attribute
* we opened a list of properties that that component accept with the `props`
  list

When we defined the name of the components, whenever we desire to reuse it, we
can just reference it by using as a tag. In our example, we can use the tag
`<feature-card>`:

```html
<div id="app">
  <feature-card
    iconSrc="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
    iconAltText="rocket"
    featureTitle="Processing speed"
    featureDescription="Our solution has astonishing benchmarks grades"
  </feature-card>
</div>
```

In this case, we called the `<feature-card>` as it was an existing tag, as well
as we setted `iconSrc` or `featureTitle` as they were valid attributes. And the
purpose of Vue.js components is this: increment your toolbox with your own
tools.

### Event Handling

What if we would like, let's say, to know when the user clicked on the feature card, so that we can update 
another component, or log the event to a remote server using a REST API?

We can use Vue's [Event Handling](https://vuejs.org/v2/guide/events.html). 
So, whenever the user clicks on the `<feature-card>`, a named event is being thrown by the component, and will get caught by the parent component.

Our `<feature-card>` component changes as follows:

```javascript
Vue.component('feature-card', {
  props: ["iconSrc", "iconAltText", "featureTitle", "featureDescription"],
  methods: {
    cardClicked() {
      // the second parameter can be any kind of data payload.
      this.$emit('featureCardClicked', {})
    }
  },
  template: `
    <div class="card" v-on:click="cardClicked">
      <div class="icon-wrapper">
        <img
          class="icon"
          :src="iconSrc"
          :alt="iconAltText">
      </div>
      <h4 class="title">
        {{ featureTitle }}
      </h4>
      <p class="description">
        {{ featureDescription }}
      </p>
    </div>
  `
});
```

Now, when we create a `<feature-card>`, we can define a custom mehthod name to be called when `cardClicked` is fired:

```html
<div id="app">
  <feature-card
    iconSrc="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
    iconAltText="rocket"
    featureTitle="Processing speed"
    featureDescription="Our solution has astonishing benchmarks grades"
    v-on:click="featureCardClicked"
  </feature-card>
</div>
```
Now, `featureCardClicked` needs to be a method in the parent component, and it's parameter will hold the data emmited from the `<feature-card>` component.

So, our parent component should look like this:

```javascript

export default {
  methods: {
    featureCardClicked (value) {
      console.log(value) // someValue
    }
  }
}
```
