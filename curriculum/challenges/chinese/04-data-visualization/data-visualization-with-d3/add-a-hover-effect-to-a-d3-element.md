---
id: 587d7faa367417b2b2512bd4
title: 给 D3 元素添加悬停效果
challengeType: 6
forumTopicId: 301469
dashedName: add-a-hover-effect-to-a-d3-element
---

# --description--

我们可以为用户的鼠标悬停行为添加高亮显示的效果。 到目前为止，矩形的样式应用了内置的 D3 和 SVG 方法，但是你也可以使用 CSS 来实现。

你可以使用 `attr()` 方法在 SVG 元素上设置 CSS class。 然后用 `:hover` 伪类为你新添加的 CSS 类设置鼠标悬停的效果。

# --instructions--

用 `attr()` 方法给所有的 `rect` 元素都添加 `bar` class。 当鼠标悬停在元素上时，它的 `fill` 将变为棕色。

# --hints--

`rect` 元素应该有 `bar` class。

```js
assert($('rect').attr('class').trim().split(/\s+/g).includes('bar'));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar:hover {
    fill: brown;
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);

  </script>
</body>
```

# --solutions--

```html
<style>
  .bar:hover {
    fill: brown;
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy")
       // Add your code below this line
       .attr('class', 'bar')
       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3);
  </script>
</body>
```
