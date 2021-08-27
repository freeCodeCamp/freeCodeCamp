---
id: 587d7fa9367417b2b2512bd1
title: 更改 SVG 元素的顏色
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

所有條形圖的位置都是正確的，但是它們都是一樣的黑色。 SVG 可以改變條形圖的顏色。

在 SVG 中， `rect` 圖形用 `fill` 屬性着色。 它支持十六進制代碼、顏色名稱、rgb 值以及更復雜的選項，比如漸變和透明。

# --instructions--

添加 `attr()` 方法，將所有條形圖的 `fill` 設置爲海軍藍。

# --hints--

所有條形圖的 `fill` 顏色都應該是 navy（海軍藍）。

```js
assert($('rect').css('fill') == 'rgb(0, 0, 128)');
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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

  </script>
</body>
```
