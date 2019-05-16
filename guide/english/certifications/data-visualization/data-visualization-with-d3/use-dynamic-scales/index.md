---
title: Use Dynamic Scales
---
## Use Dynamic Scales

### Hint 1

Use the `.domain()` and `.range()` functions.

### Hint 2 

Use a callback function on the `.domain()` function.

### Hint 3

Both the `.domain()` and `.range()` functions accept an array or two elements.

### Hint 4

Subtract padding from height to get SVG height including padding.

### Solution

To solve the solution by including all the hints, set the `yScale` variable to:

```js
const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[1])])
  .range([h - padding, padding]);
```

The full solution now looks like:

```html
<body>
  <script>
    const dataset = [
      [  34,   78 ],
      [ 109,  280 ],
      [ 310,  120 ],
      [  79,  411 ],
      [ 420,  220 ],
      [ 233,  145 ],
      [ 333,   96 ],
      [ 222,  333 ],
      [  78,  320 ],
      [  21,  123 ]
    ];
    
    const w = 500;
    const h = 500;
    
    // Padding between the SVG canvas boundary and the plot
    const padding = 30;
    
    // Create an x and y scale
    
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, (d) => d[0])])
      .range([padding, w - padding]);
    
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, (d) => d[1])])
      .range([h - padding, padding]);
    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
