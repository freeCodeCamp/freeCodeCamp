---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
isHidden: false
forumTopicId: 301486
---

## Description
<section id='description'>
The height of each bar can be set to the value of the data point in the array, similar to how the <code>x</code> value was set dynamically.

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

</section>

## Instructions
<section id='instructions'>
Change the callback function for the <code>height</code> attribute to return the data value times 3.
<strong>Note</strong><br>Remember that multiplying all data points by the same constant scales the data (like zooming in). It helps to see the differences between bar values in this example.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>rect</code> should have a <code>height</code> of 36.
    testString: assert($('rect').eq(0).attr('height') == '36');
  - text: The second <code>rect</code> should have a <code>height</code> of 93.
    testString: assert($('rect').eq(1).attr('height') == '93');
  - text: The third <code>rect</code> should have a <code>height</code> of 66.
    testString: assert($('rect').eq(2).attr('height') == '66');
  - text: The fourth <code>rect</code> should have a <code>height</code> of 51.
    testString: assert($('rect').eq(3).attr('height') == '51');
  - text: The fifth <code>rect</code> should have a <code>height</code> of 75.
    testString: assert($('rect').eq(4).attr('height') == '75');
  - text: The sixth <code>rect</code> should have a <code>height</code> of 54.
    testString: assert($('rect').eq(5).attr('height') == '54');
  - text: The seventh <code>rect</code> should have a <code>height</code> of 87.
    testString: assert($('rect').eq(6).attr('height') == '87');
  - text: The eighth <code>rect</code> should have a <code>height</code> of 42.
    testString: assert($('rect').eq(7).attr('height') == '42');
  - text: The ninth <code>rect</code> should have a <code>height</code> of 27.
    testString: assert($('rect').eq(8).attr('height') == '27');

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>

```

</section>
