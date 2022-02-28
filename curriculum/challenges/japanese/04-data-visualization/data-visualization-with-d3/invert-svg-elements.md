---
id: 587d7fa9367417b2b2512bd0
title: SVG 要素を反転する
challengeType: 6
forumTopicId: 301488
dashedName: invert-svg-elements
---

# --description--

棒グラフが上下逆になっている、つまり反転していることに気付いたことでしょう。 原因は、SVG による (x, y) 座標の使い方にあります。

SVG では、座標の原点は左上の隅にあります。 `x` 座標が 0 の場合、SVG 領域の左端に図形が配置されます。 `y` 座標が 0 の場合、SVG 領域の上端に図形が配置されます。 `x` の値が大きいほど、長方形は右側に押し出されます。 `y` の値が大きいほど、長方形は下側に押し出されます。

バーを正しい方向で表示するには、`y` 座標の計算方法を変更する必要があります。 これには、バーの高さと SVG 領域の総高との両方を考慮する必要があります。

SVG 領域の高さは 100 です。 セット内にデータポイント 0 があり、SVG 領域の (最上部ではなく) 最下部からバーを描くとします。 これを行うには、 `y` 座標の値を 100 にする必要があります。 データポイントの値が 1 であれば、`y` 座標 100 でスタートして最下部にバーを設定します。 次に、バーの高さ 1 を考慮する必要があるので、最終的な `y` 座標は 99 になります。

この `y` 座標 (`y = heightOfSVG - heightOfBar`) により、バーが正しい方向で配置されます。

# --instructions--

バーが正しい方向で配置されるように、`y` 属性のコールバック関数を変更してください。 バーの `height` がデータ値 `d` の 3 倍であることに注意してください。

**注:** 一般に、`y = h - m * d` の関係があります (`m` はデータポイントを拡大縮小する定数)。

# --hints--

最初の `rect` は `y` 値を `64` にする必要があります。

```js
assert($('rect').eq(0).attr('y') == h - dataset[0] * 3);
```

2 番目の `rect` は `y` 値を `7` にする必要があります。

```js
assert($('rect').eq(1).attr('y') == h - dataset[1] * 3);
```

3 番目の `rect` は `y` 値を `34` にする必要があります。

```js
assert($('rect').eq(2).attr('y') == h - dataset[2] * 3);
```

4 番目の `rect` は `y` 値を `49` にする必要があります。

```js
assert($('rect').eq(3).attr('y') == h - dataset[3] * 3);
```

5 番目の `rect` は `y` 値を `25` にする必要があります。

```js
assert($('rect').eq(4).attr('y') == h - dataset[4] * 3);
```

6 番目の `rect` は `y` 値を `46` にする必要があります。

```js
assert($('rect').eq(5).attr('y') == h - dataset[5] * 3);
```

7 番目の `rect` は `y` 値を `13` にする必要があります。

```js
assert($('rect').eq(6).attr('y') == h - dataset[6] * 3);
```

8 番目の `rect` は `y` 値を `58` にする必要があります。

```js
assert($('rect').eq(7).attr('y') == h - dataset[7] * 3);
```

9 番目の `rect` は `y` 値を `73` にする必要があります。

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
