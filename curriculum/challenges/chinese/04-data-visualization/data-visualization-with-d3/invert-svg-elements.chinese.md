---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
videoUrl: ''
localeTitle: 反转SVG元素
---

## Description
undefined

## Instructions
<section id="instructions">更改<code>y</code>属性的回调函数以将栏设置为正面朝上。请记住，条形的<code>height</code>是数据值<code>d</code> 3倍。 <strong>注意</strong> <br>通常，关系是<code>y = h - m * d</code> ，其中<code>m</code>是缩放数据点的常数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
