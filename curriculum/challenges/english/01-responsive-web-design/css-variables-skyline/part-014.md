---
id: 5d822fd413a79914d39e98d6
title: Part 14
challengeType: 0
---

## Description
<section id='description'>

Now you have something that is starting to resemble a building. Lets get into your first variable. Variable declarations begin with two dashes (`-`) and are given a name and a value like this: `--variable-name: value;`. In the `bb1` class, create a variable named `--building-color1` and give it a value of `#999`.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const bb1style = code.match(/\.bb1\s*{[\s\S]+?[^}]}/g)[0]; assert(/--building-color1\s*:\s*#999\s*(;|\s*})/g.test(bb1style));

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
        --building-color1: #999;
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
