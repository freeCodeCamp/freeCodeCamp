---
id: 587d7fa6367417b2b2512bbf
title: 用等值区域图可视化数据
challengeType: 3
forumTopicId: 301465
---

# --description--

**目标：** 在 [CodePen.io](https://codepen.io) 上实现一个功能类似 <https://codepen.io/freeCodeCamp/full/EZKqza> 的 App。

在满足以下[需求](https://en.wikipedia.org/wiki/User_story)并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。

你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。每次测试查询的元素都必须是非虚拟 DOM。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。

**需求 #1：** 等值区域图包含一个具有`id="title"`属性的标题。

**需求 #2：** 等值区域图包含一个具有`id="description"`属性的描述内容。

**需求 #3：** 等值区域图包含一些州县来展示数据，这些州县应该具有`class="county"`属性。

**需求 #4：** 这些州县至少应该有 4 种不同的填充颜色。

**需求 #5：** 每个州县都应该具有`data-fips`和`data-education`属性，分别包含他们相应的 fips 值和教育值。

**需求 #6：** 在等值区域图中，每一个提供的数据点都应该有一个对应的州县。

**需求 #7：** 各个州县应该具有与样本数据匹配的 fips 值和教育值。

**需求 #8：** 等值区域图包含一个具有`id="legend"`属性的图例。

**需求 #9：** 图例至少应该使用 4 种不同的填充颜色。

**需求 #10：** 将鼠标悬停在某个区域上时，可以看到具有`id="tooltip"`属性的提示框，它会显示有关该区域的更多信息。

**需求 #11：** 提示框应该有`data-education`属性，它对应了当前激活区域的`data-education`属性。

以下是完成此项目所需的数据集：  

-   **US Education Data:** `https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json`
-   **US County Data:** `https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json`

你可以 fork [这个 CodePen 项目](https://codepen.io/freeCodeCamp/pen/MJjpwO)来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：`https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js`.

一旦你完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。

# --hints--


# --solutions--

