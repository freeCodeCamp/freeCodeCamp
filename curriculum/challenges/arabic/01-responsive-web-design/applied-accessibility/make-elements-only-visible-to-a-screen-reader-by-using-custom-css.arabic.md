---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: ''
localeTitle: جعل العناصر مرئية فقط إلى قارئ الشاشة عن طريق استخدام CSS مخصص
---

## Description
<section id="description"> هل لاحظت أن جميع تحديات إمكانية الوصول المطبقة حتى الآن لم تستخدم أي CSS؟ هذا هو إظهار أهمية مخطط المستند المنطقي ، واستخدام علامات ذات معنى دلالي حول المحتوى الخاص بك قبل إدخال جانب التصميم المرئي. ومع ذلك ، يمكن لسحر CSS أيضًا تحسين إمكانية الوصول على صفحتك عندما تريد إخفاء المحتوى المقصود فقط لقارئي الشاشة. يحدث هذا عندما تكون المعلومات في تنسيق مرئي (مثل التخطيط) ، ولكن يحتاج مستخدمو قارئ الشاشة إلى عرض تقديمي بديل (مثل جدول) للوصول إلى البيانات. يتم استخدام CSS لوضع عناصر قارئ الشاشة فقط خارج المنطقة المرئية من نافذة المتصفح. في ما يلي مثال لقواعد CSS التي تحقق ذلك: <blockquote style=";text-align:right;direction:rtl"> .sr-only { <br> الموقع: مطلقة <br> left: -10000px؛ <br> العرض: 1 بكسل ؛ <br> الارتفاع: 1 بكسل ؛ <br> top: auto؛ <br> إخفاء الفائض؛ <br> } </blockquote> <strong>ملحوظة</strong> <br> أساليب CSS التالية لن تفعل نفس الشيء: <ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <code>display: none;</code> أو <code>visibility: hidden;</code> لإخفاء المحتوى للجميع ، بما في ذلك مستخدمي قارئ الشاشة </li><li style=";text-align:right;direction:rtl"> قيم الصفر للأحجام بكسل ، مثل <code>width: 0px; height: 0px;</code> يزيل هذا العنصر من تدفق المستند ، مما يعني أن قارئي الشاشة سيتجاهله </li></ul></section>

## Instructions
<section id="instructions"> أنشأ كامبر كات مخططًا شريطيًا رائعًا جدًا لصفحته التدريبية ، ووضع البيانات في جدول لمستخدمي المعاقين بصريا. يحتوي الجدول بالفعل على فئة <code>sr-only</code> ، ولكن لا يتم ملء قواعد CSS حتى الآن. امنح <code>position</code> قيمة مطلقة ، والقيمة <code>left</code> من -10000px ، <code>width</code> <code>height</code> لكل من قيم 1px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك بتعيين خاصية <code>position</code> للفئة <code>sr-only</code> إلى قيمة مطلقة.
    testString: 'assert($(".sr-only").css("position") == "absolute", "Your code should set the <code>position</code> property of the <code>sr-only</code> class to a value of absolute.");'
  - text: يجب أن تقوم كودك بتعيين الخاصية <code>left</code> للفئة <code>sr-only</code> إلى قيمة -10000px.
    testString: 'assert($(".sr-only").css("left") == "-10000px", "Your code should set the <code>left</code> property of the <code>sr-only</code> class to a value of -10000px.");'
  - text: يجب أن يقوم <code>width</code> بتعيين خاصية <code>width</code> للفئة <code>sr-only</code> إلى قيمة 1 بكسل.
    testString: 'assert(code.match(/width:\s*?1px/gi), "Your code should set the <code>width</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك بتعيين خاصية <code>height</code> للفئة <code>sr-only</code> إلى قيمة 1 بكسل.
    testString: 'assert(code.match(/height:\s*?1px/gi), "Your code should set the <code>height</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
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
