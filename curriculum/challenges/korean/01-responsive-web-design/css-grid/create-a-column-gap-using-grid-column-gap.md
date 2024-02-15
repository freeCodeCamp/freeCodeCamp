---
id: 5a9036ee38fddaf9a66b5d35
title: grid-column-gap으로 열 간격 생성하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

지금까지 생성해 온 그리드는 열의 간격이 넓지 않았습니다. 열 사이에 간격을 줘야할 때가 있습니다. 열 사이에 간격을 주려면 아래와 같이 `grid-column-gap` 속성을 사용하면 됩니다.

```css
grid-column-gap: 10px;
```

이는 모든 열 사이에 10px 간격의 공백을 생성합니다.

# --instructions--

그리드의 열 사이에 `20px` 간격을 주세요.

# --hints--

`container` 클래스는 `20px`의 갑을 가지는 `grid-column-gap` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-column-gap: 20px;}</style>
```
