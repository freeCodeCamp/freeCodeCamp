---
title: Create a bar chart using D3 JS
---

## Barchart using D3

Since we have gotten hold of the basics of D3 in previous articles lets try and make something interesting, **A Bar Chart**.

Start by adding some basic boilerplate HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3</title>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <style></style>
  </head>

  <body>
    <h1>Bar chart using D3 JS</h1>
    <svg></svg>
    <script>
      // All JS Code goes here
    </script>
  </body>
</html>
```

Now that we have the html setup let us add some variables that will be used throughout the chart generation process.

```javascript
var data = [350, 200, 135, 180, 190, 150, 230, 120, 135, 180, 90, 50];
var chartHeight = 300, // height of the chart
  chartWidth = 500, // width of the chart
  barPadding = 5; // spacing between each bars

// we are shaving off some area from the total available area inorder
// to have the text visible
var XAxisT = 50,
  YAxisT = 10;

var chartBoxWidth = chartWidth - XAxisT;
var chartBoxHeight = chartHeight - YAxisT;
var barWidth = chartBoxWidth / data.length;
```

Now lets add a linear scale, scales are used to represent each data item in visual variables. Here we are using a linear scale that can convert the values of the data into heights of bars.

```javascript
var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data) + 20])
  .range([chartBoxHeight, 0]);
```

The `domain` of a scale is the data that needs to be mapped, in our case lets define our data is always between `0` and the maximum value of our data. We are also adding a small cushion on top.

The `range` of a scale determines the values to which the domain needs to be mapped to. For us it will be between `chartBoxHeight` and `0`.

Now lets add a Y-axis using our scale. D3 provides various predefined scales that can be used, here we will use `d3.axisLeft()` to create a left axis.

```javascript
var yAxis = d3.axisLeft().scale(yScale);
```

Lets set the height and width of the svg, and add the Y-Axis. We transform the Y-Axis to the very left.

```javascript
var svg = d3
  .select('svg')
  .attr('height', chartHeight + YAxisT)
  .attr('width', chartWidth + XAxisT);

svg
  .append('g')
  .attr('transform', 'translate(' + [XAxisT, 10] + ')')
  .call(yAxis);
```

Now lets add the barchart itself.

```javascript
var barchart = svg
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('y', function(d) {
    return yScale(d);
  })
  .attr('width', function(d) {
    return barWidth - barPadding;
  })
  .attr('height', function(d) {
    return chartBoxHeight - yScale(d);
  })
  .attr('transform', function(d, i) {
    var translateX = barWidth * i;
    return 'translate(' + [translateX + XAxisT + barPadding, YAxisT] + ')';
  });
```

Notice that we are setting the `y` attribute of each rectangle and varying the height of the rectangle inorder to have the required chart, notice that we are also using the scale to map the value to actual y co-ordinates in the svg.

## References

- https://github.com/d3/d3-scale/blob/master/README.md
- https://github.com/d3/d3-axis/blob/master/README.md
