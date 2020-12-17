---
id: bad87fee1348bd9aedf08808
title: 字体如何优雅降级
challengeType: 0
videoUrl: 'https://scrimba.com/c/cpVKBfQ'
forumTopicId: 18304
---

# --description--

所有浏览器都有几种默认字体。这些通用字体包括`monospace`，`serif`和`sans-serif`。

当字体不可用，你可以告诉浏览器通过 “降级” 去使用其他字体。

例如，如果你想将一个元素的字体设置成`Helvetica`，当`Helvetica`不可用时，降级使用`sans-serif`字体，那么可以这样写：

```css
p {
  font-family: Helvetica, sans-serif;
}
```

通用字体名字不区分大小写。同时，也不需要使用引号，因为它们是 CSS 关键字。

# --instructions--

首先，添加`monospace`字体到`h2`元素里，它现在拥有着`Lobster`和`monospace`两种字体。

在上一个挑战里，你已经通过`link`标签引入谷歌`Lobster`字体。现在让我们注释掉谷歌`Lobster`字体的引入（使用我们之前学过的`HTML`注释），使字体失效。你会发现`h2`元素降级到了`monospace`字体。

**注意：**  
如果电脑已经安装了`Lobster`字体，你将看不到这个降级过程，因为浏览器会找到该字体。

# --hints--

`h2`元素应该含有`Lobster`字体。

```js
assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);
```

当`Lobster`字体失效时，`h2`元素应该降级使用`monospace`字体。

```js
assert(
  /\s*h2\s*\{\s*font-family\:\s*(\'|")?Lobster(\'|")?,\s*monospace\s*;\s*\}/gi.test(
    code
  )
);
```

通过添加`<!--`，注释掉谷歌`Lobster`字体的引入。

```js
assert(new RegExp('<!--[^fc]', 'gi').test(code));
```

确保注释要以`-->`结束。

```js
assert(new RegExp('[^fc]-->', 'gi').test(code));
```

# --solutions--

