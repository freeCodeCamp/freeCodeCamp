---
id: bd7158d8c442eddfaeb5bd0f
challengeType: 3
forumTopicId: 301373
title: 构建一个番茄时钟
---

## Description
<section id='description'>
<strong>目标：</strong>在 <a href='https://codepen.io' target='_blank'>CodePen.io</a> 上实现一个功能类似 <a href='https://codepen.io/freeCodeCamp/full/XpKrrW' target='_blank'>https://codepen.io/freeCodeCamp/full/XpKrrW</a> 的 App。
在满足以下<a href='https://en.wikipedia.org/wiki/User_story' target='_blank'>需求</a>并能通过所有测试的前提下，你可以根据自己的喜好来美化你的 app。
你可以使用 HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux、jQuery 来完成这个挑战。但鉴于这个章节的学习内容与前端框架相关，推荐使用一款前端框架（比如 React）来完成这个挑战；不推荐你使用前面没有提到的技术，否则风险自负。我们有计划新增其他前端框架课程，例如 Angular 和 Vue，不过目前还没有这些内容。我们会接受并尽力处理你在使用建议的技术栈过程中遇到的问题。编码愉快！
<strong>需求 1：</strong>我应该能看到一个具有<code>id="break-label"</code>属性的元素，这个元素的内容应该是一个字符串(例如："Break Length")。
<strong>需求 2：</strong>我应该能看到一个具有<code>id="session-label"</code>属性的元素，这个元素的内容应该是一个字符串(例如："Session Length")。
<strong>需求 3：</strong>我应该能看到两个可以点击的元素，他们分别具有如下 id：<code>id="break-decrement"</code>和<code>id="session-decrement"</code>。
<strong>需求 4：</strong>我应该能看到两个可以点击的元素，他们分别具有如下 id：<code>id="break-increment"</code>和<code>id="session-increment"</code>。
<strong>需求 5：</strong>我应该能看到一个具有<code>id="break-length"</code>属性的元素，这个元素默认展示数值应该为 5（加载后）。
<strong>需求 6：</strong>我应该能看到一个具有<code>id="session-length"</code>属性的元素，这个元素默认展示数值应该为 25（加载后）。
<strong>需求 7：</strong>我应该能看到一个具有<code>id="timer-label"</code>属性的元素，这个元素包含一个表示当前状态的字符串（例如："Session"）。
<strong>需求 8：</strong>我应该能看到一个具有<code>id="time-left"</code>属性的元素。注意：暂停或者运行时，该元素的内容应始终以<code>mm:ss</code>格式显示（如 25:00）。
<strong>需求 9：</strong>我应该能看到一个具有<code>id="start_stop"</code>属性的可点击的元素。
<strong>需求 10：</strong>我应该能看到一个具有<code>id="reset"</code>属性的可点击的元素。
<strong>需求 11：</strong>当我点击 id 属性为<code>reset</code>的元素时，应该停止任何运行中的计时器，<code>id="break-length"</code>元素中的值应该重新回到<code>5</code>，<code>id="session-length"</code>元素中的值应该重新回到 25，且<code>id="time-left"</code>元素应该重置为默认状态。
<strong>需求 12：</strong>当我点击 id 属性为<code>break-decrement</code>的元素时，<code>id="break-length"</code>元素的值应该减去 1，且我应该能看到更新后的值。
<strong>需求 13：</strong>当我点击 id 属性为<code>break-increment</code> 的元素时，<code>id="break-length"</code>元素的值应该增加 1，且我应该能看到更新后的值。
<strong>需求 14：</strong>当我点击 id 属性为<code>session-decrement</code> 的元素时，<code>id="session-length"</code>元素的值应该减去 1，且我应该能看到更新后的值。
<strong>需求 15：</strong>当我点击 id 属性为<code>session-increment</code> 的元素时，<code>id="session-length"</code>元素的值应该增加 1，且我应该能看到更新后的值。
<strong>需求 16：</strong>工作或者休息长度不应该可以设置为 <= 0 的值。
<strong>需求 17：</strong>工作或者休息长度比应该可以设置为 > 60 的值。
<strong>需求 18：</strong>当我首次点击具有<code>id="start_stop"</code>属性的元素时，计时器应该根据<code>id="session-length"</code>元素当前显示的值开始运行，即使该值已从原始值 25 递增过或递减过。
<strong>需求 19：</strong>如果计时器正在运行，id 属性为<code>time-left</code>的元素应该以<code>mm:ss</code>的格式展示剩余的时间（按1递减并且每秒更新一次显示的值）。
<strong>需求 20：</strong>如果计时器正在运行，当我点击<code>id="start_stop"</code>元素时，倒计时应该暂停。
<strong>需求 21：</strong>如果计时器已经暂停，当我点击<code>id="start_stop"</code>元素时，倒计时应该从暂停的时间点恢复运行。
<strong>需求 22：</strong>当一个工作倒计时结束（注意：计时器必须达到00:00），并且新的倒计时开始运行时，id 属性为<code>timer-label</code>的元素应该显示一个表示已经开始休息的字符串。
<strong>需求 23：</strong>当一个工作倒计时结束（注意：计时器必须达到00:00），应该开始一个新的休息倒计时，时间应该从<code>id="break-length"</code>元素中当前显示的值开始计算。
<strong>需求 24：</strong>当一个休息倒计时结束（注意：计时器必须达到00:00），并且新的倒计时开始运行时，id 属性为<code>timer-label</code>的元素应该显示一个表示已经开始工作的字符串。
<strong>需求 25：</strong>当一个休息倒计时结束（注意：计时器必须达到00:00），应该开始一个新的工作倒计时，时间应该从<code>id="session-length"</code>元素中当前显示的值开始计算。
<strong>需求 26：</strong>当一个倒计时结束（注意：计时器必须达到00:00），应该播放一个表示时间到了的声音提示。这个提示音应该使用 HTML5 的<code>audio</code>标签并有一个<code>id="beep"</code>属性。
<strong>需求 27：</strong>具有<code>id="beep"</code>属性的音频元素时长应该至少有一秒。
<strong>需求 28：</strong>当点击 id 属性为<code>reset</code>的元素时，id 属性为<code>beep</code>的音频元素必须停止播放并回到开头。
你可以 fork <a href='http://codepen.io/freeCodeCamp/pen/MJjpwO' target='_blank'>这个 CodePen pen 项目</a> 来构建你的项目。 或者你可以在任何你喜欢的环境中使用以下 CDN 链接来运行测试： <code>https://gitcdn.link/repo/freeCodeCamp/testable-projects-fcc/master/build/bundle.js</code>
一旦你完成了本项目并且该项目所有测试运行通过， 请提交项目的 URL。
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
