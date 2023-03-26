---
id: 587d7fac367417b2b2512bde
title: 使用预定义的比例放置元素
challengeType: 6
forumTopicId: 301494
dashedName: use-a-pre-defined-scale-to-place-elements
---

# --description--

当比例尺建立好后，是时候重新映射散点图了。 The scales are like processing functions that turn the `x` and `y` raw data into values that fit and render correctly on the SVG. 它们使数据在屏幕的布局区域内部。

用比例尺函数为 SVG 图形设置坐标属性值。 这包括 `rect` 或者 `text` 元素的 `x` 和 `y` 属性，或者 `circles` 的 `cx` 和 `cy`。 以下是一个例子：

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

Scales set shape coordinate attributes to place the data points onto the SVG. 当你显示实际数据值时，不用使用比例尺，例如，在提示框或标签中的 `text()` 方法。

# --instructions--

Use `xScale` and `yScale` to position both the `circle` and `text` shapes onto the SVG. 对于 `circles`，使用比例尺设置 `cx` 和 `cy` 属性， 半径为 `5` 个单位。

对于 `text` 元素，使用比例尺设置 `x` 和 `y` 属性。 标签应该标注在点的右边， 为此，在将 `x` 数据值传递给 `xScale` 之前，要给它加上 `10` 个单位。

# --hints--

应该有 10 个 `circle` 元素。

```js
assert($('circle').length == 10);
```

在使用比例尺后，第一个 `circle` 元素的 `cx` 值应该大约为 `91`，`cy` 值应该大约为 `368`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(0).attr('cx')) == '91' &&
    Math.round($('circle').eq(0).attr('cy')) == '368' &&
    $('circle').eq(0).attr('r') == '5'
);
```

在使用比例尺后，第二个 `circle` 元素的 `cx` 值应该大约为 `159`，`cy` 值应该大约为 `181`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(1).attr('cx')) == '159' &&
    Math.round($('circle').eq(1).attr('cy')) == '181' &&
    $('circle').eq(1).attr('r') == '5'
);
```

在使用比例尺后，第三个 `circle` 元素的 `cx` 值应该大约为 `340`，`cy` 值应该大约为 `329`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(2).attr('cx')) == '340' &&
    Math.round($('circle').eq(2).attr('cy')) == '329' &&
    $('circle').eq(2).attr('r') == '5'
);
```

在使用比例尺后，第四个 `circle` 元素的 `cx` 值应该大约为 `131`，`cy` 值应该大约为 `60`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(3).attr('cx')) == '131' &&
    Math.round($('circle').eq(3).attr('cy')) == '60' &&
    $('circle').eq(3).attr('r') == '5'
);
```

在使用比例尺后，第五个 `circle` 元素的 `cx` 值应该大约为 `440`，`cy` 值应该大约为 `237`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(4).attr('cx')) == '440' &&
    Math.round($('circle').eq(4).attr('cy')) == '237' &&
    $('circle').eq(4).attr('r') == '5'
);
```

在使用比例尺后，第六个 `circle` 元素的 `cx` 值应该大约为 `271`，`cy` 值应该大约为 `306`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(5).attr('cx')) == '271' &&
    Math.round($('circle').eq(5).attr('cy')) == '306' &&
    $('circle').eq(5).attr('r') == '5'
);
```

在使用比例尺后，第七个 `circle` 元素的 `cx` 值应该大约为 `361`，`cy` 值应该大约为 `351`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(6).attr('cx')) == '361' &&
    Math.round($('circle').eq(6).attr('cy')) == '351' &&
    $('circle').eq(6).attr('r') == '5'
);
```

在使用比例尺后，第八个 `circle` 元素的 `cx` 值应该大约为 `261`，`cy` 值应该大约为 `132`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(7).attr('cx')) == '261' &&
    Math.round($('circle').eq(7).attr('cy')) == '132' &&
    $('circle').eq(7).attr('r') == '5'
);
```

在使用比例尺后，第九个 `circle` 元素的 `cx` 值应该大约为 `131`，`cy` 值应该大约为 `144`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(8).attr('cx')) == '131' &&
    Math.round($('circle').eq(8).attr('cy')) == '144' &&
    $('circle').eq(8).attr('r') == '5'
);
```

在使用比例尺后，第十个 `circle` 元素的 `cx` 值应该大约为 `79`，`cy` 值应该大约为 `326`。 它的 `r` 值应为 `5`。

```js
assert(
  Math.round($('circle').eq(9).attr('cx')) == '79' &&
    Math.round($('circle').eq(9).attr('cy')) == '326' &&
    $('circle').eq(9).attr('r') == '5'
);
```

应该有 10 个 `text` 元素。

```js
assert($('text').length == 10);
```

在使用比例尺后，第一个标签的 `x` 值应该大约为 `100`，`y` 值应该大约为 `368`。

```js
assert(
  Math.round($('text').eq(0).attr('x')) == '100' &&
    Math.round($('text').eq(0).attr('y')) == '368'
);
```

在使用比例尺后，第二个标签的 `x` 值应该大约为 `168`，`y` 值应该大约为 `181`。

```js
assert(
  Math.round($('text').eq(1).attr('x')) == '168' &&
    Math.round($('text').eq(1).attr('y')) == '181'
);
```

在使用比例尺后，第三个标签的 `x` 值应该大约为 `350`，`y` 值应该大约为 `329`。

```js
assert(
  Math.round($('text').eq(2).attr('x')) == '350' &&
    Math.round($('text').eq(2).attr('y')) == '329'
);
```

在使用比例尺后，第四个标签的 `x` 值应该大约为 `141`，`y` 值应该大约为 `60`。

```js
assert(
  Math.round($('text').eq(3).attr('x')) == '141' &&
    Math.round($('text').eq(3).attr('y')) == '60'
);
```

在使用比例尺后，第五个标签的 `x` 值应该大约为 `449`，`y` 值应该大约为 `237`。

```js
assert(
  Math.round($('text').eq(4).attr('x')) == '449' &&
    Math.round($('text').eq(4).attr('y')) == '237'
);
```

在使用比例尺后，第六个标签的 `x` 值应该大约为 `280`，`y` 值应该大约为 `306`。

```js
assert(
  Math.round($('text').eq(5).attr('x')) == '280' &&
    Math.round($('text').eq(5).attr('y')) == '306'
);
```

在使用比例尺后，第七个标签的 `x` 值应该大约为 `370`，`y` 值应该大约为 `351`。

```js
assert(
  Math.round($('text').eq(6).attr('x')) == '370' &&
    Math.round($('text').eq(6).attr('y')) == '351'
);
```

在使用比例尺后，第八个标签的 `x` 值应该大约为 `270`，`y` 值应该大约为 `132`。

```js
assert(
  Math.round($('text').eq(7).attr('x')) == '270' &&
    Math.round($('text').eq(7).attr('y')) == '132'
);
```

在使用比例尺后，第九个标签的 `x` 值应该大约为 `140`，`y` 值应该大约为 `144`。

```js
assert(
  Math.round($('text').eq(8).attr('x')) == '140' &&
    Math.round($('text').eq(8).attr('y')) == '144'
);
```

在使用比例尺后，第十个标签的 `x` 值应该大约为 `88`，`y` 值应该大约为 `326`。

```js
assert(
  Math.round($('text').eq(9).attr('x')) == '88' &&
    Math.round($('text').eq(9).attr('y')) == '326'
);
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
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>
```
