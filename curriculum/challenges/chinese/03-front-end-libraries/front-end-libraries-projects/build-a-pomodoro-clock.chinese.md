---
id: bd7158d8c442eddfaeb5bd0f
title: Build a Pomodoro Clock
isRequired: true
challengeType: 3
videoUrl: ''
localeTitle: 建立一个番茄钟
---

## Description
<section id="description"> <strong>目标：</strong>构建一个功能类似于此的<a href="https://codepen.io" target="_blank">CodePen.io</a>应用程序： <a href="https://codepen.io/freeCodeCamp/full/XpKrrW" target="_blank">https</a> <strong>：</strong> <a href="https://codepen.io" target="_blank">//codepen.io/freeCodeCamp/full/XpKrrW</a> 。完成以下<a href="https://en.wikipedia.org/wiki/User_story" target="_blank">用户故事</a>并通过所有测试。给它你自己的个人风格。您可以使用HTML，JavaScript，CSS，Bootstrap，SASS，React，Redux和jQuery的任意组合来完成此项目。您应该使用前端框架（例如React），因为本节是关于学习前端框架的。不建议使用上面未列出的其他技术，使用它们的风险由您自行承担。我们正在寻求支持其他前端框架，如Angular和Vue，但目前不支持它们。我们将接受并尝试修复所有使用建议的技术堆栈的问题报告。快乐的编码！ <strong>用户故事＃1：</strong>我可以看到一个<code>id=&quot;break-label&quot;</code>的元素，其中包含一个字符串（例如“Break Length”）。 <strong>用户故事＃2：</strong>我可以看到一个<code>id=&quot;session-label&quot;</code>的元素，其中包含一个字符串（例如“Session Length”）。 <strong>用户故事＃3：</strong>我可以看到两个具有相应ID的可点击元素： <code>id=&quot;break-decrement&quot;</code>和<code>id=&quot;session-decrement&quot;</code> 。 <strong>用户故事＃4：</strong>我可以看到两个具有相应ID的可点击元素： <code>id=&quot;break-increment&quot;</code>和<code>id=&quot;session-increment&quot;</code> 。 <strong>用户故事＃5：</strong>我可以看到一个具有相应<code>id=&quot;break-length&quot;</code>的元素，默认情况下（加载时）显示值5. <strong>用户故事＃6：</strong>我可以看到一个元素具有相应的<code>id=&quot;session-length&quot;</code> ，默认情况下显示值25. <strong>用户故事＃7：</strong>我可以看到一个具有相应<code>id=&quot;timer-label&quot;</code>的元素，其中包含一个表示会话已初始化的字符串（例如”Session“） 。 <strong>用户故事＃8：</strong>我可以看到一个对应<code>id=&quot;time-left&quot;</code>的元素。注意：暂停或运行时，此字段中的值应始终以<code>mm:ss</code>格式显示（即25:00）。 <strong>用户故事＃9：</strong>我可以看到一个具有相应<code>id=&quot;start_stop&quot;</code>的可点击元素。 <strong>用户故事＃10：</strong>我可以看到一个具有相应<code>id=&quot;reset&quot;</code>的可点击元素。 <strong>用户故事＃11：</strong>当我单击id为<code>reset</code>的元素时，应该停止任何正在运行的计时器， <code>id=&quot;break-length&quot;</code>的值应该返回<code>5</code> ， <code>id=&quot;session-length&quot;</code>应该返回到25，并且<code>id=&quot;time-left&quot;</code>的元素应该重置为它的默认状态。 <strong>用户故事＃12：</strong>当我单击id为<code>break-decrement</code>的元素时， <code>id=&quot;break-length&quot;</code>的值会减1，我可以看到更新后的值。 <strong>用户故事＃13：</strong>当我单击id为<code>break-increment</code>的元素时， <code>id=&quot;break-length&quot;</code>的值会增加1，我可以看到更新后的值。 <strong>用户故事＃14：</strong>当我单击<code>session-decrement</code> id的元素时， <code>id=&quot;session-length&quot;</code>的值减1，我可以看到更新后的值。 <strong>用户故事＃15：</strong>当我单击<code>session-increment</code>为id的元素时， <code>id=&quot;session-length&quot;</code>的值会增加1，我可以看到更新后的值。 <strong>用户故事＃16：</strong>我不能将会话或休息长度设置为&lt;= 0. <strong>用户故事＃17：</strong>我不能将会话或休息时间设置为&gt; 60. <strong>用户故事＃18：</strong>当我首先单击<code>id=&quot;start_stop&quot;</code>的元素，计时器应该从当前显示在<code>id=&quot;session-length&quot;</code>的值开始运行，即使该值已经从原始值25递增或递减。 <strong>用户故事＃19 ：</strong>如果计时器正在运行，则id为<code>time-left</code>的元素应以<code>mm:ss</code>格式显示剩余时间（递减值1并每1000ms更新一次显示）。 <strong>用户故事＃20：</strong>如果计时器正在运行并且我单击<code>id=&quot;start_stop&quot;</code>的元素，倒计时应该暂停。 <strong>用户故事＃21：</strong>如果计时器暂停，我点击<code>id=&quot;start_stop&quot;</code>的元素，倒计时应该从暂停时恢复运行。 <strong>用户故事＃22：</strong>当会话倒计时到达零（注意：计时器必须达到00:00），并开始新的倒计时时，id为<code>timer-label</code>的元素应该显示一个表示休息已开始的字符串。 <strong>用户故事＃23：</strong>当会话倒计时到达零时（注意：计时器必须达到00:00），应该开始新的中断倒计时，从当前显示在<code>id=&quot;break-length&quot;</code>元素中的值开始倒计时。 <strong>用户故事＃24：</strong>当休息倒计时到达零（注意：计时器必须达到00:00），并开始新的倒计时时，id为<code>timer-label</code>的元素应显示一个表示会话已开始的字符串。 <strong>用户故事＃25：</strong>当休息倒计时到达零时（注意：计时器必须达到00:00），应开始新的会话倒计时，从当前显示在<code>id=&quot;session-length&quot;</code>元素中的值开始倒计时。 <strong>用户故事＃26：</strong>当倒计时到零时（注意：计时器必须达到00:00），应播放表示时间到了的声音。这应该使用HTML5 <code>audio</code>标签并具有相应的<code>id=&quot;beep&quot;</code> 。 <strong>用户故事＃27：</strong> <code>id=&quot;beep&quot;</code>的音频元素必须为1秒或更长。 <strong>用户故事＃28：</strong> id为<code>beep</code>的音频元素必须停止播放，并在单击具有<code>reset</code> id的元素时重绕到开头。您可以通过分叉<a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">此CodePen笔</a>来构建项目。或者您可以使用此CDN链接在您喜欢的任何环境中运行测试： <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> ： <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code>完成后，将URL提交给您的工作通过所有测试的项目。如果卡住，请记住使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a>方法。 </section>

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
