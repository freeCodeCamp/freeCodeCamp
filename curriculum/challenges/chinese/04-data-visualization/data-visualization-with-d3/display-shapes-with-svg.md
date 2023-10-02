---
id: 587d7fa8367417b2b2512bcc
title: 用 SVG 显示形状
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

上个挑战用给定的宽和高创建了一个 `svg` 元素，因为在它的 `style` 标签中有 `background-color`，所以它是可见的。 这一段代码为给定的宽和高腾出空间。

下一步是在 `svg` 区域中创建图形。 SVG 支持多种图形，比如矩形和圆形， 并用它们来显示数据。 例如，在条形图中一个矩形（`<rect>`）SVG 图形可以创建一个组。

当把图形放入 `svg` 区域中时，你可以用 `x` 和 `y` 坐标来指定它的位置。 起始点 (0,0) 是在左上角。 `x` 正值将图形右移，`y` 正值将图形从原点下移

若要把一个图形放在上个挑战的 500（宽）x 100（高）的 `svg` 中心，可将 `x` 坐标设置为 250，`y` 坐标设置为 50。

SVG 的 `rect` 有四个属性。 `x` 和 `y` 坐标指定图形放在 `svg` 区域的位置， `height` 和 `width` 指定图形大小。

# --instructions--

用 `append()` 给 `svg` 添加一个 `width` 为 `25`、`height` 为 `100` 的 `rect` 形状。 同时，将 `rect` 的 `x` 和 `y` 都设置为 `0`。

# --hints--

文档应该有 1 个 `rect` 元素。

```js
assert($('rect').length == 1);
```

`rect` 元素的 `width` 应为 `25`。

```js
assert($('rect').attr('width') == '25');
```

`rect` 元素的 `height` 应为 `100`。

```js
assert($('rect').attr('height') == '100');
```

`rect` 元素的 `x` 值应为 `0`。

```js
assert($('rect').attr('x') == '0');
```

`rect` 元素的 `y` 值应为 `0`。

```js
assert($('rect').attr('y') == '0');
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
                  .attr("height", h)
                  // Add your code below this line



                  // Add your code above this line
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
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
