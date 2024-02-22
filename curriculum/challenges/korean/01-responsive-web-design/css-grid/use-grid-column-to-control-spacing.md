---
id: 5a90372638fddaf9a66b5d38
title: 간격 제어를 위한 grid-column 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cnzkDSr'
forumTopicId: 301136
dashedName: use-grid-column-to-control-spacing
---

# --description--

지금까지 살펴본 모든 속성은 그리드 컨테이너를 위한 것입니다. `grid-column` 속성은 그리드 아이템 자체에 사용되는 첫 번째 속성입니다.

그리드를 생성하는 가상의 수평, 수직선을 <dfn>라인</dfn>이라고 합니다. 이 라인들은 그리드의 왼쪽 모서리에서 1로 시작하여 열로는 오른쪽 행으로는 아래로 하나씩 증가한 숫자가 매겨집니다.

다음은 3x3 그리드의 라인 형태입니다.

<div style='position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;'><p style='left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;'>열 라인</p><p style='left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>1</p><p style='left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>2</p><p style='left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>3</p><p style='left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>4</p><p style='left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;'>행 라인</p><p style='left:-10%;top:-10%;font-size:130%;position:absolute;'>1</p><p style='left:-10%;top:21%;font-size:130%;position:absolute;'>2</p><p style='left:-10%;top:53%;font-size:130%;position:absolute;'>3</p><p style='left:-10%;top:85%;font-size:130%;position:absolute;'>4</p><div style='left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;'></div></div>

아이템이 차지할 열의 수를 제어하려면, 원하는 라인 번호와 함께 아이템이 시작하고 끝날 위치를 지정하는 `grid-column` 속성을 사용할 수 있습니다.

여기 예시가 있습니다.

```css
grid-column: 1 / 3;
```

이렇게 하면 항목이 그리드의 왼쪽에 있는 첫 번째 수직 라인에서 시작하여 그리드의 3번째 라인까지 이어지며, 두 개의 열을 차지합니다.

# --instructions--

`item5` 클래스를 가진 아이템이 그리드의 마지막 두 열을 차지하도록 만드세요.

# --hints--

`item5` 클래스는 `grid-column` 속성을 가져야 합니다.

```js
assert(
  __helpers
    .removeWhiteSpace($('style').text())
    .match(/\.item5{.*grid-column:.*}/g)
);
```

`item5` 클래스는 그리드의 마지막 두 열을 차지하도록 하는 `grid-column` 속성을 가져야 합니다.

```js
const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
const result = colStart.toString() + colEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
  }

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
