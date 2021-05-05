---
id: bad87fee1348bd9aedf08736
title: 給 HTML 的 body 元素添加樣式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

現在讓我們來討論一下 CSS 中的繼承。

每一個 HTML 頁面都有一個 `body` 元素。

# --instructions--

我們可以通過設置 `background-color` 的屬性值爲 黑色，來證明 `body` 元素的存在。

請將以下代碼添加到 `style` 標籤裏面：

```css
body {
  background-color: black;
}
```

# --hints--

`body` 元素的 `background-color` 應爲黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

確保 CSS 規則格式書寫正確，左右大括號也應匹配。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

確保 CSS 規則以分號結尾。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
