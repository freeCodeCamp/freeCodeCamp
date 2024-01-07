---
id: 587d7fa7367417b2b2512bc4
title: D3 でデータを操作する
challengeType: 6
forumTopicId: 301497
dashedName: work-with-data-in-d3
---

# --description--

D3 ライブラリはデータ駆動型アプローチに焦点を当てています。 データセットがあるとき、D3 のメソッドを適用してデータをページ上に表示することができます。 データには多くのフォーマットがありますが、このチャレンジでは単純な数字の配列を使用します。

最初のステップでは、D3 にデータを認識させます。 選択された DOM 要素に対して、`data()` メソッドを使用してそれらの要素にデータをアタッチします。 データセットは引数としてメソッドに渡されます。

一般的なワークフローパターンでは、セット内の各データに対してドキュメント内に新しい要素を作成します。 D3 には、この目的のための `enter()` メソッドがあります。

`enter()` メソッドは、`data()` と共に使用された場合、ページから選択された要素を調べ、セット内のデータアイテムの数と比較します。 要素の数がデータアイテムよりも少ない場合、不足している要素が作成されます。

次の例は、 `ul` 要素を選択し、配列内のエントリ数に基づいて新しいリストアイテムを作成します。

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

まだ存在しない要素を選択するというのは、分かりづらいかもしれません。 このコードは D3 に対し、最初にページ上の `ul` を選択するよう 指示しています。 次に、すべてのリストアイテムを選択します。これにより、空の選択範囲が返ります。 次に、`data()` メソッドはデータセットを調べ、配列内の各アイテムに対して 1 回ずつ、計 3 回、後続のコードを実行します。 `enter()` メソッドからはページ上に `li` 要素が見えませんが、このメソッドには 3 つ (`dataset` 内の各データに 1 つ) の要素が必要です。 新しい `li` 要素が `ul` に追加され、それは `New item` というテキストを持ちます。

# --instructions--

`body` ノードを選択した後、すべての `h2` 要素を選択してください。 `dataset` 配列内の各アイテムに対して `h2` タグを作成し追加するよう、D3 に指示してください。 `h2` 内のテキストを `New Title` にする必要があります。 `data()` メソッドと `enter()` メソッドを使用する必要があります。

# --hints--

ドキュメントには 9 個の `h2` 要素が必要です。

```js
assert($('h2').length == 9);
```

`h2` 要素内のテキストを `New Title` にする必要があります。 大文字とスペースの使い方が厳密に一致する必要があります。

```js
assert(
  $('h2')
    .text()
    .match(/New Title/g).length == 9
);
```

`data()` メソッドを使用する必要があります。

```js
assert(code.match(/\.data/g));
```

`enter()` メソッドを使用する必要があります。

```js
assert(code.match(/\.enter/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>
```
