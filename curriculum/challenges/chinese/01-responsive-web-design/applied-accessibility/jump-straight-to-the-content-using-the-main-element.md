---
id: 587d774e367417b2b2512a9f
title: 使用 main 元素包裹主题内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
---

# --description--

HTML5 添加了诸如`main`、`header`、`footer`、`nav`、`article`、`section`等大量新标签，开发人员提供更多的选择，也兼顾了无障碍特性。

默认情况下，浏览器呈现这些新标签的方式与`div`相似。然而，合理地使用它们，可以使你的标签更加的语义化。辅助技术（如：屏幕阅读器）可以通过这些标签为用户提供更加准确的、易于理解的页面信息。

`main`标签用于呈现网页的主体内容，且每个页面只能有一个。这意味着它只应包含与页面中心主题相关的信息，而不应包含如导航连接、网页横幅等可以在多个页面中重复出现的内容。

`main`标签的语义化特性可以使辅助技术快速定位到页面的主体。 如果页面顶部有一个 “跳转到主要内容” 的链接，那么辅助设备会自动识别`main`标签，实现这个功能。

# --instructions--

Camper Cat 对他的忍者武器页面有一些新的想法，请帮助他在`header`标签和`footer`标签（在接下来的挑战中会详细介绍）之间添加完整`main`标签来使页面语义化。在这个挑战中，你可以先让`main`为空。

# --hints--

你的代码应该有一个`main`标签。

```js
assert($('main').length == 1);
```

`main`标签应该在`header`标签与`footer`标签之间。

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --solutions--

