---
id: 587d7fac367417b2b2512bdd
challengeType: 6
forumTopicId: 301495
title: 使用动态比例
---

## Description
<section id='description'>
D3 的 <code>min()</code> 和 <code>max()</code> 方法在设置比例尺时十分有用。
对于一个复杂的数据集，首要是设置比例尺，这样可视化才能适合 SVG 容器的宽和高。所有数据都应布局在 SVG 画布内部，这样它们在页面上才是可见的。
下面这个例子为散点图设置了 x 轴的比例尺。<code>domain()</code> 方法给比例尺传递关于散点图原数据值的信息，<code>range()</code> 方法给出在页面上进行可视化的实际空间信息。
在这个例子中，domain 是从 0 到数据集中的最大值，它使用 <code>max()</code> 方法和基于数组中 x 值的回调函数。range 使用 SVG 画布的宽(<code>w</code>)并包含 padding，这将在散点图和 SVG 画布边缘之间添加空隙。

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

// SVG 画布边缘和散点图之间的 padding
const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

在一开始可能很难理解 padding。想象 x 轴是一条从 0 到 500 （SVG 画布宽的值）的水平直线。在 <code>range()</code> 方法中包含 padding 使散点图沿着这条直线从 30 （而不是 0）开始，在 470 （而不是 500）结束。
</section>

## Instructions
<section id='instructions'>
使用 <code>yScale</code> 变量创建一个线性的 y 轴比例尺。<code>domain</code> 应该从 0 开始到数据集中 y 的最大值，range 应该使用 SVG 的高(<code>h</code>)并包含 padding。
<strong>提示</strong><br>记得正向布局。当你为 y 坐标设置 range 时，大的值（height 减去 padding）是第一个参数，小的值是第二个参数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 中的文本应该是 30。
    testString: assert(output == 30 && $('h2').text() == '30');
  - text: yScale 的 <code>domain()</code> 应该等于 <code>[0, 411]</code>。
    testString: assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
  - text: yScale 的 <code>range()</code> 应该等于 <code>[470, 30]</code>。
    testString: assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));

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

    // SVG 画布边缘和图形之间的padding
    const padding = 30;

    // 创建 x 和 y 的比例尺

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // 在下面添加你的代码

    const yScale = undefined;


    // 在上面添加你的代码

    const output = yScale(411); // 返回 30
    d3.select("body")
      .append("h2")
      .text(output)
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

</section>
