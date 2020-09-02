---
id: bd7158d8c442eddfaeb5bd17
title: Build a JavaScript Calculator
challengeType: 3
isRequired: true
videoUrl: ''
localeTitle: 构建JavaScript计算器
---

## Description
<section id="description"> <strong>目标：</strong>构建一个功能类似于此的<a href="https://codepen.io" target="_blank">CodePen.io</a>应用程序： <a href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">https</a> <strong>：</strong> <a href="https://codepen.io" target="_blank">//codepen.io/freeCodeCamp/full/wgGVVX</a> 。完成以下<a href="https://en.wikipedia.org/wiki/User_story" target="_blank">用户故事</a>并通过所有测试。给它你自己的个人风格。您可以使用HTML，JavaScript，CSS，Bootstrap，SASS，React，Redux和jQuery的任意组合来完成此项目。您应该使用前端框架（例如React），因为本节是关于学习前端框架的。不建议使用上面未列出的其他技术，使用它们的风险由您自行承担。我们正在寻求支持其他前端框架，如Angular和Vue，但目前不支持它们。我们将接受并尝试修复所有使用建议的技术堆栈的问题报告。快乐的编码！ <strong>用户故事＃1：</strong>我的计算器应包含一个可点击的元素，其中包含<code>=</code> （等号），对应的<code>id=&quot;equals&quot;</code> 。 <strong>用户故事＃2：</strong>我的计算器应该包含10个可点击的元素，每个元素包含一个0-9的数字，并带有以下相应的ID： <code>id=&quot;zero&quot;</code> ， <code>id=&quot;one&quot;</code> ， <code>id=&quot;two&quot;</code> ， <code>id=&quot;three&quot;</code> ， <code>id=&quot;four&quot;</code> ， <code>id=&quot;five&quot;</code> ， <code>id=&quot;six&quot;</code> ， <code>id=&quot;seven&quot;</code> ， <code>id=&quot;eight&quot;</code> ， <code>id=&quot;nine&quot;</code> 。 <strong>用户故事＃3：</strong>我的计算器应该包含4个可点击的元素，每个元素包含4个主要数学运算符之一，并带有以下相应的ID： <code>id=&quot;add&quot;</code> ， <code>id=&quot;subtract&quot;</code> ， <code>id=&quot;multiply&quot;</code> ， <code>id=&quot;divide&quot;</code> 。 <strong>用户故事＃4：</strong>我的计算器应该包含一个包含a的可点击元素<code>.</code> （小数点）符号，对应<code>id=&quot;decimal&quot;</code> 。 <strong>用户故事＃5：</strong>我的计算器应包含一个<code>id=&quot;clear&quot;</code>的可点击元素。 <strong>用户故事＃6：</strong>我的计算器应包含一个元素，用于显示具有相应<code>id=&quot;display&quot;</code> 。 <strong>用户故事＃7：</strong>任何时候，按清除按钮清除输入和输出值，并将计算器返回到初始化状态; 0应该显示在id为<code>display</code>的元素中。 <strong>用户故事＃8：</strong>当我输入数字时，我应该能够在<code>display</code> id的元素中看到我的输入。 <strong>用户故事＃9：</strong>无论如何，我应该能够对任意长度的数字链进行加，减，乘和除，当我点击<code>=</code> ，正确的结果应显示在带有<code>display</code> id的元素中。 <strong>用户故事＃10：</strong>输入数字时，我的计算器不应允许数字以多个零开头。 <strong>用户故事＃11：</strong>单击小数元素时，a <code>.</code>应附加到当前显示的值;二<code>.</code>一个号码不应被接受。 <strong>用户故事＃12：</strong>我应该能够对包含小数点的数字执行任何操作（+， - ，*，/）。 <strong>用户故事＃13：</strong>如果连续输入2个或更多操作员，则执行的操作应该是最后输入的操作员。 <strong>用户故事＃14：</strong>紧跟在<code>=</code>按操作员应该开始一个新计算，该计算对先前评估的结果进行操作。 <strong>用户故事＃15：</strong>我的计算器应有的精度几位小数，当谈到四舍五入（注意，目前还没有确切的标准，但你应该能够处理这样的计算<code>2 / 7</code>合理精确到至少4位小数） 。 <strong>关于计算器逻辑的注意事项：</strong>应该注意的是，计算器输入逻辑有两种主要的思想流派： <dfn>立即执行逻辑</dfn>和<dfn>公式逻辑</dfn> 。我们的示例使用公式逻辑并遵守操作优先顺序，而立即执行则不然。两者都是可以接受的，但请注意，根据您的选择，您的计算器可能会产生与我们的计算结果不同的某些公式（参见下面的示例）。只要您的数学可以通过其他生产计算器进行验证，请不要将此视为错误。 <strong>示例：</strong> <code>3 + 5 x 6 - 2 / 4 =</code> <br><ul><li> <strong>立即执行逻辑：</strong> <code>11.5</code> </li><li> <strong>公式/表达式逻辑：</strong> <code>32.5</code> </li></ul>您可以通过分叉<a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">此CodePen笔</a>来构建项目。或者您可以使用此CDN链接在您喜欢的任何环境中运行测试： <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> ： <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code>完成后，将URL提交给您的工作通过所有测试的项目。如果卡住，请记住使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a>方法。 </section>

## Instructions
<section id="instructions">
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

/section>
