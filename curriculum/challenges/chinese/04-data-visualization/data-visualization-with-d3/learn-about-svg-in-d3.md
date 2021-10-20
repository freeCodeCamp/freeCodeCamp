---
id: 587d7fa8367417b2b2512bcb
title: 了解 D3 中的 SVG
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> 是 <dfn>Scalable Vector Graphics</dfn> 的缩写。

“scalable” 的意思是如果放大或缩小一个对象，它不会像素化。 不管是在小的移动手机屏幕上还是在大的电视显示器上，它都会随着显示系统缩放。

SVG 用于制作常见的几何图形。 由于 D3 将数据映射成可视化表达，它用 SVG 来创建可视化的图形。 网页上的 SVG 图形必须在 HTML 的 `svg` 标签中。

当使用相对单位（例如 `vh`、`vw` 或者百分比）时，CSS 是可伸缩的。 但是在实现数据可视化的时候 SVG 更加的灵活。

# --instructions--

用 `append()` 给 `body` 加一个 `svg` 节点。 使用 `attr()` 或 `style()` 方法给它设置一个 `width` 属性和一个 `height` 属性，并分别将它们设置为给定的常量 `w` 和给定的常量 `h`。 你可以在输出中看见它，因为在 `style` 标签中它的 `background-color` 设置为 pink。

**注意：**width 和 height `attr()` 没有单位。 它们是用来定义缩放的——但无论怎么缩放，元素的宽高比永远是 5:1 。

# --hints--

文档应该有 1 个 `svg` 元素。

```js
assert($('svg').length == 1);
```

`svg` 元素应有一个 `width` 属性，值为 `500`，或者在样式中 width 值为 `500px`。

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

`svg` 元素应有一个 `height` 属性，值为 `100`，或者在样式中 height 值为 `100px`。

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
