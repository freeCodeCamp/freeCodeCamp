---
id: 587d78a5367417b2b2512ad6
title: CSS 선형 그라데이션 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

HTML 요소에 색상을 적용하는 것은 단일 평면 색조에 제한되지 않습니다. CSS는 요소에 색상 전환 또는 그라데이션이라고도 하는 기능을 제공합니다. 이 기능은 `background` 속성의 `linear-gradient()` 함수를 통해 사용할 수 있습니다. 여기 일반적인 구문이 있습니다.

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

첫 번째 인수는 색상 전환을 시작하는 방향을 지정합니다. 이는 도(degree)로 나타낼 수 있으며, `90deg`는 수평 그라데이션(왼쪽에서 오른쪽으로), `45deg`는 대각선 그라데이션(왼쪽 아래에서 오른쪽 위로)을 만듭니다. 다음 인수들은 그라데이션에 사용되는 색상의 순서를 지정합니다.

예:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

`linear-gradient()`를 사용하여 `div` 요소의 `background`을 설정하고, 색상을 35도 방향으로 `#CCFFFF`에서 `#FFCCCC`으로 변경하도록 설정하세요.

# --hints--

`div` 요소는 지정된 방향과 색상을 가진 `linear-gradient` `background`을 가져야 합니다.

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```
