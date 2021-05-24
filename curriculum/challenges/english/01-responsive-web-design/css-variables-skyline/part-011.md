---
id: 5d822fd413a79914d39e98d3
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

Nest four `div` elements in the `.bb1` container. Give them the classes `bb1a`, `bb1b`, `bb1c`, and `bb1d` in that order. This building will have four sections.

# --hints--

You should create four new `div` elements.

```js
```

You should give one of the new `div` elements a class of `bb1a`.

```js
```

You should give one of the new `div` elements a class of `bb1b`.

```js
```

You should give one of the new `div` elements a class of `bb1c`.

```js
```

You should give one of the new `div` elements a class of `bb1d`.

```js
```

You should place the new `div` elements in the correct order.

```js
```

You should place the new `div` elements within the `.bb1` element.

```js
const bb1 = $('.bb1')[0];
assert(
  bb1.contains($('div.bb1a')[0]) &&
    bb1.contains($('div.bb1b')[0]) &&
    bb1.contains($('div.bb1c')[0]) &&
    bb1.contains($('div.bb1d')[0])
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <div class="background-buildings">
--fcc-editable-region--
      <div class="bb1"></div>
--fcc-editable-region--
    </div>
  </body>
</html>
```

```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.background-buildings {
  width: 100%;
  height: 100%;
}

.bb1 {
  width: 10%;
  height: 70%;
}
    
```

