---
id: bad87eee1348bd9aede07836
title: 设置元素的 id
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6MEc2'
forumTopicId: 18279
---

# --description--

除了class属性，每一个 HTML 元素也都有`id`属性。

使用`id`有几个好处：你可以通过`id`选择器来改变单个元素的样式，稍后的课程中，你也会了解到在 JavaScript 里面，可以通过`id`来选择元素和操作元素。

`id`属性应是唯一的。浏览器不强迫执行这规范，但是这是广泛认可的最佳实践。所以，请不要给多个元素设置相同的`id`属性。

设置`h2`元素的 id 为`cat-photo-app`的方法如下：

`<h2 id="cat-photo-app">`

# --instructions--

设置`form`元素的 id 为`cat-photo-form`。

# --hints--

`form`元素的 id 应为`cat-photo-form`。

```js
assert($('form').attr('id') === 'cat-photo-form');
```

# --solutions--

