---
id: 5a90375238fddaf9a66b5d3b
title: align-self로 하나의 아이템 수직 정렬하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

아이템을 수평 정렬할 수 있는 것처럼 수직 정렬할 수 있는 방법도 있습니다. 이를 위해 한 개의 아이템에 `align-self` 속성을 사용하면 됩니다. 이 속성은 이전 과제에서 살펴본 `justify-self`와 같은 값들을 받습니다.

# --instructions--

`item3` 클래스를 가진 아이템을 `end`에 정렬하세요.

# --hints--

`item3` 클래스는 `end` 값을 가진 `align-self` 속성을 가져야 합니다.

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item3 {align-self: end;}</style>
```
