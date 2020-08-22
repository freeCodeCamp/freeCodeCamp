---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
isHidden: false
forumTopicId: 301480
---

## Description
<section id='description'>
The bars are in the right position, but they are all the same black color. SVG has a way to change the color of the bars.
In SVG, a <code>rect</code> shape is colored with the <code>fill</code> attribute. It supports hex codes, color names, and rgb values, as well as more complex options like gradients and transparency.
</section>

## Instructions
<section id='instructions'>
Add an <code>attr()</code> method to set the "fill" of all the bars to the color "navy".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The bars should all have a <code>fill</code> color of navy.
    testString: assert($('rect').css('fill') == "rgb(0, 0, 128)");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       // Add your code below this line



       // Add your code above this line
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>

```

</section>
