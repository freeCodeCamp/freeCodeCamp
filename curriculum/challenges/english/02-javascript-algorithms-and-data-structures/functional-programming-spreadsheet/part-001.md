---
id: 5d79253297c0ebb149ea9fed
title: Part 001
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

In functional programming, we prefer immutable values over mutable values.

Mutable values (declared with <code>var</code> or `let`) can lead to unexpected behaviors and bugs. Values declared with `const` cannot be reassigned, which makes using them easier because you don't have to keep track of their values.

Start by creating an empty `infixToFunction` object using `const`.

</section>

## Instructions
<section id='instructions'>


</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(code.replace(/\s/g, "").includes("constinfixToFunction={}"));

```


</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>


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
const infixToFunction = {};
</script>
```

</section>
