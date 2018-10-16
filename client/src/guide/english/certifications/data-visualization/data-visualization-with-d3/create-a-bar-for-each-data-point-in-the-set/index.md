---
title: Create a Bar for Each Data Point in the Set
---
## Create a Bar for Each Data Point in the Set

### Hint

Use the ``` data() ```, ``` enter() ```, and ``` append() ``` methods.

### Solution

The ``` data() ```, ``` enter() ```, and ``` append() ``` methods are used, the code should look as follows:

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);
    
    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

Note that all the bars overlap each other, how to correct this and make them non-overlapping is covered in the next challenge.