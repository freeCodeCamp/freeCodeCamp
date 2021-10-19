---
id: 5d792533d31e4f7fad33011d
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

In `infixToFunction`, replace `addVar` with `(x, y) => x + y`.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').match(/\+["']:\(x,y\)=>x\+y/));
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

const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": addVar
};


</script>
```

# --solutions--

```html
<script>
const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": (x, y) => x + y
};
</script>
```
