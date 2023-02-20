---
id: 587d7787367417b2b2512aa1
title: تسهيل تصفح قارئ الشاشة مع علامة الرأس header
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

عنصر الـ HTML5 التالي الذي يضيف المعنى الدلالي ويحسن إمكانية الوصول هو عنصر `header`. يستخدم لاحتواء المعلومات التمهيدية أو روابط التنقل لعنصره آلأساسي ويعمل بشكل جيد مع المحتوى المتكرر في الأعلى على الصفحات متعددة.

`header` يشاركك الميزة البارزة المدمجة التي رأيتها مع `main`، مما يسمح للتكنولوجيات المساعدة بالانتقال بسرعة إلى ذلك المحتوى.

**ملاحظة:** عنصر `header` يستخدم في عنصر `body` بمستند HTML الخاص بك. وهذا يختلف عن عن عنصر الـ `head` الذي يحتوي على عنوان الصفحة، معلومات تعريفية، و الخ.

# --instructions--

يقوم Camper Cat بكتابة بعض المقالات الرائعة عن تدريب النينجا، ويريد إضافة صفحة لهم على موقعه. قم بتغيير `div` العلوية التي تحتوي حاليا على `h1` إلى عنصر `header` بدلا من ذلك.

# --hints--

يجب أن يحتوي الكود الخاص بك على علامة `header` واحدة فقط.

```js
assert($('header').length == 1);
```

يجب أن يحتوي عنصر `header` على عنصر `h1`.

```js
assert($('header').children('h1').length == 1);
```

يجب ألا يحتوي الكود الخاص بك على أي عنصر `div`.

```js
assert($('div').length == 0);
```

يجب أن يحتوي عنصر `header` الخاص بك على علامة إغلاق.

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<body>

  <header>
    <h1>Training with Camper Cat</h1>
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
