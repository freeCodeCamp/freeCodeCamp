---
id: 587d7fa9367417b2b2512bce
title: 各バーの座標を動的に設定する
challengeType: 6
forumTopicId: 301487
dashedName: dynamically-set-the-coordinates-for-each-bar
---

# --description--

前回のチャレンジでは、長方形を作成し、それを `dataset` 内の各ポイントの `svg` 要素に追加することでバーを描きました。 しかし残念ながら、すべてのバーが重なり合っていました。

長方形の配置は `x` 属性と `y` 属性で処理されます。 これらの属性は、`svg` 領域内のどこから図形を描き始めるかを D3 に指示します。 前回のチャレンジではそれぞれ 0 に設定されたので、すべてのバーが左上隅に配置されました。

棒グラフの場合、すべてのバーの垂直方向の位置がそろっている必要があります。つまり、`y` の値はすべてのバーで同じ値 (0) に固定されます。 一方、`x` の値は、新しいバーを追加する際に変更される必要があります。 `x` の値が大きいほどアイテムが右へ大きく移動するということを思い出してください。 `dataset` の配列要素を調べると、`x` の値が増えているはずです。

D3 の `attr()` メソッドは、その属性を動的に設定するコールバック関数を受け入れます。 コールバック関数は 2 つの引数をとります。一つはデータポイント自体 (通常は `d`)、もう一つは配列内におけるデータポイントのインデックスです。 インデックスを示す 2 番目の引数はオプションです。 フォーマットは次のとおりです。

```js
selection.attr("property", (d, i) => {

})
```

重要な注意点として、`for` ループを記述したり、`forEach()` を使用してデータセット内のアイテムを繰り返したりする必要はありません。 既に学んだように、`data()` メソッドはデータセットを解析し、`data()` の後にチェーンされるあらゆるメソッドがデータセット内の各アイテムに対して一度実行されます。

# --instructions--

インデックスの 30 倍が返るように、`x` 属性コールバック関数を変更してください。

**注:** 各バーの幅は 25 なので、`x` の値を 30 ずつ増やすとバーの間にスペースが追加されます。 この例では、25 より大きい値はいずれも有効です。

# --hints--

最初の `rect` は `x` 値を `0` にする必要があります。

```js
assert($('rect').eq(0).attr('x') == '0');
```

2 番目の `rect` は `x` 値を `30` にする必要があります。

```js
assert($('rect').eq(1).attr('x') == '30');
```

3 番目の `rect` は `x` 値を `60` にする必要があります。

```js
assert($('rect').eq(2).attr('x') == '60');
```

4 番目の `rect` は `x` 値を `90` にする必要があります。

```js
assert($('rect').eq(3).attr('x') == '90');
```

5 番目の `rect` は `x` 値を `120` にする必要があります。

```js
assert($('rect').eq(4).attr('x') == '120');
```

6 番目の `rect` は `x` 値を `150` にする必要があります。

```js
assert($('rect').eq(5).attr('x') == '150');
```

7 番目の `rect` は `x` 値を `180` にする必要があります。

```js
assert($('rect').eq(6).attr('x') == '180');
```

8 番目の `rect` は `x` 値を `210` にする必要があります。

```js
assert($('rect').eq(7).attr('x') == '210');
```

9 番目の `rect` は `x` 値を `240` にする必要があります。

```js
assert($('rect').eq(8).attr('x') == '240');
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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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
       .attr("x", (d, i) => {
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
