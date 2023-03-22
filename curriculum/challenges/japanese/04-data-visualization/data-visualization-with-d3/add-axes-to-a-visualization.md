---
id: 587d7fad367417b2b2512bdf
title: 視覚化に軸を追加する
challengeType: 6
forumTopicId: 301472
dashedName: add-axes-to-a-visualization
---

# --description--

散布図を改善するもう一つの方法は、x 軸と y 軸を追加することです。

D3 には、y 軸と x 軸のそれぞれをレンダリングするための 2 つのメソッド、`axisLeft()` と `axisBottom()` があります。 以前のチャレンジでの `xScale` を基にして x 軸を作成する例を示します。

```js
const xAxis = d3.axisBottom(xScale);
```

The next step is to render the axis on the SVG. これには、一般的な SVG コンポーネントである `g` 要素を使用できます。 `g` はグループを表します。 `rect`、`circle`、および `text` とは異なり、レンダリングされた軸は単なる直線です。 シンプルな形なので、`g` を使って作業できます。 The last step is to apply a `transform` attribute to position the axis on the SVG in the right place. Otherwise, the line would render along the border of the SVG and wouldn't be visible. SVG は各種の `transforms` をサポートしていますが、軸の配置には `translate` が必要です。 それが `g` 要素に適用されると、与えられた量だけグループ全体が移動します。 次に例を示します。

```js
const xAxis = d3.axisBottom(xScale);

svg.append("g")
   .attr("transform", "translate(0, " + (h - padding) + ")")
   .call(xAxis);
```

The above code places the x-axis at the bottom of the SVG. 次に、それが `call()` メソッドに引数として渡されます。 Y 軸も、`translate` 引数が `(x, 0)` の形式であること以外は同じように動作します。 `translate` は上の `attr()` メソッドの文字列なので、連結によって引数に変数値を含めることができます。

# --instructions--

散布図に x 軸が追加されました。 `axisLeft()` メソッドを使用して、`yAxis` という名前の変数に y 軸を作成してください。 次に、`g` 要素を使用して軸をレンダリングしてください。 `transform` 属性を使用して、軸をパディング単位分だけ右へ、`0` 単位分だけ下へ、必ず移動してください。 軸を `call()` することも忘れないでください。

# --hints--

`axisLeft()` メソッドを使用し、それに `yScale` を引数として渡す必要があります。

```js
assert(code.match(/\.axisLeft\(yScale\)/g));
```

Y 軸の `g` 要素には、軸を `(60, 0)` で変換するための `transform` 属性が必要です。

```js
assert(
  $('g')
    .eq(10)
    .attr('transform')
    .match(/translate\(60\s*?,\s*?0\)/g)
);
```

`yAxis` を呼び出す必要があります。

```js
assert(code.match(/\.call\(\s*yAxis\s*\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);
    // Add your code below this line
    const yAxis = undefined;
    // Add your code above this line

    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

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
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy",(d) => yScale(d[1]))
       .attr("r", (d) => 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + "," + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);


    svg.append("g")
       .attr("transform", "translate(0," + (h - padding) + ")")
       .call(xAxis);

    svg.append("g")
       .attr("transform", "translate(" + padding + ",0)")
       .call(yAxis)

  </script>
</body>
```
