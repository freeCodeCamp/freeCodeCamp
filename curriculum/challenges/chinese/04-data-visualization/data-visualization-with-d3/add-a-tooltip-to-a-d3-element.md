---
id: 587d7faa367417b2b2512bd6
title: 给 D3 元素添加工具提示
challengeType: 6
forumTopicId: 301470
dashedName: add-a-tooltip-to-a-d3-element
---

# --description--

当用户在一个对象上悬停时，提示框可以显示关于这个对象更多的信息。 有几种方法可以为可视化添加一个工具提示。 此挑战使用 SVG `title` 元素。

`title` 和 `text()` 方法一起给每组动态添加数据。

# --instructions--

在每个 `rect` 节点下附加 `title` 元素。 然后用回调函数调用 `text()` 方法使它的文本显示数据值。

# --hints--

你应该有 9 个 `title` 元素。

```js
assert($('title').length == 9);
```

第一个 `title` 元素的提示框文本应为 `12`。

```js
assert($('title').eq(0).text() == '12');
```

第二个 `title` 元素的提示框文本应为 `31`。

```js
assert($('title').eq(1).text() == '31');
```

第三个 `title` 元素的提示框文本应为 `22`。

```js
assert($('title').eq(2).text() == '22');
```

第四个 `title` 元素的提示框文本应为 `17`。

```js
assert($('title').eq(3).text() == '17');
```

第五个 `title` 元素的提示框文本应为 `25`。

```js
assert($('title').eq(4).text() == '25');
```

第六个 `title` 元素的提示框文本应为 `18`。

```js
assert($('title').eq(5).text() == '18');
```

第七个 `title` 元素的提示框文本应为 `29`。

```js
assert($('title').eq(6).text() == '29');
```

第八个 `title` 元素的提示框文本应为 `14`。

```js
assert($('title').eq(7).text() == '14');
```

第九个 `title` 元素的提示框文本应为 `9`。

```js
assert($('title').eq(8).text() == '9');
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)


    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>
```
