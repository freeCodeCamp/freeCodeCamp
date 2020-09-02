---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
isHidden: false
forumTopicId: 301491
---

## Description
<section id='description'>
By default, scales use the identity relationship. This means the input value maps to the output value. However, scales can be much more flexible and interesting.
Say a dataset has values ranging from 50 to 480. This is the input information for a scale, also known as the <dfn>domain</dfn>.
You want to map those points along the <code>x</code> axis on the SVG canvas, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.
The <code>domain()</code> and <code>range()</code> methods set these values for the scale. Both methods take an array of at least two elements as an argument. Here's an example:

```js
// Set a domain
// The domain covers the set of input values
scale.domain([50, 480]);
// Set a range
// The range covers the set of output values
scale.range([10, 500]);
scale(50) // Returns 10
scale(480) // Returns 500
scale(325) // Returns 323.37
scale(750) // Returns 807.67
d3.scaleLinear()
```

Notice that the scale uses the linear relationship between the domain and range values to figure out what the output should be for a given number. The minimum value in the domain (50) maps to the minimum value (10) in the range.
</section>

## Instructions
<section id='instructions'>
Create a scale and set its domain to <code>[250, 500]</code> and range to <code>[10, 150]</code>.
<strong>Note</strong><br>You can chain the <code>domain()</code> and <code>range()</code> methods onto the <code>scale</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use the <code>domain()</code> method.
    testString: assert(code.match(/\.domain/g));
  - text: The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.
    testString: assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
  - text: Your code should use the <code>range()</code> method.
    testString: assert(code.match(/\.range/g));
  - text: The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.
    testString: assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
  - text: The text in the <code>h2</code> should be -102.
    testString: assert($('h2').text() == '-102');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
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
    const scale = d3.scaleLinear();
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>

```

</section>
