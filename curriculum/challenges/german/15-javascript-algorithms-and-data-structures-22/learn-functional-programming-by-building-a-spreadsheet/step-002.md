---
id: 5d7925323be8848dbc58a07a
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Above `infixToFunction`, define an empty function `add` using the `function` keyword. It should accept two parameters, `x` and `y`.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('functionadd(x,y){}'));
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

--fcc-editable-region--
const infixToFunction = {};


</script>
```

# --solutions--

```html
<script>
function add(x, y) {

}

const infixToFunction = {};
</script>
```
