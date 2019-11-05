---
id: 5d822fd413a79914d39e98cf
title: Part 7
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

You can see the body, it's the horizontal line on your page; the box around it is the html element. Make your body fill the whole viewport by giving it a `height` of `100vh`. Remove the default margin from the body by setting the `margin` to `0`. Finally, set the `overflow` property to `hidden` to hide any scroll bars that appear when something extends past the viewport.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const body = code.match(/body\s*{[\s\S]+?[^}]}/g)[0]; assert(/height\s*:\s*100vh\s*(;|})/g.test(body) && /margin\s*:\s*(0|0px)\s*(;|})/g.test(body) && /overflow\s*:\s*hidden\s*(;|})/g.test(body));

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

      body {
        height: 100vh;
        margin: 0;
        overflow: hidden;
      }
    </style>
  </head>

  <body>
  </body>
</html>
```

</section>
