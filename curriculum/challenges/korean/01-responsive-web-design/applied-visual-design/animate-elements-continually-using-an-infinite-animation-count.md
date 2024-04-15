---
id: 587d78a8367417b2b2512ae3
title: 무한한 애니메이션 횟수를 사용하여 요소를 계속해서 애니메이션화 하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
dashedName: animate-elements-continually-using-an-infinite-animation-count
---

# --description--

이전 도전 과제에서는 일부 애니메이션 속성과 `@keyframes` 규칙 사용 방법을 다뤘습니다. 또 다른 애니메이션 속성은 `animation-iteration-count`인데, 이를 사용하여 애니메이션을 몇 번 반복할지를 제어할 수 있습니다. 여기 예시가 있습니다.

```css
animation-iteration-count: 3;
```

이 경우에는 애니메이션은 3번 실행된 후 멈출 것이지만, 그 값을 `infinite`로 설정하여 애니메이션을 계속해서 실행할 수 있습니다.

# --instructions--

오른쪽에 있는 공이 계속해서 반복되게 튀기려면 `animation-iteration-count` 속성을 `infinite`로 변경하십시오.

# --hints--

`animation-iteration-count` 속성의 값은 `infinite`여야 합니다.

```js
assert($('#ball').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```
