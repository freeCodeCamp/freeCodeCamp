---
id: 5d822fd413a79914d39e98d0
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

It's tough to see now, but there's a border at the edge of your preview, that's the body. Create a `div` element in the body with a class of `background-buildings`. This will be a container for a group of buildings.

# --hints--

test-text

```js
assert($('#display-body')[0].contains($('div.background-buildings')[0]));
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
    </style>
  </head>

  <body>
    <div class="background-buildings"></div>
  </body>
</html>
```
