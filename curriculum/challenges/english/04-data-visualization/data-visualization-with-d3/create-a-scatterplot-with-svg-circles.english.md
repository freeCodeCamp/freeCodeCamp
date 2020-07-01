---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
isHidden: false
forumTopicId: 301484
---

## Description
<section id='description'>
A scatter plot is another type of visualization. It usually uses circles to map data points, which have two values each. These values tie to the <code>x</code> and <code>y</code> axes, and are used to position the circle in the visualization.
SVG has a <code>circle</code> tag to create the circle shape. It works a lot like the <code>rect</code> elements you used for the bar chart.
</section>

## Instructions
<section id='instructions'>
Use the <code>data()</code>, <code>enter()</code>, and <code>append()</code> methods to bind <code>dataset</code> to new <code>circle</code> elements that are appended to the SVG canvas.
<strong>Note</strong><br>The circles won't be visible because we haven't set their attributes yet. We'll do that in the next challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>circle</code> elements.
    testString: assert($('circle').length == 10);

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

  </script>
</body>

```

</section>
