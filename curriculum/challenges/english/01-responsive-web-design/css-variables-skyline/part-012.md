---
id: 5d822fd413a79914d39e98d4
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

Give the parts of your building `width` and `height` properties with these values: `70%` and `10%` to `bb1a`, `80%` and `10%` to `bb1b`, `90%` and `10%` to `bb1c`, and `100%` and `70%` to `bb1d`. Remember that these percentages are relative to the parent and note that the heights will add up to 100% to fill the container vertically.

# --hints--

test-text

```js
const bb1a = code.match(/\.bb1a\s*{[\s\S]+?[^}]}/g)[0];
const bb1b = code.match(/\.bb1b\s*{[\s\S]+?[^}]}/g)[0];
const bb1c = code.match(/\.bb1c\s*{[\s\S]+?[^}]}/g)[0];
const bb1d = code.match(/\.bb1d\s*{[\s\S]+?[^}]}/g)[0];
assert(
  /width\s*:\s*70%\s*(;|})/g.test(bb1a) &&
    /height\s*:\s*10%\s*(;|})/g.test(bb1a) &&
    /width\s*:\s*80%\s*(;|})/g.test(bb1b) &&
    /height\s*:\s*10%\s*(;|})/g.test(bb1b) &&
    /width\s*:\s*90%\s*(;|})/g.test(bb1c) &&
    /height\s*:\s*10%\s*(;|})/g.test(bb1c) &&
    /width\s*:\s*100%\s*(;|})/g.test(bb1d) &&
    /height\s*:\s*70%\s*(;|})/g.test(bb1d)
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

# --solutions--

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
