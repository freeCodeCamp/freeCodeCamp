---
id: bad87fee1348bd9aede08718
title: Color 엘리먼트에 RGB 값 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

CSS에서 색상을 표현하는 또 다른 방법은 `RGB` 값을 사용하는 것입니다.

검정색의 `RGB` 값은 다음과 같습니다:

```css
rgb(0, 0, 0)
```

하얀색의 `RGB` 값은 다음과 같습니다:

```css
rgb(255, 255, 255)
```

헥스 코드(hex code)처럼 6자리의 16진수를 사용하는 대신 `RGB`를 사용하면 0에서 255 사이의 숫자로 각 색상의 밝기를 지정할 수 있습니다.

계산을 해보면 한 색의 두 자리 숫자는 16 곱하기 16과 같아서 총 256개의 값이 나옵니다. 따라서 0부터 세기 시작하는 `RGB`는 헥스 코드와 가능한 값의 수가 정확히 일치합니다.

다음은 RGB 코드를 사용하여 `body`의 배경색을 orange로 변경하는 방법의 예시입니다.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

`body` 요소의 배경색에 있는 헥스 코드를 black에 대한 RGB 값인 `rgb(0, 0, 0)`로 바꿔주세요.

# --hints--

`body` 요소는 검정 배경색을 갖고 있어야 합니다.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

`body` 요소의 배경색을 검정색으로 지정하려면 `rgb`를 사용해야 합니다.

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
