---
id: 587d7dbd367417b2b2512bb6
title: Create Reusable CSS with Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

In Sass, a <dfn>mixin</dfn> is a group of CSS declarations that can be reused throughout the style sheet.

Here is an example: Say you want to define individual styles for some headings.

```html
<style type='text/scss'>
h1 {
  margin: 10px;
  padding: 20px;
  color: red;
}

#another-heading {
  margin: 20px;
  padding: 40px;
  color: blue;
}

.yet-another-heading {
  margin: 10px;
  padding: 30px;
  color: orange;
}
</style>

<h1>Title</h1>
<h2 id="another-heading">
  Another heading
</h2>
<h3 class="yet-another-heading">
  Yet Another Heading
</h3>
```

It's a lot of typing to re-write the rules for all the elements, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:

```scss
@mixin heading-style($h-margin, $h-padding, $h-color){ 
  margin: $h-margin;
  padding: $h-padding;
  color: $h-color;
}
```

The definition starts with `@mixin` followed by a custom name. The parameters (the `$h-margin`, `$h-padding`, and `$h-color` in the example above) are optional. Now any time you want to define individual styles for some headings, only a single line calling the mixin replaces having to type all the individual style codes.

We can now re-write the HTML code above like this:

```html
<style type='text/scss'>
  @mixin heading-style($h-margin, $h-padding, $h-color){ 
  margin: $h-margin;
  padding: $h-padding;
  color: $h-color;
}

h1 {
  @include heading-style(10px, 20px, red);
}

#another-heading {
  @include heading-style(20px, 40px, blue);
}

.yet-another-heading {
  @include heading-style(10px, 30px, orange);
}
</style>

<h1>Title</h1>
<h2 id="another-heading">
  Another heading
</h2>
<h3 class="yet-another-heading">
  Yet Another Heading
</h3>
```
 
A mixin is called with the `@include` directive:

```scss
h1 {
  @include heading-style(10px, 20px, red);
}
```

# --instructions--

Write a mixin named `shape` and give it 3 parameters: `$w`, `$h`, and `$b-color`. Then use the `shape` mixin to give the `#square` element a width and height of `50px`, and the color `red`. For the `#rect-a` element a width of `100px`, a height of `50px`, and the color `blue`. Finally, for the `#rect-b` element a width of `50px`, a height of `100px`, and the color `orange`.

# --hints--

Your code should declare a mixin named `shape` which has 3 parameters: `$w`, `$h`, and `$b-color`.

```js
assert(code.match(/@mixin\s+?shape\s*?\(\s*?\$w,\s*?\$h,\s*?\$b-color\s*?\)\s*?{/gi));
```

Your code should include the `width` rule that uses the `$w` parameter.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/width:\$w;/gi)
);
```

Your code should include the `height` rule that uses the `$h` parameter.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/height:\$h;/gi)
);
```

Your code should include the `background-color` rule that uses the `$b-color` parameter.

```js
assert(__helpers.removeWhiteSpace(code).match(/background-color:\$b\-color;/gi));
```

Your code should call the `shape` mixin using the `@include` keyword for the `#square` element, setting it to a width and height of `50px`, and the color `red`.

```js
assert(code.match(/@include\s+?shape\(\s*?50px,\s*?50px,\s*?red\s*?\)\s*;/gi));
```

Your code should call the `shape` mixin using the `@include` keyword for the `#rect-a` element, setting it to a width of `100px`, a height of `50px`, and the color `blue`.

```js
assert(code.match(/@include\s+?shape\(\s*?100px,\s*?50px,\s*?blue\s*?\)\s*;/gi));
```

Your code should call the `shape` mixin using the `@include` keyword for the `#rect-b` element, setting it to a width of `50px`, a height of `100px`, and the color `orange`.

```js
assert(code.match(/@include\s+?shape\(\s*?50px,\s*?100px,\s*?orange\s*?\)\s*;/gi));
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
@mixin shape($w, $h, $b-color) {
  width: $w;
  height: $h;
  background-color: $b-color;
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

