---
id: 587d78a8367417b2b2512ae7
title: 使用關鍵字更改動畫定時器
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

在 CSS 動畫裏，`animation-timing-function` 用來定義動畫的速度曲線。 速度曲線決定了動畫從一套 CSS 樣式變爲另一套所用的時間。 如果要描述的動畫是一輛車在指定時間內（`animation-duration`）從 A 運動到 B，那麼 `animation-timing-function` 表述的就是車在運動中的加速和減速等過程。

有一些預定義的關鍵字可用於常見的選項。 比如，默認值是 `ease`，動畫以低速開始，然後加快，在結束前變慢。 其它常用的值包括 `ease-out`：動畫以高速開始，以低速結束；`ease-in`，動畫以低速開始，以高速結束；`linear`：動畫從頭到尾的速度是相同的。

# --instructions--

給 id 爲 `ball1` 和 `ball2` 的元素添加 `animation-timing-function`，`ball1` 的屬性值爲 `linear`，`ball2` 的屬性值爲 `ease-out`。 它們的 `animation-duration` 都爲 2 秒，注意觀察它們在開始和結束時的不同。

# --hints--

id 爲 `ball1` 的元素的 `animation-timing-function` 屬性值應爲 `linear`。

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

id 爲 `ball2` 的元素的 `animation-timing-function` 屬性值爲 `ease-out`。

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
