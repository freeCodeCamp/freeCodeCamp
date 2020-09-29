---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
forumTopicId: 301488
---

## Description
<section id='description'>
You may have noticed the bar chart looked like it's upside-down, or inverted. This is because of how SVG uses (x, y) coordinates.
In SVG, the origin point for the coordinates is in the upper-left corner. An <code>x</code> coordinate of 0 places a shape on the left edge of the SVG area. A <code>y</code> coordinate of 0 places a shape on the top edge of the SVG area. Higher <code>x</code> values push the rectangle to the right. Higher <code>y</code> values push the rectangle down.
To make the bars right-side-up, you need to change the way the <code>y</code> coordinate is calculated. It needs to account for both the height of the bar and the total height of the SVG area.
The height of the SVG area is 100. If you have a data point of 0 in the set, you would want the bar to start at the bottom of the SVG area (not the top). To do this, the <code>y</code> coordinate needs a value of 100. If the data point value were 1, you would start with a <code>y</code> coordinate of 100 to set the bar at the bottom. Then you need to account for the height of the bar of 1, so the final <code>y</code> coordinate would be 99.
The <code>y</code> coordinate that is <code>y = heightOfSVG - heightOfBar</code> would place the bars right-side-up.
</section>

## Instructions
<section id='instructions'>
Change the callback function for the <code>y</code> attribute to set the bars right-side-up. Remember that the <code>height</code> of the bar is 3 times the data value <code>d</code>.
<strong>Note</strong><br>In general, the relationship is <code>y = h - m * d</code>, where <code>m</code> is the constant that scales the data points.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have a <code>y</code> value of 64.
    testString: assert($('rect').eq(0).attr('y') == h - (dataset[0] * 3));
  - text: The second <code>rect</code> should have a <code>y</code> value of 7.
    testString: assert($('rect').eq(1).attr('y') == h - (dataset[1] * 3));
  - text: The third <code>rect</code> should have a <code>y</code> value of 34.
    testString: assert($('rect').eq(2).attr('y') == h - (dataset[2] * 3));
  - text: The fourth <code>rect</code> should have a <code>y</code> value of 49.
    testString: assert($('rect').eq(3).attr('y') == h - (dataset[3] * 3));
  - text: The fifth <code>rect</code> should have a <code>y</code> value of 25.
    testString: assert($('rect').eq(4).attr('y') == h - (dataset[4] * 3));
  - text: The sixth <code>rect</code> should have a <code>y</code> value of 46.
    testString: assert($('rect').eq(5).attr('y') == h - (dataset[5] * 3));
  - text: The seventh <code>rect</code> should have a <code>y</code> value of 13.
    testString: assert($('rect').eq(6).attr('y') == h - (dataset[6] * 3));
  - text: The eighth <code>rect</code> should have a <code>y</code> value of 58.
    testString: assert($('rect').eq(7).attr('y') == h - (dataset[7] * 3));
  - text: The ninth <code>rect</code> should have a <code>y</code> value of 73.
    testString: assert($('rect').eq(8).attr('y') == h - (dataset[8] * 3));

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
       .attr("height", (d, i) => 3 * d);
  </script>
</body>

```

</section>
