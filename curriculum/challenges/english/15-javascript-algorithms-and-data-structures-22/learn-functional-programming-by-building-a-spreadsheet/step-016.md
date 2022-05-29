---
id: 5d792533bb38fab70b27f527
title: Step 16
challengeType: 0
dashedName: step-16
---

# --description--

`arg1` and `arg2` are the numbers input by the user in a string such as "1+3".

Pass `parseFloat(arg1)` and `parseFloat(arg2)` as the arguments to `infixToFunction[fn]` (remember `infixToFunction[fn]` is a function).

# --hints--

See description above for instructions.

```js
const regex = /([0-9.]+)([+-\/*])([0-9.]+)/;
assert(
  infixEval('23+35', regex) === '58' &&
    infixEval('100-20', regex) === '80' &&
    infixEval('10*10', regex) === '100' &&
    infixEval('120/6', regex) === '20'
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
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

--fcc-editable-region--
const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn]
  );
--fcc-editable-region--


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

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );
</script>
```
