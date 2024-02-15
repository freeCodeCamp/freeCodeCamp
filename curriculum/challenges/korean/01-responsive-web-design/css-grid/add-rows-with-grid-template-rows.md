---
id: 5a9036e138fddaf9a66b5d33
title: grid-template-rows로 행 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

이전 과제에서 생성한 그리드는 자동으로 행의 수를 설정하게 됩니다. 행을 수동으로 조정하려면 이전 과제에서 `grid-template-columns`를 사용한 것처럼 `grid-template-rows` 속성을 사용하면 됩니다.

# --instructions--

높이가 `50px`인 두개의 행을 그리드에 추가하세요.

# --hints--

`container` 클래스는 두 개의 `50px`을 가진 `grid-template-rows` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```
