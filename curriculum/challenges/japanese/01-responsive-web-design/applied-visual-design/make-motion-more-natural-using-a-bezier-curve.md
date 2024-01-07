---
id: 587d78a9367417b2b2512aea
title: ベジェ曲線を使用して動きをもっと自然にする
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

このチャレンジでは、ボールがジャグリングされている様子を再現する要素をアニメーション化します。 ここまでのチャレンジでは `linear` と `ease-out` の三次ベジェ曲線を取り上げましたが、どちらも投げ上げる動きを正確に表現できていません。 このためにベジェ曲線をカスタマイズする必要があります。

`animation-iteration-count` が infinite に設定されていると、`animation-timing-function` は各キーフレームで自動的にループします。 アニメーション時間の真ん中 (`50%` 時点) にキーフレームルールが設定されているので、ボールの上向きと下向きの動きは同じように進行します。

次の三次ベジェ曲線はジャグリングの動きをシミュレートします。

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

y2 の値が 1 より大きいことに注意してください。 三次ベジェ曲線は 1×1 の座標系にマッピングされていて、x の値は 0〜1 までしか設定できませんが、y の値は1以上の数値も設定することができます。 これでジャグリングボールをシミュレーションするのに最適なはずむ動きになります。

# --instructions--

id `green` の要素の `animation-timing-function` プロパティを、x1, y1, x2, y2 の値がそれぞれ 0.311, 0.441, 0.444, 1.649 である `cubic-bezier` 関数に変更します。

# --hints--

id `green` の要素の `animation-timing-function` プロパティは、指定の x1, y1, x2, y2 の値を持つ `cubic-bezier` 関数でなければなりません。

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
