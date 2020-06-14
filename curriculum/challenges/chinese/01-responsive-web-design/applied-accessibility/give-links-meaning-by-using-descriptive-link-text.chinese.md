---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
localeTitle: 使用描述性链接文本赋予链接含义
---

## Description
<section id='description'>
屏幕阅读器用户可以选择其设备读取的内容的类型，这包括跳转到（或跳过）标志标签，跳转到主要内容，或者从标题中获取页面摘要，还可以选择只听取页面中的有效链接。
屏幕阅读器通过阅读链接文本或者锚点标签（<code>a</code>）之间的内容来完成这个操作。使用 "click here" 或者 "read more" 作为链接文本并没有多少帮助。相反地，应该在<code>a</code>标签中使用简洁的描述性语言来为用户提供更多的信息。
</section>

## Instructions
<section id='instructions'>
Camper Cat 在链接中使用的文本在脱离上下文的情况下，描述性不是很好。请修改锚点标签（<code>a</code>），将其包含的文本从 "click here" 改为 "information about batteries"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '请修改<code>a</code>标签，将其包含的文本从 "click here" 改为 "information about batteries"。'
    testString: assert($('a').text().match(/^(information about batteries)$/g));
  - text: '<code>a</code>元素应该有一个<code>href</code>属性，且值为空字符串'
    testString: assert($('a').attr('href') === '');
  - text: '<code>a</code> 元素应该有一个结束标记'
    testString: assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              