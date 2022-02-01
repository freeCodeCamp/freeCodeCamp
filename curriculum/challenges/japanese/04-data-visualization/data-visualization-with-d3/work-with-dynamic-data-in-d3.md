---
id: 587d7fa7367417b2b2512bc5
title: D3 で動的データを操作する
challengeType: 6
forumTopicId: 301498
dashedName: work-with-dynamic-data-in-d3
---

# --description--

最後の 2 つのチャレンジでは、`data()` と `enter()` の各メソッドを使用して D3 で動的にデータを表示するための基本を学びます。 これらのメソッドは `append()` メソッドと共にデータセットを取り、データセット内の各エントリに対して新しい DOM 要素を作成します。

以前のチャレンジでは、`dataset` 配列内の各アイテムに対して新しい `h2` 要素を作成しました。しかし、それらはすべて `New Title` という同じテキストを含んでいました。 その原因は、`h2` 要素のそれぞれにバインドされているデータを使用していないことです。

D3 の `text()` メソッドは、引数として文字列またはコールバック関数を取ることができます。

```js
selection.text((d) => d)
```

上の例では、パラメータ `d` は、選択範囲のバインド先であるデータセット内の単一のエントリを参照します。

現在の例をコンテキストとして使用すると、最初の `h2` 要素は 12 に、2 番目の `h2` 要素は 31 に、3 番目の `h2` 要素は 22 にバインドされ、以降も同様です。

# --instructions--

それぞれの `h2` 要素に対応する値が `dataset` 配列から取得され、単一のスペースおよび文字列 `USD` と共に表示されるように、`text()` メソッドを変更してください。 例えば、最初の見出しを `12 USD` にする必要があります。

# --hints--

最初の `h2` にはテキスト `12 USD` が必要です。

```js
assert($('h2').eq(0).text() == '12 USD');
```

2 番目の `h2` にはテキスト `31 USD` が必要です。

```js
assert($('h2').eq(1).text() == '31 USD');
```

3 番目の `h2` にはテキスト `22 USD` が必要です。

```js
assert($('h2').eq(2).text() == '22 USD');
```

4 番目の `h2` にはテキスト `17 USD` が必要です。

```js
assert($('h2').eq(3).text() == '17 USD');
```

5 番目の `h2` にはテキスト `25 USD` が必要です。

```js
assert($('h2').eq(4).text() == '25 USD');
```

6 番目の `h2`にはテキスト `18 USD` が必要です。

```js
assert($('h2').eq(5).text() == '18 USD');
```

7 番目の `h2` にはテキスト `29 USD` が必要です。

```js
assert($('h2').eq(6).text() == '29 USD');
```

8 番目の `h2` にはテキスト `14 USD` が必要です。

```js
assert($('h2').eq(7).text() == '14 USD');
```

9 番目の `h2` にはテキスト `9 USD` が必要です。

```js
assert($('h2').eq(8).text() == '9 USD');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      // Add your code below this line

      .text("New Title");

      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`);

  </script>
</body>
```
