---
id: bad87fee1348bd9acdf08812
title: 调整图片的大小
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9MmCP'
forumTopicId: 18282
---

# --description--

CSS 的`width`属性可以控制元素的宽度。图片的`width`宽度类似于字体的`px`（像素)值。

假如，你想创建一个叫`larger-image`的 CSS class 来控制 HTML 元素的宽度为 500px，我们可以这样做：

```html
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

# --instructions--

创建一个`smaller-image`的 CSS class，设置图片的宽度为 100px。

**注意：**  
由于不同浏览器的差异性，你可能需要将浏览器缩放到 100% 来通过该挑战。

# --hints--

`img`元素应该含有`smaller-image` class。

```js
assert(
  $("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') ===
    'smaller-image'
);
```

图片宽度应为 100px（像素），且浏览器缩放应为默认 100%。

```js
assert($('img').width() === 100);
```

# --solutions--

