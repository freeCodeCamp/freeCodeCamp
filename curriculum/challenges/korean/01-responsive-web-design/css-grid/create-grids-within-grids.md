---
id: 5a94fe8569fb03452672e464
title: 그리드 안에 그리드 생성하기
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

한 요소를 그리드로 바꾸는 것은 오직 직계 하위 요소들의 행동에만 영향을 미칩니다. 그래서 직계 하위 요소를 그리드로 바꾸면 그리드 안에 그리드를 가지게 됩니다.

예를 들면 `item3` 클래스를 가진 요소의 `display` and `grid-template-columns` 속성들을 설정하여 그리드 안에 그리드를 생성할 수 있습니다.

# --instructions--

`display` and `grid-template-columns`사용하여 `item3` 클래스를 가진 요소를 `auto`와 `1fr` 너비를 가진 두 열로 된 그리드로 변환하세요.

# --hints--

`item3` 클래스는 `auto`와 `1fr` 값을 가진 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

`item3` 클래스는 `grid` 값을 가진 `display` 속성을 가져야 합니다.

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
