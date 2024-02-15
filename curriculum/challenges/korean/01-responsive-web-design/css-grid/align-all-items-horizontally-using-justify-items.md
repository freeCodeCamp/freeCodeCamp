---
id: 5a90376038fddaf9a66b5d3c
title: justify-items로 모든 아이템 수평 정렬하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

CSS 그리드에 동일하게 정렬하고 싶을 때가 있습니다. 이전에 배운 속성들을 사용하여 개별적으로 정렬하거나 그리드 컨테이너에 `justify-items`을 사용하여 한 번에 수평 정렬을 시킬 수 있습니다. 이 속성은 이전 두 과제에서 배운 모두 같은 값을 받을 수 있습니다. grid에 있는 **모든** 아이템을 원하는 정렬로 옮겨주는 게 차이가 있습니다.

# --instructions--

모든 아이템을 수평적으로 중심에 맞추도록 이 속성을 사용하세요.

# --hints--

`container` 클래스 `center`의 값을 가진 `justify-items` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
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
    /* Only change code below this line */


    /* Only change code above this line */
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
<style>.container {justify-items: center;}</style>
```
