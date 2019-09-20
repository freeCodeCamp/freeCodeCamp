---
id: 5d822fd413a79914d39e98cf
title: Part 7
challengeType: 0
---

## Description
<section id='description'>
Now you can see your body, it's the horizontal line on your page. The box around it is the html element. Make your `body` fill the whole viewport by giving it a `height` of `100vh`. Remove the default margin from the body by setting the `margin` to `0`. Finally, set the `overflow` property to `hidden` to hide any scroll bars that appear when something extends past the viewport.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const css = $("#display-body").css(["margin-top", "margin-right", "margin-left", "margin-bottom", "overflow-x", "overflow-y"]); assert(css["margin-top"] === "8px" && css["margin-right"] === "8px" && css["margin-bottom"] === "8px" && css["margin-left"] === "8px" && css["overflow-x"] === "hidden" && css["overflow-y"] === "hidden" && code.match(/height\s*:\s*100vh\s*;/g));

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

```js
```

</section>
