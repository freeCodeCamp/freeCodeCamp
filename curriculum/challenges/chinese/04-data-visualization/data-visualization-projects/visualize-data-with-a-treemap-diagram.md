---
id: 587d7fa6367417b2b2512bc0
title: 用树形图可视化数据
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**目标：** 构建一个应用，功能和 <a href="https://treemap-diagram.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://treemap-diagram.freecodecamp.rocks</a> 类似。

完成以下需求，并且通过所有测试。 使用你需要的任何库或 API。 赋予它你自己的个人风格。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。 该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。 这些刻度是通过 D3 测试所必需的，因为它们的位置是用来确定图表元素的对齐方式。 你可以在这里 <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis> 获取关于生成坐标轴的信息。 要求的 DOM 元素在每次测试时都会被查询。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。 我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 矩阵树图包含一个具有 `id="title"` 属性的标题。

**需求 #2：** 矩阵树图包含一个具有 `id="description"` 属性的描述内容。

**需求 #3：** 矩阵树图包含一些具有 `class="tile"` 属性的 `rect` 元素来展示数据。

**需求 #4：** 这些矩形块元素至少应该有 2 种不同的填充颜色。

**需求 #5：** 每一个矩形元素应该有 `data-name`、`data-category`、`data-value` 属性，具有相应的 `name`、`category`、`value` 属性值。

**需求 #6：** 每个矩形块的面积和它的 `data-value` 属性值相对应：`data-value` 值越大的矩形块面积越大。

**需求 #7：** 矩阵树图包含一个具有 `id="legend"` 属性的图例。

**需求 #8：** 图例包含一些具有 `class="legend-item"` 属性的 `rect` 元素。

**需求 #9：** 图例中的这些 `rect` 元素至少应该使用 2 种不同的填充颜色。

**需求 #10：** 将鼠标悬停在某个区域上时，可以看到具有 `id="tooltip"` 属性的提示框，它会显示有关该区域的更多信息。

**需求 #11：** 提示框应该有 `data-value` 属性，它对应了当前激活区域的 `data-value` 属性。

对于此项目，您可以使用以下任何数据集：

-   **Kickstarter Pledges：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Movie Sales：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Video Game Sales：** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用 CodePen 模版</a>创建你的新项目，点击 `Save` 即可创建你的新项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```
