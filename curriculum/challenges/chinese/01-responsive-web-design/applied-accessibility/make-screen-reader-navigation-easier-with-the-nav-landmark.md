---
id: 587d7788367417b2b2512aa2
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
title: 使用 nav 元素使屏幕阅读器更容易导航
---

## Description
<section id='description'>
<code>nav</code>也是一个具有语义化特性的 HTML5 标签，用于呈现页面中的主导航链接。它可以使屏幕阅读器快速识别页面中的导航信息。
对于在多个页面底部出现的站点链接，不需要使用<code>nav</code>，用<code>footer</code>（在下个挑战中介绍）会更好。
</section>

## Instructions
<section id='instructions'>
Camper Cat 在他的忍者训练页面顶端使用了很多导航链接，但把它们写在了<code>div</code>中。请将<code>div</code>更改为<code>nav</code>标签，以提升页面的可访问性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的代码应该有 1 个<code>nav</code>标签。'
    testString: assert($('nav').length == 1);
  - text: '你的<code>nav</code>标签应该包含<code>ul</code>标签及其列表项。'
    testString: assert($('nav').children('ul').length == 1);
  - text: '你的代码不应包含<code>div</code>标签。'
    testString: assert($('div').length == 0);
  - text: '确保你的<code>nav</code>标签是闭合的。'
    testString: assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>

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
              