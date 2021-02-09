---
id: 5d79253378595ec568f70ab6
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

Add similar definitions for `-`, `*` and `/` in `infixToFunction`.

# --hints--

See description above for instructions.

```js
assert(
  infixToFunction['-'](10, 2) === 8 &&
    infixToFunction['*'](10, 10) === 100 &&
    infixToFunction['/'](100, 10) === 10
);
```

# --seed--

## --before-user-code--

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

## --after-user-code--

```html
</body>
</html>
```

## --seed-contents--

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y
};


</script>
```

# --solutions--

```html
<script>
const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};
</script>
```
