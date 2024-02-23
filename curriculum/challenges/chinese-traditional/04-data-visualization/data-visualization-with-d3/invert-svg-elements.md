---
id: 587d7fa9367417b2b2512bd0
title: 反轉 SVG 元素
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

你可能已經注意到了常見的條形圖像是把這個翻轉或者顛倒過來。 這是因爲 SVG 的 (x, y) 座標有些特別。

在 SVG 中，座標軸的原點在左上角。 `x` 座標爲 0 將圖形放在 SVG 區域的左邊緣， `y` 座標爲 0 將圖形放在 SVG 區域的上邊緣。 `x` 值增大矩形將向右移動， `y` 值增大矩形將向下移動。

爲了使條形圖向上，需要改變 `y` 座標計算的方式。 這需要計算條形的高度和 SVG 區域的總高度。

SVG 區域的高度爲 100。 如果在集合中一個數據點的值爲 0，那麼條形將從 SVG 區域的最底端開始（而不是頂端）。 爲此，`y` 座標的值應爲 100。 如果數據點的值爲 1，你將從 `y` 座標爲 100 開始來將這個條形設置在底端， 然後需要考慮該條形的高度爲 1，所以最終的 `y` 座標將是 99。

`y` 座標爲 `y = heightOfSVG - heightOfBar` 會將條形圖向上放置。

# --instructions--

改變 `y` 屬性的回調函數，讓條形圖向上放置。 `height` 的值是 3 倍 `d` 的值。

**注意：**通常，關係是 `y = h - m * d`，其中 `m` 是縮放數據點的常數。

# --hints--

第一個 `rect` 的 `y` 值應該爲 `64`。

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

第二個 `rect` 的 `y` 值應該爲 `7`。

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

第三個 `rect` 的 `y` 值應該爲 `34`。

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

第四個 `rect` 的 `y` 值應該爲 `49`。

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

第五個 `rect` 的 `y` 值應該爲 `25`。

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

第六個 `rect` 的 `y` 值應該爲 `46`。

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

第七個 `rect` 的 `y` 值應該爲 `13`。

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

第八個 `rect` 的 `y` 值應該爲 `58`。

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

第九個 `rect` 的 `y` 值應該爲 `73`。

```js
assert($('rect').eq(8).attr('y') == h - dataset[8] * 3);
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>
```
