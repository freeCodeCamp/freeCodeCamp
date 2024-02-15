---
id: 5a94fe0569fb03452672e45c
title: 영역 템플릿으로 그리드 나누기
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

그리드의 셀을 한 <dfn>영역(area)</dfn>으로 묶을 수 있고 그 영역에 이름을 줄 수 있습니다. 아래처럼 컨테이너에 `grid-template-areas`을 사용하면 가능합니다.

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

위 코드는 그리드의 셀을 다음과 같이 네 영역으로 묶습니다: `header`, `advert`, `content`, `footer`. 각 단어는 셀을 나타내며 각 한 쌍의 따옴표는 행을 나타냅니다.

# --instructions--

템플릿을 변경하여 `footer` 영역이 전체 바닥 행을 늘리도록 만드세요. 영역을 정의하는 것은 즉시 시각적인 효과를 주지 않습니다. 이후에 어떻게 동작하는지 확인하기 위해 한 아이템이 한 영역을 사용하도록 만들 것입니다.

# --hints--

`container` 클래스는 `footer` 영역이 전체 바닥 행을 늘리는 `grid-template-areas` 속성을 가져야 합니다.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
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
