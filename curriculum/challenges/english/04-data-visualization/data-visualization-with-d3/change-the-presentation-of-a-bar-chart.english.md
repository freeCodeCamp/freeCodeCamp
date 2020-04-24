---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
forumTopicId: 301481
---

## Description
<section id='description'>
The last challenge created a bar chart, but there are a couple of formatting changes that could improve it:
1) Add space between each bar to visually separate them, which is done by adding a margin to the CSS for the <code>bar</code> class
2) Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height
</section>

## Instructions
<section id='instructions'>
First, add a <code>margin</code> of 2px to the <code>bar</code> class in the <code>style</code> tag. Next, change the callback function in the <code>style()</code> method so it returns a value 10 times the original data value (plus the "px").
<strong>Note</strong><br>Multiplying each data point by the <em>same</em> constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>div</code> should have a <code>height</code> of 120 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(0).css('height') == '120px' && $('div').eq(0).css('margin-right') == '2px');
  - text: The second <code>div</code> should have a <code>height</code> of 310 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(1).css('height') == '310px' && $('div').eq(1).css('margin-right') == '2px');
  - text: The third <code>div</code> should have a <code>height</code> of 220 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(2).css('height') == '220px' && $('div').eq(2).css('margin-right') == '2px');
  - text: The fourth <code>div</code> should have a <code>height</code> of 170 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(3).css('height') == '170px' && $('div').eq(3).css('margin-right') == '2px');
  - text: The fifth <code>div</code> should have a <code>height</code> of 250 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(4).css('height') == '250px' && $('div').eq(4).css('margin-right') == '2px');
  - text: The sixth <code>div</code> should have a <code>height</code> of 180 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(5).css('height') == '180px' && $('div').eq(5).css('margin-right') == '2px');
  - text: The seventh <code>div</code> should have a <code>height</code> of 290 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(6).css('height') == '290px' && $('div').eq(6).css('margin-right') == '2px');
  - text: The eighth <code>div</code> should have a <code>height</code> of 140 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(7).css('height') == '140px' && $('div').eq(7).css('margin-right') == '2px');
  - text: The ninth <code>div</code> should have a <code>height</code> of 90 pixels and a <code>margin</code> of 2 pixels.
    testString: assert($('div').eq(8).css('height') == '90px' && $('div').eq(8).css('margin-right') == '2px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Only change code below this line */

    
    /* Only change code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px"))
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>

```

</section>
