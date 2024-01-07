---
id: 587d7fa6367417b2b2512bbf
title: 用等值区域图可视化数据
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**目标：** 构建一个应用，功能和 <a href="https://choropleth-map.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://choropleth-map.freecodecamp.rocks</a> 类似。

完成以下需求，并且通过所有测试。 你可以使用你需要的任何库或 API。 赋予它你自己的个人风格。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。 要求的 DOM 元素在每次测试时都会被查询。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。 我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 等值区域图包含一个具有 `id="title"` 属性的标题。

**需求 #2：** 等值区域图包含一个具有 `id="description"` 属性的描述内容。

**需求 #3：** 等值区域图包含一些州县来展示数据，这些州县应该具有 `class="county"` 属性。

**需求 #4：** 这些州县至少应该有 4 种不同的填充颜色。

**需求 #5：** 每个州县都应该具有 `data-fips` 和 `data-education` 属性，分别包含相应的值 `fips` 和 `education`。

**需求 #6：** 在等值区域图中，每一个提供的数据点都应该有一个对应的州县。

**需求 #7：** 各个州县应该具有与样本数据匹配的 `data-fips` 和 `data-education` 值。

**需求 #8：** 等值区域图包含一个具有 `id="legend"` 属性的图例。

**需求 #9：** 图例至少应该使用 4 种不同的填充颜色。

**需求 #10：** 将鼠标悬停在某个区域上时，可以看到具有 `id="tooltip"` 属性的提示框，它会显示有关该区域的更多信息。

**需求 #11：** 提示框应该有 `data-education` 属性，它对应了当前激活区域的 `data-education` 属性。

以下是完成此项目所需的数据集：

-   **US Education Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **US County Data:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

你可以<a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">使用这份 CodePen 模版</a>来创建你的新项目，点击 `Save` 即可创建属于你自己的项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

当你完成了本项目，并且该项目所有测试运行通过，请提交项目的 URL。

# --solutions--

```js
// solution required
```
