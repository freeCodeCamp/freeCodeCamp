---
title: Components
---

## Components

A classic problem that web developers face is having to write loads and loads of HTML, CSS, and JavaScript to make repeated sections of the website work properly. For example, a set of image carousels that are spaced at various points down the page, each with a different number of images to show.

Sometimes all you want is a quick way to be able to use the same code in several different places at once and for everything to just work. Well, Vue.js gives you this ability with Components.

Suppose you're developing a landing page for your company's product and you need to display the 4 main features of it following the same structure of a card-like object, with a icon, a title, and a short description.

Let's make a component for that:

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

> Note that here we bound the image `src` attribute with another syntax `:src`.
This changes nothing, it is simply syntactic sugar (simpler and cleaner syntax) for `v-bind:src` -- whenever
you want to bind a component attribute to a variable, you can prepend a `:` to the
attribute name instead of using the full form `v-bind`.

With this code, we did a lot of new things:

* we created a new component called `feature-card`
* we defined the `feature-card` component's default **structure** with the `template` attribute
* we defined a list of properties that the component accepts with the `props`
  list

After defining a component, whenever we desire to reuse it on our web page, we can do so as a kind of 'custom' html element. In our example, we can use the tag `<feature-card>`, which is the component's name wrapped in < and >:

```html
<div id="app">
  <feature-card
    iconSrc="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png"
    iconAltText="rocket"
    featureTitle="Processing speed"
    featureDescription="Our solution has astonishing benchmarks grades">
  </feature-card>
</div>
```

In this case, we called the `<feature-card>` as it was an existing tag, as well as set the `iconSrc` or `featureTitle` as they were valid attributes. The purpose of Vue.js components is to increment your toolbox with your own tools.

If you're lost, here is what the outputted html from the example above would look like:

```html
<div id="app">
  <div class="card">
      <div class="icon-wrapper">
        <img class="icon" src="https://freedesignfile.com/upload/2017/08/rocket-icon-vector.png" alt="rocket"/>
      </div>
      <h4 class="title">Processing speed</h4>
      <p class="description">Our solution has astonishing benchmarks grades</p>
    </div>
</div>
```

The purpose of Vue.js components is this: expand your web page building toolbox with your own shiny new tools

### Props

Props, as mentioned above, are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. To pass a title to our blog post component, we can include it in the list of props the component accepts, using the props option:

```js
Vue.component('feature-card', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```

A component can have as many props as you’d like and by default and _any value_ can be passed to _any prop_. In the template above, you’ll see that we can access this value on the component instance, just like with data.

>As mentioned above, because any value can be passed into a prop, it's often a good idea to validate the correct data is being passed in. You can do this in a few different ways, including [Vue's built in Prop Validation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation "Prop validation on the Vue website")

Once a prop is registered, you can pass data to it as a custom attribute, like this:

```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

### Single File Components

Instead of declaring many components in a single file resulting in a long spaghetti code. You may want to modularize your components by having different files. (ie. more info: [Single File Components](https://vuejs.org/v2/guide/single-file-components.html))

Enclose your template in a `<template>` tag, script the structure of the component in the `<script>` tag and style your components in the `<style scoped>` tag.

```html
<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
module.exports = {
  data: function () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
```
