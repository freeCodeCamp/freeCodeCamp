---
id: 5d8a4cfbe6b6180ed9a1c9ea
title: Part 13
challengeType: 0
---

## Description
<section id='description'>

Add another script below the one you just added. Give it a `src` attribute of `./data.js`.
      
This adds a `data` variable to your project that contains your number of social media followers, it is an array of objects. Each object has the year and your followers for three different platforms. Take a look at the file to see what the object looks like.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: const script = code.match(/<script\s+[\s\S]+?[^>]>\s*<\/script\s*>/gi)[1]; assert(/src\s*=\s*('|")\s*(\.\/)?data.js\s*\1/gi.test(script));

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
    margin: 100px 10px;
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
