---
id: 5a94fe5469fb03452672e461
title: auto-fill로 유동적인 레이아웃 생성하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
dashedName: create-flexible-layouts-using-auto-fill
---

# --description--

repeat 함수는 <dfn>auto-fill</dfn>이라는 옵션과 함께 사용됩니다. 이는 컨테이너의 크기에 따라 가능한 범위 내에서 원하는 크기의 행 혹은 열을 자동으로 삽입할 수 있게 해줍니다. 다음과 같이 `auto-fill`과 `minmax`을 조합하면 유연한 레이아웃을 생성할 수 있습니다.

```css
repeat(auto-fill, minmax(60px, 1fr));
```

컨테이너의 크기가 변할 때 이 설정은 60px의 열을 계속 삽입하고 다른 하나를 삽입할 때까지 열을 계속 늘립니다. **주의:** 컨테이너가 한 행안에 아이템을 모두 담을 수 없다면 아이템은 새로운 행에 위치하게 됩니다.

# --instructions--

첫번째 그리드에서 최소 너비 `60px`과 최대 너비 `1fr`을 가진 열로 그리드를 채우도록 `repeat`과 `auto-fill`을 사용하세요. 그런 다음에 auto-fill의 효과를 확인하기 위해 미리보기의 크기를 조정하세요.

# --hints--

`container` 클래스는 최소 `60px`와 최대 `1fr` 너비를 가진 열로 grid를 채우는 `repeat`와 `auto-fill`을 가진 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
