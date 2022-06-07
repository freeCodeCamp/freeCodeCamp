---
id: 5d792533ed00e75d129e1b18
title: Step 13
challengeType: 0
dashedName: step-13
---

# --description--

`replace` is a higher order function because it can take a function as argument (higher order functions can also return functions).

Pass the `+` function from `infixToFunction` to the `replace` method as the second argument.

This is how you would pass the `-` function:

```js
str.replace(regex, infixToFunction["-"])
```

# --hints--

See description above for instructions.

```js
assert(infixEval('ab', /(a)b/) === 'aba');
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
const infixEval = (str, regex) => str.replace(regex, "");
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

const infixEval = (str, regex) => str.replace(regex, infixToFunction["+"]);
</script>
```
