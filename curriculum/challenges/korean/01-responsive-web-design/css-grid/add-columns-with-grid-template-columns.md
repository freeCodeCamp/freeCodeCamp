---
id: 5a9036d038fddaf9a66b5d32
title: grid-template-columns으로 열 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

하나의 그리드 요소만 생성한다고 해서 다 된 것은 아닙니다. 그리드의 구조도 정의해야 합니다. 그리드에 열을 추가하려면 아래 보이는 것처럼 그리드 컨테이너에 `grid-template-columns` 속성을 사용해야 합니다.

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

이렇게 하면 그리드의 두 열에 각각 50px을 주게 됩니다. `grid-template-columns` 속성에 주어진 인자의 수는 그리드에서 열의 수를 나타내고 각 인자의 값은 각 열의 너비를 나타냅니다.

# --instructions--

그리드 컨테이너에 너비가 `100px`인 세 개의 열을 적용하세요.

# --hints--

`container` 클래스는 세 개의 `100px`을 가지는 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
    width: 100%;
    background: LightGray;
    display: grid;
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
