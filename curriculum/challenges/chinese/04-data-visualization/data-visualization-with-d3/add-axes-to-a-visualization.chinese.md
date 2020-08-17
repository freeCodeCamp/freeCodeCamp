---
id: 587d7fad367417b2b2512bdf
title: Add Axes to a Visualization
challengeType: 6
videoUrl: ''
localeTitle: 将轴添加到可视化
---

## Description
<section id="description">改善散点图的另一种方法是添加x轴和y轴。 D3有两种方法<code>axisLeft()</code>和<code>axisBottom()</code>分别渲染y轴和x轴。 （轴是轴的复数形式）。以下是在先前的挑战中基于<code>xScale</code>创建x轴的示例： <code>const xAxis = d3.axisBottom(xScale);</code>下一步是在SVG画布上渲染轴。为此，您可以使用常规SVG组件<code>g</code>元素。 <code>g</code>代表组。与<code>rect</code> ， <code>circle</code>和<code>text</code> ，轴在渲染时只是一条直线。因为它是一个简单的形状，使用<code>g</code>作品。最后一步是应用<code>transform</code>属性将轴定位在SVG画布上的正确位置。否则，该线将沿着SVG画布的边框渲染，并且不可见。 SVG支持不同类型的<code>transforms</code> ，但定位轴需要<code>translate</code> 。当它应用于<code>g</code>元素时，它会按给定的数量上下移动整个组。这是一个例子： <blockquote> const xAxis = d3.axisBottom（xScale）; <br><br> svg.append（ “G”） <br> .attr（“transform”，“translate（0，”+（h  -  padding）+“）”） <br> .CALL（x-轴）; </blockquote>上面的代码将x轴放在SVG画布的底部。然后它作为参数传递给<code>call()</code>方法。除了<code>translate</code>参数的形式为（x，0）之外，y轴的工作方式是相同的。因为<code>translate</code>是上面<code>attr()</code>方法中的字符串，所以可以使用连接来包含其参数的变量值。 </section>

## Instructions
<section id="instructions">散点图现在具有x轴。使用<code>axisLeft()</code>方法在名为<code>yAxis</code>的变量中创建y轴。然后使用<code>g</code>元素渲染轴。确保使用<code>transform</code>属性将轴转换为右边的填充单元数量，然后降低0个单位。记得<code>call()</code>轴。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>axisLeft()</code>方法， <code>yScale</code>作为参数传递。
    testString: assert(code.match(/\.axisLeft\(yScale\)/g));
  - text: 'y轴<code>g</code>元素应具有<code>transform</code>属性以将轴平移（60,0）。'
    testString: assert($('g').eq(10).attr('transform').match(/translate\(60\s*?,\s*?0\)/g));
  - text: 您的代码应该调用<code>yAxis</code> 。
    testString: assert(code.match(/\.call\(\s*yAxis\s*\)/g));

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
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
