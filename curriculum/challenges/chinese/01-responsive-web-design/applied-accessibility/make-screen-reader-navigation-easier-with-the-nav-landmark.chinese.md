---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: ''
localeTitle: 使用导航Landmark使屏幕阅读器导航更轻松
---

## Description
<section id="description"> <code>nav</code>元素是另一个HTML5项目，具有嵌入的地标功能，便于屏幕阅读器导航。此标记用于包围页面中的主导航链接。如果页面底部有重复的站点链接，则没有必要标记带有<code>nav</code>标签的链接。使用<code>footer</code> （在下一个挑战中涵盖）就足够了。 </section>

## Instructions
<section id="instructions"> Camper Cat在他的训练页面顶部包含了导航链接，但是将它们包裹在一个<code>div</code> 。将<code>div</code>更改为<code>nav</code>标记以改善其页面上的可访问性。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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

```js
// solution required
```
</section>
