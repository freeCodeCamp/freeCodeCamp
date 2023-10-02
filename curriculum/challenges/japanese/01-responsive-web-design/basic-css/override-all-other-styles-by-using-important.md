---
id: bad87fee1348bd9aedf07756
title: Important で他のすべてのスタイルをオーバーライドする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

おめでとう！ インラインスタイルが `style` 要素内のすべての CSS 宣言をオーバーライドすることを証明しました。

でも待ってください。 CSS をオーバーライドする方法が最後にもう 1 つあります。 これは最も強力な方法です。 でもその前に、そもそもなぜ CSS をオーバーライドしたいのかについて話しましょう。

多くの状況で、あなたは CSS ライブラリを使用することがあるでしょう。 これらはあなたが書いた CSS を思いがけずオーバーライドする可能性があります。 特定の CSS が、ある要素に必ず適用される必要がある場合、`!important` を使用できます。

`pink-text` のクラス宣言に戻りましょう。 `pink-text` クラスは後続のクラス宣言、id 宣言、およびインラインスタイルによってオーバーライドされたことを思い出してください。

# --instructions--

キーワード `!important` を pink-text の文字色の宣言に追加して、`h1` 要素が 100％ 必ずピンクで表示されるようにしましょう。

このやり方の例は次のようになります:

```css
color: red !important;
```

# --hints--

`h1` 要素にはクラス `pink-text` が必要です。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 要素にはクラス `blue-text` が必要です。

```js
assert($('h1').hasClass('blue-text'));
```

`h1` 要素には `orange-text` という `id` が必要です。

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` 要素にインラインスタイルで `color: white` が指定されている必要があります。

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

`pink-text` クラス宣言は、他のすべての宣言をオーバーライドするために `!important` キーワードを持つ必要があります。

```js
assert(
  code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g)
);
```

`h1` 要素がピンクで表示されている必要があります。

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
