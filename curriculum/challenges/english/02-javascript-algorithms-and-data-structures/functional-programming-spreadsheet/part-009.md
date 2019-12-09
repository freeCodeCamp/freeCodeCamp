---
id: 5d792533d31e4f7fad33011d
title: Part 009
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

In `infixToFunction`, replace `addVar` with `(x, y) => x + y`.

</section>

## Instructions
<section id='instructions'>


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(code.replace(/\s/g, '').match(/\+["']:\(x,y\)=>x\+y/));

```


</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": addVar
};


</script>
```

</div>


### Before Test
<div id='html-setup'>

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

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<script>
const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": (x, y) => x + y
};
</script>
```

</section>
