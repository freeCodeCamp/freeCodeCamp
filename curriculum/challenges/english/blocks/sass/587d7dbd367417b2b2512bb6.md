---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

In Sass, a <dfn>mixin</dfn> is a group of CSS declarations that can be reused throughout the style sheet. The definition starts with the `@mixin` at-rule, followed by a custom name. You apply the mixin using the `@include` at-rule.

```scss
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul {
  @include reset-list;
}
```

Compiles to:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

Your mixins can also take arguments, which allows their behavior to be customized. The arguments are required when using the mixin.

```scss
@mixin prose($font-size, $spacing) {
  font-size: $font-size;
  margin: 0;
  margin-block-end: $spacing;
}

p {
  @include prose(1.25rem, 1rem);
}

h2 {
  @include prose(2.4rem, 1.5rem);
}
```

You can make arguments optional by giving the parameters default values.

```scss
@mixin text-color($color: black) {
  color: $color;
}

p {
  @include text-color(); /* color: black */
}

nav a {
  @include text-color(orange);
}
```

# --instructions--

Write a mixin named `shape` and give it 3 parameters: `$w`, `$h`, and `$bg-color`.

Use the `shape` mixin to give the `#square` element a width and height of `50px`, and the background color `red`. For the `#rect-a` element add a width of `100px`, a height of `50px`, and the background color `blue`. Finally, for the `#rect-b` element add a width of `50px`, a height of `100px`, and the background color `orange`.

# --hints--

You should declare a mixin named `shape` with 3 parameters: `$w`, `$h`, and `$bg-color`.

```js
assert.match(code, /@mixin\s+shape\s*\(\s*\$w,\s*\$h,\s*\$bg-color\s*\)\s*{/gi);
```

Your mixin should include a `width` property that uses the `$w` parameter.

```js
assert.match(__helpers.removeWhiteSpace(code), /width:\$w;/gi);
```

Your mixin should include a `height` property that uses the `$h` parameter.

```js
assert.match(__helpers.removeWhiteSpace(code), /height:\$h;/gi);
```

Your mixin should include a `background-color` property that uses the `$bg-color` parameter.

```js
assert.match(__helpers.removeWhiteSpace(code), /background-color:\$bg\-color;/gi);
```

You should replace the styles inside the `#square` selector with a call to the `shape` mixin using the `@include` keyword. Setting a width and height of `50px`, and the background color `red`.

```js
assert.match(code, /#square\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*50px\s*,\s*red\s*\)\s*;\s*}/gi);
```

You should replace the styles inside the `#rect-a` selector with a call to the `shape` mixin using the `@include` keyword. Setting a width of `100px`, a height of `50px`, and the background color `blue`.

```js
assert.match(code, /#rect-a\s*{\s*@include\s+shape\s*\(\s*100px\s*,\s*50px\s*,\s*blue\s*\)\s*;\s*}/gi);
```

You should replace the styles inside the `#rect-b` selector with a call to the `shape` mixin using the `@include` keyword. Setting a width of `50px`, a height of `100px`, and the background color `orange`.

```js
assert.match(code, /#rect-b\s*{\s*@include\s+shape\s*\(\s*50px\s*,\s*100px\s*,\s*orange\s*\)\s*;\s*}/gi);
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

#rect-a {
  width: 100px;
  height: 50px;
  background-color: blue;
}

#rect-b {
  width: 50px;
  height: 100px;
  background-color: orange;
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```

# --solutions--

```html
<style type='text/scss'>
@mixin shape($w, $h, $bg-color) {
  width: $w;
  height: $h;
  background-color: $bg-color;
}

#square {
  @include shape(50px, 50px, red);
}

#rect-a {
  @include shape(100px, 50px, blue);
}

#rect-b {
  @include shape(50px, 100px, orange);
}
</style>

<div id="square"></div>
<div id="rect-a"></div>
<div id="rect-b"></div>
```
