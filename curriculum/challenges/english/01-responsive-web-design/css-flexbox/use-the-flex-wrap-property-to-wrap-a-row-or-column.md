---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.

However, using the `flex-wrap` property tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

CSS also has options for the direction of the wrap:

<ul><li><code>nowrap</code>: this is the default setting, and does not wrap items.</li><li><code>wrap</code>: wraps items onto multiple lines from top-to-bottom if they are in rows and left-to-right if they are in columns.</li><li><code>wrap-reverse</code>: wraps items onto multiple lines from bottom-to-top if they are in rows and right-to-left if they are in columns.</li></ul>

# --instructions--

The current layout has too many boxes for one row. Add the CSS property `flex-wrap` to the `#box-container` element, and give it a value of `wrap`.

# --hints--

The `#box-container` element should have the `flex-wrap` property set to a value of `wrap`.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
