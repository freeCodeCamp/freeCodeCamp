---
id: 5d822fd413a79914d39e98d5
title: Part 13
challengeType: 0
---

## Description
<section id='description'>

Give your `bb1` element these style properties: `display: flex;`, `flex-direction: column;`, and `align-items: center;`. This will center the parts of the building using "flex" or "flexbox". You will learn about it in more detail on another project.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const bb1 = $(".bb1"); assert(bb1.css("display") === "flex" && bb1.css("flex-direction") === "column" && bb1.css("align-items") === "center");

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

      .bb1a {
        width: 70%;
        height: 10%;
      }
  
      .bb1b {
        width: 80%;
        height: 10%;
      }
  
      .bb1c {
        width: 90%;
        height: 10%;
      }

      .bb1d {
        width: 100%;
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
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bb1a {
        width: 70%;
        height: 10%;
      }
  
      .bb1b {
        width: 80%;
        height: 10%;
      }
  
      .bb1c {
        width: 90%;
        height: 10%;
      }

      .bb1d {
        width: 100%;
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

</section>
