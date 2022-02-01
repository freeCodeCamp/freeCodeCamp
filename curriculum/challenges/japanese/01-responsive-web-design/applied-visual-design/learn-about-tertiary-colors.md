---
id: 587d78a4367417b2b2512ad2
title: 三次色について学ぶ
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

コンピュータのモニタやデバイスの画面は、赤、緑、青の光の量を組み合わせることによって異なる色を生成します。 これは現代の色彩理論では RGB 加法カラーモデルとして知られています。 赤 (R)、緑 (G)、青 (B) は原色と呼ばれます。 2 つの原色を混合すると、シアン (G + B)、マゼンタ (R + B)、黄色 (R + G) が生成されます。 これらの色は補色のチャレンジに出てきました。 これら二次色は、その色を作る時に使わなかった原色の補色にあたり、色相環ではその原色の反対側に位置します。 例えばマゼンタは赤と青でできており、緑の補色です。

三次色は、ある原色と色相環上で隣合う二次色のどちらかを混合した結果です。 例えば、RGB カラーモデルでは、赤 (原色) と黄色 (二次色) でオレンジ (三次色) が作られます。 これでシンプルな色相環に更に 6 色を加え、12 色になります。

デザインに調和のとれた組み合わせをもたらす色を選択する方法は色々あります。 三次色を使用する一つの例は分裂補色配色 (スプリットコンプリメンタリー) と呼ばれます。 この方法はあるベースカラーから始まり、その補色と隣り合う 2 色とペアにします。 その三色はデザインに強い視覚的コントラストを与えますが、2 つの補色を使うよりも繊細になります。

こちらが分裂補色配色を使用して作成した三色です。

<table class='table table-striped'><thead><tr><th>色</th><th>16 進数カラーコード</th></tr></thead><thead></thead><tbody><tr><td>オレンジ</td><td>#FF7F00</td></tr><tr><td>シアン</td><td>#00FFFF</td></tr><tr><td>ラズベリー</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

`orange`, `cyan`, `raspberry` クラスの `background-color` プロパティをそれぞれ対応した色に変更してください。 色の名前ではなく、16 進数コードを使用するようにしてください。

# --hints--

クラスが `orange` の `div` 要素の `background-color` はオレンジである必要があります。

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

クラスが `cyan` の `div` 要素の `background-color` はシアンである必要があります。

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

クラスが `raspberry` の `div` 要素の `background-color` はラズベリーである必要があります。

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

色を表すクラスの全ての `background-color` の値は、色の名前ではなく 16 進数コードである必要があります。

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
