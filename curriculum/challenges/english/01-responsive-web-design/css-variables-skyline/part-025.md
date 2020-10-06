---
id: 5d822fd413a79914d39e98e1
title: Part 25
challengeType: 0
---

## Description
<section id='description'>

That one used the fallback value as well? I see the problem now! The variables you declared in `bb1` do not cascade to the `bb2` and `bb3` sibling elements. That's just how CSS works. Because of this, variables are often declared in the `:root` selector. This is the highest level selector in CSS; putting your variables there will make them usable everywhere. Add the `:root` selector to the top of your stylesheet and move all your variable declarations there.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const bb1style = code.match(/\.bb1\s*{[\s\S]+?[^}]}/g)[0]; const rootStyle = code.match(/:root\s*{[\s\S]+?[^}]}/g)[0]; assert(/--building-color1\s*:\s*#aa80ff\s*(;|\s*})/g.test(rootStyle) && /--building-color2\s*:\s*#66cc99\s*(;|\s*})/g.test(rootStyle) && /--building-color3\s*:\s*#cc6699\s*(;|\s*})/g.test(rootStyle) && !/--building-color1\s*:\s*#aa80ff\s*(;|\s*})/g.test(bb1style) && !/--building-color2\s*:\s*#66cc99\s*(;|\s*})/g.test(bb1style) && !/--building-color3\s*:\s*#cc6699\s*(;|\s*})/g.test(bb1style));

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
        --building-color1: #aa80ff;
        --building-color2: #66cc99;
        --building-color3: #cc6699;
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
        background-color: var(--building-color2, green);
      }

      .bb3 {
        width: 10%;
        height: 55%;
        background-color: var(--building-color3, pink);
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
        background-color: var(--building-color2, green);
      }

      .bb3 {
        width: 10%;
        height: 55%;
        background-color: var(--building-color3, pink);
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

</section>
