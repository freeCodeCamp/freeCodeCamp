---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: 通过使用描述性链接文本给出链接含义
---

## Description
<section id="description">屏幕阅读器用户对其设备读取的内容类型有不同的选择。这包括跳过（或覆盖）地标元素，跳转到主要内容或从标题中获取页面摘要。另一种选择是仅听取页面上可用的链接。屏幕阅读器通过阅读链接文本或锚（ <code>a</code> ）标签之间的内容来完成此操作。列出“点击此处”或“阅读更多”链接的作用不大。相反，您应该在<code>a</code>标签中使用简短但具有描述性的文本，以便为这些用户提供更多资讯。 </section>

## Instructions
<section id="instructions">如果没有上下文，Camper Cat正在使用的链接文字不是很具描述性。移动 <code>a</code> 标签，使它们环绕文本“有关电池的信息”而不是环绕着“点击此处”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应将<code>a</code>标签从“点击这里”移动，让其环绕在“关于电池的信息”。
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: 确保您<code>a</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

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
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
