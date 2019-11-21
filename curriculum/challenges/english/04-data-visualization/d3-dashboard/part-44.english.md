---
id: 5d8a4cfbe6b6180ed9a1ca09
title: Part 44
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

The line needs `x` and `y` values for each point of data. Chain `x` to the line and pass it a "`d` function". Here's how that will look:

```js
const twitterLine = d3.line()
  .x(d => d.year)
```

You will be passing your `data` array to this line function, where it will go through each item(`d`) and create an `x` value equal to the year(`d.year`).

This is the first place you will see a "`d` function". These are common in D3 to set data and that is how I will refer to them throughout this project.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(/const twitterLine = d3\.line\(\)\s*\.x\s*\(\s*d\s*=>\s*d\.year\s*\)/g.test(code));

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
  .attr('width', svgWidth)
  .attr('height', svgHeight);

const yScale = d3.scaleLinear()
  .domain([0, 5000])
  .range([svgHeight - svgMargin, svgMargin]);

const xScale = d3.scaleLinear()
  .domain([2012, 2020])
  .range([svgMargin, svgWidth - svgMargin]);

const yAxis = d3.axisLeft(yScale)
  .ticks(6, '~s');

const xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format(''))
  .tickPadding(10);

lineGraph.append('g')
  .call(yAxis)
  .attr('transform', `translate(${svgMargin}, 0)`)
  .style('font', '10px verdana');

lineGraph.append('g')
  .call(xAxis)
  .attr('transform', `translate(0, ${svgHeight - svgMargin})`)
  .selectAll('text')
  .style('transform', 'translate(-12px, 0) rotate(-50deg)')
  .style('text-anchor', 'end')
  .style('cursor', 'pointer')
  .style('font', '10px verdana');

const twitterLine = d3.line()


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
