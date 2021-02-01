---
id: 5d79253352e33dd59ec2f6de
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

Add the key `+` to `infixToFunction` and assign it the value `addVar`.

# --hints--

See description above for instructions.

```js
assert(infixToFunction['+'].toString() === addVar.toString());
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

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": addVar
};
</script>
```
