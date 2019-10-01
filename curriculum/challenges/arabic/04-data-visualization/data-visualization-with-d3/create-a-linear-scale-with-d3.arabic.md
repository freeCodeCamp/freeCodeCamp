---
id: 587d7fab367417b2b2512bda
title: Create a Linear Scale with D3
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
    testString: 'assert($("h2").text() == "50", "The text in the <code>h2</code> should be 50.");'
  - text: ''
    testString: 'assert(code.match(/\.scaleLinear/g), "Your code should use the <code>scaleLinear()</code> method.");'
  - text: ''
    testString: 'assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g), "The <code>output</code> variable should call <code>scale</code> with an argument of 50.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call the scale with an argument here

    // Add your code above this line

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
