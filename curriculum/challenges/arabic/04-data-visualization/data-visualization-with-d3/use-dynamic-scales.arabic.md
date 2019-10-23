---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
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
    testString: 'assert(output == 30 && $("h2").text() == "30", "The text in the <code>h2</code> should be 30.");'
  - text: ''
    testString: 'assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]), "The <code>domain()</code> of yScale should be equivalent to <code>[0, 411]</code>.");'
  - text: ''
    testString: 'assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]), "The <code>range()</code> of yScale should be equivalent to <code>[470, 30]</code>.");'

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

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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
