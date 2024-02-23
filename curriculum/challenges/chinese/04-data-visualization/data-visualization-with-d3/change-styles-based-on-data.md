---
id: 587d7fa7367417b2b2512bc7
title: 根据数据更改样式
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

D3 是关于可视化和展示数据的。 如果你想基于数据来改变元素的样式， 例如，你想将值小于 20 的数据点设置为蓝色，其余设置为红色。 你可以在 `style()` 方法中使用包含条件逻辑的回调函数。 回调函数以 `d` 作为参数来表示一个数据点：

```js
selection.style("color", (d) => {

});
```

`style()` 方法不仅仅可以设置 `color`——它也适用于其他 CSS 属性。

# --instructions--

在编辑器中添加 `style()` 方法，根据条件设置 `h2` 元素的 `color` 属性。 写一个回调函数，如果数据值小于 20，则返回红色（red），否则返回绿色（green）。

**注意：** 你可以使用 if-else 逻辑或者三元操作符。

# --hints--

第一个 `h2` 的 `color` 应该为 red。

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

第二个 `h2` 的 `color` 应该为 green。

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

第三个 `h2` 的 `color` 应该为 green。

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

第四个 `h2` 的 `color` 应该为 red。

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

第五个 `h2` 的 `color` 应该为 green。

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

第六个 `h2` 的 `color` 应该为 red。

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

第七个 `h2` 的 `color` 应该为 green。

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

第八个 `h2` 的 `color` 应该为 red。

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

第九个 `h2` 的 `color` 应该为 red。

```js
assert($('h2').eq(8).css('color') == 'rgb(255, 0, 0)');
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
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
