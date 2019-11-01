---
id: 5d8a4cfbe6b6180ed9a1c9f0
title: Part 19
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

When you added the `svg` element, it became the "selected element". So any functions you add after it will be used on the `svg` element. 

`attr` is a function to set attributes of the selected element. You need to pass it the attribute you want to set, and the value you want to give it. Here's an example of how to chain `attr` to a selected element:

```js
const variableName = d3.select('element')
  .append('element')
  .attr('attribute', 'value')
```

Chain the `attr` function that sets the `width` as the `svgWidth` variable you created earlier.

When using a variable as a value, you do not need to put it in any kind of quotations.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert($("svg")[0].attributes.width.value === "700");

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

const lineGraph = d3.select('.dashboard')
  .append('svg')

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
