---
id: bad87fee1348bd9aedf08808
title: 字体如何优雅降级
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
---

# --description--

所有浏览器都有几种默认字体，包括`monospace`、`serif` 和 `sans-serif`。

在字体不可用的时候，你可以告诉浏览器通过“降级”去使用其他字体。

如果你想将一个元素的字体设置成 `Helvetica`，但当 `Helvetica` 不可用时，降级使用 `sans-serif` 字体，那么可以这样写：

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字体名不区分大小写。同时，也不需要使用引号，因为它们是 CSS 中的关键字。

# --instructions--

首先，添加 `monospace` 字体到 `h2` 元素里，它现在拥有 `Lobster` 和 `monospace` 两种字体。

在上一个挑战里，你已经通过 `link` 标签从谷歌字体库引入了 `Lobster` 字体。现在让我们使用之前学习的 HTML 注释，将 `Lobster` 字体的引入注释掉，这样一来，引入的 `Lobster` 字体会失效。此时，你会发现 `h2` 元素降级到了 `monospace` 字体。

**注意：**如果你的电脑里已经安装了 `Lobster` 字体，你就看不到这个降级过程，因为浏览器还是会在你的电脑中找到该字体。

# --hints--

`h2` 元素的字体应设置为 `Lobster`。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

当 `Lobster` 字体失效时，`h2` 元素应该降级使用 `monospace` 字体。

```js
assert(
  /\s*h2\s*\{\s*font-family\:\s*(\'|")?Lobster(\'|")?,\s*monospace\s*;\s*\}/gi.test(
    code
  )
);
```

通过添加`<!--`，注释掉 `Lobster` 字体的引入。

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

确保注释要以 `-->` 结束。

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --solutions--

