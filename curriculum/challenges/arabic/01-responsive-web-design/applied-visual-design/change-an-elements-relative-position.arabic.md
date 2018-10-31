---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: ''
localeTitle: تغيير موضع نسبي للعنصر
---

## Description
<section id="description"> تعامل CSS كل عنصر HTML كمربع خاص بها ، والذي يشار إليه عادة باسم <code>CSS Box Model</code> . تبدأ عناصر مستوى الحظر تلقائيًا في سطر جديد (فكّر في العناوين ، والفقرات ، والعناوين الفرعية) ، بينما تجلس العناصر المضمّنة داخل المحتوى المحيط (مثل الصور أو الامتدادات). يُسمى التنسيق الافتراضي للعناصر بهذه الطريقة <code>normal flow</code> للمستند ، ولكن يوفر CSS خاصية الموضع لتجاوزه. عندما يتم تعيين موضع عنصر ما إلى <code>relative</code> ، فإنه يتيح لك تحديد كيفية نقل CSS له <i>بالنسبة</i> إلى موضعه الحالي في التدفق العادي للصفحة. أزواج مع خصائص تعويض CSS من <code>left</code> أو <code>right</code> ، <code>top</code> أو <code>bottom</code> . يوضح ذلك عدد البكسلات أو النسب المئوية أو نظام الإدارة البيئية لنقل العنصر <i>بعيدًا</i> عن موضعه الطبيعي. المثال التالي ينقل الفقرة 10 بكسل من الأسفل: <blockquote style=";text-align:right;direction:rtl"> ص { <br> موقف: قريب <br> أسفل: 10 بكسل ؛ <br> } </blockquote> لا يؤدي تغيير موضع عنصر ما إلى نسبي إلى إزالته من التدفق العادي - حيث لا تزال عناصر أخرى حوله تتصرف كما لو كان هذا العنصر في موضعه الافتراضي. <strong>ملحوظة</strong> <br> يمنحك التموضع الكثير من المرونة والقوة على التخطيط المرئي للصفحة. من الجيد أن نتذكر أنه بغض النظر عن موضع العناصر ، يجب تنظيم ترميز HTML الأساسي وجعله منطقيًا عند القراءة من الأعلى إلى الأسفل. هذه هي الطريقة التي يدخل بها المستخدمون الذين يعانون من إعاقات بصرية (الذين يعتمدون على أجهزة مساعدة مثل قارئات الشاشة) إلى المحتوى الخاص بك. </section>

## Instructions
<section id="instructions"> غيّر <code>position</code> <code>h2</code> إلى <code>relative</code> ، واستخدم إزاحة CSS لتحريكها بمقدار 15 بكسل بعيدًا عن الجزء <code>top</code> من المكان الذي توجد فيه في التدفق العادي. لاحظ أنه لا يوجد أي تأثير على مواضع عناصر h1 و p المحيطة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لعنصر <code>h2</code> خاصية <code>position</code> معيّنة إلى <code>relative</code> .
    testString: 'assert($("h2").css("position") == "relative", "The <code>h2</code> element should have a <code>position</code> property set to <code>relative</code>.");'
  - text: يجب أن تستخدم شفرتك تخالف CSS لوضع <code>h2</code> 15px بشكلٍ نسبي بعيدًا عن <code>top</code> المكان الذي توجد فيه عادةً.
    testString: 'assert($("h2").css("top") == "15px", "Your code should use a CSS offset to relatively position the <code>h2</code> 15px away from the <code>top</code> of where it normally sits.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
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
