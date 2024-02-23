---
id: 587d778f367417b2b2512aae
title: 説明的なリンクテキストを使用してリンクに意味を与える
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

スクリーンリーダーのユーザーには、デバイスがどの種類のコンテンツを読み上げるかに関するさまざまなオプションがあります。 これらのオプションには、ランドマーク要素まで (またはその先に) スキップする、メインコンテンツへのジャンプ、見出しからページの要約を取得するなどがあります。 他に、ページで利用可能なリンクだけを聞くこともできます。

この場合、スクリーンリーダーはリンクテキスト、つまりアンカー (`a`) タグの間にあるテキストを読み上げます。 「click here (ここをクリック)」や「read more (詳細を読む)」というリンクの一覧があっても役に立ちません。 代わりに、これらのユーザーにより多くの意味を提供するために、`a` タグ内では簡潔で説明的なテキストを使用してください。

# --instructions--

Camper Cat が使用しているリンクテキストは、周囲のコンテキストがなければあまり意味を成しません。 アンカー (`a`) タグを移動して、`Click here` の代わりに `information about batteries` の周りを囲うようにします。

# --hints--

コードでは、アンカーの `a` タグを `Click here` という単語の周りから `information about batteries` という単語の周りを囲うように移動させる必要があります。

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

`a` 要素は空文字列の値 `""` が指定された `href` 属性を持たなければなりません。

```js
assert($('a').attr('href') === '');
```

`a` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```
