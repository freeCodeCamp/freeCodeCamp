---
id: 587d7fab367417b2b2512bd7
challengeType: 6
forumTopicId: 301484
title: 使用 SVG Circles 创建散点图
---

## Description
<section id='description'>
散点图是另一种形式的可视化。它用圆圈来映射数据点，每个数据点有两个值，这两个值和 <code>x</code> 和 <code>y</code> 轴相关联，在可视化中用来给圆圈定位。
SVG 用 <code>circle</code> 标签来创建圆形，它和之前用来构建条形图的 <code>rect</code> 非常相像。
</section>

## Instructions
<section id='instructions'>
使用 <code>data()</code>、<code>enter()</code>、<code>append()</code> 方法将 <code>dataset</code> 和新添加到 SVG 画布上的 <code>circle</code> 元素绑定起来。
<strong>注意</strong><br>circles 并不可见，因为我们还没有设置它们的属性。我们会在下一个挑战来设置它。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有 10 个 <code>circle</code> 元素。
    testString: assert($('circle').length == 10);

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

  </script>
</body>

```

</section>
