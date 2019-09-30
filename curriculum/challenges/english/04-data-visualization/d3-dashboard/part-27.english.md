---
id: 5d8a4cfbe6b6180ed9a1c9f8
title: Part 27
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

  

/*
  Now that you have some scales, you can create some axes using those scales. Create a new `const` named `yAxis` and set it equal to `d3.axisLeft(yScale)`. This will create an axis for the left of the graph; it uses the information from the `yScale` variable to build the axis.
*/
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
