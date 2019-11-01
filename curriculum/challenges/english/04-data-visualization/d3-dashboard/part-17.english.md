---
id: 5d8a4cfbe6b6180ed9a1c9ee
title: Part 17
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

When you added the D3 library earlier, it put an object named `d3` in your project with a bunch of functions. One of them is `select`; you can use dot notation to access this and the other function from the object. Create a new variable named `lineGraph` and use `d3.select` to select the `.dashboard` element. Here's an example of something similar: `const variableName = d3.select('.className')`
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(lineGraph._groups[0][0] === $(".dashboard")[0]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<script>
const svgMargin = 60,
  svgWidth = 700,
  svgHeight = 500,
  twitterColor = '#7cd9d1',
  tumblrColor = '#f6dd71',
  instagramColor = '#fd9b98';


</script>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
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
  </head>

  <body>
    <div class="dashboard"></div>
  </body>
</html>
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
