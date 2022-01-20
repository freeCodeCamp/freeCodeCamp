---
id: 587d7fa8367417b2b2512bcd
title: セット内の各データポイントにバーを作成する
challengeType: 6
forumTopicId: 301482
dashedName: create-a-bar-for-each-data-point-in-the-set
---

# --description--

前回のチャレンジでは、バーを描くために `svg` 要素に長方形を 1 つだけ追加しました。 ここでは、`data()`、`enter()`、および SVG 図形についてこれまでに学んだ内容を組み合わせて、`dataset` 内の各データポイントに対して長方形を作成し追加します。

以前のチャレンジでは、`dataset` 内の各アイテムに対して `div` を作成し追加する方法について、次のようなフォーマットを示しました。

```js
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
```

`div` 要素の代わりに `rect` 要素を使うと、いくつかの点で作業が異なります。 `rect` 要素は `body` に直接追加するのではなく、 `svg` 要素に追加する必要があります。 また、各 `rect` を `svg` 領域内のどこに置くかを D3 に指示する必要があります。 バーの配置については次のチャレンジで説明します。

# --instructions--

`data()`、`enter()`、`append()` の各メソッドを使用して、`dataset` 内の各アイテムに対して `rect` を作成し追加してください。 すべてのバーが重なり合った状態で表示されますが、これは次のチャレンジで修正します。

# --hints--

ドキュメントには 9 個の `rect` 要素が必要です。

```js
assert($('rect').length == 9);
```

`data()` メソッドを使用する必要があります。

```js
assert(code.match(/\.data/g));
```

`enter()` メソッドを使用する必要があります。

```js
assert(code.match(/\.enter/g));
```

`append()` メソッドを使用する必要があります。

```js
assert(code.match(/\.append/g));
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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
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
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>
```
