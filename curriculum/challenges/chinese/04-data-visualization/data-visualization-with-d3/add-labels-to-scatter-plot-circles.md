---
id: 587d7fab367417b2b2512bd9
title: 向散点图的 Circles 添加标签
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

你可以为散点图中的点添加文本来创建标签。

目标是显示 `dataset` 中每个对象的第一个（`x`）和第二个（`y`）字段中通过逗号分隔的值。

The `text` nodes need `x` and `y` attributes to position it on the SVG. 在这个挑战中，`y` 值（决定高度）可以用和 `circle` 的 `cy` 属性相同的值， `x` 值可以比 `circle` 的 `cx` 值稍微大一些，这样标签才可见， 并且被放置在散点的右边。

# --instructions--

使用 `text` 元素标记散点图上的每个点。 标签的文本应该是用逗号和空格分隔的两个值。 例如，第一个点的标签是 `34, 78`。 设置 `x` 属性，使其比 `circle` 上的 `cx` 属性的值多 `5` 个单位。 设置 `y` 属性的方式与 `circle` 上的 `cy` 值相同。

# --hints--

应该有 10 个 `text` 元素。

```js
assert($('text').length == 10);
```

第一个标签的文本应为 `34, 78`， `x` 值应为 `39`，`y` 应为 `422`。

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

第二个标签的文本应为 `109, 280`，`x` 值应为`114`，`y` 值应为 `220`。

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

第三个标签的文本应为 `310, 120`，`x` 值应为 `315`，`y` 值应为 `380`。

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

第四个标签的文本应为 `79, 411`，`x` 值应为 `84`，`y` 值应为 `89`。

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

第五个标签的文本应为 `420, 220`，`x` 值应为 `425`，`y` 值应为 `280`。

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

第六个标签的文本应为 `233, 145`，`x` 值应为 `238`，`y` 值应为 `355`。

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

第七个标签的文本应为 `333, 96`，`x` 值应为 `338`，`y` 值应为 `404`。

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

第八个标签的文本应为 `222, 333`，`x` 值应为 `227`，`y` 值应为 `167`。

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

第九个标签的文本应为 `78, 320`，`x` 值应为 `83`，`y` 值应为 `180`。

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

第十个标签的文本应为 `21, 123`，`x` 值应为 `26`，`y` 值应为 `377`。

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
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
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
