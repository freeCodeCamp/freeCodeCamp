---
id: 5d8a4cfbe6b6180ed9a1c9e2
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

Next, add a container for the dashboard. Put an empty `div` element in the body with class of `dashboard`. You will be appending all the dashboard elements to this div.

# --hints--

test-text

```js
assert($('div.dashboard').length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
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
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">

    
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```
