---
id: 587d7fac367417b2b2512bdd
title: 使用动态比例
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

D3 的 `min()` 和 `max()` 方法在设置比例尺时十分有用。

对于一个复杂的数据集，首要是设置比例尺，这样可视化才能适合 SVG 容器的宽和高。 You want all the data plotted inside the SVG so it's visible on the web page.

下面这个例子为散点图设置了 x 轴的比例尺。 `domain()` 方法给比例尺传递关于散点图原数据值的信息， `range()` 方法给出在页面上进行可视化的实际空间信息。

在这个例子中，domain 是从 0 到数据集中的最大值， 它使用 `max()` 方法和基于数组中 x 值的回调函数。 The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

在一开始可能很难理解 padding。 Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). 在 `range()` 方法中包含 padding 使散点图沿着这条直线从 30 （而不是 0）开始，在 470 （而不是 500）结束。

# --instructions--

使用 `yScale` 变量创建一个线性的 y 轴比例尺。 domain 应该从 0 开始到数据集中 `y` 的最大值， range 应该使用 SVG 的高（`h`），并包含 padding。

**注意：**记得保持绘图在右上角。 当你为 y 坐标设置 range 时，大的值（height 减去 padding）是第一个参数，小的值是第二个参数。

# --hints--

`h2` 的文本应为 `30`。

```js
assert(output == 30 && $('h2').text() == '30');
```

yScale 的 `domain()` 应该等于 `[0, 411]`。

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

yScale 的 `range()` 应该等于 `[470, 30]`。

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
```

# --seed--

## --seed-contents--

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

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
