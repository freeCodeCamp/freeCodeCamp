---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

When elements have a specified `position`, such as `fixed` or `relative`, the CSS offset properties `right`, `left`, `top`, and `bottom` can be used in animation rules to create movement.

As shown in the example below, you can push the item downwards then upwards by setting the `top` property of the `50%` keyframe to 50px, but having it set to 0px for the first (`0%`) and the last (`100%`) keyframe.

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Add a horizontal motion to the `div` animation. Using the `left` offset property, add to the `@keyframes` rule so rainbow starts at 0 pixels at `0%`, moves to 25 pixels at `50%`, and ends at -25 pixels at `100%`. Don't replace the `top` property in the editor - the animation should have both vertical and horizontal motion.

# --hints--

The `@keyframes` rule for `0%` should use the `left` offset of 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

The `@keyframes` rule for `50%` should use the `left` offset of 25px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

The `@keyframes` rule for `100%` should use the `left` offset of -25px.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
