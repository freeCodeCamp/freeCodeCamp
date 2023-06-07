---
id: 587d7fab367417b2b2512bd8
title: 円要素に属性を追加する
challengeType: 6
forumTopicId: 301471
dashedName: add-attributes-to-the-circle-elements
---

# --description--

The last challenge created the `circle` elements for each point in the `dataset`, and appended them to the SVG. しかし D3 でこれらを正しく表示するには、各 `circle` の位置とサイズに関する詳細情報が必要です。

SVG の `circle` には主要な 3 つの属性があります。 `cx` と `cy` 属性は座標です。 They tell D3 where to position the *center* of the shape on the SVG. 半径 (`r` 属性) は、`circle` の大きさを指定します。

Just like the `rect` `y` coordinate, the `cy` attribute for a `circle` is measured from the top of the SVG, not from the bottom.

3 つの属性はすべてコールバック関数を使用して動的に値を設定できます。 留意点として、`data(dataset)` の後にチェーンされたすべてのメソッドは、`dataset` 内のアイテムごとに 1 回実行されます。 コールバック関数の `d` パラメータは、それぞれの点の配列である `dataset` 内の現在のアイテムを参照します。 `d[0]` のような角括弧表記を使用して、配列内の値にアクセスします。

# --instructions--

`cx`、`cy`、および `r` 属性を `circle` 要素に追加してください。 `cx` の値は、`dataset` 内の各アイテムに対する配列の最初の数でなければなりません。 `cy` の値は配列の 2 番目の数値を基にする必要がありますが、チャートを逆さではなく正しい方向で表示してください。 すべての円の `r` の値を `5` にする必要があります。

# --hints--

10 個の `circle` 要素が必要です。

```js
assert($('circle').length == 10);
```

最初の `circle` 要素には `cx` 値 `34`、`cy` 値 `422`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(0).attr('cx') == '34' &&
    $('circle').eq(0).attr('cy') == '422' &&
    $('circle').eq(0).attr('r') == '5'
);
```

2 番目の `circle` 要素には `cx` 値 `109`、`cy` 値 `220`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(1).attr('cx') == '109' &&
    $('circle').eq(1).attr('cy') == '220' &&
    $('circle').eq(1).attr('r') == '5'
);
```

3 番目の `circle` 要素には `cx` 値 `310`、`cy` 値 `380`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(2).attr('cx') == '310' &&
    $('circle').eq(2).attr('cy') == '380' &&
    $('circle').eq(2).attr('r') == '5'
);
```

4 番目の `circle` 要素には `cx` 値 `79`、`cy` 値 `89`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(3).attr('cx') == '79' &&
    $('circle').eq(3).attr('cy') == '89' &&
    $('circle').eq(3).attr('r') == '5'
);
```

5 番目の `circle` 要素には `cx` 値 `420`、`cy` 値 `280`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(4).attr('cx') == '420' &&
    $('circle').eq(4).attr('cy') == '280' &&
    $('circle').eq(4).attr('r') == '5'
);
```

6 番目の `circle` 要素には `cx` 値 `233`、`cy` 値 `355`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(5).attr('cx') == '233' &&
    $('circle').eq(5).attr('cy') == '355' &&
    $('circle').eq(5).attr('r') == '5'
);
```

7 番目の `circle` 要素には `cx` 値 `333`、`cy` 値 `404`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(6).attr('cx') == '333' &&
    $('circle').eq(6).attr('cy') == '404' &&
    $('circle').eq(6).attr('r') == '5'
);
```

8 番目の `circle` 要素には `cx` 値 `222`、`cy` 値 `167`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(7).attr('cx') == '222' &&
    $('circle').eq(7).attr('cy') == '167' &&
    $('circle').eq(7).attr('r') == '5'
);
```

9 番目の `circle` 要素には `cx` 値 `78`、`cy` 値 `180`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(8).attr('cx') == '78' &&
    $('circle').eq(8).attr('cy') == '180' &&
    $('circle').eq(8).attr('r') == '5'
);
```

10 番目の `circle` 要素には `cx` 値 `21`、`cy` 値 `377`、`r` 値 `5` が必要です。

```js
assert(
  $('circle').eq(9).attr('cx') == '21' &&
    $('circle').eq(9).attr('cy') == '377' &&
    $('circle').eq(9).attr('r') == '5'
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
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)

  </script>
</body>
```
