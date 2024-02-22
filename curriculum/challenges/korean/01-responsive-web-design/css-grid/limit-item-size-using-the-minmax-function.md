---
id: 5a94fe4469fb03452672e460
title: minmax 함수로 아이템 크기 제한하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

`grid-template-columns`와 `grid-template-rows`와 함께 사용할 수 있는 `minmax`라는 내장 함수가 있습니다. 그리드 컨테이너 크기가 변경될 때 아이템의 크기를 제한하는데 사용됩니다. 이를 위해 아이템에 수용할 수 있는 크기 범위를 지정해야 합니다. 여기 예시가 있습니다.

```css
grid-template-columns: 100px minmax(50px, 200px);
```

위 코드에서 `grid-template-columns`는 두 열을 만들도록 설정되었습니다; 첫번째 열은 100px의 너비를 가지고 두번째 열은 최소 50px, 최대 200px의 너비를 가집니다.

# --instructions--

`minmax` 함수를 사용하여 `repeat`안의 `1fr`를 최소 너비 `90px` 그리고 최대 너비 `1fr`를 가진 열 크기로 바꾼 후 미리보기 크기를 조정하여 효과를 확인하세요.

# --hints--

`container` 클래스는 최소 너비 `90px`와 최대 너비 `1fr`를 가진 3개의 열을 반복하도록 설정된 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
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
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
