---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
forumTopicId: 301477
---

## Description
<section id='description'>
You can add text to create labels for the points in a scatter plot.
The goal is to display the comma-separated values for the first (<code>x</code>) and second (<code>y</code>) fields of each item in <code>dataset</code>.
The <code>text</code> nodes need <code>x</code> and <code>y</code> attributes to position it on the SVG canvas. In this challenge, the <code>y</code> value (which determines height) can use the same value that the <code>circle</code> uses for its <code>cy</code> attribute. The <code>x</code> value can be slightly larger than the <code>cx</code> value of the <code>circle</code>, so the label is visible. This will push the label to the right of the plotted point.
</section>

## Instructions
<section id='instructions'>
Label each point on the scatter plot using the <code>text</code> elements. The text of the label should be the two values separated by a comma and a space. For example, the label for the first point is "34, 78". Set the <code>x</code> attribute so it's 5 units more than the value you used for the <code>cx</code> attribute on the <code>circle</code>. Set the <code>y</code> attribute the same way that's used for the <code>cy</code> value on the <code>circle</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>text</code> elements.
    testString: assert($('text').length == 10);
  - text: The first label should have text of "34, 78", an <code>x</code> value of 39, and a <code>y</code> value of 422.
    testString: assert($('text').eq(0).text() == '34, 78' && $('text').eq(0).attr('x') == '39' && $('text').eq(0).attr('y') == '422');
  - text: The second label should have text of "109, 280", an <code>x</code> value of 114, and a <code>y</code> value of 220.
    testString: assert($('text').eq(1).text() == '109, 280' && $('text').eq(1).attr('x') == '114' && $('text').eq(1).attr('y') == '220');
  - text: The third label should have text of "310, 120", an <code>x</code> value of 315, and a <code>y</code> value of 380.
    testString: assert($('text').eq(2).text() == '310, 120' && $('text').eq(2).attr('x') == '315' && $('text').eq(2).attr('y') == '380');
  - text: The fourth label should have text of "79, 411", an <code>x</code> value of 84, and a <code>y</code> value of 89.
    testString: assert($('text').eq(3).text() == '79, 411' && $('text').eq(3).attr('x') == '84' && $('text').eq(3).attr('y') == '89');
  - text: The fifth label should have text of "420, 220", an <code>x</code> value of 425, and a <code>y</code> value of 280.
    testString: assert($('text').eq(4).text() == '420, 220' && $('text').eq(4).attr('x') == '425' && $('text').eq(4).attr('y') == '280');
  - text: The sixth label should have text of "233, 145", an <code>x</code> value of 238, and a <code>y</code> value of 355.
    testString: assert($('text').eq(5).text() == '233, 145' && $('text').eq(5).attr('x') == '238' && $('text').eq(5).attr('y') == '355');
  - text: The seventh label should have text of "333, 96", an <code>x</code> value of 338, and a <code>y</code> value of 404.
    testString: assert($('text').eq(6).text() == '333, 96' && $('text').eq(6).attr('x') == '338' && $('text').eq(6).attr('y') == '404');
  - text: The eighth label should have text of "222, 333", an <code>x</code> value of 227, and a <code>y</code> value of 167.
    testString: assert($('text').eq(7).text() == '222, 333' && $('text').eq(7).attr('x') == '227' && $('text').eq(7).attr('y') == '167');
  - text: The ninth label should have text of "78, 320", an <code>x</code> value of 83, and a <code>y</code> value of 180.
    testString: assert($('text').eq(8).text() == '78, 320' && $('text').eq(8).attr('x') == '83' && $('text').eq(8).attr('y') == '180');
  - text: The tenth label should have text of "21, 123", an <code>x</code> value of 26, and a <code>y</code> value of 377.
    testString: assert($('text').eq(9).text() == '21, 123' && $('text').eq(9).attr('x') == '26' && $('text').eq(9).attr('y') == '377');

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
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))
       
  </script>
</body>

```

</section>
