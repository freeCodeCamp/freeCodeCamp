---
id: bad87fee1348bd9aedf08756
title: スタイルを別のスタイルより優先する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

HTML 要素が、互いに競合する複数のスタイル指定を受け取ることがあります。

例えば、`h1` 要素を同時に緑とピンクの両方にすることはできません。

テキストをピンク色にするクラスを作成し、要素に適用するとどうなるか見てみましょう。 私達のクラスは `body` 要素の `color: green;` という CSS プロパティを*オーバーライド* (無視) するでしょうか？

# --instructions--

要素にピンクの文字色を設定する `pink-text` という CSS クラスを作成してください。

`h1` 要素に `pink-text` クラスを適用してください。

# --hints--

`h1` 要素にはクラス `pink-text` が必要です。

```js
assert($('h1').hasClass('pink-text'));
```

`<style>` 内に `color` を変更する `pink-text` CSS クラスが必要です。

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
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
</style>
<h1>Hello World!</h1>
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
</style>
<h1 class="pink-text">Hello World!</h1>
```
