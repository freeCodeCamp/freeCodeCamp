---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("rect").eq(0).attr("height") == "36", "The first <code>rect</code> should have a <code>height</code> of 36.");'
  - text: ''
    testString: 'assert($("rect").eq(1).attr("height") == "93", "The second <code>rect</code> should have a <code>height</code> of 93.");'
  - text: ''
    testString: 'assert($("rect").eq(2).attr("height") == "66", "The third <code>rect</code> should have a <code>height</code> of 66.");'
  - text: ''
    testString: 'assert($("rect").eq(3).attr("height") == "51", "The fourth <code>rect</code> should have a <code>height</code> of 51.");'
  - text: ''
    testString: 'assert($("rect").eq(4).attr("height") == "75", "The fifth <code>rect</code> should have a <code>height</code> of 75.");'
  - text: يجب أن يكون <code>rect</code> السادس <code>height</code> 54.
    testString: 'assert($("rect").eq(5).attr("height") == "54", "The sixth <code>rect</code> should have a <code>height</code> of 54.");'
  - text: يجب أن يكون <code>rect</code> السابع <code>height</code> 87.
    testString: 'assert($("rect").eq(6).attr("height") == "87", "The seventh <code>rect</code> should have a <code>height</code> of 87.");'
  - text: يجب أن يكون <code>rect</code> الثامن <code>height</code> 42.
    testString: 'assert($("rect").eq(7).attr("height") == "42", "The eighth <code>rect</code> should have a <code>height</code> of 42.");'
  - text: يجب أن يكون <code>rect</code> التاسع <code>height</code> 27.
    testString: 'assert($("rect").eq(8).attr("height") == "27", "The ninth <code>rect</code> should have a <code>height</code> of 27.");'

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

```js
// solution required
```
</section>
