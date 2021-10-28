---
id: 5d8a4cfbe6b6180ed9a1c9e9
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

Back in the HTML file, add a `script` tag at the bottom of the head element and give it a `src` attribute of `./d3-5.9.2.min.js`. Don't forget the closing tag. This will add the D3 library to your project from a downloaded copy.

# --hints--

test-text

```js
const script = code.match(/<script\s+[\s\S]+?[^>]>\s*<\/script\s*>/gi)[0];
assert(/src\s*=\s*('|")\s*(\.\/)?d3-5.9.2.min.js\s*\1/gi.test(script));
```

# --seed--

## --before-user-code--

```html
<style>
  body {
    background-color: #ccc;
    padding: 100px 10px;
  }

  .dashboard {
    width: 980px;
    height: 500px;
    background-color: white;
    box-shadow: 5px 5px 5px 5px #888;
    margin: auto;
    display: flex;
    align-items: center;
  }
</style>
```

## --seed-contents--

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

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
    <script src="./d3-5.9.2.min.js"></script>

    
 </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```
