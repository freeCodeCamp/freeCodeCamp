---
id: 587d7fa8367417b2b2512bcd
title: 为集合中的每个数据点创建一个数据条
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

上个挑战在 `svg` 中只添加了一个矩形来表示数据条。 接下来你将结合到目前为止所学的关于 `data()`、`enter()` 和 SVG 图形的知识，为 `dataset` 中的每一个数据点创建并且添加一个矩形。

之前的挑战展示了如何为 `dataset` 中的每个对象创建并添加一个 `div`：

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

操作 `rect` 元素和 `div` 元素有一些不同。 `rect` 元素必须添加在 `svg` 元素内，而不能直接添加在 `body` 内。 同时，你需要告诉 D3 将 `rect` 放在 `svg` 区域的哪个位置。 条形的放置会在下一个挑战中讲到。

# --instructions--

用 `data()`、`enter()`、`append()` 方法为 `dataset` 中的每一个对象创建并添加一个 `rect` 。 每个数据条都将直接显示在上一个数据条的上面，这一点将在下一个挑战中实现。

# --hints--

应该包含 9 个 `rect` 元素。

```js
assert($('rect').length == 9);
```

应该使用 `data()` 方法。

```js
assert(code.match(/\.data/g));
```

应该使用 `enter()` 方法。

```js
assert(code.match(/\.enter/g));
```

应该使用 `append()` 方法。

```js
assert(code.match(/\.append/g));
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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
