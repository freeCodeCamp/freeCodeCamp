---
id: 5a858944d96184f06fd60d61
title: 첫 CSS 그리드 생성하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

`display` 속성을 `grid`로 설정하여 HTML 요소를 그리드 컨테이너로 변환하세요. 이는 CSS 그리드에 관련된 모든 속성을 사용할 수 있게 해줍니다.

**주의:** CSS 그리드에서 부모 요소는 <dfn>컨테이너</dfn>라 하고 그 자식 요소는 <dfn>아이템</dfn>이라고 합니다.

# --instructions--

`container` 클래스를 가진 div의 display를 `grid`로 바꾸세요.

# --hints--

`container` 클래스는 `grid` 값을 가지는 `display` 속성을 가져야 합니다.

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* Only change code below this line */


    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {display: grid;}</style>
```
