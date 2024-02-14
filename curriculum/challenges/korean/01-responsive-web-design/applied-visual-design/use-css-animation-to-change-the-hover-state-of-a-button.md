---
id: 587d78a7367417b2b2512ae0
title: CSS 애니메이션을 사용하여 버튼의 호버 상태 변경하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

CSS의 `@keyframes`를 사용하여 마우스 호버(hover) 시 버튼의 색상을 변경할 수 있습니다.

다음은 마우스를 호버했을 때 이미지의 너비를 변경하는 예제입니다.

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

`ms`는 밀리초를 뜻하며 1000밀리초(1000ms)는 1초(1s)입니다.

CSS의 `@keyframes`를 사용하여 유저가 마우스를 호버했을 때 `button` 요소의 `background-color`가 `#4791d0` 색이 되도록 변경하십시오. `@keyframes` 규칙에는 `100%`항목만 있어야 합니다.

# --hints--

@keyframes 규칙에서 `animation-name`은 background-color가 되어야 합니다.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

`@keyframes`에는 100%일 때 `background-color`를 `#4791d0`색으로 변경하는 규칙이 하나여야 합니다.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }


</style>

<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }

  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
