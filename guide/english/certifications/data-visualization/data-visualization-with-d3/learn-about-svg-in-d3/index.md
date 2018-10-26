---
title: Learn About SVG in D3
---
## Learn About SVG in D3

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/data-visualization/data-visualization-with-d3/learn-about-svg-in-d3/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## Hint 1
First ensure that you have appended the SVG node to the document body. You can do this using d3's 'append()' - don't forget to enclose "svg" in quotation marks. 

## Hint 2
To assign CSS properties to the SVG node - in this case 'width' and 'height' - make use of d3's 'attr()'method. You can use the parameters 'w' and 'h' provided, respectively.

## Solution (!!SPOILER ALERT!!)

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
                 
```               
