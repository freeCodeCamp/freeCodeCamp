---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
isHidden: false
forumTopicId: 301492
---

## Description
<section id='description'>
D3 methods can add styles to the bar labels. The <code>fill</code> attribute sets the color of the text for a <code>text</code> node. The <code>style()</code> method sets CSS rules for other styles, such as "font-family" or "font-size".
</section>

## Instructions
<section id='instructions'>
Set the <code>font-size</code> of the <code>text</code> elements to 25px, and the color of the text to red.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The labels should all have a <code>fill</code> color of red.
    testString: assert($('text').css('fill') == 'rgb(255, 0, 0)');
  - text: The labels should all have a <code>font-size</code> of 25 pixels.
    testString: assert($('text').css('font-size') == '25px');

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>

```

</section>
