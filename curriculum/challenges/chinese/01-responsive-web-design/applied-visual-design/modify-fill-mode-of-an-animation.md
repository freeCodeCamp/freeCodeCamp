---
id: 58a7a6ebf9a6318348e2d5aa
title: 修改动画的填充模式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

太棒了，但是现在还不完美。 注意动画在 `500ms` 之后重置了，所以按钮又变成了之前的颜色。 而我们想要的效果是按钮在悬停时始终高亮。

为此，我们可以通过把 `animation-fill-mode` 设置成 `forwards` 来实现。 `animation-fill-mode` 指定了在动画结束时元素的样式： 你可以这样设置：

```css
animation-fill-mode: forwards;
```

# --instructions--

设置 `button:hover` 的 `animation-fill-mode` 属性为 `forwards`，使用户把鼠标悬停在按钮上时，按钮保持高亮。

# --hints--

`button:hover` 应有一个值为 `forwards` 的 `animation-fill-mode` 属性。

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
