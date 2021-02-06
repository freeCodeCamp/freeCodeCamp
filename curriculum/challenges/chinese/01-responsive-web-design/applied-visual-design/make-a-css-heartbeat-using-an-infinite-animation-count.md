---
id: 587d78a8367417b2b2512ae4
title: 使用无限的动画计数制作 CSS 心跳
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

这也是一个用 `animation-iteration-count` 属性创造持续动画的例子，它基于我们在前面挑战中创建的心形。

心跳动画的每一秒包含两个部分。 `heart` 元素（包括 `:before` 和 `:after`）使用 `transform` 属性改变其大小，背景 `div` 使用 `background` 属性改变其颜色。

# --instructions--

给 `back` class 和 the `heart` class 添加 `animation-iteration-count` 属性，将属性值设置为 `infinite`，使心保持跳动。 `heart:before` 和 `heart:after` 所选择的元素则不需要添加动画属性。

# --hints--

`heart` class 的 `animation-iteration-count` 的属性值应为 `infinite`。

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

`back` class 的 `animation-iteration-count` 的属性值应为 `infinite`。

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```
