---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
forumTopicId: 301482
---

## Description
<section id='description'>
The last challenge added only one rectangle to the <code>svg</code> element to represent a bar. Here, you'll combine what you've learned so far about <code>data()</code>, <code>enter()</code>, and SVG shapes to create and append a rectangle for each data point in <code>dataset</code>.
A previous challenge showed the format for how to create and append a <code>div</code> for each item in <code>dataset</code>:

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

There are a few differences working with <code>rect</code> elements instead of <code>divs</code>. The <code>rects</code> must be appended to an <code>svg</code> element, not directly to the <code>body</code>. Also, you need to tell D3 where to place each <code>rect</code> within the <code>svg</code> area. The bar placement will be covered in the next challenge.
</section>

## Instructions
<section id='instructions'>
Use the <code>data()</code>, <code>enter()</code>, and <code>append()</code> methods to create and append a <code>rect</code> for each item in <code>dataset</code>. The bars should display all on top of each other; this will be fixed in the next challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 9 <code>rect</code> elements.
    testString: assert($('rect').length == 9);
  - text: Your code should use the <code>data()</code> method.
    testString: assert(code.match(/\.data/g));
  - text: Your code should use the <code>enter()</code> method.
    testString: assert(code.match(/\.enter/g));
  - text: Your code should use the <code>append()</code> method.
    testString: assert(code.match(/\.append/g));

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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

```

</section>
