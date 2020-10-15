---
id: 5d8a4cfbe6b6180ed9a1c9e2
title: Part 5
challengeType: 0
---

## Description
<section id='description'>

Next, add a container for the dashboard. Put an empty `div` element in the body with class of `dashboard`. You will be appending all the dashboard elements to this div.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert($("div.dashboard").length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
  </head>

  <body>

  
  </body>
</html>
```

</div>
</section>


## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">

    
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

</section>
