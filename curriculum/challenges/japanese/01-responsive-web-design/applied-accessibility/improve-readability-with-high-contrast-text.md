---
id: 587d778e367417b2b2512aab
title: 高コントラストのテキストで読みやすさを向上させる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cKb3nCq'
forumTopicId: 301017
dashedName: improve-readability-with-high-contrast-text
---

# --description--

前景色と背景色間でコントラストが低いと、テキストが読みづらくなります。 十分なコントラストはコンテンツの可読性を向上させますが、「十分」とは何を意味するのでしょうか？

ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG) では、通常のテキストに対して少なくとも 4.5 〜 1 のコントラスト比を推奨しています。 この比率は 2 色の相対輝度値を比較することで算出します。 その範囲は、比率が 1:1 で同じ色だったりコントラストがない場合から、白に対する黒の比率 21:1、つまり最も大きなコントラストがある場合までの値を取ります。 オンラインで利用可能な多くのコントラストチェックツールがあり、この比率を計算できます。

# --instructions--

Camper Cat の最近のブログ記事では明るいグレーに白い背景色を使っていますが、このコントラスト比は 1.5:1 で読み辛くなっています。 テキストの `color` を現在のグレー (`#D3D3D3`) から濃いグレー (`#636363`) に変更し、コントラスト比を 6:1 に改善してください。

# --hints--

`body` のテキストの `color` を濃いグレーに変更してください。

```js
assert($('body').css('color') == 'rgb(99, 99, 99)');
```

`body` の `background-color` は変更しないでください。

```js
assert($('body').css('background-color') == 'rgb(255, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
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
    color: #636363;
    background-color: #FFF;
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
