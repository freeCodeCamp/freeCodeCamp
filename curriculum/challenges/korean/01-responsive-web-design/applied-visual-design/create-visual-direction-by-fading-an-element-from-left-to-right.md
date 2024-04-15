---
id: 587d78a7367417b2b2512ae2
title: 왼쪽에서 오른쪽으로 요소가 점점 투명해지도록 시각적인 방향 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

이번 도전 과제에서는 애니메이션된 요소의 `opacity`를 변경하여 화면 오른쪽으로 갈수록 서서히 투명해지도록합니다.

표시된 애니메이션에서는 그라데이션 배경을 가진 둥근 요소가 애니메이션의 50% 지점까지 오른쪽으로 이동합니다. 이는 `@keyframes` 규칙에 따른 것입니다.

# --instructions--

id가 `ball`인 요소를 대상으로 하여 `opacity` 속성을 추가하고, 해당 속성을 `50%`일 때 0.1로 설정하여 요소가 오른쪽으로 이동할 때 서서히 흐려지도록 합니다.

# --hints--

fade에 대한 `keyframes`규칙은 `opacity` 속성을 50%일 때 0.1로 설정해야 합니다.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
