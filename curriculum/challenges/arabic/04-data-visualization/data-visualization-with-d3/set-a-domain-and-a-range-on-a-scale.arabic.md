---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
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
    testString: 'assert(code.match(/\.domain/g), "Your code should use the <code>domain()</code> method.");'
  - text: ''
    testString: 'assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]), "The <code>domain()</code> of the scale should be set to <code>[250, 500]</code>.");'
  - text: ''
    testString: 'assert(code.match(/\.range/g), "Your code should use the <code>range()</code> method.");'
  - text: ''
    testString: 'assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]), "The <code>range()</code> of the scale should be set to <code>[10, 150]</code>.");'
  - text: ''
    testString: 'assert($("h2").text() == "-102", "The text in the <code>h2</code> should be -102.");'

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

```js
// solution required
```
</section>
