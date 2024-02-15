---
id: 587d78a8367417b2b2512ae4
title: 무한한 애니메이션 횟수를 사용하여 CSS 두근두근 심장 에니메이션 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

이전 챌린지에서 디자인한 하트를 사용하는 `animation-iteration-count` 속성을 활용한 또 다른 연속 애니메이션 예제가 있습니다.

1초 동안 계속되는 심장 박동 애니메이션은 두 개의 애니메이션 요소로 구성되어 있습니다. `heart` 요소들 (그 중에 `:before`와 `:after` 부분도 포함)은 `transform` 속성을 사용하여 크기를 변경하는 애니메이션을 적용받고, 배경 `div`은 `background` 속성을 사용하여 색상을 변경하는 애니메이션을 적용받습니다.

# --instructions--

계속해서 심장이 뛸 수 있도록 `back` 클래스와 `heart` 클래스에 `animation-iteration-count` 속성을 추가하고 값을 `infinite`로 설정하세요. `heart:before` 및 `heart:after` 선택자에는 어떠한 애니메이션 속성도 필요하지 않습니다.

# --hints--

`heart` 클래스의 `animation-iteration-count` 속성은 `infinite`여야 합니다.

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

`back` 클래스의 `animation-iteration-count` 속성은 `infinite`여야 합니다.

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
