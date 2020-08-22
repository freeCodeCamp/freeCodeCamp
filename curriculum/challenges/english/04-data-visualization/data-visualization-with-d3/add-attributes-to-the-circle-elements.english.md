---
id: 587d7fab367417b2b2512bd8
title: Add Attributes to the Circle Elements
challengeType: 6
isHidden: false
forumTopicId: 301471
---

## Description
<section id='description'>
The last challenge created the <code>circle</code> elements for each point in the <code>dataset</code>, and appended them to the SVG canvas. But D3 needs more information about the position and size of each <code>circle</code> to display them correctly.
A <code>circle</code> in SVG has three main attributes. The <code>cx</code> and <code>cy</code> attributes are the coordinates. They tell D3 where to position the <em>center</em> of the shape on the SVG canvas. The radius (<code>r</code> attribute) gives the size of the <code>circle</code>.
Just like the <code>rect</code> <code>y</code> coordinate, the <code>cy</code> attribute for a <code>circle</code> is measured from the top of the SVG canvas, not from the bottom.
All three attributes can use a callback function to set their values dynamically. Remember that all methods chained after <code>data(dataset)</code> run once per item in <code>dataset</code>. The <code>d</code> parameter in the callback function refers to the current item in <code>dataset</code>, which is an array for each point. You use bracket notation, like <code>d[0]</code>, to access the values in that array.
</section>

## Instructions
<section id='instructions'>
Add <code>cx</code>, <code>cy</code>, and <code>r</code> attributes to the <code>circle</code> elements. The <code>cx</code> value should be the first number in the array for each item in <code>dataset</code>. The <code>cy</code> value should be based off the second number in the array, but make sure to show the chart right-side-up and not inverted. The <code>r</code> value should be 5 for all circles.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 10 <code>circle</code> elements.
    testString: assert($('circle').length == 10);
  - text: The first <code>circle</code> element should have a <code>cx</code> value of 34, a <code>cy</code> value of 422, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(0).attr('cx') == '34' && $('circle').eq(0).attr('cy') == '422' && $('circle').eq(0).attr('r') == '5');
  - text: The second <code>circle</code> element should have a <code>cx</code> value of 109, a <code>cy</code> value of 220, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(1).attr('cx') == '109' && $('circle').eq(1).attr('cy') == '220' && $('circle').eq(1).attr('r') == '5');
  - text: The third <code>circle</code> element should have a <code>cx</code> value of 310, a <code>cy</code> value of 380, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(2).attr('cx') == '310' && $('circle').eq(2).attr('cy') == '380' && $('circle').eq(2).attr('r') == '5');
  - text: The fourth <code>circle</code> element should have a <code>cx</code> value of 79, a <code>cy</code> value of 89, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(3).attr('cx') == '79' && $('circle').eq(3).attr('cy') == '89' && $('circle').eq(3).attr('r') == '5');
  - text: The fifth <code>circle</code> element should have a <code>cx</code> value of 420, a <code>cy</code> value of 280, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(4).attr('cx') == '420' && $('circle').eq(4).attr('cy') == '280' && $('circle').eq(4).attr('r') == '5');
  - text: The sixth <code>circle</code> element should have a <code>cx</code> value of 233, a <code>cy</code> value of 355, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(5).attr('cx') == '233' && $('circle').eq(5).attr('cy') == '355' && $('circle').eq(5).attr('r') == '5');
  - text: The seventh <code>circle</code> element should have a <code>cx</code> value of 333, a <code>cy</code> value of 404, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(6).attr('cx') == '333' && $('circle').eq(6).attr('cy') == '404' && $('circle').eq(6).attr('r') == '5');
  - text: The eighth <code>circle</code> element should have a <code>cx</code> value of 222, a <code>cy</code> value of 167, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(7).attr('cx') == '222' && $('circle').eq(7).attr('cy') == '167' && $('circle').eq(7).attr('r') == '5');
  - text: The ninth <code>circle</code> element should have a <code>cx</code> value of 78, a <code>cy</code> value of 180, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(8).attr('cx') == '78' && $('circle').eq(8).attr('cy') == '180' && $('circle').eq(8).attr('r') == '5');
  - text: The tenth <code>circle</code> element should have a <code>cx</code> value of 21, a <code>cy</code> value of 377, and an <code>r</code> value of 5.
    testString: assert($('circle').eq(9).attr('cx') == '21' && $('circle').eq(9).attr('cy') == '377' && $('circle').eq(9).attr('r') == '5');

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
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>

```

</section>
