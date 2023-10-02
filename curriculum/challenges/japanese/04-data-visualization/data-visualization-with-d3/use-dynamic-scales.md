---
id: 587d7fac367417b2b2512bdd
title: 動的スケールを使用する
challengeType: 6
forumTopicId: 301495
dashedName: use-dynamic-scales
---

# --description--

D3 の `min()` メソッドと `max()` メソッドは、スケールを設定する際に便利です。

複雑なデータセットが与えられた場合、優先事項の一つは、可視化されたものが SVG コンテナーの幅と高さに合うようにスケールを設定することです。 You want all the data plotted inside the SVG so it's visible on the web page.

下の例は、散布図データの x 軸スケールを設定します。 `domain()` メソッドは、プロットされる生データ値に関する情報をスケールに渡します。 `range()` メソッドは、ウェブページ上で可視化に使用される実際のスペースに関する情報をスケールに提供します。

この例では、ドメインはセット内の 0 から最大値までです。 配列内の x 値に基づいて、コールバック関数で `max()` メソッドを使用します。 The range uses the SVG's width (`w`), but it includes some padding, too. This puts space between the scatter plot dots and the edge of the SVG.

```js
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

const padding = 30;
const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, (d) => d[0])])
  .range([padding, w - padding]);
```

最初はパディングというものが分かりづらいかもしれません。 Picture the x-axis as a horizontal line from 0 to 500 (the width value for the SVG). `range()` メソッドにパディングを含めると、プロットはその線に沿って (0 ではなく) 30 から開始し、(500 ではなく) 470 で終了します。

# --instructions--

`yScale` 変数を使用して、線形の y 軸スケールを作成してください。 ドメインの開始点を 0 に、終了点をセット内の `y` の最大値にする必要があります。 レンジには SVG の高さ (`h`) を使用し、パディングを含める必要があります。

**注:** プロットを正しい方向に保つことを忘れないでください。 Y 座標のレンジを指定する際は、(高さからパディングを引いた) 大きい方の値が第 1 引数、小さい方の値が第 2 引数になります。

# --hints--

`h2` 内のテキストを `30` にする必要があります。

```js
assert(output == 30 && $('h2').text() == '30');
```

yScale の `domain()` は `[0, 411]` と等しくする必要があります。

```js
assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
```

yScale の `range()` は `[470, 30]` と等しくする必要があります。

```js
assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));
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

    // Padding between the SVG boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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


    const padding = 30;

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);


    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);


    const output = yScale(411);
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
