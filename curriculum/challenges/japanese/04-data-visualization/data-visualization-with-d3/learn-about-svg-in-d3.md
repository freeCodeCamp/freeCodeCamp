---
id: 587d7fa8367417b2b2512bcb
title: D3 の SVG について学ぶ
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> とは <dfn>Scalable Vector Graphics</dfn> (スケーラブル・ベクター・グラフィックス) の略称です。

ここで言う「スケーラブル」とは、オブジェクトをズームインまたはズームアウトしてもピクセル化されないことを意味します。 携帯電話の小さな画面であれ、大型テレビの画面であれ、ディスプレイシステムに合わせて画像が調整されます。

SVG は、一般的な幾何学的図形を作成するために使用されます。 データを視覚的な表現にマッピングする D3 は、SVG を使用して視覚化用の図形を作成します。 ウェブページの用 SVG 図形は、HTML の `svg` タグ内に位置する必要があります。

(`vh`、 `vw`、パーセンテージなどの) 相対単位をスタイルに使用すれば、 CSS でもスケーラブルに表現できます。しかし SVG を使用すれば、より柔軟にデータを可視化できます。

# --instructions--

`append()` を使用して `body` に `svg` ノードを追加してください。 そのノードに対し、与えられた `w` 定数に設定された `width` 属性と、与えられた `h` 定数に設定された `height` 属性を設定してください。それぞれ、`attr()` メソッドまたは `style()` メソッドを使用して行ってください。 これは出力結果を見れば確認できます。`style` タグ内で、ピンクの `background-color` が適用されているからです。

**注: ** `attr()` を使用する場合、幅と高さの属性には単位がありません。 これはスケーリングの基礎であり、ズームレベルに関係なく要素の幅と高さの比率は常に 5:1 です。

# --hints--

ドキュメントには 1 個の `svg` 要素が必要です。

```js
assert($('svg').length == 1);
```

`svg` 要素は、`width` 属性を `500` に設定するか、幅が `500px` になるようにスタイルを調整する必要があります。

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

`svg` 要素は、`height` 属性を `100` に設定するか、幅が `100px` になるようにスタイルを調整する必要があります。

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
