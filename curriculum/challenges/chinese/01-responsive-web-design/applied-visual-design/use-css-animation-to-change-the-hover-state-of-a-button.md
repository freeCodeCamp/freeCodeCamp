---
id: 587d78a7367417b2b2512ae0
title: 使用CSS动画更改按钮的悬停状态
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

你可以在按钮悬停时使用 `@keyframes` 改变按钮的颜色。

下面是在图片悬停时改变图片宽度的例子：

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

注意 `ms` 代表毫秒，1000ms 等于 1s。

使用 `@keyframes` 来改变 `button` 元素的 `background-color`，使其在悬停时变成 `#4791d0`。 `@keyframes` 规则应该只有一个 `100%` 条目。

# --hints--

@keyframes 规则的 `animation-name` 应该是 background-color。

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

在 `@keyframes` 为 100% 的位置，应将 `background-color` 改成 `#4791d0`。

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
