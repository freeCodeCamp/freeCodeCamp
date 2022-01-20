---
id: 587d7fa8367417b2b2512bcc
title: SVG で図形を表示する
challengeType: 6
forumTopicId: 301485
dashedName: display-shapes-with-svg
---

# --description--

前回のチャレンジでは、与えられた幅と高さで `svg` 要素を作成しました。これが表示されたのは、`style` タグ内でその要素に適用される `background-color` があったからです。 前回のコードでは、与えられた幅と高さのためのスペースを作りました。

次に行うことは、`svg` 領域に配置する図形の作成です。 SVG には、長方形や円など、サポートされている図形が数多くあります。 これらはデータを表示するために使用されます。 例えば、長方形 (`<rect>`) の SVG 図形で棒グラフのバーを作成できます。

`svg` 領域に図形を配置するときは、`x` 座標と `y` 座標に対応した位置を指定できます。 原点 (0, 0) は左上の隅にあります。 `x` が正の値であれば図形は原点から右へ移動し、`y` が正の値であれば図形は原点から下へ移動します。

前回のチャレンジで使用した 500 (幅) x 100 (高さ) の `svg` の中央に図形を置くには、`x` 座標を 250、`y` 座標を 50 に設定します。

SVG `rect` には 4 つの属性があります。 `x` 座標と `y` 座標は、`svg` 領域内で図形が置かれる位置を示します。 また、サイズを指定する `height` と `width` があります。

# --instructions--

`append()` を使用して `rect` 図形を `svg` に加え、その `width` 属性を `25`、`height` 属性を `100` に設定してください。 また、`rect` `x` 属性と `y` 属性をそれぞれ `0` に設定してください。

# --hints--

ドキュメントには 1 個の `rect` 要素が必要です。

```js
assert($('rect').length == 1);
```

`rect` 要素の `width` 属性を `25` に設定する必要があります。

```js
assert($('rect').attr('width') == '25');
```

`rect` 要素の `height` 属性を `100` に設定する必要があります。

```js
assert($('rect').attr('height') == '100');
```

`rect` 要素の `x` 属性を `0` に設定する必要があります。

```js
assert($('rect').attr('x') == '0');
```

`rect` 要素の `y` 属性を `0` に設定する必要があります。

```js
assert($('rect').attr('y') == '0');
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
                  .attr("height", h)
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
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>
```
