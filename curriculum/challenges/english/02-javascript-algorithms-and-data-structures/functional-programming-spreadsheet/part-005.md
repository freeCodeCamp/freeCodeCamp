---
id: 5d792532b07918c3a5904913
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

Anonymous functions are functions without names - they are used only once and then forgotten. The syntax is the same as for normal functions but without the name:

```js
function(x) {
  return x
}
```

First, remove the `addVar` definition.

# --hints--

See description above for instructions.

```js
assert(!code.replace(/\s/g, '').includes('constaddVar=add'));
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
  return x + y;
}

const addVar = add;

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
