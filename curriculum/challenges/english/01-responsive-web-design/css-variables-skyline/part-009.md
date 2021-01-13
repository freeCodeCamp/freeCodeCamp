---
id: 5d822fd413a79914d39e98d1
title: Part 9
challengeType: 0
dashedName: part-9
---

# --description--

Give your background buildings element a `width` and `height` of `100%` to make it the full width and height of its parent, the body.

# --hints--

test-text

```js
const bb = code.match(/\.background-buildings\s*{[\s\S]+?[^}]}/g)[0];
assert(
  /width\s*:\s*100%\s*(;|})/g.test(bb) && /height\s*:\s*100%\s*(;|})/g.test(bb)
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
    </style>
  </head>

  <body>
    <div class="background-buildings"></div>
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
    </style>
  </head>

  <body>
    <div class="background-buildings"></div>
  </body>
</html>
```
