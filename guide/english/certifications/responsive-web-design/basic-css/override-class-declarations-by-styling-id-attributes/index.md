---
title: Override Class Declarations by Styling ID Attributes
---
## Override Class Declarations by Styling ID Attributes

In order to understand overriding in CSS, you must first understand the principle of precendence in CSS.

The key rule to remember is that CSS is read from the bottom to top.

An example of this is:

```html
<style>
  body {
    background-color: black;
    font-family: Arial;
    color: black;
  }
  .red-text {
    color: red;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="red-text blue-text">Example</h1>
```

In the example above, the text `Example` will be in blue because the last added class was `blue-text`.

<b>It is key to remember that an `id` attribute will take precedence over classes, meaning that it ranks highest.</b>

You can create an `id` attribute by adding the `#` before the name of the class, like below:

```html
<style>
  #purple-text {
    color: purple;
  }
</style>
```

Here is an example to show you how to <b>Override Class Declarations by Styling ID Attributes</b>:

```html
<style>
  body {
    background-color: black;
    font-family: Arial;
    color: black;
  }
  .red-text {
    color: red;
  }
  .blue-text {
    color: blue;
  }
  #green-color {
    color: green;
  }
</style>
<h1 id="green-color" class="red-text blue-text">Example</h1>
```
This will make the text `Example` be green because the `id` attribute will always take precedence over `class` declarations.
