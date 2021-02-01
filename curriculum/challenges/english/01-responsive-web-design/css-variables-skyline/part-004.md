---
id: 5d822fd413a79914d39e98cc
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

Nest opening and closing `title` and `style` tags in the head area and give your project a title of `freeCodeCamp Skyline Project`. Any styles you are asked to add during this project should go in this style area.

# --hints--

test-text

```js
assert(
  code.match(
    /<head\s*>\s*(<style\s*>\s*<\/style\s*>\s*<title\s*>freeCodeCamp Skyline Project<\/title\s*>|<title\s*>freeCodeCamp Skyline Project<\/title\s*>\s*<style\s*>\s*<\/style>)\s*<\/head\s*>/g
  )
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    
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
    <style></style>
  </head>

  <body>
  </body>
</html>
```
