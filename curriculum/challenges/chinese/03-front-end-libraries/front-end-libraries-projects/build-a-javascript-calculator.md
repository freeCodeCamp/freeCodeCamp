---
id: bd7158d8c442eddfaeb5bd17
challengeType: 3
forumTopicId: 301371
title: 构建一个 JavaScript 计算器
---

## Description
<section id='description'>
<strong>目标：</strong>在 <a href='https://codepen.io' target='_blank'>CodePen.io</a> 上实现一个功能类似 <a href='https://codepen.io/freeCodeCamp/full/wgGVVX' target='_blank'>https://codepen.io/freeCodeCamp/full/wgGVVX</a> 的 App。
在满足以下<a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>需求</a>并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。
你可以使用 HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、jQuery 来完成这个挑战。但鉴于这个章节的学习内容与前端框架相关，推荐使用一款前端框架（比如 React）来完成这个挑战；不推荐你使用前面没有提到的技术，否则风险自负。我们有计划新增其他前端框架课程，例如 Angular 和 Vue，不过目前还没有这些内容。我们会接受并尽力处理你在使用建议的技术栈过程中遇到的问题。编码愉快！
<strong>需求 1：</strong>我的计算器应该包含一个具有<code>id="equals"</code>属性的可以点击的元素，元素的文本内容为<code>=</code>（等于符号）。
<strong>需求 2：</strong>我的计算器应该包含 10 个具有如下 id 属性的可以点击的元素，每个元素的文本内容对应 0-9 的数字：<code>id="zero"</code>、<code>id="one"</code>、<code>id="two"</code>、<code>id="three"</code>、<code>id="four"</code>、<code>id="five"</code>、<code>id="six"</code>、<code>id="seven"</code>、<code>id="eight"</code>、<code>id="nine"</code>。
<strong>需求 3：</strong>我的计算器应该包含四个可以点击的元素，文本内容对应4个主要数学运算符，且应具有如下 id 属性： <code>id="add"</code>, <code>id="subtract"</code>, <code>id="multiply"</code>, <code>id="divide"</code>。
<strong>需求 4：</strong>计算器应该包含一个可点击的`.`（小数点）符号，对应的<code>id="decimal"</code>。
<strong>需求 5：</strong>我的计算器应该包含一个具有<code>id="clear"</code>属性的可以点击的元素。
<strong>需求 6：</strong>我的计算器应该包含一个用于展示数值的元素，这个元素具有<code>id="display"</code>属性。
<strong>需求 7：</strong>在任何时候按下清除键，都会清空输入和输出的数值并且使计算器回到初始状态；此时在 id 为<code>display</code>的元素中应该显示数字 0。
<strong>需求 8：</strong>在我输入数字的同时，我应该能看到我输入的数字展示在 id 为<code>display</code>的元素中。
<strong>需求 9：</strong>我应该可以在任意顺序下对一串任意长度的数字执行加、减、乘、除操作，并且当我按下<code>=</code>时，正确答案应该显示在 id 为<code>display</code>的元素中。
<strong>需求 10：</strong>在我输入数字的同时，我的计算器应该允许一个数字以多个零开头。
<strong>需求 11：</strong>当点击小数点元素时，当前展示的数值后面应该添加一个<code>.</code>符号；数字中不允许出现两个<code>.</code>符号。
<strong>需求 12：</strong>我可以对包含小数点的数字执行任何四则运算（+、-、*、/）。
<strong>需求 13：</strong>如果连续键入了两个及以上的运算符，应该执行最后一次键入的运算符。
<strong>需求 14：</strong>如果在按下<code>=</code>符号后继续按一个运算符，则应该在上一次计算结果的基础上进行新的计算。
<strong>需求 15：</strong>当需要四舍五入时，我的计算器应该可以处理结果的精度（注意：处理到多少位没有一个准确的标准，但是你应该能处理类似<code>2 / 7</code>这样的计算，使之至少有 4 位小数的精度）。
<strong>注意计算器的逻辑：</strong>应当注意的是，计算器输入逻辑主要有两种思路：<dfn>立即执行逻辑</dfn>和<dfn>公式逻辑</dfn>。我们的示例使用公式逻辑并遵守运算优先顺序，而立即执行则不然。两者都是可以接受的，但请注意，根据你的选择，你的计算器对于某些算式可能会得到与我们不同的计算结果（参见下面的示例）。只要你的数学计算可以通过其他现实中计算器的验证，那么你的代码就是合理的。
<strong>示例：</strong><code>3 + 5 x 6 - 2 / 4 =</code><br><ul><li><strong>立即执行逻辑：</strong><code>11.5</code></li><li><strong>公式／表达式逻辑：</strong> <code>32.5</code></li></ul>
你可以 fork <a href='http://codepen.io/freeCodeCamp/pen/MJjpwO' target='_blank'>这个 CodePen pen 项目</a> 来构建你的项目。或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试：<code>https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js</code>。
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
