---
id: 587d78a8367417b2b2512ae7
title: 키워드를 사용해 애니메이션 실행 속도 변경하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

CSS 애니메이션에서, `animation-timing-function` 속성은 애니메이션 실행 시간 내에서 애니메이션이 실행되는 속도를 조절합니다. 예를 들어, A지점에서 B지점으로 지정된 시간(`animation-duration`) 동안 자동차가 이동하는 애니메이션이 있다고 합시다. 이때 `animation-timing-function` 속성은 차가 이동하는 동안 어떤 식으로 가속하거나 감속하는지를 결정합니다.

이 속성값으로 자주 사용되는 몇 가지 사전 지정된 키워드들이 있습니다. 예를 들어, 기본값은 `ease`로 설정되어 있습니다. 이 속성값을 가질 때는 애니메이션이 느리게 시작했다가 중간 지점에서 속도가 빨라지고, 서서히 느려지며 끝납니다. 다른 옵션으로는 애니메이션이 빠르게 시작했다가 끝으로 갈수록 점점 느려지는 `ease-out`, 느리게 시작했다가 끝으로 갈수록 점점 빨라지는 `ease-in`, 내내 일정한 속도가 적용되는 `linear` 등이 있습니다.

# --instructions--

아이디가 `ball1`인 요소와 `ball2`인 요소에 `animation-timing-function` 속성을 지정해주세요. `#ball1`에는 `linear` 속성값을, `#ball2`에는 `ease-out` 속성값을 적용해주세요. 애니메이션이 실행되는 동안 요소들이 다르게 움직이지만, 2초의 동일한 `animation-duration` 값을 공유하므로 모두 함께 끝난다는 점에 주목하세요.

# --hints--

아이디가 `ball1`인 요소의 `animation-timing-function` 속성값은 `linear`이어야 합니다.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

아이디가 `ball2`인 요소의 `animation-timing-function` 속성값은 `ease-out`이어야 합니다.

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
