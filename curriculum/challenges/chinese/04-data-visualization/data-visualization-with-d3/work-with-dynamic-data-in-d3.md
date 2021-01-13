---
id: 587d7fa7367417b2b2512bc5
title: 使用 D3 中的动态数据
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

最后两个挑战涉及到使用 D3 的 `data()` 和 `enter()` 方法来动态展示数据。它们以数据集为参数，和 `append()` 方法一起使用，为数据集中的每一个元素对象创建一个 DOM 元素。

在之前的挑战中，你为 `dataset` 数组中的每一个对象创建了一个新的 `h2` 元素，但是它们的文本都是相同的 "New Title"。 这是因为你还没有使用和每个 `h2` 元素关联的数据。

`text()` 方法以字符串或者回调函数作为参数：

`selection.text((d) => d)`

上面这个例子中的参数 `d` 指关联数据集的一个对象。

以当前例子为例，第一个 `h2` 元素和 12 关联，第二个 `h2` 元素和 31 关联，第三个 `h2` 元素和 22 关联，以此类推。

# --instructions--

改变 `text()` 方法使得每个 `h2` 元素显示 `dataset` 数组中的对应值加上一个空格和 "USD"。例如，第一个标题应该为 "12 USD"。

# --hints--

第一个 <code>h2<code> 的文本应该为 '12 USD'。

```js
assert($('h2').eq(0).text() == '12 USD');
```

第二个 <code>h2<code> 的文本应该为 '31 USD'。

```js
assert($('h2').eq(1).text() == '31 USD');
```

第三个 <code>h2<code> 的文本应该为 '22 USD'。

```js
assert($('h2').eq(2).text() == '22 USD');
```

第四个 <code>h2<code> 的文本应该为 '17 USD'。

```js
assert($('h2').eq(3).text() == '17 USD');
```

第五个 <code>h2<code> 的文本应该为 '25 USD'。

```js
assert($('h2').eq(4).text() == '25 USD');
```

第六个 <code>h2<code> 的文本应该为 '18 USD'。

```js
assert($('h2').eq(5).text() == '18 USD');
```

第七个 <code>h2<code> 的文本应该为 '29 USD'。

```js
assert($('h2').eq(6).text() == '29 USD');
```

第八个 <code>h2<code> 的文本应该为 '14 USD'。

```js
assert($('h2').eq(7).text() == '14 USD');
```

第九个 <code>h2<code> 的文本应该为 '9 USD'。

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
