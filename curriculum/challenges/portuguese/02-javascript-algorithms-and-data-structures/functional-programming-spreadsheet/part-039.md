---
id: 5d7925346b911fce161febaf
title: Part 39
challengeType: 0
dashedName: part-39
---

# --description--

Now define an empty function `range` which takes `start` and `end` as arguments (define it in the global scope).

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('constrange=(start,end)=>'));
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

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

const spreadsheetFunctions = {
  "": x => x
};

const applyFn = str => {
  const noHigh = highPrecedence(str);
  const infix = /([0-9.]+)([+-])([0-9.]+)/;
  const str2 = infixEval(noHigh, infix);
  const regex = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const applyFunction = (fn, args) =>
    spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(
    regex,
    (match, fn, args) =>
      spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? applyFunction(fn, args) : match
  );
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

const infixEval = (str, regex) =>
  str.replace(regex, (_, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );

const highPrecedence = str => {
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);
  return str === str2 ? str : highPrecedence(str2);
};

const spreadsheetFunctions = {
  "": x => x
};

const applyFn = str => {
  const noHigh = highPrecedence(str);
  const infix = /([0-9.]+)([+-])([0-9.]+)/;
  const str2 = infixEval(noHigh, infix);
  const regex = /([a-z]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const applyFunction = (fn, args) =>
    spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(
    regex,
    (match, fn, args) =>
      spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()) ? applyFunction(fn, args) : match
  );
};

const range = (start, end) => {

}
</script>
```
