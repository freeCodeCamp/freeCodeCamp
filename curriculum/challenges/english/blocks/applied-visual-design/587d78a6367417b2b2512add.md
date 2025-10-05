---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

By manipulating different selectors and properties, you can make interesting shapes. One of the easier ones to try is a crescent moon shape. For this challenge you need to work with the `box-shadow` property that sets the shadow of an element, along with the `border-radius` property that controls the roundness of the element's corners.

You will create a round, transparent object with a crisp shadow that is slightly offset to the side - the shadow is actually going to be the moon shape you see.

In order to create a round object, the `border-radius` property should be set to a value of 50%.

You may recall from an earlier challenge that the `box-shadow` property takes values for `offset-x`, `offset-y`, `blur-radius`, `spread-radius` and a `color` value in that order. The `blur-radius` and `spread-radius` values are optional.

# --instructions--

Manipulate the square element in the editor to create the moon shape. First, change the `background-color` to `transparent`, then set the `border-radius` property to 50% to make the circular shape. Finally, change the `box-shadow` property to set the `offset-x` to 25px, the `offset-y` to 10px, `blur-radius` to 0, `spread-radius` to 0, and `color` to `blue`.

# --hints--

The value of the `background-color` property should be set to `transparent`.

```js
assert.match(code,/background-color:\s*?transparent;/gi);
```

The value of the `border-radius` property should be set to `50%`.

```js
assert.match(code,/border-radius:\s*?50%;/gi);
```

The value of the `box-shadow` property should be set to 25px for `offset-x`, 10px for `offset-y`, 0 for `blur-radius`, 0 for `spread-radius`, and finally `blue` for the `color`.

```js
assert.match(code,/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
