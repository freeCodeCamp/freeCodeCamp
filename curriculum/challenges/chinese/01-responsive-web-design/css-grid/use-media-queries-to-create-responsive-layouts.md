---
id: 5a94fe7769fb03452672e463
title: 使用媒体查询创建响应式布局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cMbqeHk'
forumTopicId: 301138
---

# --description--

将 CSS 网格与使用媒体查询结合使用，如使用媒体查询重新排列网格区域、更改网格尺寸以及重新排列网格项位置，我们可以让制作出的网站更具响应性。

在右侧的预览区中，当网页可视区域的宽不小于 300px 时，列数从 1 变为 2。并且，广告（advertisement）区域会完全占据左列。

# --instructions--

当网页可视区域的宽不小于 `400px` 时，请让 header 区域完全占据最顶行，footer 区域完全占据最底行。

# --hints--

当网页可视区域的宽度为 `400px` 或以上时，class 为 `container` 的元素应具有 `grid-template-areas` 属性，其属性值能够使 footer 和 header 区域分别占据顶行和底行，advert 和 content 区域分别占据中间行的左列和右列。

```js
assert(
  code.match(
    /@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
  )
);
```

# --solutions--

