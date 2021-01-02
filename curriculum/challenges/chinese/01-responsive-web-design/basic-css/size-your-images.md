---
id: bad87fee1348bd9acdf08812
title: 调整图片的大小
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MmCP'
forumTopicId: 18282
---

# --description--

CSS 的 `width` 属性可以控制元素的宽度。和设置文本字号一样，我们会以 `px`（像素）为单位来设置图片的宽度。

例如，如果你想创建一个叫 `larger-image` 的 CSS `class` 来控制 HTML 元素的宽度为 500px，就可以这样写：

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

# --instructions--

创建一个叫 `smaller-image` 的 CSS `class`，并用它来设置图片宽度为 100px。

# --hints--

`img` 元素的 `class` 应包含 `smaller-image`。

```js
assert(
  $("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') ===
    'smaller-image'
);
```

图片宽度应为 100px。

```js
assert($('img').width() === 100);
```

# --solutions--

