---
id: 587d78a6367417b2b2512adc
title: CSS 변형 속성인 SkewY를 사용하여 요소를 Y축을 따라 기울이는 방법
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

선택한 요소를 주어진 각도로 X축을 따라 기울이는 `skewX()` 함수가 있다면, `skewY()` 속성은 요소를 Y (수직) 축을 따라 기울이게 됩니다.

# --instructions--

`transform` 속성을 사용하여 `top` id를 가진 요소를 Y축을 따라 -10도만큼 기울이세요.

# --hints--

`top` id를 가진 요소는 Y축을 따라 -10도만큼 기울어야 합니다.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
