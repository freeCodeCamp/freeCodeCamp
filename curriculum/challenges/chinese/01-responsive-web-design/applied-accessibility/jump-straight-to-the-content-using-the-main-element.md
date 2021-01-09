---
id: 587d774e367417b2b2512a9f
title: 使用 main 元素包裹主题内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
---

# --description--

HTML5 引入了诸如 `main`、`header`、`footer`、`nav`、`article`、`section` 等大量新标签。这不仅为开发人员提供了更多的选择，同时也提升了网页的可访问性。

默认情况下，浏览器呈现这些新标签的方式与 `div` 相似。但如果我们能合理地使用这些标签，就可以让我们的代码更加语义化且易懂。由于这些标签可以表明其内容的含义，因此辅助工具（如：屏幕阅读器）可以通过这些标签为用户提供更加准确且易于理解的页面信息和导航信息。

`main` 标签用于呈现网页的主体内容，且每个页面应只有一个。这意味着它只应包含与页面中心主题相关的信息，而不应包含如导航连接、网页横幅等需要在多个页面中重复出现的内容。

`main` 标签的语义化特性可以让辅助工具快速定位到页面的主体。辅助设备会识别 `main` 标签，就好像页面顶部出现一个“跳转到主要内容”的按钮那样。

# --instructions--

Camper Cat 对他的忍者武器页面有一些新的想法，请帮他在 `header` 标签和 `footer` 标签（在接下来的挑战中会详细介绍）之间添加一个 `main` 标签。在这个挑战中，你可以先让 `main` 标签里的内容文本为空。

# --hints--

应存在一个 `main` 标签。

```js
assert($('main').length == 1);
```

`main` 标签应位于 `header` 标签与 `footer` 标签之间。

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --solutions--

