---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: ''
localeTitle: 使用标题Landmark使屏幕阅读器导航更轻松
---

## Description
<section id="description">下一个添加语义含义并提高可访问性的HTML5元素是<code>header</code>标记。它用于为其父标记包装介绍性信息或导航链接，并且可以很好地处理在多个页面顶部重复的内容。 <code>header</code>分享了您在<code>main</code>看到的嵌入式地标功能，允许辅助技术快速导航到该内容。 <strong>注意</strong> <br> <code>header</code>适用于HTML文档的<code>body</code>标记。这与<code>head</code>元素不同， <code>head</code>元素包含页面标题，元信息等。 </section>

## Instructions
<section id="instructions"> Camper Cat正在撰写一些关于忍者训练的精彩文章，并希望为他们的网站添加一个页面。将当前包含<code>h1</code>的顶部<code>div</code>更改为<code>header</code>标记。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有一个<code>header</code>标记。
    testString: 'assert($("header").length == 1, "Your code should have one <code>header</code> tag.");'
  - text: 您的<code>header</code>标记应该环绕<code>h1</code> 。
    testString: 'assert($("header").children("h1").length == 1, "Your <code>header</code> tags should wrap around the <code>h1</code>.");'
  - text: 您的代码不应包含任何<code>div</code>标记。
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: 确保您的<code>header</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length, "Make sure your <code>header</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>

  <div>
    <h1>Training with Camper Cat</h1>
  </div>


  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
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
