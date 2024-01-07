---
id: 587d7fa7367417b2b2512bc4
title: 使用 D3 中的数据
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

D3 是数据驱动的库。 可以使用 D3 的方法将数组形式的数据显示在页面上。 数据有多种格式，但这个挑战使用了一组简单的数字。

第一步是让 D3 知道数据。 `data()` 方法选择连接着数据的 DOM 元素， 数据集作为参数传递给该方法。

常见的方法是在文档中为数据集中的每一个数据创建一个元素。 为此，你可以使用 D3 的 `enter()` 方法。

当 `enter()` 和 `data()` 方法一起使用时，它把从页面中选择的元素和数据集中的元素作比较。 如果页面中选择的元素较少则创建缺少的元素。

以下是一个选择 `ul` 元素并根据添加的数组创建新的列表项的例子。

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

选择不存在的 li 元素似乎有些难以理解。 这段代码告诉 D3 先选择页面上的 `ul` 元素， 再选择所有的列表项，它将返回空。 然后 `data()` 方法接收数组作为参数，并运行三次后面的代码，每次对应数组中的一个对象。 `enter()` 方法发现页面中没有 `li` 元素，但是需要 3 个（每个对应 `dataset` 中的一个数据）。 新的 `li` 元素被追加到 `ul`，文本为 `New item`。

# --instructions--

选择 `body` 节点，然后选择所有的 `h2` 元素。 让 D3 为 `dataset` 数组中的每一个对象创建并添加 `h2` 标签。 `h2` 标签的文本为 `New Title`。 你应该使用 `data()` 和 `enter()` 方法。

# --hints--

文档应该有 9 个 `h2` 元素。

```js
assert($('h2').length == 9);
```

`h2` 元素的文本应为 `New Title`。 大小写和空格必须一致。

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

应该使用 `data()` 方法。

```js
assert(code.match(/\.data/g));
```

应该使用 `enter()` 方法。

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
