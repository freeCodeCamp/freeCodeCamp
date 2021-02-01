---
id: 5d822fd413a79914d39e98ee
title: Part 38
challengeType: 0
dashedName: part-38
---

# --description--

Your code is starting to get quite long. Add a comment above the `fb1` class that says `FOREGROUND BUILDINGS - "fb" stands for "foreground building"` to help people understand your code. Above the `bb1` class add another comment that says `BACKGROUND BUILDINGS - "bb" stands for "background building"`. If you don't remember, comments in CSS look like this: `/* Comment here */`.

# --hints--

test-text

```js
assert(
  /\/\*\s*BACKGROUND BUILDINGS - "bb" stands for "background building"\s*\*\//g.test(
    code
  ) &&
    /\/\*\s*FOREGROUND BUILDINGS - "fb" stands for "foreground building"\s*\*\//g.test(
      code
    )
);
```

# --seed--

## --seed-contents--

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

      .background-buildings, .foreground-buildings {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
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

# --solutions--

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
