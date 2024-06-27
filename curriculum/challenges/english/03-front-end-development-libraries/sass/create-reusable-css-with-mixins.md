---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

In Sass, a <dfn>mixin</dfn> is a group of CSS declarations that can be reused throughout the stylesheet.

Mixins are particularly useful for writing reusable styles that you can include in various parts of your CSS without repeating code. For example, consider a scenario where you want to style multiple paragraphs with the same font size and bottom margin. You can use a mixin to achieve this.

Here's an example mixin:

```scss
@mixin prose($font-size, $spacing) {
  font-size: $font-size;
  margin: 0;
  margin-block-end: $spacing;
}
```

You can include this mixin in any CSS rule like this:

```scss
p {
  @include prose(1.2rem, 1rem);
}
```

# --instructions--

Write a mixin called `shape` that takes three parameters: `$width`, `$height`, and `$color`. Use this mixin to set the width, height, and background color of an element. Then, use the `shape` mixin to style the `#square` element with a width of `50px`, height of `50px`, and background color of `red`.

# --hints--

Your code should declare a mixin named `shape` which has three parameters: `$width`, `$height`, and `$color`.

```js
assert(code.match(/@mixin\s+shape\s*\(\s*\$width\s*,\s*\$height\s*,\s*\$color\s*\)\s*{/gi));
```

Your code should include the CSS rules for `width`, `height`, and `background-color` inside the mixin.

```js
assert(code.match(/width:\s*\$width\s*;/gi));
assert(code.match(/height:\s*\$height\s*;/gi));
assert(code.match(/background-color:\s*\$color\s*;/gi));
```

Your code should call the `shape` mixin using the `@include` keyword, setting the width to `50px`, height to `50px`, and background color to `red`.

```js
assert.match(code, /@include\s+shape\s*\(\s*50px\s*,\s*50px\s*,\s*red\s*\)\s*;/gi);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  #square {
    width: 50px;
    height: 50px;
    background-color: red;
  }
</style>

<div id="square"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin shape($width, $height, $color) {
    width: $width;
    height: $height;
    background-color: $color;
  }

  #square {
    @include shape(50px, 50px, red);
  }
</style>

<div id="square"></div>
```

