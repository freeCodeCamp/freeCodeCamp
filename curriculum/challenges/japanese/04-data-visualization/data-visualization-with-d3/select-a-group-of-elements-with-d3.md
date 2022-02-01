---
id: 587d7fa6367417b2b2512bc3
title: D3 で要素のグループを選択する
challengeType: 6
forumTopicId: 301490
dashedName: select-a-group-of-elements-with-d3
---

# --description--

D3 には、要素のグループを選択するための `selectAll()` メソッドもあります。 このメソッドは、入力文字列に一致する、ドキュメント内のすべてのアイテムについて HTML ノードの配列を返します。 ドキュメント内のすべてのアンカータグを選択するには、例えば次のように記述します。

```js
const anchors = d3.selectAll("a");
```

`select()` メソッドと同様に、 `selectAll()` はメソッドチェーンをサポートしており、他のメソッドと併用できます。

# --instructions--

ドキュメント内のすべての `li` タグを選択し、次に、`.text()` メソッドをチェーンすることによりテキストを文字列 `list item` に変更してください。

# --hints--

ページ上に `li` 要素が 3 個あり、それぞれのテキストが `list item` になっている必要があります。 大文字とスペースの使い方が厳密に一致する必要があります。

```js
assert(
  $('li')
    .text()
    .match(/list item/g).length == 3
);
```

`d3` オブジェクトにアクセスする必要があります。

```js
assert(code.match(/d3/g));
```

`selectAll` メソッドを使用する必要があります。

```js
assert(code.match(/\.selectAll/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item")
  </script>
</body>
```
