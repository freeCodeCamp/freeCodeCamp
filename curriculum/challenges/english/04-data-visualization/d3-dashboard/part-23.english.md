---
id: 5d8a4cfbe6b6180ed9a1c9f4
title: Part 23
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

  
  /*
    Now that the scale has a domain, it needs to know how to map that data to display on the graph. The `range` function is used to do this. Since this is the y-scale, you want the `0` in your domain to be at the bottom of the graph, and the `5000` to be at the top. Chain the `range` function below the `domain` and pass it an array with `svgHeight - svgMargin` and `svgMargin` as the values.
    
    Your graph will have a margin around it for things like axes and labels. The actual line data will display on the inside of this margin area, which is why you use those values. It might sound confusing right now, but it will become more clear as you progress through this project.
  */
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
