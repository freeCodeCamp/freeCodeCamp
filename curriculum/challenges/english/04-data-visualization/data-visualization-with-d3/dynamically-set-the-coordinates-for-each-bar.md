---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
forumTopicId: 301487
---

## Description
<section id='description'>
The last challenge created and appended a rectangle to the <code>svg</code> element for each point in <code>dataset</code> to represent a bar. Unfortunately, they were all stacked on top of each other.
The placement of a rectangle is handled by the <code>x</code> and <code>y</code> attributes. They tell D3 where to start drawing the shape in the <code>svg</code> area. The last challenge set them each to 0, so every bar was placed in the upper-left corner.
For a bar chart, all of the bars should sit on the same vertical level, which means the <code>y</code> value stays the same (at 0) for all bars. The <code>x</code> value, however, needs to change as you add new bars. Remember that larger <code>x</code> values push items farther to the right. As you go through the array elements in <code>dataset</code>, the x value should increase.
The <code>attr()</code> method in D3 accepts a callback function to dynamically set that attribute. The callback function takes two arguments, one for the data point itself (usually <code>d</code>) and one for the index of the data point in the array. The second argument for the index is optional. Here's the format:

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

It's important to note that you do NOT need to write a <code>for</code> loop or use <code>forEach()</code> to iterate over the items in the data set. Recall that the <code>data()</code> method parses the data set, and any method that's chained after <code>data()</code> is run once for each item in the data set.
</section>

## Instructions
<section id='instructions'>
Change the <code>x</code> attribute callback function so it returns the index times 30.
<strong>Note</strong><br>Each bar has a width of 25, so increasing each <code>x</code> value by 30 adds some space between the bars. Any value greater than 25 would work in this example.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have an <code>x</code> value of 0.
    testString: assert($('rect').eq(0).attr('x') == '0');
  - text: The second <code>rect</code> should have an <code>x</code> value of 30.
    testString: assert($('rect').eq(1).attr('x') == '30');
  - text: The third <code>rect</code> should have an <code>x</code> value of 60.
    testString: assert($('rect').eq(2).attr('x') == '60');
  - text: The fourth <code>rect</code> should have an <code>x</code> value of 90.
    testString: assert($('rect').eq(3).attr('x') == '90');
  - text: The fifth <code>rect</code> should have an <code>x</code> value of 120.
    testString: assert($('rect').eq(4).attr('x') == '120');
  - text: The sixth <code>rect</code> should have an <code>x</code> value of 150.
    testString: assert($('rect').eq(5).attr('x') == '150');
  - text: The seventh <code>rect</code> should have an <code>x</code> value of 180.
    testString: assert($('rect').eq(6).attr('x') == '180');
  - text: The eighth <code>rect</code> should have an <code>x</code> value of 210.
    testString: assert($('rect').eq(7).attr('x') == '210');
  - text: The ninth <code>rect</code> should have an <code>x</code> value of 240.
    testString: assert($('rect').eq(8).attr('x') == '240');

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

```

</section>
