---
id: 587d78a8367417b2b2512ae6
title: 변수 속도로 여러 요소들에 애니메이션을 적용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

이전 챌린지에서 `@keyframes` 규칙들을 수정하여 유사하게 애니메이션화된 두 요소들의 에니메이션 속도를 변경했습니다. 여러 요소들의 `animation-duration`을 조작하여 동일한 목표를 달성할 수 있습니다.

코드 편집기에서 실행 중인 애니메이션에서는 하늘에 세 개의 별들이 계속해서 동일한 속도로 반짝입니다. `animation-duration` 속성을 각각의 요소마다 다른 값을 지정해주면 다른 속도로 반짝이게 만들 수 있습니다.

# --instructions--

클래스가 `star-1`, `star-2`, `star-3`인 요소들의 `animation-duration`을 각각 1초, 0.9초, 1.1초로 설정합니다.

# --hints--

클래스가 `star-1`인 별의 `animation-duration` 속성은 1초로 유지되어야 합니다.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

클래스가 `star-2`인 별의 `animation-duration` 속성은 0.9초여야 합니다.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

클래스가 `star-3`인 별의 `animation-duration` 속성은 1.1초여야 합니다.

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
