---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

There is a shortcut available to set several flex properties at once. The `flex-grow`, `flex-shrink`, and `flex-basis` properties can all be set together by using the `flex` property.

For example, `flex: 1 0 10px;` will set the item to `flex-grow: 1;`, `flex-shrink: 0;`, and `flex-basis: 10px;`.

The default property settings are `flex: 0 1 auto;`.

# --instructions--

Add the CSS property `flex` to both `#box-1` and `#box-2`. Give `#box-1` the values so its `flex-grow` is `2`, its `flex-shrink` is `2`, and its `flex-basis` is `150px`. Give `#box-2` the values so its `flex-grow` is `1`, its `flex-shrink` is `1`, and its `flex-basis` is `150px`.

These values will cause `#box-1` to grow to fill the extra space at twice the rate of `#box-2` when the container is greater than 300px and shrink at twice the rate of `#box-2` when the container is less than 300px. 300px is the combined size of the `flex-basis` values of the two boxes.

# --hints--

The `#box-1` element should have the `flex` property set to a value of `2 2 150px`.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

The `#box-2` element should have the `flex` property set to a value of `1 1 150px`.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

Your code should use the `flex` property for `#box-1` and `#box-2`.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
