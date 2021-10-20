---
id: 587d7fa8367417b2b2512bcb
title: 瞭解 D3 中的 SVG
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> 是 <dfn>Scalable Vector Graphics</dfn> 的縮寫。

“scalable” 的意思是如果放大或縮小一個對象，它不會像素化。 不管是在小的移動手機屏幕上還是在大的電視顯示器上，它都會隨着顯示系統縮放。

SVG 用於製作常見的幾何圖形。 由於 D3 將數據映射成可視化表達，它用 SVG 來創建可視化的圖形。 網頁上的 SVG 圖形必須在 HTML 的 `svg` 標籤中。

當使用相對單位（例如 `vh`、`vw` 或者百分比）時，CSS 是可伸縮的。 但是在實現數據可視化的時候 SVG 更加的靈活。

# --instructions--

用 `append()` 給 `body` 加一個 `svg` 節點。 使用 `attr()` 或 `style()` 方法給它設置一個 `width` 屬性和一個 `height` 屬性，並分別將它們設置爲給定的常量 `w` 和給定的常量 `h`。 你可以在輸出中看見它，因爲在 `style` 標籤中它的 `background-color` 設置爲 pink。

**注意：**width 和 height `attr()` 沒有單位。 它們是用來定義縮放的——但無論怎麼縮放，元素的寬高比永遠是 5:1 。

# --hints--

文檔應該有 1 個 `svg` 元素。

```js
assert($('svg').length == 1);
```

`svg` 元素應有一個 `width` 屬性，值爲 `500`，或者在樣式中 width 值爲 `500px`。

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

`svg` 元素應有一個 `height` 屬性，值爲 `100`，或者在樣式中 height 值爲 `100px`。

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
