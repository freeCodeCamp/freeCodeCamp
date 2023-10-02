---
id: 587d7fab367417b2b2512bd9
title: 散布図の円にラベルを追加する
challengeType: 6
forumTopicId: 301477
dashedName: add-labels-to-scatter-plot-circles
---

# --description--

散布図の点のラベルを作成するために、テキストを追加することができます。

目標は、`dataset` 内の各アイテムの 1 つ目 (`x`) と 2 つ目 (`y`) のフィールドのカンマ区切り値を表示することです。

The `text` nodes need `x` and `y` attributes to position it on the SVG. このチャレンジでは、(高さを決定する) `y` 値には、`circle` が `cy` 属性に対して使用するものと同じ値を使用できます。 `x` 値は、ラベルが見えるように、`circle` の `cx` 値よりも若干大きくすることができます。 これにより、プロットされた点の右側にラベルが移動します。

# --instructions--

`text` 要素を使用して、散布図上の各点にラベルを付けてください。 ラベルのテキストは、1 つのカンマと 1 つのスペースで区切られた 2 つの値にする必要があります。 たとえば、最初の点のラベルは `34, 78` です。 `circle` 上の `cx` 属性に使用した値よりも `5` 単位大きくなるように、`x` 属性を設定してください。 `y` 属性を、`circle` の `cy` 値に使用したのと同じ方法で設定してください。

# --hints--

10 個の `text` 要素が必要です。

```js
assert($('text').length == 10);
```

最初のラベルはテキストを `34, 78` 、`x` 値を`39`、そして `y` 値を `422` にする必要があります。

```js
assert(
  $('text').eq(0).text() == '34, 78' &&
    $('text').eq(0).attr('x') == '39' &&
    $('text').eq(0).attr('y') == '422'
);
```

2 番目のラベルはテキストを `109, 280` 、`x` 値を `114`、そして `y` 値を `220` にする必要があります。

```js
assert(
  $('text').eq(1).text() == '109, 280' &&
    $('text').eq(1).attr('x') == '114' &&
    $('text').eq(1).attr('y') == '220'
);
```

3 番目のラベルはテキストを `310, 120` 、`x` 値を `315`、そして `y` 値を `380` にする必要があります。

```js
assert(
  $('text').eq(2).text() == '310, 120' &&
    $('text').eq(2).attr('x') == '315' &&
    $('text').eq(2).attr('y') == '380'
);
```

4 番目のラベルはテキストを `79, 411` 、`x` 値を `84`、そして `y` 値を `89` にする必要があります。

```js
assert(
  $('text').eq(3).text() == '79, 411' &&
    $('text').eq(3).attr('x') == '84' &&
    $('text').eq(3).attr('y') == '89'
);
```

5 番目のラベルはテキストを `420, 220` 、`x` 値を `425`、そして `y` 値を `280` にする必要があります。

```js
assert(
  $('text').eq(4).text() == '420, 220' &&
    $('text').eq(4).attr('x') == '425' &&
    $('text').eq(4).attr('y') == '280'
);
```

6 番目のラベルはテキストを `233, 145` 、`x` 値を `238`、そして `y` 値を `355` にする必要があります。

```js
assert(
  $('text').eq(5).text() == '233, 145' &&
    $('text').eq(5).attr('x') == '238' &&
    $('text').eq(5).attr('y') == '355'
);
```

7 番目のラベルはテキストを `333, 96` 、`x` 値を `338`、そして `y` 値を `404` にする必要があります。

```js
assert(
  $('text').eq(6).text() == '333, 96' &&
    $('text').eq(6).attr('x') == '338' &&
    $('text').eq(6).attr('y') == '404'
);
```

8 番目のラベルはテキストを `222, 333`、`x` 値を `227`、そして `y` 値を `167` にする必要があります。

```js
assert(
  $('text').eq(7).text() == '222, 333' &&
    $('text').eq(7).attr('x') == '227' &&
    $('text').eq(7).attr('y') == '167'
);
```

9 番目のラベルはテキストを `78, 320` 、`x` 値を `83`、そして `y` 値を `180` にする必要があります。

```js
assert(
  $('text').eq(8).text() == '78, 320' &&
    $('text').eq(8).attr('x') == '83' &&
    $('text').eq(8).attr('y') == '180'
);
```

10 番目のラベルはテキストを `21, 123` 、`x` 値を `26`、そして `y` 値を `377` にする必要があります。

```js
assert(
  $('text').eq(9).text() == '21, 123' &&
    $('text').eq(9).attr('x') == '26' &&
    $('text').eq(9).attr('y') == '377'
);
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
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
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
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))

  </script>
</body>
```
