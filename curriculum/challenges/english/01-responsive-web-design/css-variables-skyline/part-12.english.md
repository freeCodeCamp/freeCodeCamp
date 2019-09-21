---
id: 5d822fd413a79914d39e98d4
title: Part 12
challengeType: 0
---

## Description
<section id='description'>
Give the parts of your building `width` and `height` properties with these values: `70%` and `10%` to `bb1a`, `80%` and `10%` to `bb1b`, `90%` and `10%` to `bb1c`, and `100%` and `70%` to `bb1d`. Remember that these percentages are relative to the parent and note that the heights will add up to 100% to fill the container vertically.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const noSpaces = code.replace(/\s/g, ''); assert(noSpaces.match(/\.bb1a{(height:10%;width:70%;?}|width:70%;height:10%;?})/g) && noSpaces.match(/\.bb1b{(height:10%;width:80%;?}|width:80%;height:10%;?})/g) && noSpaces.match(/\.bb1c{(height:10%;width:90%;?}|width:90%;height:10%;?})/g) && noSpaces.match(/\.bb1d{(height:70%;width:100%;?}|width:100%;height:70%;?})/g));

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
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        margin: 0;
        overflow: hidden;
      }

      .background-buildings {
        width: 100%;
        height: 100%;
      }

      .bb1 {
        width: 10%;
        height: 70%;
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
  </body>
</html>
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
