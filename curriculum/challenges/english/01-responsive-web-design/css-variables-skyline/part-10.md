---
id: 5d822fd413a79914d39e98d2
title: Part 10
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Nest a `div` with a class of `bb1` in the background buildings container. Give it a `width` of `10%` and `height` of `70%`. "bb" stands for "background building", this will be your first building.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const bb1 = code.match(/\.bb1\s*{[\s\S]+?[^}]}/g)[0]; assert($(".background-buildings")[0].contains($("div.bb1")[0]) && /width\s*:\s*10%\s*(;|})/g.test(bb1) && /height\s*:\s*70%\s*(;|})/g.test(bb1));

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
    </style>
  </head>

  <body>
    <div class="background-buildings"></div>
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
      <div class="bb1"></div>
    </div>
  </body>
</html>
```

</section>
