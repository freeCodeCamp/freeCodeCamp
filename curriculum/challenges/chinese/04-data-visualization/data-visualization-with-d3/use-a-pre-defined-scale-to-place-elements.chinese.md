---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
videoUrl: ''
localeTitle: 使用预定义比例放置元素
---

## Description
<section id="description">设置了比例后，就可以再次绘制散点图。比例就像处理函数一样，可以将x和y原始数据转换为适合SVG画布上正确渲染的值。他们将数据保存在屏幕的绘图区域内。使用缩放功能设置SVG形状的坐标属性值。这包括<code>rect</code>或<code>text</code>元素的<code>x</code>和<code>y</code>属性，或者<code>circles</code> <code>cx</code>和<code>cy</code> 。这是一个例子： <blockquote>形状<br> .attr（“x”，（d）=&gt; xScale（d [0]）） </blockquote> Scales设置形状坐标属性以将数据点放置到SVG画布上。显示实际数据值时不需要应用比例，例如，在工具提示或标签的<code>text()</code>方法中。 </section>

## Instructions
<section id="instructions">使用<code>xScale</code>和<code>yScale</code>将<code>circle</code>和<code>text</code>形状定位到SVG画布上。对于<code>circles</code> ，应用比例来设置<code>cx</code>和<code>cy</code>属性。给它们半径5个单位。对于<code>text</code>元素，应用比例来设置<code>x</code>和<code>y</code>属性。标签应偏移到点的右侧。要执行此操作，请在将x数据传递给<code>xScale</code>之前将其添加10个单位。 </section>

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
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
