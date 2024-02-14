---
id: bad88fee1348bd9aedf08825
title: 요소의 패딩 조절하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

잠시 Cat Photo App을 내려놓고 HTML 스타일링에 대해 더 알아보겠습니다.

이미 눈치 채셨을 수도 있지만, 모든 HTML 요소는 본질적으로 작은 직사각형입니다.

각 HTML 요소를 둘러싸는 공간을 제어하는 세 가지 중요한 속성이 있는데, 이는 `padding`, `border`, 그리고 `margin`입니다.

요소의 `padding`은 요소의 콘텐츠와 그 `border` 사이의 공간을 제어합니다.

파란 상자와 빨간 상자가 노란 상자 안에 중첩되어 있는 것을 볼 수 있습니다. 빨간 상자는 파란 상자보다 더 많은 `padding`을 가지고 있습니다.

파란 상자의 `padding`을 증가시키면 텍스트와 그 주변의 테두리 간의 거리(`padding`)가 증가합니다.

# --instructions--

파란 상자의 `padding`을 빨간 상자의 것과 동일하게 변경합니다.

# --hints--

`blue-box` 클래스는 요소에 `20px`의 `padding`을 부여합니다.

```js
assert($('.blue-box').css('padding-top') === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
