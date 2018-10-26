---
title: Create a Bar for Each Data Point in the Set
---
## Create a Bar for Each Data Point in the Set

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/data-visualization/data-visualization-with-d3/create-a-bar-for-each-data-point-in-the-set/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

To complete this challenge, you must make use of D3's **.data()**, **.enter()**, and **.append()** methods.

## Hint 1

As with the previous challenges, make use of D3's .data() method, passing **dataset** as an argument.

## Hint 2

Ensure that you follow using .data(arg) with .enter()

## Hint 3

Finally, to create and add the **rect** shape, make use of the .append() method, passing "rect" as an argument. Ensure that you enclose "rect" in quotation marks.

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
                  .attr("height", h);
    
    svg.selectAll("rect")
       // Add your code below this line
        .data(dataset)
        .enter()
        .append("rect")   
       
       
       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
