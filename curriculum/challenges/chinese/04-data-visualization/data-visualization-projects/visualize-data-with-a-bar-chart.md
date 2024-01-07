---
id: bd7168d8c242eddfaeb5bd13
title: 用条形图可视化数据
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**目标：** 构建一个应用，功能和 <a href="https://bar-chart.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://bar-chart.freecodecamp.rocks</a> 类似。

完成以下需求，并且通过所有测试。 使用你需要的任何库或 API。 赋予它你自己的个人风格。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。 该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。 通过 D3 测试需要这些刻度，因为它们的位置被用来确定绘制元素的对齐方式。 你可以在这里 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 获取关于生成坐标轴的信息。 要求的 DOM 元素在每次测试时都会被查询。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。 我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 图表应该包含一个具有 `id="title"` 属性的标题。

**需求 #2：** 图表应该包含一个 `g` 元素作为 x 轴，并相应地具有 `id="x-axis"` 属性。

**需求 #3：** 图表应该包含一个 `g` 元素作为 y 轴，并相应地具有`id="y-axis"` 属性。

**需求 #4：** 两个轴都应包含多个刻度标签，每个标签具有 `class="tick"` 属性。

**需求 #5：** 在图表里，每个数据点都应该有一个具有 `class="bar"` 属性的 `rect` 元素来展示数据。

**需求 #6：** 每个 `.bar` 应该具有值为 `date` 的 `data-date` 属性以及值为 `GDP` 的 `data-gdp` 属性。

**需求 #7：** `.bar` 元素的 `data-date` 属性应与提供的数据的顺序相匹配。

**需求 #8：** `.bar` 元素的 `data-gdp` 属性应与提供的数据的顺序相匹配。

**需求 #9：** 每个 `.bar` 元素的高度应准确地表示其数据所对应的 `GDP` 值。

**需求 #10：** `data-date` 属性和它对应的 `.bar` 元素应与 x 轴上的相应的值对齐。

**需求 #11：** `data-gdp` 属性和它对应的 `.bar` 元素应与 y 轴上的相应的值对齐。

**需求 #12：** 我可以将鼠标悬停在某个区域上，并查看具有 `id="tooltip"` 属性的提示框，它会显示有关该区域的更多信息。

**需求 #13：** 提示框应该有 `data-date` 属性，它对应了当前激活区域的 `data-date` 属性。

以下是完成此项目所需的数据： `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>创建你的新项目，点击 `Save` 即可创建你的新项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```
