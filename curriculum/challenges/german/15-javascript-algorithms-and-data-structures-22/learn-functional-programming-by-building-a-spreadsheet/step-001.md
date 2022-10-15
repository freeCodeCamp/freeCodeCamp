---
id: 5d79253297c0ebb149ea9fed
title: Step 1
challengeType: 0
dashedName: step-1
---

# --description--

In functional programming, we prefer immutable values over mutable values.

Mutable values (declared with `var` or `let`) can lead to unexpected behaviors and bugs. Values declared with `const` cannot be reassigned, which makes using them easier because you don't have to keep track of their values.

Start by creating an empty `infixToFunction` object using `const`.

# --hints--

See description above for instructions.

```js
assert(code.replace(/\s/g, '').includes('constinfixToFunction={}'));
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
</script>
```

# --solutions--

```html
<script>
const infixToFunction = {};
</script>
```
