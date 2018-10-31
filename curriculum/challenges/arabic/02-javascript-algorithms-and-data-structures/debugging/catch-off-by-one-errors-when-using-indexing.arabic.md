---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
videoUrl: ''
localeTitle: القبض عن طريق واحدة من الأخطاء عند استخدام الفهرسة
---

## Description
<section id="description"> <code>Off by one errors</code> (تسمى أحيانًا OBOE) عند محاولة استهداف فهرس معين لسلسلة أو صفيف (لتقسيم شريحة أو الوصول إليها) ، أو عند التكرار فوق مؤشراتها. تبدأ فهرسة جافا سكريبت في الصفر ، وليس واحدة ، مما يعني أن الفهرس الأخير يكون دائمًا أقل من طول العنصر. إذا حاولت الوصول إلى فهرس مساوٍ للطول ، فقد يلقي البرنامج خطأ مرجع &quot;فهرسة خارج النطاق&quot; أو يطبع <code>undefined</code> . عند استخدام سلسلة أو طرق صفيف تأخذ نطاقات الفهرس كوسيطة ، فإنها تساعد على قراءة الوثائق وفهم ما إذا كانت شاملة (العنصر الموجود في الفهرس المعين هو جزء مما تم إرجاعه) أم لا. في ما يلي بعض الأمثلة على أخطاء واحدة: <blockquote style=";text-align:right;direction:rtl"> let alphabet = &quot;abcdefghijklmnopqrstuvwxyz&quot;؛ <br> دعونا لين = alphabet.length. <br> لـ (let i = 0؛ i &lt;= len؛ i ++) { <br> // حلقات واحدة عدة مرات في النهاية <br> console.log (الأبجدية [أنا])؛ <br> } <br> لـ (let j = 1؛ j &lt;len؛ j ++) { <br> // يكرر مرات قليلة جدًا ويفتقد الحرف الأول في الفهرس 0 <br> console.log (الأبجدية [ي])؛ <br> } <br> لـ (let k = 0؛ k &lt;len؛ k ++) { <br> // يوافق Goldilocks - وهذا هو الصحيح <br> console.log (الأبجدية [ك])؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> إصلاح أخطاء الفهرسة في الدالة التالية بحيث يتم طباعة كافة الأرقام من 1 إلى 5 إلى وحدة التحكم. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية بتعيين الشرط الأولي للحلقة بحيث يبدأ في الفهرس الأول.
    testString: 'assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1, "Your code should set the initial condition of the loop so it starts at the first index.");'
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك بإصلاح الشرط الأولي للحلقة بحيث يبدأ الفهرس عند 0.
    testString: 'assert(!code.match(/i\s?=\s*?1\s*?;/g), "Your code should fix the initial condition of the loop so that the index starts at 0.");'
  - text: يجب أن تحدد شفرتك حالة المحطة الطرفية للحلقة بحيث تتوقف عند الفهرس الأخير.
    testString: 'assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1, "Your code should set the terminal condition of the loop so it stops at the last index.");'
  - text: يجب أن تقوم تعليماتك البرمجية بإصلاح حالة الحلقة الطرفية بحيث تتوقف عند 1 قبل الطول.
    testString: 'assert(!code.match(/i\s*?<=\s*?len;/g), "Your code should fix the terminal condition of the loop so that it stops at 1 before the length.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 1; i <= len; i++) {
  // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

countToFive();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
