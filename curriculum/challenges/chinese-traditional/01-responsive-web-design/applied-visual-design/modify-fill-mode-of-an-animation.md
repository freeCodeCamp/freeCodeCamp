---
id: 58a7a6ebf9a6318348e2d5aa
title: 修改動畫的填充模式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

太棒了，但是現在還不完美。 注意動畫在 `500ms` 之後重置了，所以按鈕又變成了之前的顏色。 而我們想要的效果是按鈕在懸停時始終高亮。

爲此，我們可以通過把 `animation-fill-mode` 設置成 `forwards` 來實現。 `animation-fill-mode` 指定了在動畫結束時元素的樣式： 你可以這樣設置：

```css
animation-fill-mode: forwards;
```

# --instructions--

設置 `button:hover` 的 `animation-fill-mode` 屬性爲 `forwards`，使用戶把鼠標懸停在按鈕上時，按鈕保持高亮。

# --hints--

`button:hover` 應有一個值爲 `forwards` 的 `animation-fill-mode` 屬性。

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
