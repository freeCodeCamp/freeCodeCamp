---
id: 587d78b0367417b2b2512b05
title: 制作一个技术文档页面
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**目标：**在 [CodePen.io](https://codepen.io) 上创建一个与这个功能类似的 app：<https://codepen.io/freeCodeCamp/full/NdrKKL>。

在满足以下 [需求](https://en.wikipedia.org/wiki/User_story) 并能通过所有测试的前提下， 你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript 以及 CSS 来完成项目。 由于目前你只学到了 CSS 课程，所以我们建议你只使用 CSS 来完成这个项目，同时巩固一下你之前所学的内容。 你也可以使用 Bootstrap 或者 SASS。 我们不推荐你在这个项目中使用其他技术（比如 jQuery、React、Angular 或 Vue）。 在后续的其他项目中，你将有机会使用像是 React 等其他技术栈。 我们会接受并尝试修复你在使用推荐技术栈创建项目时报告的问题。 祝你编码愉快！

**需求 1：**此 app 中应存在一个 `id="main-doc"` 的 `main` 元素，它包含页面的主要内容（技术文档）。

**需求 2：**在 `#main-doc` 元素内，应有一些 `section` 元素，每个元素的 class 都应为 `main-section`。 应存在至少 5 个这样的元素。

**需求 3：**每个 `.main-section` 内的第一个元素应为 `header` 元素，其中包含描述该部分主题的内容文本。

**需求 4：**类名为 `main-section` 的每个 `section` 元素都应有一个与包含在其中的每个 `header` 的文本相对应的 id， 所有空格都应该被替换为下划线（例如，包含标题 “JavaScript and Java” 的 `section` 应有一个相应的 `id="JavaScript_and_Java"`）。

**需求 5：**所有 `.main-section` 元素内总计应有至少 10 个 `p` 元素。

**需求 6：**所有 `.main-section` 元素内总计应有至少 5 个 `code` 元素。

**需求 7：**所有 `.main-section` 元素内总计应有至少 5 个 `li` 元素。

**需求 8：**此 app 中应存在一个 `id` 为 `"navbar"` 的 `nav` 元素。

**需求 9：**navbar 元素内应有一个 `header` 元素，其中包含描述技术文档主题的内容文本。

**需求 10：**此外，navbar 元素应包含 class 为 `nav-link` 的 `a` 元素， 每个 class 为 `main-section` 的元素都需要有一个。

**需求 11：**navbar 中的 `header` 元素应置于 navbar 中所有 `a` 元素之前。

**需求 12：**所有 class 为 `nav-link` 的元素都需要包含与 `section` 中 `header` 相应的内容文本。例如，对于一个文本为 "Hello world" 的一节或标题，你的 navbar 中也应存在一个内容文本为 "Hello world" 的元素。

**需求 13：**当点击 navbar 中一个元素时，页面应滚动到 `main-doc` 中的相应部分。例如，点击文本为 "Hello world" 的 `nav-link` 元素的时候，页面应滚动到包含相同内容的 `header` 和 id 所处的 `section` 元素。

**需求 14：**在常规尺寸的设备上（如笔记本电脑和台式机），`id="navbar"` 的元素应显示在屏幕左侧，且始终对用户可见。

**需求 15：**在此 app 中，应至少使用一次媒体查询。

你可以 fork [这个 CodePen 项目](https://codepen.io/freeCodeCamp/pen/MJjpwO) 来构建你的项目。 也可以使用此 CDN 链接在任何你喜欢的环境中运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`。

完成项目并通过所有测试后，请输入你的项目在 CodePen 上的链接并提交。

# --solutions--

```html
// solution required
```
