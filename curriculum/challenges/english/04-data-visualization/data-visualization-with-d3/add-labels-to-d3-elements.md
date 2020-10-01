---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
forumTopicId: 301476
---

## Description
<section id='description'>
D3 lets you label a graph element, such as a bar, using the SVG <code>text</code> element.
Like the <code>rect</code> element, a <code>text</code> element needs to have <code>x</code> and <code>y</code> attributes, to place it on the SVG canvas. It also needs to access the data to display those values.
D3 gives you a high level of control over how you label your bars.
</section>

## Instructions
<section id='instructions'>
The code in the editor already binds the data to each new <code>text</code> element. First, append <code>text</code> nodes to the <code>svg</code>. Next, add attributes for the <code>x</code> and <code>y</code> coordinates. They should be calculated the same way as the <code>rect</code> ones, except the <code>y</code> value for the <code>text</code> should make the label sit 3 units higher than the bar. Finally, use the D3 <code>text()</code> method to set the label equal to the data point value.
<strong>Note</strong><br>For the label to sit higher than the bar, decide if the <code>y</code> value for the <code>text</code> should be 3 greater or 3 less than the <code>y</code> value for the bar.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>text</code> element should have a label of 12 and a <code>y</code> value of 61.
    testString: assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
  - text: The second <code>text</code> element should have a label of 31 and a <code>y</code> value of 4.
    testString: assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
  - text: The third <code>text</code> element should have a label of 22 and a <code>y</code> value of 31.
    testString: assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
  - text: The fourth <code>text</code> element should have a label of 17 and a <code>y</code> value of 46.
    testString: assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
  - text: The fifth <code>text</code> element should have a label of 25 and a <code>y</code> value of 22.
    testString: assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
  - text: The sixth <code>text</code> element should have a label of 18 and a <code>y</code> value of 43.
    testString: assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
  - text: The seventh <code>text</code> element should have a label of 29 and a <code>y</code> value of 10.
    testString: assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
  - text: The eighth <code>text</code> element should have a label of 14 and a <code>y</code> value of 55.
    testString: assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
  - text: The ninth <code>text</code> element should have a label of 9 and a <code>y</code> value of 70.
    testString: assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');

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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>

```

</section>
