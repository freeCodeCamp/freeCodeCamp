---
title: Display Shapes with SVG
---
## Display Shapes with SVG

### Hint 1

Use ``` append("rect") ```.

### Hint 2

Chain 4 ``` .attr() ``` methods.

### Spoiler Alert | Solution Ahead
### Solution

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width",25)
                  .attr("height",100)
                  .attr("x",0)
                  .attr("y",0)
  </script>
</body>
```