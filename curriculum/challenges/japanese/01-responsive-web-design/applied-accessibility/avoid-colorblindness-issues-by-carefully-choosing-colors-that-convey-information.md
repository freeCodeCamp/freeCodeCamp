---
id: 587d778f367417b2b2512aad
title: >-
  情報を伝達する色を慎重に選択して色覚の問題を回避する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

色弱には様々なタイプがあります。 これらには、特定の波長に対する感度が低下するタイプから色が全く見えないタイプまで幅があります。 最も多いタイプは、緑を認識する感度が低下するものです。

例えば、似たような 2 つの緑色をコンテンツの前景色と背景色に使用した場合、色弱者のユーザーはそれを区別できないかもしれません。 近い色はカラーホイール上の隣り合った色として考えることができます。重要な情報を伝える際にはその組み合わせは避けるべきです。

**注:** オンラインカラーピッキングツールには、異なるタイプの色弱者にとってそれらの色がどのように見えるかを視覚的にシミュレーションするものがあります。 オンラインのコントラストチェックツールに加えて、これらは素晴らしいリソースです。

# --instructions--

Camper Cat は重要なボタンにおける異なるスタイルをテストしています。しかし、黄色(`#FFFF33`) の背景色 `background-color` と緑 (`#33FF33`) の文字色 `color` はカラーホイールで隣接した色相なので、一部の色弱者にとってほとんど区別できません。 (これらの色は明度も近く、コントラスト比チェックでも失敗します) テキストの `color` をダークブルー (`#003366`) に変更して、両方の問題を解決します。

# --hints--

`button` のテキストの `color` をダークブルーに変更してください。

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
