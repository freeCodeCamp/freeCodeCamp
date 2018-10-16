---
title: Update the Height of an Element Dynamically
---
## Update the Height of an Element Dynamically

The challenge requires you to set the height of the various ``` <div></div> ``` elements dynamically using the dataset.

### Hint 1

Use the callback function from the dataset.

### Hint 2

Combine the value for each element from the dataset with 'px'.

### Spoiler Alert | Solution Ahead

Combining the information provided by the hints, as well asthat from the challenge, chain the ``` style() ``` method with the existing code.

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d)=>d+"px");
  </script>
</body>
```