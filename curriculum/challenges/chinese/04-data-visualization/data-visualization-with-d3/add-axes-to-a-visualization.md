---
id: 587d7fad367417b2b2512bdf
title: 添加坐标轴到视图中
challengeType: 6
forumTopicId: 301472
---

# --description--

另一种改进散点图的方法是添加 x 轴和 y 轴。

D3 有两种方法来渲染 y 轴和 x 轴，分别是 `axisLeft()` 和 `axisBottom()`。下面是一个基于上个挑战中的 `xScale` 创建 x 轴的例子：

```js
const xAxis = d3.axisBottom(xScale);
```

下一步是在 SVG 画布上渲染 x 轴。为此，你可以使用一个 SVG 组件， `g` 元素，`g` 是英文中组(group)的缩写。

不同于 `rect`、`circle`、`text`，在渲染时，轴只是一条直线。因为它是一个简单的图形，所以可以用 `g` 。

最后一步是使用 `transform` 属性将轴放置在 SVG 画布的正确位置上。否则，轴将会沿着 SVG 画布的边缘渲染，从而不可见。

SVG 支持多种 `transform`，但是定位轴需要使用 `translate` 属性。当它应用在 `g` 元素上时，它根据给出的总量移动整组。下面是一个例子：

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

上部分代码将 x 轴放置在 SVG 画布的底端。然后 x 轴作为参数被传递给 `call` 方法。 除了 `translate` 的参数变成 (x,0) ，y 轴的定位也是一样的。因为 `translate` 是 `attr` 方法中的一个字符串，你可以在参数中使用字符串的连接将变量值包括进去。

# --instructions--

现在散点图有 x 轴了。用 `axisLeft` 方法创建 y 轴并赋值给 `yAxis` 变量，然后通过 `g` 元素渲染 y 轴。确保用 `transform` 属性将 y 轴向右平移 padding 个单位，向下平移 0 个单位。记得 `call()` y 轴。

# --hints--

你应该使用参数为 `yScale` 的 `axisLeft()` 方法。

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

y 轴的 `g`元素应该有一个`transform` 属性来将 y 轴平移（60，0）。

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

# --solutions--

