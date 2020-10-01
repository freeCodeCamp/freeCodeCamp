---
id: bd7168d8c242eddfaeb5bd13
challengeType: 3
forumTopicId: 301464
title: 用条形图可视化数据
---

## Description
<section id='description'>
<strong>目标：</strong>在 <a href='https://codepen.io' target='_blank'>CodePen.io</a> 上实现一个功能类似 <a href='https://codepen.io/freeCodeCamp/full/GrZVaM' target='_blank'>https://codepen.io/freeCodeCamp/full/GrZVaM</a> 的 App。
在满足以下<a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>需求</a>并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。
你可以使用 HTML、JavaScript、CSS、以及基于 svg 的 D3 可视化库来完成这个挑战。该任务需要使用 D3 的坐标轴属性生成坐标轴，这个属性会自动生成沿轴的刻度。这些刻度是通过 D3 测试所必需的，因为它们的位置是用来确定图表元素的对齐方式。你可以在这里 <a href='https://github.com/d3/d3/blob/master/API.md#axes-d3-axis' target='_blank'>https://github.com/d3/d3/blob/master/API.md#axes-d3-axis</a> 获取关于生成坐标轴的信息。每次测试查询的元素都必须是非虚拟 DOM。 如果你使用了前端框架（例如 Vue），那么对于动态的内容测试结果可能不准确。我们希望最终能够兼容这些框架，但 D3 项目目前还不支持它们。
<strong>需求 #1：</strong>我的图表应该有一个具有<code>id="title"</code>属性的标题。
<strong>需求 #2：</strong>我的图表应该有一个<code>g</code>元素作为 x 轴，并具有<code>id="x-axis"</code>属性。
<strong>需求 #3：</strong>我的图表应该有一个<code>g</code>元素作为 y 轴，并具有<code>id="y-axis"</code>属性。
<strong>需求 #4：</strong>两个轴都应包含多个刻度标签，每个标签具有<code>class="tick"</code>属性
<strong>需求 #5：</strong>在我的图表里，每个数据点都应该有一个具有<code>class="bar"</code>属性的<code>rect</code>元素来展示数据。
<strong>需求 #6：</strong>每一栏应该具有包含日期的<code>data-date</code>属性以及包含 GDP 值的<code>data-gdp</code>属性。
<strong>需求 #7：</strong>条形元素的<code>data-date</code>属性应与提供的数据的顺序相匹配。
<strong>需求 #8：</strong>条形元素的<code>data-gdp</code>属性应与提供的数据的顺序相匹配。
<strong>需求 #9：</strong>每个条形元素的高度应准确地表示其数据所对应的 GDP 值。
<strong>需求 #10：</strong><code>data-date</code>属性和它对应的条形元素应与 x 轴上的相应的值对齐。
<strong>需求 #11：</strong><code>data-gdp</code>属性和它对应的条形元素应与 y 轴上的相应的值对齐。
<strong>需求 #12：</strong>我可以将鼠标悬停在某个区域上，并查看具有<code>id="tooltip"</code>属性的提示框，它会显示有关该区域的更多信息。
<strong>需求 #13：</strong>我的提示框应该有一个<code>data-date</code>属性，它对应了当前激活区域的<code>data-date</code>属性。
以下是完成此项目所需的数据：<code>https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json</code>
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
