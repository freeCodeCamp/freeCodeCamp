---
id: 587d7fa9367417b2b2512bd0
title: 反转 SVG 元素
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

你可能已经注意到了常见的条形图像是把这个翻转或者颠倒过来。 这是因为 SVG 的 (x, y) 坐标有些特别。

在 SVG 中，坐标轴的原点在左上角。 `x` 坐标为 0 将图形放在 SVG 区域的左边缘， `y` 坐标为 0 将图形放在 SVG 区域的上边缘。 `x` 值增大矩形将向右移动， `y` 值增大矩形将向下移动。

为了使条形图向上，需要改变 `y` 坐标计算的方式。 这需要计算条形的高度和 SVG 区域的总高度。

SVG 区域的高度为 100。 如果在集合中一个数据点的值为 0，那么条形将从 SVG 区域的最底端开始（而不是顶端）。 为此，`y` 坐标的值应为 100。 如果数据点的值为 1，你将从 `y` 坐标为 100 开始来将这个条形设置在底端， 然后需要考虑该条形的高度为 1，所以最终的 `y` 坐标将是 99。

`y` 坐标为 `y = heightOfSVG - heightOfBar` 会将条形图向上放置。

# --instructions--

改变 `y` 属性的回调函数，让条形图向上放置。 `height` 的值是 3 倍 `d` 的值。

**注意：**通常，关系是 `y = h - m * d`，其中 `m` 是缩放数据点的常数。

# --hints--

第一个 `rect` 的 `y` 值应该为 `64`。

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

第二个 `rect` 的 `y` 值应该为 `7`。

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

第三个 `rect` 的 `y` 值应该为 `34`。

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

第四个 `rect` 的 `y` 值应该为 `49`。

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

第五个 `rect` 的 `y` 值应该为 `25`。

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

第六个 `rect` 的 `y` 值应该为 `46`。

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

第七个 `rect` 的 `y` 值应该为 `13`。

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

第八个 `rect` 的 `y` 值应该为 `58`。

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

第九个 `rect` 的 `y` 值应该为 `73`。

```js
assert($('rect').eq(8).attr('y') == h - dataset[8] * 3);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```
