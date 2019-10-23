---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
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
    testString: 'assert($("text").length == 10, "Your code should have 10 <code>text</code> elements.");'
  - text: ''
    testString: 'assert($("text").eq(0).text() == "34, 78" && $("text").eq(0).attr("x") == "39" && $("text").eq(0).attr("y") == "422", "The first label should have text of "34, 78", an <code>x</code> value of 39, and a <code>y</code> value of 422.");'
  - text: ''
    testString: 'assert($("text").eq(1).text() == "109, 280" && $("text").eq(1).attr("x") == "114" && $("text").eq(1).attr("y") == "220", "The second label should have text of "109, 280", an <code>x</code> value of 114, and a <code>y</code> value of 220.");'
  - text: ''
    testString: 'assert($("text").eq(2).text() == "310, 120" && $("text").eq(2).attr("x") == "315" && $("text").eq(2).attr("y") == "380", "The third label should have text of "310, 120", an <code>x</code> value of 315, and a <code>y</code> value of 380.");'
  - text: ''
    testString: 'assert($("text").eq(3).text() == "79, 411" && $("text").eq(3).attr("x") == "84" && $("text").eq(3).attr("y") == "89", "The fourth label should have text of "79, 411", an <code>x</code> value of 84, and a <code>y</code> value of 89.");'
  - text: ''
    testString: 'assert($("text").eq(4).text() == "420, 220" && $("text").eq(4).attr("x") == "425" && $("text").eq(4).attr("y") == "280", "The fifth label should have text of "420, 220", an <code>x</code> value of 425, and a <code>y</code> value of 280.");'
  - text: ''
    testString: 'assert($("text").eq(5).text() == "233, 145" && $("text").eq(5).attr("x") == "238" && $("text").eq(5).attr("y") == "355", "The sixth label should have text of "233, 145", an <code>x</code> value of 238, and a <code>y</code> value of 355.");'
  - text: ''
    testString: 'assert($("text").eq(6).text() == "333, 96" && $("text").eq(6).attr("x") == "338" && $("text").eq(6).attr("y") == "404", "The seventh label should have text of "333, 96", an <code>x</code> value of 338, and a <code>y</code> value of 404.");'
  - text: ''
    testString: 'assert($("text").eq(7).text() == "222, 333" && $("text").eq(7).attr("x") == "227" && $("text").eq(7).attr("y") == "167", "The eighth label should have text of "222, 333", an <code>x</code> value of 227, and a <code>y</code> value of 167.");'
  - text: ''
    testString: 'assert($("text").eq(8).text() == "78, 320" && $("text").eq(8).attr("x") == "83" && $("text").eq(8).attr("y") == "180", "The ninth label should have text of "78, 320", an <code>x</code> value of 83, and a <code>y</code> value of 180.");'
  - text: ''
    testString: 'assert($("text").eq(9).text() == "21, 123" && $("text").eq(9).attr("x") == "26" && $("text").eq(9).attr("y") == "377", "The tenth label should have text of "21, 123", an <code>x</code> value of 26, and a <code>y</code> value of 377.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
