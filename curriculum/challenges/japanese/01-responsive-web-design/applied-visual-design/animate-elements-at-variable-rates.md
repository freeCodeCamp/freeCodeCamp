---
id: 587d78a8367417b2b2512ae5
title: 要素を可変レートでアニメーションさせる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
dashedName: animate-elements-at-variable-rates
---

# --description--

似たようなアニメーション要素のアニメーション速度を変更する方法は様々です。 これまでは、`animation-iteration-count` プロパティを適用し、`@keyframes` ルールを設定することでそれが実現されていました。

例えば、右のアニメーションは 2 つの星で構成されており、それぞれ `@keyframes` ルールの 20% 時点でサイズと不透明度を縮小・減少させることで、星のまたたきを表現しています。 いずれかの要素に対して `@keyframes` ルールを変更することで、異なる速度で星を輝かせることができます。

# --instructions--

クラス名 `star-1` の要素のアニメーション速度を変更するために、`@keyframes` ルールを 50% に変更します。

# --hints--

`star-1` クラスの `@keyframes` ルールは 50% でなければなりません。

```js
assert(code.match(/twinkle-1\s*?{\s*?50%/g));
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
```
