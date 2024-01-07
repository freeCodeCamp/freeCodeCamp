---
id: 587d7fa9367417b2b2512bce
title: 動態設置每個 Bar 的座標
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

上個挑戰在 `svg` 元素中爲 `dataset` 的每一個數據點創建並且添加了一個矩形，其中一個矩形表示一組， 但是它們相互重疊。

矩形的位置是由 `x` 和 `y` 屬性決定的。 它們告訴 D3 在 `svg` 區域的哪個位置開始繪製圖形。 上個挑戰將它們都設置爲 0，因此所有條形都在左上角。

對於條形圖，所有條形應該處於相同的垂直線上，也就是說所有條形的 `y` 值相同（爲 0）， 但是 `x` 值需要隨着增添新的條形而變化。 注意 `x` 值越大，圖形就越靠近右邊。 所以當遍歷 `dataset` 中的數組元素時，`x` 的值應該遞增。

D3 的 `attr()` 方法可接收一個回調函數來動態設置屬性。 這個回調函數有兩個參數，一個是數據點本身（通常是 `d`），另一個是該數據點在數組中的下標， 這個參數是可選的。 下面是其格式：

```js
selection.attr("property", (d, i) => {

})
```

值得注意的是，你不需要寫 `for` 循環或者用 `forEach()` 迭代數據集中的對象。 `data()` 方法會解析數據集，任何鏈接在 `data()` 後面的方法都會爲數據集中的每個對象運行一次。

# --instructions--

改變 `x` 屬性的回調函數，讓它返回下標乘以 30 的值。

**注意：**每組的寬爲 25，所以每次 `x` 增加 30，可在每組之間留出一些空隙。 在這個例子中任何比 25 大的數也同樣適用。

# --hints--

第一個 `rect` 的 `x` 值應該爲 `0`。

```js
assert($('rect').eq(0).attr('x') == '0');
```

第二個 `rect` 的 `x` 值應該爲 `30`。

```js
assert($('rect').eq(1).attr('x') == '30');
```

第三個 `rect` 的 `x` 值應該爲 `60`。

```js
assert($('rect').eq(2).attr('x') == '60');
```

第四個 `rect` 的 `x` 值應該爲 `90`。

```js
assert($('rect').eq(3).attr('x') == '90');
```

第五個 `rect` 的 `x` 值應該爲 `120`。

```js
assert($('rect').eq(4).attr('x') == '120');
```

第六個 `rect` 的 `x` 值應該爲 `150`。

```js
assert($('rect').eq(5).attr('x') == '150');
```

第七個 `rect` 的 `x` 值應該爲 `180`。

```js
assert($('rect').eq(6).attr('x') == '180');
```

第八個 `rect` 的 `x` 值應該爲 `210`。

```js
assert($('rect').eq(7).attr('x') == '210');
```

第九個 `rect` 的 `x` 值應該爲 `240`。

```js
assert($('rect').eq(8).attr('x') == '240');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
