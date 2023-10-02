---
id: bad87fee1348bd9aedf04756
title: 後続の CSS でスタイルをオーバーライドする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

`pink-text` クラスが `body` 要素の CSS 宣言より優先されました！

私達の作成したクラスが `body` 要素の CSS をオーバーライドすることを証明しました。 次の論理的な疑問は、`pink-text` クラスをオーバーライドするにはどうすればいいのかということです。

# --instructions--

要素に青の文字色を設定する `blue-text` という CSS クラスを追加してください。 必ず `pink-text` クラスの宣言より下に追加してください。

`h1` 要素に対し、`pink-text` クラスに加えて `blue-text` クラスも適用して、どちらが勝つか見てみましょう。

1 つの HTML 要素に複数のクラス属性を適用するには、以下のようにスペースで区切ります:

```html
class="class1 class2"
```

**注:** HTML 要素にクラスを並べる順番は関係ありません。

しかし、`<style>` セクション内での `class` 宣言の順番が重要になります。 2 番目の宣言は常に最初の宣言よりも優先されます。 `.blue-text` は2番目に宣言されているため、 `.pink-text` の属性をオーバーライドします。

# --hints--

`h1` 要素にはクラス `pink-text` が必要です。

```js
assert($('h1').hasClass('pink-text'));
```

`h1` 要素にはクラス `blue-text` が必要です。

```js
assert($('h1').hasClass('blue-text'));
```

`blue-text` と `pink-text` の両方が同じ `h1` 要素に適用されている必要があります。

```js
assert($('.pink-text').hasClass('blue-text'));
```

`h1` 要素が青で表示されている必要があります。

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
