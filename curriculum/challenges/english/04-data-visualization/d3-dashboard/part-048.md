---
id: 5d8a4cfbe6b6180ed9a1ca0d
title: Part 48
challengeType: 0
---

## Description
<section id='description'>

Tell the path what data to use. Add an `attr` function and set the `d` to `twitterLine(data)`. This will the build the path using the `twitterLine` function you created and your data variable.

Note that the `d` in this case is a path attribute for drawing a line and is different from a "d function".

After you have added your code, take a look at the data flow to help understand what is happening. You pass the data array to your `twitterLine` function where it sets the x and y values using your "d functions". The "d functions" go through each item in the array, passing part of the item to each scale to find the appropriate coordinates. When it's done, the value you are setting here is created and sent back. The result ends up being a confusing string of numbers and coordinates to tell the path how to be drawn.
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert($('svg path')[2].getAttribute('d').length === 151);

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
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
    .x(d => xScale(d.year))
    .y(d => yScale(d.followers.twitter));

  lineGraph.append('path')


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

```html
<script>
  const data = [ 
    { year: 2012, followers: { twitter: 2594, tumblr:  401, instagram:   83 }},
    { year: 2013, followers: { twitter: 3049, tumblr:  440, instagram:  192 }},
    { year: 2014, followers: { twitter: 3511, tumblr:  415, instagram:  511 }},
    { year: 2015, followers: { twitter: 3619, tumblr:  492, instagram: 1014 }},
    { year: 2016, followers: { twitter: 4046, tumblr:  543, instagram: 2066 }},
    { year: 2017, followers: { twitter: 3991, tumblr:  701, instagram: 3032 }},
    { year: 2018, followers: { twitter: 3512, tumblr: 1522, instagram: 4512 }},
    { year: 2019, followers: { twitter: 3274, tumblr: 1989, instagram: 4715 }},
    { year: 2020, followers: { twitter: 2845, tumblr: 2040, instagram: 4801 }}
  ];
</script>
<script>
  const svgMargin = 70,
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
    .x(d => xScale(d.year))
    .y(d => yScale(d.followers.twitter));

  lineGraph.append('path')
    .attr('d', twitterLine(data))



</script>
```

</section>
