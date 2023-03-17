---
id: 587d7fad367417b2b2512bdf
title: 添加坐标轴到视图中
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

另一种改进散点图的方法是添加 x 轴和 y 轴。

D3 有两种方法来渲染 y 轴和 x 轴，分别是 `axisLeft()` 和 `axisBottom()`。 下面是一个基于上个挑战中的 `xScale` 创建 x 轴的例子：

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. 为此，你可以使用一个 SVG 组件， `g` 元素， `g` 是英文中组（group）的缩写。 不同于 `rect`、`circle`、`text`，在渲染时，轴只是一条直线。 因为它是一个简单的图形，所以可以用 `g` 。 The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG 支持多种 `transforms`，但是定位轴需要使用 `translate` 属性。 当它应用在 `g` 元素上时，它根据给出的总量移动整组。 下面是一个例子：

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. 然后 x 轴作为参数被传递给 `call()` 方法。 y 轴的定位也是这样，只是 `translate` 参数的形式是 `(x, 0)`。 因为 `translate` 是 `attr()` 方法中的一个字符串，你可以在参数中使用字符串的连接将变量值包括进去。

# --instructions--

现在散点图有 x 轴了。 用 `axisLeft()` 方法创建 y 轴并赋值给 `yAxis` 变量， 然后通过 `g` 元素渲染 y 轴。 使用 `transform` 属性将 y 轴向右平移（平移的单位等于 paading 的值），向下平移 `0` 个单位。 记得对 y 轴调用 `call()` 方法。

# --hints--

你应该使用 `axisLeft()` 方法，并传入 `yScale` 作为参数。

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

y 轴 `g` 元素应有一个 `transform` 属性，将 y 轴平移 `(60, 0)`。

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

你应该调用(call) `yAxis` 。

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

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
