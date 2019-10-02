---
id: 5d822fd413a79914d39e98ce
title: Part 6
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Also add a `box-sizing` of `border-box` to the everything. This will make it so the border you added doesn't add any size to your elements.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert($("#display-body").css("box-sizing") === "border-box");

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <style>
      * {
        border: 1px solid black;
      }
    </style>
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
    <title>freeCodeCamp Skyline Project</title>
    <style>
      * {
        border: 1px solid black;
        box-sizing: border-box;
      }
    </style>
  </head>

  <body>
  </body>
</html>
```

</section>
