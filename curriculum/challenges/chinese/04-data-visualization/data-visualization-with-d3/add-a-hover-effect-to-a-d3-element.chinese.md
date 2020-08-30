---
id: 587d7faa367417b2b2512bd4
title: Add a Hover Effect to a D3 Element
challengeType: 6
videoUrl: ''
localeTitle: 将悬停效果添加到D3元素
---

## Description
<section id="description">当用户用鼠标悬停在其上时，可以添加突出显示条形的效果。到目前为止，矩形的样式使用内置的D3和SVG方法，但您也可以使用CSS。使用<code>attr()</code>方法在SVG元素上设置CSS类。然后，新类的<code>:hover</code>伪类保存任何悬停效果的样式规则。 </section>

## Instructions
<section id="instructions">使用<code>attr()</code>方法向所有<code>rect</code>元素添加一个<code>bar</code>类。将鼠标悬停在其上时，会将条形的<code>fill</code>颜色更改为棕色。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>rect</code>元素应该有一类<code>bar</code> 。
    testString: assert($('rect').attr('class') == "bar");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

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
