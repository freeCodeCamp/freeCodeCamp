---
id: 587d78a8367417b2b2512ae6
title: 以可變速率來給多個元素添加動畫
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

在前面的關卡里，我們通過修改 `@keyframes` 改變了兩個相似動畫元素的頻率。 你也可以通過改變多個元素的 `animation-duration` 來達到同樣的效果。

在代碼編輯器裏運行的動畫中，天空中有三顆以同樣頻率不停閃爍的星星。 你可以設置每一個星星的 `animation-duration` 屬性爲不同的值，以使其具有不同的閃爍頻率。

# --instructions--

依次設置 class 爲 `star-1`、`star-2`、`star-3` 的元素的 `animation-duration` 爲 1s、0.9s、1.1s。

# --hints--

class 爲 `star-1` 的 `animation-duration` 屬性值應該 1s。

```js
assert($('.star-1').css('animation-duration') == '1s');
```

class 爲 `star-2` 的 `animation-duration` 屬性值應該 0.9s。

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

class 爲 `star-3` 的 `animation-duration` 屬性值應該 1.1s。

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
