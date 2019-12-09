---
id: 5d79253352e33dd59ec2f6de
title: Part 008
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Add the key `+` to `infixToFunction` and assign it the value `addVar`.

</section>

## Instructions
<section id='instructions'>


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(infixToFunction["+"].toString() === addVar.toString());

```


</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const addVar = (x, y) => x + y;

const infixToFunction = {};


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
  "+": addVar
};
</script>
```

</section>
