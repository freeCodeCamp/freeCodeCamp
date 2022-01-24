---
id: bd7123c8c441eddfaeb5bdef
title: はじめての HTML 要素
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

freeCodeCamp の HTML コーディングチャレンジへようこそ。 このチャレンジを通じてウェブ開発を一歩ずつ学んでいきましょう。

まず、HTML を使ってシンプルなウェブページを作ることから始めましょう。 このページに埋め込まれているコードエディタでコードを編集できます。

コードエディタに `<h1>Hello</h1>` というコードが表示されていますか？ これが HTML 要素です。

ほとんどの HTML 要素には開始タグと終了タグがあります。

開始タグはこのようなタグです。

```html
<h1>
```

終了タグはこのようなタグです。

```html
</h1>
```

開始タグと終了タグの違いは、終了タグは最初の括弧の後にスラッシュがあることです。

各チャレンジにはテストがあり、「テスト実行」ボタンをクリックしていつでも実行できます。 全てのテストにパスすると、解答を提出して次のチャレンジに進むことができます。

# --instructions--

このチャレンジのテストをパスするには、`h1` 要素のテキストを `Hello World` に書き換えてください。

# --hints--

`h1` 要素のテキストは `Hello World` でなければなりません。

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
