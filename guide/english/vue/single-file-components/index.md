---
title: Single File Components
---

# Single File Components
One of the many benefits of using Vue, is the option of making a Single File Component. This component, as the name suggests, is a regular Vue component, living in its own file.

Having your component in its own file, enables you to have a better structure and overview of your application. It also enables you to have syntax highlighting in your editor of choice.

## Structure
A Single File Component is made up of three sections:
* Template, where you put your HTML that makes up the component
* Script, where your logic exists
* Style, where your styling to your component exists

## Template
You can use the default language, HTML, or you can use other templating engines, such as `Jade` or `Pug`.
```html
<template>
  <div>
    <h1>I am a headline</h1>
  </div>
</template>
```
Basic example of html in a single file component


## Script
The script section is where all of your logic exists. You can use the default language, JavaScript. You also have the option of using `TypeScript` instead.
It's also in this section all of your properties, methods and watchers exists, to make your component work.

```html
<script>
  export default {
    name: "foo-component",
    data() {
      return {
        message: "I am a message"
      }
    },
    methods: {
      sayHello() {
        console.log("Hello world");
      }
    }
  }
</script>
```
You can check out how to use Vue, either by browsing this site, or checking out Vue's own documentation, [here](https://vuejs.org/v2/guide/index.html)


## Style
The final block in the single file component house. This section is where you can style your component. You can also choose, whether or not it should be non-scoped or scoped. Scoped means that the compiled code automatically gets ID's that is specific to the component, that the styling will affect. Non-scoped means that elements outside of the component, also will get targeted for the styling.

## Read more
If you want to read more about the Single File Components, you can do so [here](https://vuejs.org/v2/guide/single-file-components.html)
