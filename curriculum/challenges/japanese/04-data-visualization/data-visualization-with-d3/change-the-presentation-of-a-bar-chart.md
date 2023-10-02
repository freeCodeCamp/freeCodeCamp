---
id: 587d7fa8367417b2b2512bca
title: 棒グラフの外観を変更する
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

前回のチャレンジで棒グラフを作成しましたが、以下のフォーマット変更によりグラフが改善される可能性があります。

1) 各バーの間にスペースを追加して、バーを視覚的に分離します。これを行うには、`bar` クラスの CSS にマージンを追加します。

2) バーの高さを増すことで、値の違いを分かりやすくします。これを行うには、値に数値を乗じて高さを調整します。

# --instructions--

まず、`style` タグ内の `bar` クラスに `2px` の `margin` を追加してください。 次に、`style()` メソッド内のコールバック関数を変更して、元のデータ値 (`px` を足したもの) の `10` 倍の値が返るようにしてください。

**注:** 各データポイントを *same* 定数で乗算すると、スケールのみが変更されます。 これはズームインするようなもので、基になっているデータの意味は変わりません。

# --hints--

最初の `div` では、`height` は `120` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

2 番目の `div` では、`height` は `310` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

3 番目の `div` では、`height` は `220` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

4 番目の `div` では、`height` は `170` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

5 番目の `div` では、`height` は `250` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

6 番目の `div` では、`height` は `180` ピクセル、 `margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

7 番目の `div` では、`height` は `290` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

8 番目の `div` では、`height` は `140` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

9 番目の `div` では、`height` は `90` ピクセル、`margin` は `2` ピクセルであることが必要です。

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */


    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
