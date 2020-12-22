---
id: 587d78b0367417b2b2512b08
title: 创建一个媒体查询
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 1
---

# --description--

媒体查询是 CSS3 中引入的一项新技术，它可以根据不同的可视窗口大小调整内容的布局。可视窗口是用户在网页上的可见区域，根据访问网站的设备不同而不同。

媒体查询由媒体类型组成，如果媒体类型与展示网页的设备类型匹配，则应用对应的样式。你可以在媒体查询中使用各种选择器和样式。

下面是一个媒体查询的例子，当设备宽度小于或等于 100px 时返回内容：

`@media (max-width: 100px) { /* CSS Rules */ }`

以下定义的媒体查询，是当设备高度大于或等于 350px 时返回内容：

`@media (min-height: 350px) { /* CSS Rules */ }`

只有当媒体类型与所使用的设备的类型匹配时，媒体查询中的 CSS 属性才生效。

# --instructions--

增加一个媒体查询，当设备的高度小于或等于 800px 时，`p` 标签的 `font-size` 为 12px。

# --hints--

声明一个`@media`媒体查询，`height` 小于或等于 800px。

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .match(/@media\(max-height:800px\)/g)
);
```

当设备 `height` 小于或等于 800px 时，`p` 元素 `font-size` 应为 10px。

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .match(/@media\(max-height:800px\){p{font-size:10px;?}}/g)
);
```

当设备的`height`大于 800px 时，`p`元素的`font-size`初始值为 20px。

```js
assert(
  $('style')
    .text()
    .replace(/\s/g, '')
    .replace(/@media.*}/g, '')
    .match(/p{font-size:20px;?}/g)
);
```

# --solutions--

