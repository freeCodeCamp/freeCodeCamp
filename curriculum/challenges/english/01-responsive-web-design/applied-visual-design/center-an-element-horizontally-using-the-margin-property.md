---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Another positioning technique is to center a block element horizontally. One way to do this is to set its `margin` to a value of auto.

This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the `display` property to `block`.

# --instructions--

Center the `div` on the page by adding a `margin` property with a value of `auto`.

# --hints--

The `div` should have a `margin` set to `auto`.

```js
assert(code.match(/margin:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
