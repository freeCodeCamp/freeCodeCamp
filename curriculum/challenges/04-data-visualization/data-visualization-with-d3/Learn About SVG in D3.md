---
id: 587d7fa8367417b2b2512bcb
title: Learn About SVG in D3
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
SVG stands for <code>Scalable Vector Graphics</code>.
Here "scalable" means that, if you zoom in or out on an object, it would not appear pixelated. It scales with the display system, whether it's on a small mobile screen or a large TV monitor.
SVG is used to make common geometric shapes. Since D3 maps data into a visual representation, it uses SVG to create the shapes for the visualization. SVG shapes for a web page must go within an HTML <code>svg</code> tag.
CSS can be scalable when styles use relative units (such as <code>vh</code>, <code>vw</code>, or percentages), but using SVG is more flexible to build data visualizations.
</section>

## Instructions
<section id='instructions'>
Add an <code>svg</code> node to the <code>body</code> using <code>append()</code>. Give it a <code>width</code> attribute set to the provided <code>w</code> constant and a <code>height</code> attribute set to the provided <code>h</code> constant using the <code>attr()</code> method for each. You'll see it in the output because there's a <code>background-color</code> of pink applied to it in the <code>style</code> tag.
<strong>Note</strong><br>Width and height attributes do not have units. This is the building block of scaling - the element will always have a 5:1 width to height ratio, no matter what the zoom level is.
</section>

## Tests
<section id='tests'>

```yml
- text: Your document should have 1 <code>svg</code> element.
  testString: 'assert($("svg").length == 1, "Your document should have 1 <code>svg</code> element.");'
- text: The <code>svg</code> element should have a <code>width</code> attribute set to 500.
  testString: 'assert($("svg").attr("width") == "500", "The <code>svg</code> element should have a <code>width</code> attribute set to 500.");'
- text: The <code>svg</code> element should have a <code>height</code> attribute set to 100.
  testString: 'assert($("svg").attr("height") == "100", "The <code>svg</code> element should have a <code>height</code> attribute set to 100.");'

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

```js
// solution required
```
</section>
