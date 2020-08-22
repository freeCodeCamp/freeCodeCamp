---
id: 587d7faa367417b2b2512bd6
title: Add a Tooltip to a D3 Element
challengeType: 6
videoUrl: ''
localeTitle: 将工具提示添加到D3元素
---

## Description
<section id="description">当用户将鼠标悬停在该项目上时，工具提示会显示有关页面上项目的更多信息。有几种方法可以向可视化添加工具提示，此挑战使用SVG <code>title</code>元素。 <code>title</code>对与<code>text()</code>方法一起动态地向条形图添加数据。 </section>

## Instructions
<section id="instructions">在每个<code>rect</code>节点下附加<code>title</code>元素。然后使用回调函数调用<code>text()</code>方法，以便文本显示数据值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有9个<code>title</code>元素。
    testString: assert($('title').length == 9);
  - text: 第一个<code>title</code>元素的工具提示文本应为12。
    testString: assert($('title').eq(0).text() == '12');
  - text: 第二个<code>title</code>元素的工具提示文本应为31。
    testString: assert($('title').eq(1).text() == '31');
  - text: 第三个<code>title</code>元素的工具提示文本应为22。
    testString: assert($('title').eq(2).text() == '22');
  - text: 第四个<code>title</code>元素的工具提示文本应为17。
    testString: assert($('title').eq(3).text() == '17');
  - text: 第五个<code>title</code>元素的工具提示文本应为25。
    testString: assert($('title').eq(4).text() == '25');
  - text: 第六个<code>title</code>元素的工具提示文本应为18。
    testString: assert($('title').eq(5).text() == '18');
  - text: 第七个<code>title</code>元素的工具提示文本应为29。
    testString: assert($('title').eq(6).text() == '29');
  - text: 第八个<code>title</code>元素的工具提示文本应为14。
    testString: assert($('title').eq(7).text() == '14');
  - text: 第九个<code>title</code>元素的工具提示文本应为9。
    testString: assert($('title').eq(8).text() == '9');

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

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
