---
id: 587d7faa367417b2b2512bd3
title: Style D3 Labels
challengeType: 6
videoUrl: ''
localeTitle: 风格D3标签
---

## Description
<section id="description"> D3方法可以为条形标签添加样式。 <code>fill</code>属性设置<code>text</code>节点的文本颜色。 <code>style()</code>方法为其他样式设置CSS规则，例如“font-family”或“font-size”。 </section>

## Instructions
<section id="instructions">将<code>text</code>元素的<code>font-size</code>设置为25px，将文本颜色设置为红色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 标签应该都具有红色的<code>fill</code>颜色。
    testString: assert($('text').css('fill') == 'rgb(255, 0, 0)');
  - text: 标签应该都具有25像素的<code>font-size</code> 。
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
