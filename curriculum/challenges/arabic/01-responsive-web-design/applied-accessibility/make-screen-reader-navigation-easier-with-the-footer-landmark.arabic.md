---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: ''
localeTitle: جعل قارئ شاشة الملاحة أسهل مع تذييل لاندمارك
---

## Description
<section id="description"> يشبه عنصر <code>footer</code> المشابه <code>header</code> <code>nav</code> ميزة المعالم المضمنة التي تسمح للأجهزة المساعدة بالانتقال إليها بسرعة. يتم استخدامه بشكل أساسي لاحتواء معلومات حقوق الطبع والنشر أو الروابط إلى المستندات ذات الصلة التي عادة ما تكون في أسفل الصفحة. </section>

## Instructions
<section id="instructions"> تحقق صفحة تدريب Camper Cat تقدمًا جيدًا. غيّر <code>div</code> الذي استخدمه في التفاف معلومات حقوق النشر الخاصة به في أسفل الصفحة إلى عنصر <code>footer</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>footer</code> علامة <code>footer</code> واحد.
    testString: 'assert($("footer").length == 1, "Your code should have one <code>footer</code> tag.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: يجب أن تحتوي الشفرة على علامة <code>footer</code> للفتح <code>footer</code> .
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
