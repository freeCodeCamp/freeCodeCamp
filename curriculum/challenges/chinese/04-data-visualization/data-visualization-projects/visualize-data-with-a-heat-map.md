---
id: bd7188d8c242eddfaeb5bd13
title: 用热图可视化数据
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**目标：** 构建一个应用，功能和 <a href="https://heat-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://heat-map.freecodecamp.rocks</a> 类似。

完成以下需求，并且通过所有测试。 你可以使用你需要的任何库或 API。 赋予它你自己的个人风格。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。 要求的 DOM 元素在每次测试时都会被查询。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。 我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 热度图包含一个具有 `id="title"` 属性的标题。

**需求 #2：** 热度图包含一个具有 `id="description"` 属性的描述内容。

**需求 #3：** 热度图包含一个具有 `id="x-axis"` 属性的 x 轴。

**需求 #4：** 热度图包含一个具有 `id="y-axis"` 属性的 y 轴。

**需求 #5：** 热度图包含一些 `rect` 元素来展示数据，他们具有 `class="cell"` 属性。

**需求 #6：** 这些单元格元素至少应该有 4 种不同的填充颜色。

**需求 #7：** 每个单元格都有这些属性：`data-month`、`data-year`、`data-temp`，具有相应的属性值 `month`、`year`、`temperature`。

**需求 #8：** 每个元素的 `data-month`、`data-year` 属性应该在数据范围内。

**需求 #9：** 热度图包含与 y 轴上的相应月份对齐的单元格。

**需求 #10：** 热度图包含与 x 轴上相应年份对齐的单元格。

**需求 #11：** 热度图在 y 轴上有多个刻度标签，并带有完整的月份名称。

**需求 #12：** 热度图在 x 轴上有多个刻度标签，年份在 1754 到 2015 之间。

**需求 #13：** 热度图包含一个具有 `id="legend"` 属性的图例。

**需求 #14：** 图例包含一些 `rect` 元素。

**需求 #15：** 图例中的这些 `rect` 元素应该至少使用 4 种不同的填充颜色。

**需求 #16：** 将鼠标悬停在某个区域上时，可以看到具有 `id="tooltip"` 属性的提示框，它会显示有关该区域的更多信息。

**需求 #17：** 提示框应该有 `data-year` 属性，它对应了当前激活区域的 `data-year` 属性。

以下是完成此项目所需的数据：`https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>创建你的新项目，点击 `Save` 即可创建你的新项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```
