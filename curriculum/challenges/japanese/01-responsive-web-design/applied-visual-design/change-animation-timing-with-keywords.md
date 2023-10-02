---
id: 587d78a8367417b2b2512ae7
title: キーワードでアニメーションのタイミングを変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

CSS アニメーションでは、`animation-timing-function` プロパティにより、アニメーション要素がアニメーションの継続時間中に変化する速度を制御します。 車が A 地点から B 地点へ与えられた時間 (`animation-duration` の値) で移動するアニメーションであれば、`animation-timing-function` は車がドライブの過程でどのように加減速するかを示します。

よく使われるオプションに対しては、あらかじめ定義されたキーワードがいくつか用意されています。 たとえば、デフォルト値は `ease` で、これは最初はゆっくりスタートし、途中でスピードを上げ、最終的に再び減速します。 他のオプションとしては、速く始まって減速する `ease-out`、遅く始まって最終的に加速する `ease-in`、全体を通じて一定速度のアニメーションが適用される `linear` が含まれます。

# --instructions--

id `ball1` と `ball2` の要素に対してそれぞれ `animation-timing-function` プロパティを追加し、`#ball1` に対しては `linear` を、`#ball2` に対しては `ease-out` を設定します。 アニメーション中の要素の動き方の違いに注目してください。`animation-duration` 2 秒の設定は共通しているため、アニメーションは同じタイミングで終了します。

# --hints--

id `ball1` 要素の `animation-timing-function` プロパティの値は `linear` でなければなりません。

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

id `ball2` 要素の `animation-timing-function` プロパティの値は `ease-out` でなければなりません。

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

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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
  .balls {
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
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
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
