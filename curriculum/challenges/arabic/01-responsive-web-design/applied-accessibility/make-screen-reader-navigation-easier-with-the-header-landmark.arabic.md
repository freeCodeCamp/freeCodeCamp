---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: ''
localeTitle: جعل قارئ شاشة الملاحة أسهل مع رأس معلم
---

## Description
<section id="description"> عنصر HTML5 التالي الذي يضيف المعنى الدلالي ويحسّن إمكانية الوصول هو علامة <code>header</code> . يتم استخدامه لالتفاف المعلومات التمهيدية أو ارتباطات التنقل لعلامته الرئيسية ، ويعمل بشكل جيد حول المحتوى الذي يتكرر في الأعلى على صفحات متعددة. يشترك <code>header</code> في ميزة المعالم البارزة التي شاهدتها بشكل <code>main</code> ، مما يسمح باستخدام التقنيات المساعدة للتنقل بسرعة إلى هذا المحتوى. <strong>ملحوظة</strong> <br> <code>header</code> المقصود للاستخدام في <code>body</code> بطاقة من وثيقة HTML الخاص بك. هذا يختلف عن عنصر <code>head</code> ، والذي يحتوي على عنوان الصفحة ، معلومات التعريف ، إلخ. </section>

## Instructions
<section id="instructions"> كامبر كات يكتب بعض المقالات الرائعة حول تدريب النينجا ، ويريد إضافة صفحة لهم إلى موقعه. غيّر <code>div</code> الأعلى الذي يحتوي حاليًا على <code>h1</code> إلى علامة <code>header</code> بدلاً من ذلك. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي الشفرة على علامة <code>header</code> واحدة.
    testString: 'assert($("header").length == 1, "Your code should have one <code>header</code> tag.");'
  - text: يجب أن تلتف علامات <code>header</code> حول <code>h1</code> .
    testString: 'assert($("header").children("h1").length == 1, "Your <code>header</code> tags should wrap around the <code>h1</code>.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: تأكد من أن عنصر <code>header</code> الخاص بك يحتوي على علامة إغلاق.
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
