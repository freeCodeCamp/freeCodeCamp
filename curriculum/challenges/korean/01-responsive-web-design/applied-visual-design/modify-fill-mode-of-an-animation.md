---
id: 58a7a6ebf9a6318348e2d5aa
title: 애니메이션의 채우기 모드를 수정하는 방법
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

좋아 보이는군요, 하지만 아직 올바르게 작동하지는 않습니다. `500ms`가 지난 후에 애니메이션이 재설정되어 버튼이 원래 색상으로 되돌아 가는 것을 주목하세요. 버튼이 하이라이트 된 상태로 유지되도록 만들어야 합니다.

그렇게 하기 위해서는 `animation-fill-mode` 속성을 `forwards`로 설정할 수 있습니다. `animation-fill-mode` 속성은 애니메이션이 완료된 후에 요소에 적용되는 스타일을 지정합니다. 다음과 같이 설정해보세요.

```css
animation-fill-mode: forwards;
```

# --instructions--

`button:hover`의 `animation-fill-mode` 속성을 `forwards`로 설정하여 사용자가 해당 버튼 위로 이동할 때 버튼이 강조된 상태를 유지하도록합니다.

# --hints--

`button:hover`의 `animation-fill-mode` 속성 값은 `forwards`여야 합니다.

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
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
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
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
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
