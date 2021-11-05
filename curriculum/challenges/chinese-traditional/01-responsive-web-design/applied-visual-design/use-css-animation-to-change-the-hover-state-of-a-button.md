---
id: 587d78a7367417b2b2512ae0
title: 使用CSS動畫更改按鈕的懸停狀態
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

你可以在按鈕懸停時使用 `@keyframes` 改變按鈕的顏色。

下面是在圖片懸停時改變圖片寬度的例子：

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

注意 `ms` 代表毫秒，1000ms 等於 1s。

使用 `@keyframes` 來改變 `button` 元素的 `background-color`，使其在懸停時變成 `#4791d0`。 `@keyframes` 規則應該只有一個 `100%` 條目。

# --hints--

@keyframes 規則的 `animation-name` 應該是 background-color。

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

在 `@keyframes` 爲 100% 的位置，應將 `background-color` 改成 `#4791d0`。

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
