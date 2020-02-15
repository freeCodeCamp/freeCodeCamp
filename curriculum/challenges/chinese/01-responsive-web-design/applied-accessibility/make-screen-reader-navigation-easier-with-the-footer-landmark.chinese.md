---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
localeTitle: 使用 footer 元素使屏幕阅读器更容易导航
---

## Description
<section id='description'>
与<code>header</code>和<code>nav</code>类似，<code>footer</code>也具有语义化特性，可以使辅助设备快速定位到它。它位于页面底部，用于呈现版权信息或者相关文档链接。
</section>

## Instructions
<section id='instructions'>
Camper Cat 的忍者训练页面进展顺利。请将他在页面底部呈现版权信息的<code>div</code>标签更改为<code>footer</code>标签。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码中应该包含 1 个<code>footer</code>标签。'
    testString: assert($('footer').length == 1);
  - text: '你的代码中不应包含<code>div</code>标签。'
    testString: assert($('div').length == 0);
  - text: '你代码中的<code>footer</code>应该是闭合的。'
    testString: assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
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


  <div>&copy; 2018 Camper Cat</div>


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
              