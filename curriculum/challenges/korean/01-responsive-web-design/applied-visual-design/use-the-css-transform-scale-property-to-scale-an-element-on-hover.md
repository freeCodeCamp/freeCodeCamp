---
id: 587d78a5367417b2b2512ada
title: CSS transform scale 속성을 사용하여 요소를 호버 시 확대하는 방법
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

`transform` 속성에는 요소를 확대, 이동, 회전, 비틀기 등 다양한 기능을 적용할 수 있는 함수들이 있습니다. `:hover`와 같은 가상 클래스와 함께 사용될 때, `transform` 속성은 요소에 쉽게 상호 작용을 추가할 수 있습니다.

다음은 사용자가 그 위에 마우스를 올리면 문단 요소를 원래 크기의 2.1배로 확대하는 예제입니다.

```css
p:hover {
  transform: scale(2.1);
}
```

**참고:** `div` 요소에 변형을 적용하면 div에 포함된 모든 하위 요소에도 영향을 미칩니다.

# --instructions--

`div`의 `hover` 상태에 대한 CSS 규칙을 추가하고 사용자가 호버할 때 `div` 요소의 크기를 원래 크기의 1.1배로 확대하는 `transform` 속성을 사용하세요.

# --hints--

사용자가 호버할 때 `div` 요소의 크기는 1.1배로 확대되어야 합니다.

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
