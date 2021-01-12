---
id: 5d792532f631702ae6d23e11
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

Now return the sum of `x` and `y` using the `return` keyword.

# --hints--

See description above for instructions.

```js
assert(add(1, 2) === 3 && add(100, 2000) === 2100);
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

function add(x, y) {

}

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {
  return x + y;
}

const infixToFunction = {};
</script>
```
