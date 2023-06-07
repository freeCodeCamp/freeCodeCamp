---
id: 5d792533e7707b9645d7b540
title: Step 10
challengeType: 0
dashedName: step-10
---

# --description--

Remove the now redundant `addVar` definition.

# --hints--

See description above for instructions.

```js
assert(typeof addVar === 'undefined');
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
const addVar = (x, y) => x + y;
--fcc-editable-region--

const infixToFunction = {
  "+": (x, y) => x + y
};


</script>
```

# --solutions--

```html
<script>
const infixToFunction = {
  "+": (x, y) => x + y
};
</script>
```
