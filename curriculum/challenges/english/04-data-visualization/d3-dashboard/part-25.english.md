---
id: 5d8a4cfbe6b6180ed9a1c9f6
title: Part 25
challengeType: 0
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


  /*
    The "year" values of your data will be used for the x-scale. Chain the `domain` function to `xScale` and pass it an array with `2012` and `2020` as values since those are the years of the data.
  */
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
