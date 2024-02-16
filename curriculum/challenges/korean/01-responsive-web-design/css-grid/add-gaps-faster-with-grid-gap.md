---
id: 5a9036ee38fddaf9a66b5d37
title: grid-gap으로 간격 빠르게 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap`은 이전 과제에서 살펴본 `grid-row-gap`과 `grid-column-gap`의 축약 속성이며 사용하기 더 용이합니다. `grid-gap`이 하나의 값을 가진다면 모든 행열 사이에 하나의 간격을 생성하게 될 것입니다. 그러나 값이 두 개라면 첫번째 값은 행, 두번째 값은 열에 적용될 것입니다.

# --instructions--

행에 `10px`, 열에 `20px` 간격을 주도록 `grid-gap`을 사용하세요.

# --hints--

`container` 클래스는 행에 `10px`, 열에 `20px` 간격을 주는 `grid-gap` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
  )
);
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
<style>.container {grid-gap: 10px 20px;}</style>
```
