---
id: 587d7fa6367417b2b2512bc2
title: D3 でドキュメント要素を追加する
challengeType: 6
forumTopicId: 301474
dashedName: add-document-elements-with-d3
---

# --description--

D3 には、ドキュメント内の要素を追加および変更するためのメソッドがいくつか用意されています。

`select()` メソッドはドキュメントから 1 つの要素を選択します。 このメソッドは、取得したい要素の名前に対する引数を取り、その名前と一致するドキュメント内の最初の要素に対する HTML ノードを返します。 次に例を示します。

```js
const anchor = d3.select("a");
```

上の例では、ページ上で最初のアンカータグを見つけ、それに対する HTML ノードを変数 `anchor` に保存します。 この選択範囲は他のメソッドでも使用できます。 この例の `d3` 部分は D3 オブジェクトへの参照であり、このようにして D3 メソッドにアクセスします。

他の 2 つの便利なメソッドは `append()` と `text()` です。

`append()` メソッドは、ドキュメントに追加したい要素の引数を取ります。 選択されたアイテムに HTML ノードを追加し、そのノードを参照するハンドルを返します。

`text()` メソッドは、選択されたノードのテキストを設定するか、現在のテキストを取得します。 値を設定するには、メソッドの括弧内の引数として文字列を渡します。

下の例では、順序なしリストを選択し、リストアイテムを追加し、テキストを追加しています。

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 では、ピリオドを使用して複数のメソッドをチェーンすると、多数のアクションを連続して実行できます。

# --instructions--

`select` メソッドを使用して、ドキュメント内の `body` タグを選択してください。 次に、`h1` タグを `append` し、テキスト "`Learning D3`" を `h1` 要素に追加してください。

# --hints--

`body` には `h1` 要素が 1 つ必要です。

```js
assert($('body').children('h1').length == 1);
```

`h1` 要素にはテキスト `Learning D3` が必要です。

```js
assert($('h1').text() == 'Learning D3');
```

`d3` オブジェクトにアクセスする必要があります。

```js
assert(code.match(/d3/g));
```

`select` メソッドを使用する必要があります。

```js
assert(code.match(/\.select/g));
```

`append` メソッドを使用する必要があります。

```js
assert(code.match(/\.append/g));
```

`text` メソッドを使用する必要があります。

```js
assert(code.match(/\.text/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```
