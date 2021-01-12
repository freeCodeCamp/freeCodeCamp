---
id: 5d822fd413a79914d39e98ce
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

Also add a `box-sizing` of `border-box` to the everything. This will make it so the border you added doesn't add any size to your elements.

# --hints--

test-text

```js
assert($('#display-body').css('box-sizing') === 'border-box');
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
    </style>
  </head>

  <body>
  </body>
</html>
```
