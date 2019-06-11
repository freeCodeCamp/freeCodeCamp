---
title: Learn About SVG in D3
---
## Learn About SVG in D3

### Hint 1
First ensure that you have appended the SVG node to the document body. You can do this using d3's 'append()' - don't forget to enclose "svg" in quotation marks. 

### Hint 2
To assign CSS properties to the SVG node - in this case 'width' and 'height' - make use of d3's 'attr()'method. You can use the parameters 'w' and 'h' provided, respectively.

### Solution (!!SPOILER ALERT!!)

```
<style>
  svg {
    background-color: pink;
    
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    const w = 500;
    const h = 100;
    
    const svg = d3.select("body")
                  // Add your code below this line
                 .append("svg")
                 .attr("width",w)
                 .attr("height",h);
  </script>
</body>
```               
