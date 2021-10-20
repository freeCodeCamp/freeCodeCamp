---
id: 587d7fa7367417b2b2512bc6
title: 给元素添加内联样式
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3允许你使用 `style()` 方法在动态元素上添加内联 CSS 样式。

`style()` 方法以用逗号分隔的键值对作为参数。 这里是一个将选中文本的颜色设为蓝色的例子：

```js
selection.style("color","blue");
```

# --instructions--

将 `style()` 方法添加到编辑器中的代码中，使所有显示的文本都具有 `verdana` 的 `font-family` 。

# --hints--

`h2` 元素的 `font-family` 应为 `verdana`。

```js
assert($('h2').css('font-family') == 'verdana');
```

你应该使用 `style()` 方法。

```js
assert(code.match(/\.style/g));
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
      .style("font-family", "verdana")

  </script>
</body>
```
