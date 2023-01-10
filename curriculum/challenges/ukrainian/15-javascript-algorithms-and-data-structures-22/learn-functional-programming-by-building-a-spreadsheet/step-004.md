---
id: 5d7925329445167ecc2ac9c9
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

In JavaScript, functions are first class. This means that they can be used like any other values - for example, they can be assigned to variables.

Assign `add` to a new variable `addVar`.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('constaddVar=add'));
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
--fcc-editable-region--

--fcc-editable-region--
const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {
  return x + y;
}

const addVar = add;

const infixToFunction = {};
</script>
```
