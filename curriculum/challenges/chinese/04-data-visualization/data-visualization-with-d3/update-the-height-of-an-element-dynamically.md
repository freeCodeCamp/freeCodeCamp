---
id: 587d7fa8367417b2b2512bc9
title: 动态更新元素的高度
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

之前的挑战包括如何从数组中显示数据和如何添加 CSS 类。 将这些课程的内容结合起来，你就能创建出一个简单的条形图， 只需两步：

1) 为每一个数组中的数据点都创建一个 `div`

2) 为每个 `div` 动态分配高度值，在 `style()` 方法中使用回调函数将高度值设置为数据大小

回想使用回调函数设置样式的格式：

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

将 `style()` 方法添加到编辑器中的代码中，以设置每个元素的 `height` 属性。 使用回调函数返回数据点的值，加上字符串 `px`。

# --hints--

第一个 `div` 的 `height` 值应为 `12` 像素。

```js
assert($('div').eq(0)[0].style.height === '12px');
```

第二个 `div` 的 `height` 值应为 `31` 像素。

```js
assert($('div').eq(1)[0].style.height === '31px');
```

第三个 `div` 的 `height` 值应为 `22` 像素。

```js
assert($('div').eq(2)[0].style.height === '22px');
```

第四个 `div` 的 `height` 值应为 `17` 像素。

```js
assert($('div').eq(3)[0].style.height === '17px');
```

第五个 `div` 的 `height` 值应为 `25` 像素。

```js
assert($('div').eq(4)[0].style.height === '25px');
```

第六个 `div` 的 `height` 值应为 `18` 像素。

```js
assert($('div').eq(5)[0].style.height === '18px');
```

第七个 `div` 的 `height` 值应为 `29` 像素。

```js
assert($('div').eq(6)[0].style.height === '29px');
```

第八个 `div` 的 `height` 值应为 `14` 像素。

```js
assert($('div').eq(7)[0].style.height === '14px');
```

第九个 `div` 的 `height` 值应为 `9` 像素。

```js
assert($('div').eq(8)[0].style.height === '9px');
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
      .attr("class", "bar")
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
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
```
