---
id: 587d7fab367417b2b2512bd7
title: SVG 円で散布図を作成する
challengeType: 6
forumTopicId: 301484
dashedName: create-a-scatterplot-with-svg-circles
---

# --description--

散布図もデータ可視化の一種です。 通常、円を使用してデータポイントをマッピングし、それぞれの円が 2 つの値を持っています。 これらの値は `x` 軸と `y` 軸に結び付いており、視覚化において円の配置に使用されます。

SVG には円形を作成するための `circle` タグがあります。 このタグは、棒グラフに使用した `rect` 要素とよく似た働きをします。

# --instructions--

Use the `data()`, `enter()`, and `append()` methods to bind `dataset` to new `circle` elements that are appended to the SVG.

**注:** まだ属性を設定していないため、円は表示されません。 次のチャレンジでそれを行います。

# --hints--

10 個の `circle` 要素が必要です。

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
