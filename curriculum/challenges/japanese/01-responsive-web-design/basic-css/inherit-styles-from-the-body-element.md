---
id: bad87fee1348bd9aedf08746
title: Body 要素からスタイルを継承する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

すべての HTML ページに `body` 要素があることと、`body` 要素も CSS でスタイルを変更できることが確認できました。

`body` 要素も他の HTML 要素と同じようにスタイルを変更できることと、他のすべての要素は `body` 要素のスタイルを継承することを覚えておきましょう。

# --instructions--

まず、`Hello World` というテキストを持つ `h1` 要素を作成します。

次に、`body` 要素のスタイル宣言に `color: green;` を追加して、あなたのページにあるすべての要素の文字色を `green` にしましょう。

最後に、`body` 要素のスタイル宣言に `font-family: monospace;` を追加して、`body` 要素の font-family を `monospace` にしましょう。

# --hints--

`h1` 要素を作成してください。

```js
assert($('h1').length > 0);
```

`h1` 要素のテキストは `Hello World` でなければなりません。

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

`h1` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

`body` 要素の `color` プロパティを `green` に設定してください。

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

`body` 要素の `font-family` プロパティを `monospace` に設定してください。

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

`h1` 要素は、`body` 要素から `monospace` フォントを継承しているはずです。

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

`h1` 要素は、`body` 要素から文字色 `green` を継承しているはずです。

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

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
