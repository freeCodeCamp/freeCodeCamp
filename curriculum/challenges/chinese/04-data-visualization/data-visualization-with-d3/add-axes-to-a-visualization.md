---
id: 587d7fad367417b2b2512bdf
challengeType: 6
forumTopicId: 301472
title: 添加坐标轴到可视化中
---

## Description
<section id='description'>
另一种改进散点图的方法是添加 x 轴和 y 轴。
D3 有两种方法来渲染 y 轴和 x 轴，分别是 <code>axisLeft</code> 和 <code>axisBottom</code>。下面是一个基于上个挑战中的 <code>xScale</code> 创建 x 轴的例子：
<code>const xAxis = d3.axisBottom(xScale);</code> 
下一步是在 SVG 画布上渲染 x 轴。为此，你可以使用一个常见的 SVG 组件， <code>g</code> 元素，<code>g</code> 是英文中组(group)的缩写。
不同于 <code>rect</code>、<code>circle</code>、<code>text</code>，在渲染时，轴只是一条直线。因为它是一个简单的图形，所以可以用 <code>g</code> 。
最后一步是使用 <code>transforms</code> 属性将轴放置在 SVG 画布的正确位置上。否则，轴将会沿着 SVG 画布的边缘渲染，从而不可见。
SVG 支持多种 <code>transforms</code>，但是放置轴需要 <code>translate</code>。当它应用在 <code>g</code> 元素上时，它根据给出的总量移动整组。下面是一个例子：

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

上部分代码将 x 轴放置在 SVG 画布的底端。然后 x 轴作为参数被传递给 <code>call</code> 方法。
除了 <code>translate</code> 的参数是 (x,0) 格式的，y 轴也是一样的。因为 <code>translate</code> 是上面 <code>attr</code> 方法中的一个字符串，你可以在参数中使用字符串的连接将变量值包括进去。
</section>

## Instructions
<section id='instructions'>
现在散点图有 x 轴了。用 <code>axisLeft</code> 方法在变量 <code>yAxis</code> 中创建 y 轴，然后用 <code>g</code> 元素渲染 y 轴。确保用 <code>transform</code> 属性将 y 轴向右平移 padding 个单位，向下平移 0 个单位。记得 <code>call()</code> y 轴。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用参数为 <code>yScale</code>的<code>axisLeft()</code> 方法。
    testString: assert(code.match(/\.axisLeft\(yScale\)/g));
  - text: y 轴的 <code>g</code>元素应该有一个<code>transform</code> 属性来将 y 轴平移( 60，0 )。
    testString: assert($('g').eq(10).attr('transform').match(/translate\(60\s*?,\s*?0\)/g));
  - text: 你应该调用(call) <code>yAxis</code> 。
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

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
    
    const yAxis = d3.axisLeft(yScale);
    

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>

```

</section>
