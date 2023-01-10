---
id: bad87fee1348bd9aedf08833
title: プレイスホルダーテキストで空白を埋める
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

Web 開発者は慣習的に <dfn>lorem ipsum</dfn> テキストをプレイスホルダーテキストとして使用します。 lorem ipsum テキストとは、古代ローマの哲学者キケロの書いた有名な文章をランダムに抜粋したものです。

lorem ipsum テキストはプレイスホルダーテキストとして 16 世紀から植字工たちに使用されており、この伝統がウェブに引き継がれています。

5 世紀も使われていれば十分でしょう。 私たちは今猫の写真アプリを作っているので、「kitty ipsum」というテキストを使ってみましょう。

# --instructions--

`p` 要素に囲まれたテキストを、以下の kitty ipsum テキスト冒頭の数単語で置き換えてください: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

`p` 要素には、与えられた「kitty ipsum」テキスト冒頭の数単語を含める必要があります。

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>
```
