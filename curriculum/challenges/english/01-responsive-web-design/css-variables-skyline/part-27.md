---
id: 5d822fd413a79914d39e98e3
title: Part 27
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Create another variable named `--building-color4` and give it a value of `#538cc6`, make sure it's in the `:root` selector this time. Then use it to fill in the last building.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const rootStyle = code.match(/:root\s*{[\s\S]+?[^}]}/g)[0]; const bb4style = code.match(/\.bb4\s*{[\s\S]+?[^}]}/g)[0]; assert(/--building-color4\s*:\s*#538cc6\s*(;|\s*})/g.test(rootStyle) && /background-color\s*:\s*var\(\s*--building-color4\s*\)\s*(;|\s*})/g.test(bb4style));

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
      :root {
        --building-color1: #aa80ff;
        --building-color2: #66cc99;
        --building-color3: #cc6699;
      }

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
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
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
        background-color: var(--building-color1);
      }
  
      .bb1b {
        width: 80%;
        height: 10%;
        background-color: var(--building-color1);
      }
  
      .bb1c {
        width: 90%;
        height: 10%;
        background-color: var(--building-color1);
      }

      .bb1d {
        width: 100%;
        height: 70%;
        background-color: var(--building-color1);
      }

      .bb2 {
        width: 10%;
        height: 50%;
        background-color: var(--building-color2);
      }

      .bb3 {
        width: 10%;
        height: 55%;
        background-color: var(--building-color3);
      }

      .bb4 {
        width: 11%;
        height: 58%;
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
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
      :root {
        --building-color1: #aa80ff;
        --building-color2: #66cc99;
        --building-color3: #cc6699;
        --building-color4: #538cc6;
      }

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
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
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
        background-color: var(--building-color1);
      }
  
      .bb1b {
        width: 80%;
        height: 10%;
        background-color: var(--building-color1);
      }
  
      .bb1c {
        width: 90%;
        height: 10%;
        background-color: var(--building-color1);
      }

      .bb1d {
        width: 100%;
        height: 70%;
        background-color: var(--building-color1);
      }

      .bb2 {
        width: 10%;
        height: 50%;
        background-color: var(--building-color2);
      }

      .bb3 {
        width: 10%;
        height: 55%;
        background-color: var(--building-color3);
      }

      .bb4 {
        width: 11%;
        height: 58%;
        background-color: var(--building-color4);
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>
```

</section>
