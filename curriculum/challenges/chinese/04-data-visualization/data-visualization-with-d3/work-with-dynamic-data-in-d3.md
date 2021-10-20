---
id: 587d7fa7367417b2b2512bc5
title: 使用 D3 中的动态数据
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

最后两个挑战涉及到使用 D3 的 `data()` 和 `enter()` 方法来动态展示数据。 它们以数据集为参数，和 `append()` 方法一起使用，为数据集中的每一个元素对象创建一个 DOM 元素。

在之前的挑战中，你为 `dataset` 数组中的每一个对象创建了一个新的 `h2` 元素，但是它们的文本都是相同的 `New Title`。 这是因为你还没有使用和每个 `h2` 元素关联的数据。

`text()` 方法以字符串或者回调函数作为参数：

```js
selection.text((d) => d)
```

上面这个例子中的参数 `d` 指关联数据集的一个对象。

使用当前示例作为上下文，第一个 `h2` 元素绑定到 12，第二个 `h2` 元素绑定到 31，第三个 `h2` 元素绑定到 22，依此类推。

# --instructions--

修改 `text()` 方法，使每个 `h2` 元素显示 `dataset` 数组中的对应值，加上一个空格和字符串 `USD`。 例如，第一个标题应该为 `12 USD`。

# --hints--

第一个 `h2` 的文本为 `12 USD`。

```js
assert($('h2').eq(0).text() == '12 USD');
```

第二个 `h2` 的文本为 `31 USD`。

```js
assert($('h2').eq(1).text() == '31 USD');
```

第三个 `h2` 的文本为 `22 USD`。

```js
assert($('h2').eq(2).text() == '22 USD');
```

第四个 `h2` 的文本为 `17 USD`。

```js
assert($('h2').eq(3).text() == '17 USD');
```

第五个 `h2` 的文本为 `25 USD`。

```js
assert($('h2').eq(4).text() == '25 USD');
```

第六个 `h2` 的文本为 `18 USD`。

```js
assert($('h2').eq(5).text() == '18 USD');
```

第七个 `h2` 的文本为 `29 USD`。

```js
assert($('h2').eq(6).text() == '29 USD');
```

第八个 `h2` 的文本为 `14 USD`。

```js
assert($('h2').eq(7).text() == '14 USD');
```

第九个 `h2` 的文本为 `9 USD`。

```js
assert($('h2').eq(8).text() == '9 USD');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text("New Title");

      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`);

  </script>
</body>
```
