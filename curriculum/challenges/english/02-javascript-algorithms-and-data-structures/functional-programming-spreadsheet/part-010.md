---
id: 5d792533e7707b9645d7b540
title: Part 10
challengeType: 0
---

## Description
<section id='description'>

Remove the now redundant `addVar` definition. 

</section>

## Instructions
<section id='instructions'>


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(typeof addVar === "undefined");

```


</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const addVar = (x, y) => x + y;

const infixToFunction = {
  "+": (x, y) => x + y
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
const infixToFunction = {
  "+": (x, y) => x + y
};
</script>
```

</section>
