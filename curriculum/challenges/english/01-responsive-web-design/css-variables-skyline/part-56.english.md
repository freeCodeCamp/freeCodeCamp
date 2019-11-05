---
id: 5d822fd413a79914d39e9900
title: Part 56
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Next, change the two `#999` of `bb2a` to `transparent`. This will make the left and right borders invisible.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const bb2a = code.match(/\.bb2a\s*{[\s\S]+?[^}]}/g)[0]; assert(/border-left\s*:\s*5vw\s+solid\s+transparent\s*(;|})/g.test(bb2a) && /border-right\s*:\s*5vw\s+solid\s+transparent\s*(;|})/g.test(bb2a));

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
        --building-color4: #538cc6;
        --window-color1: black;
        --window-color2: #8cd9b3;
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

      .background-buildings, .foreground-buildings {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
      }
      
      /* BACKGROUND BUILDINGS - "bb" stands for "background building" */
      .bb1 {
        width: 10%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bb1a {
        width: 70%;
      }
  
      .bb1b {
        width: 80%;
      }
  
      .bb1c {
        width: 90%;
      }

      .bb1d {
        width: 100%;
        height: 70%;
        background: linear-gradient(
            var(--building-color1) 50%,
            var(--window-color1)
          );
      }

      .bb1-window {
        height: 10%;
        background: linear-gradient(
            var(--building-color1),
            var(--window-color1)
          );
      }

      .bb2 {
        width: 10%;
        height: 50%;
      }

      .bb2a {
        margin: auto;
        border-top: 1vw solid #000;
        border-bottom: 1vw solid #000;
        border-left: 5vw solid #999;
        border-right: 5vw solid #999;
      }

      .bb2b {
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            var(--building-color2),
            var(--building-color2) 6%,
            var(--window-color2) 6%,
            var(--window-color2) 9%
          );
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

      /* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
      .fb1 {
        width: 10%;
        height: 60%;
        background-color: var(--building-color4);
      }

      .fb2 {
        width: 10%;
        height: 40%;
        background-color: var(--building-color3);
      }

      .fb3 {
        width: 10%;
        height: 35%;
        background-color: var(--building-color1);
      }
  
      .fb4 {
        width: 8%;
        height: 45%;
        background-color: var(--building-color1);
        position: relative;
        left: 10%;
      }
      
      .fb5 {
        width: 10%;
        height: 33%;
        background-color: var(--building-color2);
        position: relative;
        right: 10%;
      }

      .fb6 {
        width: 9%;
        height: 38%;
        background-color: var(--building-color3);
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a bb1-window"></div>
        <div class="bb1b bb1-window"></div>
        <div class="bb1c bb1-window"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2">
        <div class="bb2a"></div>
        <div class="bb2b"></div>
      </div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
    </div>

    <div class="foreground-buildings">
      <div></div>
      <div></div>
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
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
        --window-color1: black;
        --window-color2: #8cd9b3;
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

      .background-buildings, .foreground-buildings {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
      }
      
      /* BACKGROUND BUILDINGS - "bb" stands for "background building" */
      .bb1 {
        width: 10%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bb1a {
        width: 70%;
      }
  
      .bb1b {
        width: 80%;
      }
  
      .bb1c {
        width: 90%;
      }

      .bb1d {
        width: 100%;
        height: 70%;
        background: linear-gradient(
            var(--building-color1) 50%,
            var(--window-color1)
          );
      }

      .bb1-window {
        height: 10%;
        background: linear-gradient(
            var(--building-color1),
            var(--window-color1)
          );
      }

      .bb2 {
        width: 10%;
        height: 50%;
      }

      .bb2a {
        margin: auto;
        border-top: 1vw solid #000;
        border-bottom: 1vw solid #000;
        border-left: 5vw solid transparent;
        border-right: 5vw solid transparent;
      }

      .bb2b {
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            var(--building-color2),
            var(--building-color2) 6%,
            var(--window-color2) 6%,
            var(--window-color2) 9%
          );
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

      /* FOREGROUND BUILDINGS - "fb" stands for "foreground building" */
      .fb1 {
        width: 10%;
        height: 60%;
        background-color: var(--building-color4);
      }

      .fb2 {
        width: 10%;
        height: 40%;
        background-color: var(--building-color3);
      }

      .fb3 {
        width: 10%;
        height: 35%;
        background-color: var(--building-color1);
      }
  
      .fb4 {
        width: 8%;
        height: 45%;
        background-color: var(--building-color1);
        position: relative;
        left: 10%;
      }
      
      .fb5 {
        width: 10%;
        height: 33%;
        background-color: var(--building-color2);
        position: relative;
        right: 10%;
      }

      .fb6 {
        width: 9%;
        height: 38%;
        background-color: var(--building-color3);
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a bb1-window"></div>
        <div class="bb1b bb1-window"></div>
        <div class="bb1c bb1-window"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2">
        <div class="bb2a"></div>
        <div class="bb2b"></div>
      </div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
    </div>

    <div class="foreground-buildings">
      <div></div>
      <div></div>
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>
```

</section>
