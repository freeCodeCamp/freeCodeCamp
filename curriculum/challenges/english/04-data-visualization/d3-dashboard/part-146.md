---
id: 5d8a4cfbe6b6180ed9a1ca72
title: Part 146
challengeType: 0
dashedName: part-146
---

# --description--

The last thing is that the legend title always shows 2020. Change the `text` of the `legendTitle` to a template literal that shows the currently displayed year followed by a space and `followers`.

That's it, your dashboard is finished! Don't forget to admire your hard work.

# --hints--

test-text

```js
assert(/\.text\s*\(\s*`\s*\$\{\s*year\s*\} followers`\s*\)/g.test(code));
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
  function drawDashboard(year) {
    d3.select('.dashboard').html('');
    const index = data.findIndex(d => d.year === year);

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
      .style('font', d => d === year ? 'bold 10px verdana' : '10px verdana')
      .on('mouseover', d => drawDashboard(d));

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
      .attr('fill', d => d.year === year ? twitterColor : 'white')
      .attr('stroke', twitterColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    lineGraph.selectAll('tumblr-circles')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.followers.tumblr))
      .attr('r', 6)
      .attr('fill', d => d.year === year ? tumblrColor : 'white')
      .attr('stroke', tumblrColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    lineGraph.selectAll('instagram-circles')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.followers.instagram))
      .attr('r', 6)
      .attr('fill', d => d.year === year ? instagramColor : 'white')
      .attr('stroke', instagramColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    const rightDashboard = d3.select('.dashboard')
      .append('div');

    const pieGraph = rightDashboard.append('svg')
      .attr('width', 200)
      .attr('height', 200)
      .style('position', 'relative')
      .style('left', '20px');

    const pieArc = d3.arc()
      .outerRadius(100)
      .innerRadius(0);

    const pieColors = d3.scaleOrdinal()  
      .domain(data[index].followers)
      .range([twitterColor, tumblrColor, instagramColor]);

    const pie = d3.pie()
      .value(d => d.value);
      
    const pieGraphData = pieGraph.selectAll('pieSlices')
      .data(pie(d3.entries(data[index].followers)))
      .enter()
      .append('g')
      .attr('transform', 'translate(100, 100)');

    pieGraphData.append('path')
      .attr('d', pieArc)
      .attr('fill', d => pieColors(d.data.key))
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    pieGraphData.append('text')
      .text(d => {
        const values = d3.values(data[index].followers);
        const sum = d3.sum(values);
        const percent = d.data.value/sum;
        return `${ Math.round(percent*100) }%`;
      })
      .attr('transform', d => `translate(${pieArc.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font', '10px verdana');

    const legend = rightDashboard.append('table')
      .attr('width', 200)
      .attr('height', 120)
      .style('font', '12px verdana')
      .style('position', 'relative')
      .style('top', '30px');

    const legendTitle = legend.append('thead')
      .append('tr')
      .append('th')
      .text('2020 followers')


      .attr('colspan', 3)
      .style('position', 'relative')
      .style('left', '20px');

    const legendRows = legend.append('tbody')
      .selectAll('tr')
      .data(d3.entries(data[index].followers))
      .enter()
      .append('tr');

    legendRows.append('td')  
      .text(d => d.key)
      .attr('align', 'right');

    legendRows.append('td')
      .attr('align', 'center')
      .append('div')
      .style('width', '16px')
      .style('height', '16px')
      .style('background-color', d => pieColors(d.key))

    legendRows.append('td')
      .text(d => d.value)
      .attr('align', 'left');
  }

  drawDashboard(2020);
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
  function drawDashboard(year) {
    d3.select('.dashboard').html('');
    const index = data.findIndex(d => d.year === year);

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
      .style('font', d => d === year ? 'bold 10px verdana' : '10px verdana')
      .on('mouseover', d => drawDashboard(d));

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
      .attr('fill', d => d.year === year ? twitterColor : 'white')
      .attr('stroke', twitterColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    lineGraph.selectAll('tumblr-circles')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.followers.tumblr))
      .attr('r', 6)
      .attr('fill', d => d.year === year ? tumblrColor : 'white')
      .attr('stroke', tumblrColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    lineGraph.selectAll('instagram-circles')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.year))
      .attr('cy', d => yScale(d.followers.instagram))
      .attr('r', 6)
      .attr('fill', d => d.year === year ? instagramColor : 'white')
      .attr('stroke', instagramColor)
      .style('cursor', 'pointer')
      .on('mouseover', d => drawDashboard(d.year));

    const rightDashboard = d3.select('.dashboard')
      .append('div');

    const pieGraph = rightDashboard.append('svg')
      .attr('width', 200)
      .attr('height', 200)
      .style('position', 'relative')
      .style('left', '20px');

    const pieArc = d3.arc()
      .outerRadius(100)
      .innerRadius(0);

    const pieColors = d3.scaleOrdinal()  
      .domain(data[index].followers)
      .range([twitterColor, tumblrColor, instagramColor]);

    const pie = d3.pie()
      .value(d => d.value);
      
    const pieGraphData = pieGraph.selectAll('pieSlices')
      .data(pie(d3.entries(data[index].followers)))
      .enter()
      .append('g')
      .attr('transform', 'translate(100, 100)');

    pieGraphData.append('path')
      .attr('d', pieArc)
      .attr('fill', d => pieColors(d.data.key))
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    pieGraphData.append('text')
      .text(d => {
        const values = d3.values(data[index].followers);
        const sum = d3.sum(values);
        const percent = d.data.value/sum;
        return `${ Math.round(percent*100) }%`;
      })
      .attr('transform', d => `translate(${pieArc.centroid(d)})`)
      .style('text-anchor', 'middle')
      .style('font', '10px verdana');

    const legend = rightDashboard.append('table')
      .attr('width', 200)
      .attr('height', 120)
      .style('font', '12px verdana')
      .style('position', 'relative')
      .style('top', '30px');

    const legendTitle = legend.append('thead')
      .append('tr')
      .append('th')
      .text(`${year} followers`)


      .attr('colspan', 3)
      .style('position', 'relative')
      .style('left', '20px');

    const legendRows = legend.append('tbody')
      .selectAll('tr')
      .data(d3.entries(data[index].followers))
      .enter()
      .append('tr');

    legendRows.append('td')  
      .text(d => d.key)
      .attr('align', 'right');

    legendRows.append('td')
      .attr('align', 'center')
      .append('div')
      .style('width', '16px')
      .style('height', '16px')
      .style('background-color', d => pieColors(d.key))

    legendRows.append('td')
      .text(d => d.value)
      .attr('align', 'left');
  }

  drawDashboard(2020);
</script>
```
