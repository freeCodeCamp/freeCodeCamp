---
id: 587d7fa8367417b2b2512bc9
title: 動態更新元素的高度
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

之前的挑戰包括如何從數組中顯示數據和如何添加 CSS 類。 將這些課程的內容結合起來，你就能創建出一個簡單的條形圖， 只需兩步：

1) 爲每一個數組中的數據點都創建一個 `div`

2) 爲每個 `div` 動態分配高度值，在 `style()` 方法中使用回調函數將高度值設置爲數據大小

回想使用回調函數設置樣式的格式：

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

將 `style()` 方法添加到編輯器中的代碼中，以設置每個元素的 `height` 屬性。 使用回調函數返回數據點的值，加上字符串 `px`。

# --hints--

第一個 `div` 的 `height` 值應爲 `12` 像素。

```js
assert($('div').eq(0)[0].style.height === '12px');
```

第二個 `div` 的 `height` 值應爲 `31` 像素。

```js
assert($('div').eq(1)[0].style.height === '31px');
```

第三個 `div` 的 `height` 值應爲 `22` 像素。

```js
assert($('div').eq(2)[0].style.height === '22px');
```

第四個 `div` 的 `height` 值應爲 `17` 像素。

```js
assert($('div').eq(3)[0].style.height === '17px');
```

第五個 `div` 的 `height` 值應爲 `25` 像素。

```js
assert($('div').eq(4)[0].style.height === '25px');
```

第六個 `div` 的 `height` 值應爲 `18` 像素。

```js
assert($('div').eq(5)[0].style.height === '18px');
```

第七個 `div` 的 `height` 值應爲 `29` 像素。

```js
assert($('div').eq(6)[0].style.height === '29px');
```

第八個 `div` 的 `height` 值應爲 `14` 像素。

```js
assert($('div').eq(7)[0].style.height === '14px');
```

第九個 `div` 的 `height` 值應爲 `9` 像素。

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
