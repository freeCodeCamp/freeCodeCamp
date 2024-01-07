---
id: 587d78a8367417b2b2512ae6
title: 複数の要素を可変レートでアニメーションさせる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

前回のチャレンジでは、`@keyframes` ルールを操作することで、2つのよく似たアニメーションの要素に対するアニメーション速度を変更しました。 複数の要素の `animation-duration` を操作することで、同じ目標を達成することができます。

コードエディタで実行されているアニメーションでは、空に3つの星が同じ速度で連続ループでまたたいています。 これらが異なる速度で輝くようにするには、各要素に対して `animation-duration` プロパティを異なる値で設定します。

# --instructions--

`star-1`、`star-2`、`star-3` のクラスに属する要素に対して、`animation-duration` の値としてそれぞれ 1s、0.9s、1.1s をセットします。

# --hints--

`star-1` クラスの星が持つ `animation-duration` プロパティは、1 秒のままにします。

```js
assert($('.star-1').css('animation-duration') == '1s');
```

`star-2` クラスの星が持つ `animation-duration` プロパティは、0.9 秒でなければなりません。

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

`star-3` クラスの星が持つ `animation-duration` プロパティは、1.1 秒でなければなりません。

```js
assert($('.star-3').css('animation-duration') == '1.1s');
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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>
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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>
```
