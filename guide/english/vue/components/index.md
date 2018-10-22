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
object, with an icon, a title and a short description.

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
    featureDescription="Our solution has astonishing benchmarks grades">
  </feature-card>
</div>
```

In this case, we called the `<feature-card>` as it was an existing tag, as well
as we setted `iconSrc` or `featureTitle` as they were valid attributes. And the
purpose of Vue.js components is this: increment your toolbox with your own
tools.

### Props

Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. To pass a title to our blog post component, we can include it in the list of props this component accepts, using a props option:

```js
Vue.component('feature-card', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
```
A component can have as many props as you’d like and by default, any value can be passed to any prop. In the template above, you’ll see that we can access this value on the component instance, just like with data.

Once a prop is registered, you can pass data to it as a custom attribute, like this:
```html
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```
