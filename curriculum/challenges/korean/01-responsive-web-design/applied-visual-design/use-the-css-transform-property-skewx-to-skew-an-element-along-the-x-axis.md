---
id: 587d78a6367417b2b2512adb
title: CSS Transform 속성의 skewX를 사용하여 요소를 X축을 따라 기울이기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

`transform` 속성의 다음 기능은 `skewX()`로, 선택한 요소를 X (수평) 축을 기준으로 주어진 각도만큼 기울입니다.

아래의 코드는 문단 요소를 X축을 기준으로 -32도를 기울입니다.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

`transform` 속성을 사용하여 id가 `bottom`인 요소를 X축을 기준으로 24도 기울여보세요.

# --hints--

id가 `bottom`인 요소는 X축을 따라 24도를 비틀어야 합니다.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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
