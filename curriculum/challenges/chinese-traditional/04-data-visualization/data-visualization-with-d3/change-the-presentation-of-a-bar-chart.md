---
id: 587d7fa8367417b2b2512bca
title: 更改條形圖的顯示方式
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

上一個挑戰創建了一個條形圖，可以通過下面的格式調整來美化它：

1) 通過在 CSS 中爲 `bar` class 添加 margin 屬性，給每一個條形圖之間添加空格，把它們分開。

2) 通過給每個值乘以一個數來縮放高度，增加高度，以更好地顯示值的差異。

# --instructions--

首先，在 `style` 標籤中給 `bar` class 增加值爲 `2px` 的 `margin`。 然後，更改 `style()` 方法中的回調函數，使其返回原始數據值的 `10` 倍（加上 `px`）。

**注意：**每一個數值點乘以*相同的*常量值，僅僅改變比例。 這就像放大，它不會改變底層數據的含義。

# --hints--

第一個 `div` 應有一個 `120` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

第二個 `div` 應有一個 `310` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

第三個 `div` 應有一個 `220` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

第四個 `div` 應有一個 `170` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

第五個 `div` 應有一個 `250` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

第六個 `div` 應有一個 `180` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

第七個 `div` 應有一個 `290` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

第八個 `div` 應有一個 `140` 像素的 `height` 和一個 `2` 像素的 `margin`。

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

第九個 `div` 應有一個 `90` 像素的 `height` 和一個 `2` 像素的 `margin`。

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
