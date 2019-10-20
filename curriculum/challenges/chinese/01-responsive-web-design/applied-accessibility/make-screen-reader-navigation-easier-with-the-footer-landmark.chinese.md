---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: ''
localeTitle: 使用页脚Landmark使屏幕阅读器导航更轻松
---

## Description
<section id="description">与<code>header</code>和<code>nav</code>类似， <code>footer</code>元素具有内置的地标功能，允许辅助设备快速导航到它。它主要用于包含版权信息或链接到通常位于页面底部的相关文档。 </section>

## Instructions
<section id="instructions"> Camper Cat的培训页面正在取得良好进展。将用于将其版权信息包含在页面底部的<code>div</code>更改为<code>footer</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有一个<code>footer</code>标记。
    testString: 'assert($("footer").length == 1, "Your code should have one <code>footer</code> tag.");'
  - text: 您的代码不应包含任何<code>div</code>标记。
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: 您的代码应该有一个开始和结束<code>footer</code>标记。
    testString: 'assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g), "Your code should have an opening and closing <code>footer</code> tag.");'

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

```js
// solution required
```
</section>
