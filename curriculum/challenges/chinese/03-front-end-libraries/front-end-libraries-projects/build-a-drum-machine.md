---
id: 587d7dbc367417b2b2512bae
title: 构建一台鼓式机器
challengeType: 3
forumTopicId: 301370
dashedName: build-a-drum-machine
---

# --description--

**目标：** 在 [CodePen.io](https://codepen.io) 上实现一个功能类似 <https://codepen.io/freeCodeCamp/full/MJyNMd> 的 App。

在满足以下[需求](https://en.wikipedia.org/wiki/User_story)并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、jQuery 来完成这个挑战。但鉴于这个章节的学习内容与前端框架相关，推荐使用一款前端框架（比如 React）来完成这个挑战；不推荐你使用前面没有提到的技术，否则风险自负。我们有计划新增其他前端框架课程，例如 Angular 和 Vue，不过目前还没有这些内容。我们会接受并尽力处理你在使用建议的技术栈过程中遇到的问题。编码愉快！

**需求 1：** 我应该可以看到一个具有`id="drum-machine"`属性的外层容器，该容器包含了其他所有元素。

**需求 2：** 在具有`#drum-machine`属性的元素内，我应该能看到一个具有 `id="display"` 属性的元素。

**需求 3：** 在具有`#drum-machine`属性的元素内，我应该能看到 9 个可以点击的鼓垫元素，且每个鼓垫元素都应该有一个值为`drum-pad`的 class 属性。一个用于描述触发鼓垫音频片段的特殊 id，以及以下键值之一的文本内容：Q、W、E、A、S、D、Z、X、C。这些鼓垫必须按照以上顺序排列。

**需求 4：** 在每一个具有`.drum-pad`属性的元素内，应该有一个具有指向音频片段地址的`src`属性的 HTML5`audio`元素，一个值为`clip`的 class 属性，以及一个 id 属性，它的值应该是其父元素`.drum-pad`的文本内容（例如`id="Q"`、`id="W"`、`id="E"` 等等）。

**需求 5：** 当我点击一个具有`.drum-pad`属性的元素时，应该触发它的子元素`audio`包含的音频片段。

**需求 6：** 当我按下每一个`.drum-pad`元素的关联键时，应该触发其子元素`audio`包含的音频片段（例如：按下 Q 键应该触发包含字符串 "Q" 的鼓垫，按下 W 键应该触发包含字符串 "W" 的鼓垫等等）。

**需求 7：** 当触发一个具有`.drum-pad`属性的元素时，`#display`元素内应该展示这个触发元素关联音频片段的描述字符串（每一个字符串都应该是独一无二的）。

你可以 fork [这个 CodePen pen 项目](http://codepen.io/freeCodeCamp/pen/MJjpwO) 来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`。

一旦你完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```
