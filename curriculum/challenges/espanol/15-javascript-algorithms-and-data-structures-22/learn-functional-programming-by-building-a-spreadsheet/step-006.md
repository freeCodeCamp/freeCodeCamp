---
id: 5d792533cc8b18b6c133edc7
title: Step 6
challengeType: 0
dashedName: step-6
---

# --description--

Anonymous functions are often passed as arguments to other functions, but what if you want to call one later? You can assign anonymous functions to variables and call them with the variable's name:

```js
const fn = function(x) {
  return x;
}

fn();
```

Assign the anonymous function to the variable `addVar`.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('constaddVar=function(x,y){returnx+y'));
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
function add(x, y) {
  return x + y;
}
--fcc-editable-region--

const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
const addVar = function(x, y) {
  return x + y;
};

const infixToFunction = {};
</script>
```
