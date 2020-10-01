---
id: bd7188d8c242eddfaeb5bd13
challengeType: 3
forumTopicId: 301466
title: 用热图可视化数据
---

## Description
<section id='description'>
<strong>目标：</strong>在 <a href='https://codepen.io' target='_blank'>CodePen.io</a> 上实现一个功能类似 <a href='https://codepen.io/freeCodeCamp/full/JEXgeY' target='_blank'>https://codepen.io/freeCodeCamp/full/JEXgeY</a> 的 App。
在满足以下<a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>需求</a>并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。
你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。这些刻度是通过 D3 测试所必需的，因为它们的位置是用来确定图表元素的对齐方式。你可以在这里 <a href='https://github.com/d3/d3/blob/master/API.md#axes-d3-axis' target='_blank'>https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a> 获取关于生成坐标轴的信息。每次测试查询的元素都必须是非虚拟 DOM。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。
<strong>需求 #1：</strong>我的热度图应该有一个具有<code>id="title"</code>属性的标题。
<strong>需求 #2：</strong>我的热度图应该有一个具有<code>id="title"</code>属性的描述内容。
<strong>需求 #3：</strong>我的热度图应该有一个具有<code>id="x-axis"</code>属性的 x 轴。
<strong>需求 #4：</strong>我的热度图应该有一个具有<code>id="y-axis"</code>属性的 y 轴。
<strong>需求 #5：</strong>我的热度图应该有一些<code>rect</code>元素来展示数据，他们具有<code>class="cell"</code>属性。
<strong>需求 #6：</strong>这些单元格元素至少应该有 4 种不同的填充颜色。
<strong>需求 #7：</strong>每个单元格元素都有这些属性<code>data-month</code>，<code>data-year</code>，<code>data-temp</code>，包含了它们相应的月份，年份和温度值。
<strong>需求 #8：</strong>每个元素的<code>data-month</code>，<code>data-year</code>属性应该在数据范围内。
<strong>需求 #9：</strong>我的热度图应该具有与 y 轴上的相应月份对齐的单元格。
<strong>需求 #10：</strong>我的热度图应该具有与 x 轴上相应年份对齐的单元格。
<strong>需求 #11：</strong>我的热度图应该在 y 轴上有多个刻度标签，并带有完整的月份名称。
<strong>需求 #12：</strong>我的热度图应该在 x 轴上有多个刻度标签，年份在 1754 到 2015 之间。
<strong>需求 #13：</strong>我的热度图应该有一个具有<code>id="legend"</code>属性的图例。
<strong>需求 #14：</strong>我的图例应该包含一些<code>rect</code>元素。
<strong>需求 #15：</strong>图例中的这些<code>rect</code>元素应该至少使用 4 种不同的填充颜色。
<strong>需求 #16：</strong>我可以将鼠标悬停在某个区域上，并查看具有<code>id="tooltip"</code>属性的提示框，它会显示有关该区域的更多信息。
<strong>需求 #17：</strong>我的提示框应该有一个<code>data-year</code>属性，它对应了当前激活区域的<code>data-year</code>属性。
以下是完成此项目所需的数据：<code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json</code>
你可以 fork <a href='https://codepen.io/freeCodeCamp/pen/MJjpwO' target='_blank'>这个 CodePen pen 项目</a>来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：<code>https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js</code>.
一旦你完成了本项目并且该项目所有测试运行通过，请提交项目的 URL。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests: []

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
