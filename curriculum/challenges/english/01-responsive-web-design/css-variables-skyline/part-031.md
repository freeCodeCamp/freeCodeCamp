---
id: 5d822fd413a79914d39e98e7
title: Part 31
challengeType: 0
dashedName: part-31
---

# --description--

Give the six new elements these `width` and `height` values: `10%` and `60%` to `fb1`, `10%` and `40%` to `fb2`, `10%` and `35%` to `fb3`, `8%` and `45%` to `fb4`, `10%` and `33%` to `fb5`, and `9%` and `38%` to `fb6`.

# --hints--

test-text

```js
assert(
  /\.fb1\s*{\s*(width\s*:\s*10%\s*;\s*height\s*:\s*60%\s*(;|})|height\s*:\s*60%\s*;\s*width\s*:\s*10%\s*(;|}))/g.test(
    code
  ) &&
    /\.fb2\s*{\s*(width\s*:\s*10%\s*;\s*height\s*:\s*40%\s*(;|})|height\s*:\s*40%\s*;\s*width\s*:\s*10%\s*(;|}))/g.test(
      code
    ) &&
    /\.fb3\s*{\s*(width\s*:\s*10%\s*;\s*height\s*:\s*35%\s*(;|})|height\s*:\s*35%\s*;\s*width\s*:\s*10%\s*(;|}))/g.test(
      code
    ) &&
    /\.fb4\s*{\s*(width\s*:\s*8%\s*;\s*height\s*:\s*45%\s*(;|})|height\s*:\s*45%\s*;\s*width\s*:\s*8%\s*(;|}))/g.test(
      code
    ) &&
    /\.fb5\s*{\s*(width\s*:\s*10%\s*;\s*height\s*:\s*33%\s*(;|})|height\s*:\s*33%\s*;\s*width\s*:\s*10%\s*(;|}))/g.test(
      code
    ) &&
    /\.fb6\s*{\s*(width\s*:\s*9%\s*;\s*height\s*:\s*38%\s*(;|})|height\s*:\s*38%\s*;\s*width\s*:\s*9%\s*(;|}))/g.test(
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

      .foreground-buildings {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
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
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
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

      .foreground-buildings {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }

      .fb1 {
        width: 10%;
        height: 60%;
      }

      .fb2 {
        width: 10%;
        height: 40%;
      }

      .fb3 {
        width: 10%;
        height: 35%;
      }
  
      .fb4 {
        width: 8%;
        height: 45%;
      }
      
      .fb5 {
        width: 10%;
        height: 33%;
      }

      .fb6 {
        width: 9%;
        height: 38%;
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
      <div class="fb1"></div>
      <div class="fb2"></div>
      <div class="fb3"></div>
      <div class="fb4"></div>
      <div class="fb5"></div>
      <div class="fb6"></div>
    </div>
  </body>
</html>
```
