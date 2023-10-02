---
id: 587d7fa7367417b2b2512bc6
title: 要素にインラインスタイルを追加する
challengeType: 6
forumTopicId: 301475
dashedName: add-inline-styling-to-elements
---

# --description--

D3 では、`style()` メソッドを使用して動的要素にインライン CSS スタイルを追加することができます。

`style()` メソッドは、カンマ区切りのキーと値のペアを引数に取ります。 選択したテキストの色を青に設定する例を下に示します。

```js
selection.style("color","blue");
```

# --instructions--

`style()` メソッドをエディタ内のコードに追加することにより、表示されるすべてのテキストに `verdana` の `font-family` を設定してください。

# --hints--

`h2` 要素に `verdana` の `font-family` を設定する必要があります。

```js
assert($('h2').css('font-family') == 'verdana');
```

`style()` メソッドを使用する必要があります。

```js
assert(code.match(/\.style/g));
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
      .text((d) => (d + " USD"))
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

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>
```
