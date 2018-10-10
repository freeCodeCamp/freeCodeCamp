---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: ''
localeTitle: جعل قارئ شاشة الملاحة أسهل مع الملاحة
---

## Description
<section id="description"> عنصر <code>nav</code> هو عنصر HTML5 آخر مع ميزة المعالم المضمنة لسهولة التنقل في قارئ الشاشة. تهدف هذه العلامة إلى الالتفاف حول روابط التنقل الرئيسية في صفحتك. إذا كانت هناك روابط موقع متكررة في أسفل الصفحة ، فليس من الضروري ترميز تلك التي تحتوي على علامة <code>nav</code> أيضًا. يكفي استخدام <code>footer</code> (المغطى في التحدي التالي). </section>

## Instructions
<section id="instructions"> أدرج Camper Cat ارتباطات التنقل في الجزء العلوي من صفحة التدريب الخاصة به ، ولكن ملفوفة في <code>div</code> . غيّر <code>div</code> إلى علامة <code>nav</code> لتحسين إمكانية الوصول على صفحته. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي <code>nav</code> علامة <code>nav</code> واحدة.
    testString: 'assert($("nav").length == 1, "Your code should have one <code>nav</code> tag.");'
  - text: يجب أن تقوم علامات <code>nav</code> الخاصة بك بالالتفاف حول <code>ul</code> وعناصر القائمة الخاصة بها.
    testString: 'assert($("nav").children("ul").length == 1, "Your <code>nav</code> tags should wrap around the <code>ul</code> and its list items.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: تأكد من أن عنصر <code>nav</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length, "Make sure your <code>nav</code> element has a closing tag.");'

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
