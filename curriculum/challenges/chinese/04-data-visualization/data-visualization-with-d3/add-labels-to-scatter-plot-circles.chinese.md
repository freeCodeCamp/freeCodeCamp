---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
videoUrl: ''
localeTitle: 添加标签以分散绘图圆圈
---

## Description
<section id="description">您可以添加文本以在散点图中为点创建标签。目标是显示<code>dataset</code>每个项目的第一个（ <code>x</code> ）和第二个（ <code>y</code> ）字段的逗号分隔值。 <code>text</code>节点需要<code>x</code>和<code>y</code>属性才能将其放置在SVG画布上。在此挑战中， <code>y</code>值（确定高度）可以使用<code>circle</code>用于其<code>cy</code>属性的相同值。 <code>x</code>值可能略大于<code>circle</code>的<code>cx</code>值，因此标签可见。这会将标签推到绘图点的右侧。 </section>

## Instructions
<section id="instructions">使用<code>text</code>元素标记散点图上的每个点。标签的文本应该是用逗号和空格分隔的两个值。例如，第一个点的标签是“34,78”。设置<code>x</code>属性，使其比<code>circle</code>上<code>cx</code>属性使用的值多5个单位。设置<code>y</code>属性的方式与<code>circle</code>上的<code>cy</code>值相同。 </section>

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

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
