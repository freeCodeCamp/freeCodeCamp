---
id: 5d8a4cfbe6b6180ed9a1ca42
title: Part 101
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
  .style('font', '10px verdana')

const twitterLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.twitter));

lineGraph.append('path')
  .attr('d', twitterLine(data))
  .attr('stroke', twitterColor)
  .attr('stroke-width', 3)
  .attr('fill', 'transparent');

const tumblrLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.tumblr));

lineGraph.append('path')
  .attr('d', tumblrLine(data))
  .attr('stroke', tumblrColor)
  .attr('stroke-width', 3)
  .attr('fill', 'transparent');

const instagramLine = d3.line()
  .x(d => xScale(d.year))
  .y(d => yScale(d.followers.instagram));

lineGraph.append('path')
  .attr('d', instagramLine(data))
  .attr('stroke', instagramColor)
  .attr('stroke-width', 3)
  .attr('fill', 'transparent');
  
lineGraph.selectAll('twitter-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.twitter))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', twitterColor)
  .style('cursor', 'pointer')

lineGraph.selectAll('tumblr-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.tumblr))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', tumblrColor)
  .style('cursor', 'pointer')

lineGraph.selectAll('instagram-circles')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.year))
  .attr('cy', d => yScale(d.followers.instagram))
  .attr('r', 6)
  .attr('fill', 'white')
  .attr('stroke', instagramColor)
  .style('cursor', 'pointer')

const rightDashboard = d3.select('.dashboard')
  .append('div');

const pieGraph = rightDashboard.append('svg')
  .attr('width', 200)
  .attr('height', 200)

const pieArc = d3.arc()
  .outerRadius(100)
  .innerRadius(0);

const pieColors = d3.scaleOrdinal()  
  .domain(data[8].followers)
  .range([twitterColor, tumblrColor, instagramColor]);

const pie = d3.pie()
  .value(d => d.value);
  
const pieGraphData = pieGraph.selectAll('pieSlices')
  .data(pie(d3.entries(data[8].followers)))
  .enter()
  .append('g')
  .attr('transform', 'translate(100, 100)');

pieGraphData.append('path')
  .attr('d', pieArc)


  /*
    Set the `fill` attribute to the function `d => pieColors(d.data.key)`. This will send the key (platform) of each data point to the `pieColors` function and return the range value that key is mapped to.
  */
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>
