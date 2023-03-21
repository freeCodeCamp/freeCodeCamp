---
id: 587d7fab367417b2b2512bd7
title: 使用 SVG Circles 創建散點圖
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

散點圖是另一種形式的可視化。 它用圓圈來映射數據點，每個數據點有兩個值。 這兩個值和 `x` 和 `y` 軸相關聯，在可視化中用來給圓圈定位。

SVG 用 `circle` 標籤來創建圓形。 它和之前用來構建條形圖的 `rect` 非常相像。

# --instructions--

Use the `data()`, `enter()`, and `append()` methods to bind `dataset` to new `circle` elements that are appended to the SVG.

**注意：** 圓形並不可見，因爲我們還沒有設置它們的屬性。 我們會在下一個挑戰中設置屬性。

# --hints--

應該有 10 個 `circle` 元素。

```js
assert($('circle').length == 10);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       // Add your code below this line



       // Add your code above this line

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")

  </script>
</body>
```
