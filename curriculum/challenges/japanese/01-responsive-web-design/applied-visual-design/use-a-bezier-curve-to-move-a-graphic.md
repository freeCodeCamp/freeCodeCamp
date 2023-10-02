---
id: 587d78a9367417b2b2512ae9
title: ベジェ曲線を使ってグラフィックを動かす
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

前回の課題では、アニメーションの変更を記述した `ease-out` キーワードについて説明しました。このキーワードは、最初にスピードを上げ、アニメーションの終わりにスローダウンします。 右側に `ease-out` キーワード (青色の要素用) と `linear` キーワード (赤色の要素用) の違いを示します。 `ease-out` キーワードと同様のアニメーションの動きは、カスタム三次ベジェ曲線関数を使用することで実現できます。

一般的に、`p1` と `p2` のアンカーポイントを変更すると異なるベジェ曲線が作成され、時間の経過と共にアニメーションがどのように進むかを制御します。 以下は、`ease-out` スタイルを模倣する値を使用したベジェ曲線の例です。

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

`cubic-bezier` 関数はすべて始点 `p0` が (0, 0) から始まり、終点 `p3` が (1, 1) で終わることを思い出してください。 この例では、ベジェ曲線は Y 軸方向 (0 から開始して `p1` の y の値 0 へ移動し、 `p2` で 1 に移動する) の方が、X 軸方向 (0から開始して `p1` で 0、`p2` で 0.58 に移動する) よりも速く変化します。 その結果、アニメーションされる要素の変化は、その区間のアニメーションの時間よりも速く進行します。 カーブの終わりに向かって x と y の値の変化の関係は逆になります。y の値は (変わらず) 1 から 1 へ移動しますが、x の値は 0.58 から 1 に移動し、アニメーションの進行時間に比べて変化が遅くなります。

# --instructions--

このベジェ曲線の効果を確認するには `red` の id を持つ要素の `animation-timing-function` を `cubic-bezier` 関数に変更し、x1, y1, x2, y2 をそれぞれ `0, 0, 0.58, 1` に設定します。 これで両方の要素のアニメーションが同じように進行します。

# --hints--

id `red` の要素の `animation-timing-function` プロパティは x1, y1, x2, y2 の値がそれぞれ 0, 0, 0.58, 1 に設定された `cubic-bezier` 関数でなければなりません。

```js
assert(
  $('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)'
);
```

id `red` の要素は `animation-timing-function` のプロパティとして `linear` を持たないようにします。

```js
assert($('#red').css('animation-timing-function') !== 'linear');
```

id `blue` の要素の `animation-timing-function` プロパティの値は変更しないでください。

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $('#blue').css('animation-timing-function')
);
assert(
  blueBallAnimation == 'ease-out' ||
    blueBallAnimation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

# --solutions--

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
    left: 56%;
    animation-timing-function: ease-out;
  }
  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```
