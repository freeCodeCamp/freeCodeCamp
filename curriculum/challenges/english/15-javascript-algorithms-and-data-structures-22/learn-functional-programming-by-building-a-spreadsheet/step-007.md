---
id: 5d7925337954ed57a565a135
title: Step 7
challengeType: 0
dashedName: step-7
---

# --description--

This is possible because the anonymous function has been immediately assigned to a value - this is effectively the same as using a named function.

Rewrite `addVar` using ES6's arrow syntax:

```js
const fn = (x, y) => x;
```

Note that the value is returned implicitly.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('constaddVar=(x,y)=>x+y'));
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

--fcc-editable-region--
const addVar = function(x, y) {
  return x + y;
};
--fcc-editable-region--

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
const addVar = (x, y) => x + y;

const infixToFunction = {};
</script>
```
