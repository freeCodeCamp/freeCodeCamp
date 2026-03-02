---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

The next function of the `transform` property is `skewX()`, which skews the selected element along its X (horizontal) axis by a given degree.

The following code skews the paragraph element by -32 degrees along the X-axis.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Skew the element with the id of `bottom` by 24 degrees along the X-axis by using the `transform` property.

# --hints--

The element with id `bottom` should be skewed by 24 degrees along its X-axis.

```js
assert.match(code, /#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
