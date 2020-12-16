---
id: bd7157d8c242eddfaeb5bd13
title: 构建一个 Markdown 文件预览器
challengeType: 3
forumTopicId: 301372
---

# --description--

**目标：** 在 [CodePen.io](https://codepen.io) 上实现一个功能类似 <https://codepen.io/freeCodeCamp/full/GrZVVO> 的 App。

在满足以下[需求](https://en.wikipedia.org/wiki/User_story)并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、jQuery 来完成这个挑战。但鉴于这个章节的学习内容与前端框架相关，推荐使用一款前端框架（比如 React）来完成这个挑战；不推荐你使用前面没有提到的技术，否则风险自负。我们有计划新增其他前端框架课程，例如 Angular 和 Vue，不过目前还没有这些内容。我们会接受并尽力处理你在使用建议的技术栈过程中遇到的问题。编码愉快！

**需求 1：** 我应该能看到一个具有`id="editor"`属性的`textarea`元素。

**需求 2：** 我应该能看到一个具有`id="preview"`属性的元素。

**需求 3：** 当我在具有`#editor`属性的元素内输入文本时，具有`#preview`属性的元素应该同步更新展示我键入的内容。

**需求 4：** 当我在具有`#editor`属性的元素内输入 Github 风格的 Markdown 内容时，文本应该以 HTML 的形式，把我所键入的内容渲染在具有`#preview`属性的元素中（提示：你不需要自己解析 Markdown——你可以引入一个叫做 Marked 的库来完成这项工作：<https://cdnjs.com/libraries/marked>）。

**需求 5：** 当我的 Markdown 预览器首次加载时，具有`#editor`属性的元素内的默认内容应该包含以下每个种类的至少一段有效的 Markdown 代码：标题（H1 标签）、次级标题（H2 标签）、链接、行内代码、代码块、列表、引用块、图片、加粗文本。

**需求 6：** 当我的 Markdown 预览器首次加载时，具有`#editor`属性的元素内容应该以 HTML 的形式渲染在具有`#preview`属性的元素中。

**可选需求（你无需通过这项测试）：** 我的 Markdown 预览器能够解析回车符并且将他们以`br`（换行）元素的形式渲染出来。

你可以 fork [这个 CodePen pen 项目](http://codepen.io/freeCodeCamp/pen/MJjpwO) 来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js`。

一旦你完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。

# --hints--


# --solutions--

