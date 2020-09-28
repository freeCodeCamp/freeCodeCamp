---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: ''
localeTitle: تحسين إمكانية الوصول المخطط مع عنصر الشكل
---

## Description
<section id="description"> قدم HTML5 عنصر <code>figure</code> ، جنبا إلى جنب مع <code>figcaption</code> ذات الصلة. تستخدم هذه العناصر معًا لتمثيل عرض مرئي (مثل صورة أو مخطط أو مخطط) مع التسمية التوضيحية. ويعطي هذا دفعة من إمكانية الوصول ذات شقين عن طريق كل من المحتوى ذي الصلة من حيث تجميع المحتوى ، وتقديم بديل نصي يشرح <code>figure</code> . بالنسبة إلى عمليات التمثيل البصري للبيانات مثل المخططات ، يمكن استخدام التسمية التوضيحية للإحاطة علما بالاتجاهات أو الاستنتاجات للمستخدمين الذين يعانون من إعاقات بصرية. ويغطي تحد آخر كيفية نقل إصدار جدول من البيانات خارج الشاشة (باستخدام CSS) لمستخدمي قارئ الشاشة. في ما يلي مثال - لاحظ أن <code>figcaption</code> داخل علامات <code>figure</code> ويمكن دمجه مع عناصر أخرى:

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="صورة لكامبر كات ينفذ ركلة مستديرة">
  <br>
  <figcaption>
    المعلم كامبر كات يوضح الشكل الصحيح للركلة المستديرة.
  </figcaption>
</figure>
```

</section>

## Instructions
<section id="instructions"> تعمل لعبة Camper Cat بجد لإنشاء مخطط شريطي مكدّس يعرض مقدار الوقت في الأسبوع لإنفاق التدريب على التسلل والمكافحة والأسلحة. ساعده في تنظيم صفحته بشكل أفضل عن طريق تغيير علامة <code>div</code> التي استخدمها في علامة <code>figure</code> ، والعلامة <code>p</code> التي تحيط <code>figcaption</code> التوضيحية إلى علامة <code>figcaption</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي <code>figure</code> علامة <code>figure</code> واحدة.
    testString: 'assert($("figure").length == 1, "Your code should have one <code>figure</code> tag.");'
  - text: يجب أن تحتوي <code>figcaption</code> علامة <code>figcaption</code> واحدة.
    testString: 'assert($("figcaption").length == 1, "Your code should have one <code>figcaption</code> tag.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>p</code> .
    testString: 'assert($("p").length == 0, "Your code should not have any <code>p</code> tags.");'
  - text: يجب أن يكون <code>figcaption</code> طفل علامة <code>figure</code> .
    testString: 'assert($("figure").children("figcaption").length == 1, "The <code>figcaption</code> should be a child of the <code>figure</code> tag.");'
  - text: تأكد من أن عنصر <code>figure</code> الخاص بك به علامة إغلاق.
    testString: 'assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length, "Make sure your <code>figure</code> element has a closing tag.");'

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
    <section>

      <!-- Add your code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Add your code above this line -->

    </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
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
