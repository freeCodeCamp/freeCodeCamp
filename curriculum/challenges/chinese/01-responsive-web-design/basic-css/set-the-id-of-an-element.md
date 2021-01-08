---
id: bad87eee1348bd9aede07836
title: 设置元素的 id
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN6MEc2'
forumTopicId: 18279
---

# --description--

除了 class 属性，每一个 HTML 元素都有一个 `id` 属性。

使用 `id` 有几个好处：你可以通过 `id` 选择器来改变单个元素的样式。在稍后的课程中，你还会了解到如何在 JavaScript 里面通过 `id` 来选择和操作元素。

根据规范，`id` 属性应是唯一的。尽管浏览器并非必须执行这条规范，但 `id` 唯一是广泛认可的最佳实践。因此，请不要给多个元素设置相同的 `id`。

设置 `h2` 元素的 id 为 `cat-photo-app` 的代码如下：

`<h2 id="cat-photo-app">`

# --instructions--

请将 `form` 元素的 id 设置为 `cat-photo-form`。

# --hints--

`form` 元素的 id 应为 `cat-photo-form`。

```js
assert($('form').attr('id') === 'cat-photo-form');
```

# --solutions--

