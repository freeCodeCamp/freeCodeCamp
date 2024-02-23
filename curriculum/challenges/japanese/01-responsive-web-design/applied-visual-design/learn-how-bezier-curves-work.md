---
id: 587d78a9367417b2b2512ae8
title: ベジェ曲線の仕組みを学ぶ
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

前回のチャレンジでは、`animation-timing-function` プロパティと、アニメーションのスピードを時間に伴って変更するキーワードをいくつか紹介しました。 CSS はキーワード以外のオプションも提供しており、ベジェ曲線を使用してアニメーションの動作を細かく制御できます。

CSS アニメーションでは、ベジェ曲線は `cubic-bezier` 関数とともに使用されます。 曲線の形状は、アニメーションがどのように再生されるかを表します。 曲線は、1 × 1 の座標系に配置されます。 この座標系の X 軸はアニメーションの持続時間です (時間軸と考えてください)。そして、Y 軸はアニメーションの変化です。

`cubic-bezier` 関数は 1 × 1 グリッド上の `p0`、`p1`、`p2`、`p3` の 4 つの点で構成されます。 `p0` と `p3` は固定されています。これらは開始点と終了点であり、常に原点 (0, 0) と (1, 1) にそれぞれ配置されます。 あなたが設定するのは残りの2点の x, y の値です。これらをグリッド上のどこに配置するかでアニメーションの曲線の形状が決まります。 CSSでこの設定を行うには、「アンカー」ポイントと呼ばれる 2 点 `p1` と `p2` の x, y の値を次の形式で宣言します: `(x1, y1, x2, y2)`。 まとめると、CSS コードにおけるベジェ曲線の例はこのようになります。

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

上の例では、x と y の値は点ごとに等価です (x1 = 0.25 = y1, x2 = 0.75 = y2)。もし幾何学の授業を覚えているなら、これは原点から点 (1, 1) までの直線になることが分かります。 このアニメーションは、アニメーションの継続時間全体を通して要素を線形変化させるもので、`linear` キーワードを使用するのと同じです。 言い換えると、一定の速度で変化するということです。

# --instructions--

id が `ball1` の要素について、`animation-timing-function` プロパティの値を `linear` から、 同等の `cubic-bezier` 関数の値に変更してください。 上記の例で与えられた値を使用してください。

# --hints--

id `ball1` を持つ要素の `animation-timing-function` プロパティの値は、線形 (linear) と等価の `cubic-bezier` 関数でなければなりません。

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

id `ball2` を持つ要素の `animation-timing-function` プロパティの値は変更しないでください。

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
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

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
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
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
