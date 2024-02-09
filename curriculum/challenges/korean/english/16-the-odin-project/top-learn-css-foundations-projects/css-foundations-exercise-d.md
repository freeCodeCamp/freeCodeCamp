---
id: 63ee3ff1381756f9716727f2
title: CSS Foundations Exercise D
challengeType: 14
dashedName: css-foundations-exercise-d
---

# --description--

With this exercise, we've provided you a completed HTML file, so you will only have to edit the CSS file. For this exercise, it's more important to understand how chaining different selectors works than how to actually add the attributes.

1. You should see a `width` of `300px` on the `avatar` and `proportioned` class.
1. You should give it a height so that it retains its original square proportions (don't hardcode in a pixel value for the height!).
1. You should give the elements with both the `avatar` and `distorted` classes a `width` of `200px`.
1. You should give it a `height` twice as big as it's width.

# --hints--

You should have a `width` of `300px` on the `avatar` and `proportioned` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style?.width === '300px');
```

You should have a height of `auto` on the `avatar` and `proportioned` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`)
assert(style?.height === 'auto');
```

You should use a chaining selector on the `avatar` and `proportioned` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.proportioned`) || new __helpers.CSSHelp(document).getStyle(`.proportioned.avatar`);
assert(style);
```

You should have a `width` of `200px` on the `avatar` and `distorted` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.width === '200px');
```

You should use a chaining selector on the `avatar` and `distorted` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style);
```

You should have a `height` two times the width on the `avatar` and `distorted` class.

```js
const style = new __helpers.CSSHelp(document).getStyle(`.avatar.distorted`) || new __helpers.CSSHelp(document).getStyle(`.distorted.avatar`);
assert(style?.height === '400px');
```

# --seed--

## --seed-contents--

```css

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="original proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="original distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
  </body>
</html>
```

```css

```

# --solutions--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Chaining Selectors</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Use the classes BELOW this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
    </div>
    <!-- Use the classes ABOVE this line -->
    <div>
      <img class="avatar proportioned" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-01.jpg" alt="Two cute kittens">
      <img class="avatar distorted" src="https://cdn.freecodecamp.org/curriculum/odin-project/css-foundations/css-foundations-02.jpg" alt="Three cute kittens">
  </body>
</html>
```

```css
.avatar.proportioned {
  height: auto;
  width: 300px;
}

.avatar.distorted {
  height: 400px;
  width: 200px;
}
```

