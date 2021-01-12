---
id: 587d7fa7367417b2b2512bc8
title: 用 D3 添加 Class
challengeType: 6
forumTopicId: 301473
dashedName: add-classes-with-d3
---

# --description--

即使对小型 app 来说在 HTML 元素中大量使用内联样式表也十分难以管理。更方便的是给元素添加遵守 CSS 规则的类。D3 中的 `attr()` 方法可以给元素添加任何 HTML 属性，包括类名称。

`attr()` 方法和 `style()` 的使用方法一样。它以逗号分隔的键值对为参数使用回调函数。这里是一个给选中元素添加类名为 "container" 的例子：`selection.attr("class", "container");`

注意当 "container" 元素改变或者添加一个 class 时，"class" 参数会保持不变。

# --instructions--

在编辑器中添加 `attr()` 方法，给 `div` 元素添加类名 `bar`。

# --hints--

你的 `div`元素应该有一个`bar` 类。

```js
assert($('div').attr('class') == 'bar');
```

你应该使用 `attr()` 方法。

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
