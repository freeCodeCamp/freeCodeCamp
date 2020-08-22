---
id: 587d7fab367417b2b2512bd7
title: Create a Scatterplot with SVG Circles
challengeType: 6
videoUrl: ''
localeTitle: 使用SVG圈创建散点图
---

## Description
<section id="description">散点图是另一种可视化。它通常使用圆来映射数据点，每个数据点都有两个值。这些值与<code>x</code>和<code>y</code>轴相关联，用于在可视化中定位圆。 SVG有一个<code>circle</code>标记来创建圆形。它的工作方式与条形图中使用的<code>rect</code>元素非常相似。 </section>

## Instructions
<section id="instructions">使用<code>data()</code> ， <code>enter()</code>和<code>append()</code>方法将<code>dataset</code>绑定到附加到SVG画布的新<code>circle</code>元素。 <strong>注意</strong> <br>圆圈将不可见，因为我们尚未设置其属性。我们将在下一次挑战中做到这一点。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有10个<code>circle</code>元素。
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
