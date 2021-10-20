---
id: 5d8a4cfbe6b6180ed9a1ca34
title: Part 87
challengeType: 0
dashedName: part-87
---

# --description--

Chain `innerRadius` to the arc and pass it `0` (zero). This is set to zero to make a traditional pie chart, you would use a larger inner radius to create a doughnut chart.

# --hints--

test-text

```js
assert(
  /const pieArc = d3\.arc\(\)\s*\.outerRadius\(100\)\s*\.\s*innerRadius\s*\(\s*0\s*\)/g.test(
    code
  )
);
```

# --seed--

## --before-user-code--

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

## --seed-contents--

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
    


</script>
```

# --solutions--

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



</script>
```
