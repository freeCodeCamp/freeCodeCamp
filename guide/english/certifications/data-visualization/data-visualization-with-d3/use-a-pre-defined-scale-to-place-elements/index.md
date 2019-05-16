---
title: Use a Pre-Defined Scale to Place Elements
---
## Use a Pre-Defined Scale to Place Elements

### Hint 1

Use the `.attr()` function, which accepts 2 parameters.

### Hint 2

Use a callback function on the `.attr()` functions.

### Hint 3

The radius is set using the `r`attribute.

### Solution

Change the `svg.selectAll("circle")` and `svg.selectAll("text")` codeblocks to the following to complete the challenge, this has been done by incorporating all the hints from above:

```js
svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 5);

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) =>  (d[0] + ", " + d[1]))
  .attr("x", (d) => xScale(d[0] + 10))
  .attr("y", (d) => yScale(d[1]));
```

The full solution looks like:

```html
<body>
  <script>
    const dataset = [
      [  34,  78 ],
      [ 109, 280 ],
      [ 310, 120 ],
      [  79, 411 ],
      [ 420, 220 ],
      [ 233, 145 ],
      [ 333,  96 ],
      [ 222, 333 ],
      [  78, 320 ],
      [  21, 123 ]
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
      .attr("cy", (d) => yScale(d[1]))
      .attr("r", 5);
      
    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text((d) =>  (d[0] + ", " + d[1]))
      .attr("x", (d) => xScale(d[0] + 10))
      .attr("y", (d) => yScale(d[1]));
  </script>
</body>
```
