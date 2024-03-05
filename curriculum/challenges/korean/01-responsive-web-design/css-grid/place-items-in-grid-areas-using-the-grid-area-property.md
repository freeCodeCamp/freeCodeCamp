---
id: 5a94fe1369fb03452672e45d
title: grid-area 속성으로 그리드 영역에 아이템 배치하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

그리드 컨테이너에 대한 영역 템플릿을 이전 도전과 같이 생성한 후에는 원하는 아이템을 해당 이름을 참조하여 사용자 정의 영역에 배치할 수 있습니다. 이를 위해 다음과 같이 `grid-area` 속성을 사용하면 됩니다.

```css
.item1 {
  grid-area: header;
}
```

이 속성은 그리드가 `header`라는 영역에 `item1` 클래스를 배치하길 원한다고 알려주는 역할을 합니다. 이 경우에 전체 행이 `header` 영역으로 이름이 주어졌기 때문에 아이템이 전체 상단 행을 사용할 것입니다.

# --instructions--

`grid-area` 속성을 사용하여 `item5` 클래스를 가진 요소를 `footer` 영역에 배치하세요.

# --hints--

`item5` 클래스는 `footer` 값을 가진 `grid-area` 속성을 가져야 합니다.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
<style>.item5 {grid-area: footer;}</style>
```
