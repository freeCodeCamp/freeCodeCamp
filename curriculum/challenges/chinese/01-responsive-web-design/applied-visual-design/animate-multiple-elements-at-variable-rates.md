---
id: 587d78a8367417b2b2512ae6
title: 以可变速率来给多个元素添加动画
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

在前面的关卡里，我们通过修改 `@keyframes` 改变了两个相似动画元素的频率。 你也可以通过改变多个元素的 `animation-duration` 来达到同样的效果。

在代码编辑器里运行的动画中，天空中有三颗以同样频率不停闪烁的星星。 你可以设置每一个星星的 `animation-duration` 属性为不同的值，以使其具有不同的闪烁频率。

# --instructions--

依次设置 class 为 `star-1`、`star-2`、`star-3` 的元素的 `animation-duration` 为 1s、0.9s、1.1s。

# --hints--

class 为 `star-1` 的 `animation-duration` 属性值应该 1s。

```js
assert($('.star-1').css('animation-duration') == '1s');
```

class 为 `star-2` 的 `animation-duration` 属性值应该 0.9s。

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

class 为 `star-3` 的 `animation-duration` 属性值应该 1.1s。

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
