---
id: 587d7fa9367417b2b2512bd1
title: SVG 要素の色を変更する
challengeType: 6
forumTopicId: 301480
dashedName: change-the-color-of-an-svg-element
---

# --description--

バーは正しい位置にありますが、すべて同じ黒色です。 SVG にはバーの色を変更する方法があります。

SVG では、`rect` 図形は `fill` 属性で色付けされます。 16 進コード、色名、rgb 値、さらにはグラデーションや透過性などの複雑なオプションもサポートしています。

# --instructions--

`attr()` メソッドを追加して、すべてのバーの `fill` をネイビー色に設定してください。

# --hints--

すべてのバーの `fill` をネイビー色にする必要があります。

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
