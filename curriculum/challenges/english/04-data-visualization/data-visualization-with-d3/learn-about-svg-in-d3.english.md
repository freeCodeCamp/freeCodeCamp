---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
challengeType: 6
isHidden: false
forumTopicId: 301489
---

## Description
<section id='description'>
<dfn>SVG</dfn> stands for <dfn>Scalable Vector Graphics</dfn>.
Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.
SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML <code>svg</code> tag.
CSS can be scalable when styles use relative units (such as <code>vh</code>, <code>vw</code>, or percentages), but using SVG is more flexible to build data visualizations.
</section>

## Instructions
<section id='instructions'>
Add an <code>svg</code> node to the <code>body</code> using <code>append()</code>. Give it a <code>width</code> attribute set to the provided <code>w</code> constant and a <code>height</code> attribute set to the provided <code>h</code> constant using the <code>attr()</code> or <code>style()</code> methods for each. You'll see it in the output because there's a <code>background-color</code> of pink applied to it in the <code>style</code> tag.
  <strong>Note</strong><br>When using <code>attr()</code> width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 1 <code>svg</code> element.
    testString: assert($('svg').length == 1);
  - text: The <code>svg</code> element should have a <code>width</code> attribute set to 500 or styled to have a width of 500px.
    testString: assert($('svg').attr('width') == '500'||$('svg').css('width') == '500px');
  - text: The <code>svg</code> element should have a <code>height</code> attribute set to 100 or styled to have a height of 100px.
    testString: assert($('svg').attr('height') == '100'||$('svg').css('height') == '100px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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



                  // Add your code above this line
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
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
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>

```

</section>
