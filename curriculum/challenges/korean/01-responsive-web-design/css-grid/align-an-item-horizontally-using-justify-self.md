---
id: 5a90374338fddaf9a66b5d3a
title: justify-self로 하나의 아이템 수평 정렬하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

CSS 그리드에서는 각 아이템의 내용은 <dfn>셀</dfn>이라고 부르는 상자 안에 위치합니다. 한 그리드 아이템에 `justify-self` 속성을 사용하여 셀 내의 내용의 위치를 수평 정렬할 수 있습니다. 기본값으로 이 속성은 내용이 셀 전체를 차지하도록 만드는 `stretch` 값을 가집니다. 이 CSS 그리드 속성은 다른 값들도 받습니다.

`start`: 셀의 좌측에 내용을 정렬

`center`: 셀의 중앙에 내용을 정렬

`end`: 셀의 우측에 내용을 정렬

# --instructions--

`item2` 클래스를 가진 아이템을 중앙에 위치시키도록 `justify-self` 속성을 사용하세요.

# --hints--

`item2` 클래스는 `center` 값을 가진 `justify-self` 속성을 가져야 합니다.

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.item2 {justify-self: center;}</style>
```
