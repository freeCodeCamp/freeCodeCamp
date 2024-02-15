---
id: 5a9036ee38fddaf9a66b5d34
title: 행열의 크기를 변경하기 위한 CSS 그리드 단위 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

CSS 그리드에서 행열의 크기를 정의하기 위해 `px`와 `em`같이 절대/상대 단위를 사용할 수 있습니다. 다음과 같은 것도 사용할 수 있습니다:

`fr`: 행 혹은 열을 사용 가능한 공간의 일부로 설정,

`auto`: 행 혹은 열을 자동적으로 그 내용의 너비나 높이로 설정

`%`: 행 혹은 열을 컨테이너 너비의 백분율로 조정

여기 프리뷰에서 결과를 생성하는 코드입니다:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

이 코드는 다섯 개의 열을 생성합니다. 첫 번째 열은 내용의 너비만큼, 두 번째 열은 50px, 세 번째 열은 컨테이너의 10%로 설정되며, 마지막 두 열에 대해서는 나머지 공간이 세 구역으로 나누어지고, 네 번째 열에는 두 구역이 할당되고, 다섯 번째 열에는 하나가 할당됩니다.

# --instructions--

1fr, 100px 및 2fr의 너비를 갖는 세 열로 구성된 그리드를 만드세요.

# --hints--

`container` 클래스는 `1fr`, `100px` 그리고 `2fr` 너비를 준 세 개의 열을 가진 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
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
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
