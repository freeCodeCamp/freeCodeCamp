---
id: 587d78a7367417b2b2512ae1
title: CSS 애니메이션으로 움직임을 만들기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

요소가 `fixed` 또는 `relative`와 같은 특정 `position`을 가지고 있을 때, CSS offset 속성인 `right`, `left`, `top`, 그리고 `bottom`을 사용하여 애니메이션을 만들 수 있습니다.

아래 예제에서 보는 것처럼, `50%` 키프레임의 `top` 속성을 50px로 설정하고, 첫 번째(`0%`)와 마지막(`100%`) 키프레임에서는 0px로 설정하여 항목을 아래로 밀고 다시 위로 당길 수 있습니다

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

`div` 에니메이션에 수평 움직임을 더하세요. `@keyframes` 규칙에 `left` 오프셋 속성을 사용하여 무지개가 `0%`에서 0px로 시작하여 `50%`에서 25px로 이동하고, `100%`에서 -25px로 끝나도록합니다. 에디터에서 `top` 속성을 교체하지 마세요. 애니메이션에는 수직 및 수평 움직임 둘 다 있어야 합니다.

# --hints--

`@keyframes` 규칙의 `0%` 부분은 `left` 오프셋을 0px로 사용해야 합니다.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` 규칙의 `50%` 부분은 `left` 오프셋을 25px로 사용해야 합니다.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` 규칙의 `100%` 부분은 `left` 오프셋을 -25px로 사용해야 합니다.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
