---
id: bad87fee1348bd9aedf08736
title: 给 HTML 的 body 元素添加样式
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

现在让我们来讨论一下 CSS 中的继承。

每一个 HTML 页面都有一个 `body` 元素。

# --instructions--

我们可以通过设置 `background-color` 的属性值为 黑色，来证明 `body` 元素的存在。

请将以下代码添加到 `style` 标签里面：

```css
body {
  background-color: black;
}
```

# --hints--

`body` 元素的 `background-color` 应为黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

确保 CSS 规则格式书写正确，左右大括号也应匹配。

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

确保 CSS 规则以分号结尾。

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
