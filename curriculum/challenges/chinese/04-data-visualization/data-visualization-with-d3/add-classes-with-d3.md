---
id: 587d7fa7367417b2b2512bc8
title: 用 D3 添加 Class
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

即使对小型 app 来说，在 HTML 元素中大量使用内联样式也十分难以管理。 给元素添加类，并使用 CSS 规则给类添加样式会更加方便。 D3 中的 `attr()` 方法可以给元素添加任何 HTML 属性，包括 class 名称。

`attr()` 方法和 `style()` 的使用方法一样。 它使用逗号分隔值，并且可以使用回调函数。 下面是给选中元素添加 `container` class 的例子：

```js
selection.attr("class", "container");
```

请注意，当你需要添加 class 时，`class` 参数保持不变，只有 `container` 参数会发生变化。

# --instructions--

将 `attr()` 方法添加到编辑器中的代码中，并在 `div` 元素上添加一个 `bar` 类。

# --hints--

`div` 元素应该一个 `bar` class。

```js
assert($('div').attr('class').trim().split(/\s+/g).includes('bar'));
```

应该使用 `attr()` 方法。

```js
assert(code.match(/\.attr/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```
