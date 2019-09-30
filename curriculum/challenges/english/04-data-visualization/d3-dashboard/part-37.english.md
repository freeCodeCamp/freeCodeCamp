---
id: 5d8a4cfbe6b6180ed9a1ca02
title: Part 37
challengeType: 0
isBeta: true
---

## Description
<section id='description'>
Placeholder Description
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(code.match());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
const svgMargin = 60,
  svgWidth = 700,
  svgHeight = 500,
  twitterColor = '#7cd9d1',
  tumblrColor = '#f6dd71',
  instagramColor = '#fd9b98';

const lineGraph = d3.select('.dashboard')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])
  .range([svgHeight - svgMargin, svgMargin]);

const xScale = d3.scaleLinear()
  .domain([2012, 2020])
  .range([svgMargin, svgWidth - svgMargin]);

const yAxis = d3.axisLeft(yScale)

const xAxis = d3.axisBottom(xScale)

lineGraph.append('g')
  .call(yAxis)
  .attr('transform', `translate(${svgMargin}, 0)`)
  .style('font', '10px verdana');

lineGraph.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
  .selectAll('text')
  

  /*
    I want the `text` elements to be rotated slightly. Use the `style` function to set the `transform` to `translate(-12px, 0) rotate(-50deg)`. This will put them at an angle.
  */
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
