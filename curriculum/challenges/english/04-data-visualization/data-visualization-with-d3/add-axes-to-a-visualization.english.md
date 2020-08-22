---
id: 587d7fad367417b2b2512bdf
title: Add Axes to a Visualization
challengeType: 6
isHidden: false
forumTopicId: 301472
---

## Description
<section id='description'>
Another way to improve the scatter plot is to add an x-axis and a y-axis.
D3 has two methods, <code>axisLeft()</code> and <code>axisBottom()</code>, to render the y-axis and x-axis, respectively. Here's an example to create the x-axis based on the <code>xScale</code> in the previous challenges:

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG canvas. To do so, you can use a general SVG component, the <code>g</code> element. The <code>g</code> stands for group.
Unlike <code>rect</code>, <code>circle</code>, and <code>text</code>, an axis is just a straight line when it's rendered. Because it is a simple shape, using <code>g</code> works.
The last step is to apply a <code>transform</code> attribute to position the axis on the SVG canvas in the right place. Otherwise, the line would render along the border of SVG canvas and wouldn't be visible.
SVG supports different types of <code>transforms</code>, but positioning an axis needs <code>translate</code>. When it's applied to the <code>g</code> element, it moves the whole group over and down by the given amounts. Here's an example:

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG canvas. Then it's passed as an argument to the <code>call()</code> method.
The y-axis works in the same way, except the <code>translate</code> argument is in the form (x, 0). Because <code>translate</code> is a string in the <code>attr()</code> method above, you can use concatenation to include variable values for its arguments.
</section>

## Instructions
<section id='instructions'>
The scatter plot now has an x-axis. Create a y-axis in a variable named <code>yAxis</code> using the <code>axisLeft()</code> method. Then render the axis using a <code>g</code> element. Make sure to use a <code>transform</code> attribute to translate the axis by the amount of padding units right, and 0 units down. Remember to <code>call()</code> the axis.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>axisLeft()</code> method with <code>yScale</code> passed as the argument.
    testString: assert(code.match(/\.axisLeft\(yScale\)/g));
  - text: The y-axis <code>g</code> element should have a <code>transform</code> attribute to translate the axis by (60, 0).
    testString: assert($('g').eq(10).attr('transform').match(/translate\(60\s*?,\s*?0\)/g));
  - text: Your code should call the <code>yAxis</code>.
    testString: assert(code.match(/\.call\(\s*yAxis\s*\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    // Add your code below this line



    // Add your code above this line

  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    
    const yAxis = d3.axisLeft(yScale);
    

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>

```

</section>
