---
id: 587d7fa8367417b2b2512bcc
title: Display Shapes with SVG
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
    testString: 'assert($("rect").length == 1, "Your document should have 1 <code>rect</code> element.");'
  - text: ''
    testString: 'assert($("rect").attr("width") == "25", "The <code>rect</code> element should have a <code>width</code> attribute set to 25.");'
  - text: ''
    testString: 'assert($("rect").attr("height") == "100", "The <code>rect</code> element should have a <code>height</code> attribute set to 100.");'
  - text: ''
    testString: 'assert($("rect").attr("x") == "0", "The <code>rect</code> element should have an <code>x</code> attribute set to 0.");'
  - text: ''
    testString: 'assert($("rect").attr("y") == "0", "The <code>rect</code> element should have a <code>y</code> attribute set to 0.");'

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
                  .attr("height", h)
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
