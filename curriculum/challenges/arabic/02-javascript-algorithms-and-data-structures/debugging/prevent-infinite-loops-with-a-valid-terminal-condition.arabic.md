---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
videoUrl: ''
localeTitle: منع حلقات لا نهائية مع شرط محطة صالح
---

## Description
<section id="description"> الموضوع الأخير هو حلقة اللانهائي اللعين. الحلقات هي أدوات رائعة عندما تحتاج إلى برنامج لتشغيل كتلة التعليمات البرمجية لعدد معين من المرات أو حتى يتم استيفاء الشرط ، ولكنها تحتاج إلى حالة طرفية تنهي التكرار. من المحتمل أن تؤدي الحلقات اللانهائية إلى تجميد المتصفح أو تعطله ، وتتسبب في حدوث فشل في تنفيذ البرنامج العام ، وهو ما لا يريده أحد. كان هناك مثال حلقة لا نهائية في مقدمة هذا القسم - ليس لديها أي شرط المحطة للخروج من <code>while</code> حلقة داخل <code>loopy()</code> . لا ندعو هذه الوظيفة! <blockquote style=";text-align:right;direction:rtl"> function loopy () { <br> احيانا صحيح) { <br> console.log (&quot;Hello، world!&quot;)؛ <br> } <br> } </blockquote> إنها وظيفة المبرمج لضمان أن يتم الوصول في نهاية المطاف إلى حالة المحطة الطرفية ، التي تخبر البرنامج عند الخروج من شفرة التكرار. خطأ واحد هو زيادة أو إنقاص متغير عداد في الاتجاه الخاطئ من حالة المحطة الطرفية. واحد آخر هو بطريق الخطأ إعادة تعيين عداد أو فهرس متغير داخل رمز التكرار ، بدلاً من زيادة أو إنقاصه. </section>

## Instructions
<section id="instructions"> تحتوي الدالة <code>myFunc()</code> على حلقة لانهائية نظرًا لأن حالة المحطة الطرفية <code>i != 4</code> لن يتم تقييمها أبداً إلى <code>false</code> (وكسر الحلقات) - سوف <code>i</code> بزيادة 2 لكل مسار ، والقفز مباشرة فوق 4 لأن <code>i</code> هو أمر غريب للبدء. إصلاح عامل مقارنة في حالة محطة حتى الحلقة يعمل فقط ل <code>i</code> أقل من أو يساوي 4. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: التعليمات البرمجية يجب أن تتغير عامل مقارنة في حالة الطرفية (الجزء الأوسط) من <code>for</code> حلقة.
    testString: 'assert(code.match(/i\s*?<=\s*?4;/g).length == 1, "Your code should change the comparison operator in the terminal condition (the middle part) of the <code>for</code> loop.");'
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك بإصلاح عامل المقارنة في حالة طرفية الحلقة.
    testString: 'assert(!code.match(/i\s*?!=\s*?4;/g), "Your code should fix the comparison operator in the terminal condition of the loop.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
