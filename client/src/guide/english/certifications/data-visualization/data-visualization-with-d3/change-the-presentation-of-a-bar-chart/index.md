---
title: Change the Presentation of a Bar Chart
---
## Change the Presentation of a Bar Chart

This challenge requires you to style your html according the the given instructions, i.e. a ``` margin ``` of ``` 2px ``` on the ``` bar ``` class and scaling them by ``` 10 ``` times.

### Hint 1

Change the CSS and use the ``` margin ``` property.

### Hint 2

Use call back on the style property

### Spoiler Alert | Solution ahead
### Basic Solution

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
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
      .style("height", (d) => (d*10 + "px"))
      .style("margin",'2px');
  </script>
</body>
```

##### Explaination: In this solution, the CSS has been changed to comply with the ``` margin ``` instruction and a callback has been used to scale the ``` <div></div> ```s 10 times.

### Advanced Solution

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
      .style("height", (d) => (d*10 + "px"))
      .style("margin",'2px');
  </script>
</body>
```

##### Explaination: In this solution, we have chained two ``` style() ``` methods to also add the ``` margin ``` as required and a callback has been used to scale the ``` <div></div> ```s 10 times.