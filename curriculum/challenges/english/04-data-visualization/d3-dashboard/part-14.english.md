---
id: 5d8a4cfbe6b6180ed9a1c9eb
title: Part 14
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Add a third script just before the closing body tag. It will be the javascript file you will use to create the rest of the dashboard. Give the script a `src` attribute of `./dashboard.js`.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const script = code.match(/<script\s+[\s\S]+?[^>]>\s*<\/script\s*>/gi)[2]; assert(/src\s*=\s*('|")\s*(\.\/)?dashboard.js\s*\1/gi.test(script));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
    <script src="./d3-5.9.2.min.js"></script>
    <script src="./data.js"></script>
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

</div>


### Before Test
<div id='html-setup'>

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

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
