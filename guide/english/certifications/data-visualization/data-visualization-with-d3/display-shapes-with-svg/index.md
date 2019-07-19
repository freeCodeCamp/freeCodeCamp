---
title: Display Shapes with SVG
---
## Display Shapes with SVG

This challenge can be approached in a similar fashion to the previous one; with the difference being that, this time, you must add a specified shape **within** the appended SVG node. SVG supports several shape definitions, but in this instance, we will use **rect**.

## Hint 1

Check that you have appended the **rect** using D3's 'append()' method. (Be sure to enclose **rect** in quotation marks).

## Hint 2

Now assign attributes to the shape using D3's '.attr()' method. You can chain multiple uses of this method. Remember when assigning x and y co-ordinates that within the SVG area, point (0,0) occurs on the top-**left**. As such, while x values dictate how far right an element moves, y values will dictate how far **downward** it moves from the origin point.

## Solution (!!Spoiler Alert!!)
 ```
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // Add your code below this line
                  .append("rect")
                  .attr("width", 25)
                  .attr("height",100)
                  .attr("x",0)
                  .attr("y",0);
                  
                  
                  // Add your code above this line
  </script>
</body>
```
