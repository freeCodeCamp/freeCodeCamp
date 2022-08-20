---
id: 587d78a4367417b2b2512ad4
title: 色の色相を調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

色は色相、彩度、明度など、いくつかの特性を持っています。 CSS3 はこれらの特性を直接指定して色を選択する方法として `hsl()` 関数を導入しました。

**Hue** (色相) は一般的に人々が「色」と考えるものです。 左端が赤から始まり、真ん中が緑、右端が青の色のスペクトルを思い浮かべた時、ある色がこの線のどこに位置するかを表すのが色相です。 `hsl()` では、色相はスペクトルの代わりに色相環の概念を使用し、円上のその色の角度が 0 から 360 の間の値として与えられます。

**Saturation** (彩度) は色の中のグレーの量です。 彩度が最大の色にはグレーの成分がなく、彩度が最小の色はほぼ完全なグレーです。 これは、最大の彩度を 100% とするパーセンテージで与えられます。

**Lightness** (明度) は色の中の白または黒の量です。 パーセンテージは 0% (黒) から 100% (白) の範囲で与えられ、50% は標準の色になります。

こちらは彩度が最大、明度が標準の色を `hsl()` を使って表した例です。

<table class='table table-striped'><thead><tr><th>色</th><th>HSL</th></tr></thead><tbody><tr><td>赤</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>黄色</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>緑</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>シアン</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>青</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>マゼンタ</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

各 `div` 要素の `background-color` を、クラス名 (`green`, `cyan`, `blue`) に従うように `hsl()` を使って変更してください。 三色とも彩度は最大、明度は標準にしてください。

# --hints--

`hsl()` 関数を使って、緑色を宣言してください。

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

`hsl()` 関数を使って、シアンを宣言してください。

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

`hsl()` 関数を使って、青色を宣言してください。

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

クラスが `green` の `div` 要素の `background-color` は緑である必要があります。

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

クラスが `cyan` の `div` 要素の `background-color` はシアンである必要があります。

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

クラスが `blue` の `div` 要素の `background-color` は青である必要があります。

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
