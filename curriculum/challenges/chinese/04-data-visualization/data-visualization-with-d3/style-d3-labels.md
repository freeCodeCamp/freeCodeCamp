---
id: 587d7faa367417b2b2512bd3
challengeType: 6
forumTopicId: 301492
title: 给 D3 标签添加样式
---

## Description
<section id='description'>
D3 可以将样式添加到组标签中。<code>fill</code> 属性为 <code>text</code> 节点设置文本颜色，<code>style()</code> 方法设置其它样式的 CSS 规则，例如 "font-family"、"font-size"。
</section>

## Instructions
<section id='instructions'>
将 <code>text</code> 元素的 <code>font-size</code> 设置为 25px，文本颜色设置为 red。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 所有标签的 <code>fill</code> 颜色应该是 red。
    testString: assert($('text').css('fill') == 'rgb(255, 0, 0)');
  - text: 所有标签的 <code>font-size</code> 应该为 25 个像素。
    testString: assert($('text').css('font-size') == '25px');

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>

```

</section>
