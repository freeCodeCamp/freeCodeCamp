---
id: 587d778f367417b2b2512aac
title: 十分なコントラストを使用して色覚の問題を回避する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

色はビジュアルデザインの大部分を占めていますが、アクセシビリティの問題が 2 つあります。 第一に、スクリーンリーダーのユーザーには色が見えないので、重要な情報を伝える唯一の方法として色だけを使用するべきではありません。 第二に、色弱者のユーザーが前景色と背景色の違いを区別できるためには十分なコントラストが必要です。

以前のチャレンジでは、1 つ目の問題に対処するため代替テキストを使う方法を紹介しました。 前回のチャレンジでは、2 つ目の問題の対応に役立つコントラストチェックツールを導入しました。 WCAG 推奨のコントラスト比は 4.5:1 で、カラーでもグレースケールの組み合わせでも適用されます。

色弱者のユーザーは、ある色を他の色と区別するのに苦労することがあります。色相が問題になることが多いですが、時には明度も関係します。 コントラスト比は、前景色と背景色の相対輝度 (または明度) の値を使用して計算されることを覚えているかと思います。

実際には、4.5:1 のコントラスト比は、暗い色にシェーディング (黒を加えること)、明るい色にティンティング (白を加えること) することで達成できます。 カラーホイール上では、暗い色合いはブルー、バイオレット、マゼンタ、レッドだと考えられ、一方で明るい色合いはオレンジ、イエロー、グリーン、ブルーグリーンなどです。

# --instructions--

Camper Cat は、ブログのテキストと背景に色を使うテストを行っています。しかし、緑がかった `background-color` とくり色のテキスト `color` の組み合わせのコントラスト比は 2.5:1 です。 CSSの `hsl()` プロパティ (hue 色相、saturation 彩度、lightness 明度の略) を使用して宣言しているため、3 つ目の引数の値を変えることで色の明度を簡単に調整できます。 `background-color` の明度の値を 35% から 55% に増やし、`color` の明度の値を 20% から 15% に減らします。 これにより、コントラストが 5.9:1 に向上します。

# --hints--

テキストの `color` プロパティの明度の値だけを 15% に変更してください。

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

`background-color` プロパティの明度の値だけを 55% に変更してください。

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>
```
