---
id: 587d7fa9367417b2b2512bd1
title: Change the Color of an SVG Element
challengeType: 6
videoUrl: ''
localeTitle: 更改SVG元素的颜色
---

## Description
<section id="description">条形图位于正确的位置，但它们都是相同的黑色。 SVG有办法改变条形的颜色。在SVG中， <code>rect</code>形状使用<code>fill</code>属性着色。它支持十六进制代码，颜色名称和rgb值，以及更复杂的选项，如渐变和透明度。 </section>

## Instructions
<section id="instructions">添加<code>attr()</code>方法将所有条形的“填充”设置为颜色“海军蓝”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 这些酒吧都应该有海军蓝的<code>fill</code>颜色。
    testString: assert($('rect').css('fill') == "rgb(0, 0, 128)");

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

/section>
