---
id: 5d792533cc8b18b6c133edc7
title: Part 006
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Anonymous functions are often passed as arguments to other functions, but what if you want to call one later? You can assign anonymous functions to variables and call them with the variable's name:

```js
const fn = function(x) {
  return x;
}

fn();
```

Assign the anonymous function to the variable `addVar`. 

</section>

## Instructions
<section id='instructions'>


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(code.replace(/\s/g, "").includes("constaddVar=function(x,y){returnx+y"));

```


</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

function add(x, y) {
  return x + y;
}

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
const addVar = function(x, y) {
  return x + y;
};

const infixToFunction = {};
</script>
```

</section>
