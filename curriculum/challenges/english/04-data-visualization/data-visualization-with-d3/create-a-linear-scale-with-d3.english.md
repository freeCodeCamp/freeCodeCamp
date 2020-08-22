---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
challengeType: 6
isHidden: false
forumTopicId: 301483
---

## Description
<section id='description'>
The bar and scatter plot charts both plotted data directly onto the SVG canvas. However, if the height of a bar or one of the data points were larger than the SVG height or width values, it would go outside the SVG area.
In D3, there are scales to help plot data. <code>Scales</code> are functions that tell the program how to map a set of raw data points onto the pixels of the SVG canvas.
For example, say you have a 100x500-sized SVG canvas and you want to plot Gross Domestic Product (GDP) for a number of countries. The set of numbers would be in the billion or trillion-dollar range. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.
It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the <code>x</code> and <code>y</code> values fit your canvas width and height.
D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method <code>scaleLinear()</code>:
<code> const scale = d3.scaleLinear()</code>
By default, a scale uses the identity relationship. The value of the input is the same as the value of the output. A separate challenge covers how to change this.
</section>

## Instructions
<section id='instructions'>
Change the <code>scale</code> variable to create a linear scale. Then set the <code>output</code> variable to the scale called with an input argument of 50.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text in the <code>h2</code> should be 50.
    testString: assert($('h2').text() == '50');
  - text: Your code should use the <code>scaleLinear()</code> method.
    testString: assert(code.match(/\.scaleLinear/g));
  - text: The <code>output</code> variable should call <code>scale</code> with an argument of 50.
    testString: assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

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

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>

```

</section>
