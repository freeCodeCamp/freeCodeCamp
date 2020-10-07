---
id: 587d7787367417b2b2512aa1
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
title: 使用 header 元素使屏幕阅读器更容易导航
---

## Description
<section id='description'>
<code>header</code>也是一个具有语义化的、提升页面可访问性的 HTML5 标签。它可以为父级标签呈现简介信息或者导航链接，适用于那些在多个页面顶部重复出现的内容。
与<code>main</code>类似，<code>header</code>的语义化特性也可以使辅助技术快速定位到它的内容。
<strong>注意：</strong><br><code>header</code>用在 HTML 文档的<code>body</code>标签中。这点与包含页面标题、元信息的<code>head</code>标签不同。
</section>

## Instructions
<section id='instructions'>
Camper Cat 正在写一些训练忍者的精彩文章，并为它们建立一个新的页面。请使用<code>header</code>替换页面顶端包含<code>h1</code>的<code>div</code>标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该包含 1 个<code>header</code>标签。'
    testString: assert($('header').length == 1);
  - text: '你的<code>header</code>标签应该包含<code>h1</code>。'
    testString: assert($('header').children('h1').length == 1);
  - text: '你的代码不应有任何<code>div</code>标签。'
    testString: assert($('div').length == 0);
  - text: '确保你的<code>header</code>标签是闭合的。'
    testString: assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length);

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

```html
// solution required
```

</section>
              