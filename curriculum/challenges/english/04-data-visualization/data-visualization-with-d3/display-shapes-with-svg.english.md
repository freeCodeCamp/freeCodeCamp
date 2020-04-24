---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
challengeType: 6
forumTopicId: 301485
---

## Description
<section id='description'>
The last challenge created an <code>svg</code> element with a given width and height, which was visible because it had a <code>background-color</code> applied to it in the <code>style</code> tag. The code made space for the given width and height.
The next step is to create a shape to put in the <code>svg</code> area. There are a number of supported shapes in SVG, such as rectangles and circles. They are used to display data. For example, a rectangle (<code>&lt;rect&gt;</code>) SVG shape could create a bar in a bar chart.
When you place a shape into the <code>svg</code> area, you can specify where it goes with <code>x</code> and <code>y</code> coordinates. The origin point of (0, 0) is in the upper-left corner. Positive values for <code>x</code> push the shape to the right, and positive values for <code>y</code> push the shape down from the origin point.
To place a shape in the middle of the 500 (width) x 100 (height) <code>svg</code> from last challenge, the <code>x</code> coordinate would be 250 and the <code>y</code> coordinate would be 50.
An SVG <code>rect</code> has four attributes. There are the <code>x</code> and <code>y</code> coordinates for where it is placed in the <code>svg</code> area. It also has a <code>height</code> and <code>width</code> to specify the size.
</section>

## Instructions
<section id='instructions'>
Add a <code>rect</code> shape to the <code>svg</code> using <code>append()</code>, and give it a <code>width</code> attribute of 25 and <code>height</code> attribute of 100. Also, give the <code>rect</code> <code>x</code> and <code>y</code> attributes each set to 0.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 1 <code>rect</code> element.
    testString: assert($('rect').length == 1);
  - text: The <code>rect</code> element should have a <code>width</code> attribute set to 25.
    testString: assert($('rect').attr('width') == '25');
  - text: The <code>rect</code> element should have a <code>height</code> attribute set to 100.
    testString: assert($('rect').attr('height') == '100');
  - text: The <code>rect</code> element should have an <code>x</code> attribute set to 0.
    testString: assert($('rect').attr('x') == '0');
  - text: The <code>rect</code> element should have a <code>y</code> attribute set to 0.
    testString: assert($('rect').attr('y') == '0');

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
                  .attr("height", h)
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
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>

```

</section>
