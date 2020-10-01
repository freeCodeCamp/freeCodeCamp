---
id: 587d7fa9367417b2b2512bd1
challengeType: 6
forumTopicId: 301480
title: 更改 SVG 元素的颜色
---

## Description
<section id='description'>
所有组都在正确的位置上了，但是它们都是一样的黑色。SVG 可以改变组的颜色。
在 SVG 中， <code>rect</code> 图形用 <code>fill</code> 属性着色，它支持十六进制代码、颜色名称、rgb 值以及更复杂的选项，比如渐变和透明。
</section>

## Instructions
<section id='instructions'>
添加 <code>attr()</code> 方法，将所有组的 "fill" 设置为 "navy"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有组的 <code>fill</code> 颜色都应该是 navy。
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
       // 在下面添加你的代码



       // 在上面添加你的代码
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>

```

</section>
