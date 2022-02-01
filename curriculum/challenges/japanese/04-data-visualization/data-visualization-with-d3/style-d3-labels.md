---
id: 587d7faa367417b2b2512bd3
title: D3 ラベルのスタイルを作成する
challengeType: 6
forumTopicId: 301492
dashedName: style-d3-labels
---

# --description--

D3 メソッドは、バーのラベルにスタイルを追加することができます。 `fill` 属性は、 `text` ノードのテキストの色を設定します。 `style()` メソッドは、 `font-family` や `font-size` のような他のスタイルの CSS ルールを設定します。

# --instructions--

`text` 要素の `font-size` を `25px` に設定し、テキストの色を赤にしてください。

# --hints--

すべてのラベルの `fill` を赤色にする必要があります。

```js
assert($('text').css('fill') == 'rgb(255, 0, 0)');
```

すべてのラベルの `font-size` を `25` ピクセル にする必要があります。

```js
assert($('text').css('font-size') == '25px');
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .style("font-size", 25)
       .attr("fill", "red")
  </script>
</body>
```
