---
id: 587d7fa8367417b2b2512bca
title: 更改条形图的显示方式
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

上一个挑战创建了一个条形图，可以通过下面的格式调整来美化它：

1) 通过在 CSS 中为 `bar` class 添加 margin 属性，给每一个条形图之间添加空格，把它们分开。

2) 通过给每个值乘以一个数来缩放高度，增加高度，以更好地显示值的差异。

# --instructions--

首先，在 `style` 标签中给 `bar` class 增加值为 `2px` 的 `margin`。 然后，更改 `style()` 方法中的回调函数，使其返回原始数据值的 `10` 倍（加上 `px`）。

**注意：**每一个数值点乘以*相同的*常量值，仅仅改变比例。 这就像放大，它不会改变底层数据的含义。

# --hints--

第一个 `div` 应有一个 `120` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

第二个 `div` 应有一个 `310` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

第三个 `div` 应有一个 `220` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

第四个 `div` 应有一个 `170` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

第五个 `div` 应有一个 `250` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

第六个 `div` 应有一个 `180` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

第七个 `div` 应有一个 `290` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

第八个 `div` 应有一个 `140` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

第九个 `div` 应有一个 `90` 像素的 `height` 和一个 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
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
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
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
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
