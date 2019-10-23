---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
videoUrl: ''
localeTitle: استخدم typeof للتحقق من نوع المتغير
---

## Description
<section id="description"> يمكنك استخدام <code>typeof</code> للتحقق من بنية البيانات أو نوع المتغير. هذا مفيد في تصحيح الأخطاء عند العمل مع أنواع بيانات متعددة. إذا كنت تعتقد أنك تضيف رقمين ، لكن أحدهما عبارة عن سلسلة ، فيمكن أن تكون النتائج غير متوقعة. يمكن أن تكمن أخطاء الكتابة في العمليات الحسابية أو المكالمات الوظيفية. كن حذرًا خصوصًا عند الوصول إلى البيانات الخارجية والعمل بها في شكل كائن ترميز كائنات جافا سكريبت (JSON). فيما يلي بعض الأمثلة باستخدام <code>typeof</code> : <blockquote style=";text-align:right;direction:rtl"> console.log (typeof &quot;&quot;) ؛ // مخرجات &quot;سلسلة&quot; <br> console.log (typeof 0)؛ // outputs &quot;number&quot; <br> console.log (typeof [])؛ // outputs &quot;object&quot; <br> console.log (typeof {})؛ // outputs &quot;object&quot; </blockquote> يتعرف JavaScript على ستة أنواع من البيانات البدائية (غير القابلة للتغيير): <code>Boolean</code> و <code>Null</code> و <code>Undefined</code> و <code>Number</code> و <code>String</code> و <code>Symbol</code> (جديد مع ES6) ونوع واحد للعناصر القابلة للتغيير: <code>Object</code> . لاحظ أنه في JavaScript ، تعد المصفوفات نوعًا من الكائنات تقنيًا. </section>

## Instructions
<section id="instructions"> إضافة جهازي <code>console.log()</code> للتحقق من <code>typeof</code> كل من المتغيرات <code>seven</code> <code>three</code> في التعليمات البرمجية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>typeof</code> في جهازي <code>console.log()</code> للتحقق من نوع المتغيرات.
    testString: 'assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2, "Your code should use <code>typeof</code> in two <code>console.log()</code> statements to check the type of the variables.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>typeof</code> للتحقق من نوع المتغير <code>seven</code> .
    testString: 'assert(code.match(/typeof[\( ]seven\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>seven</code>.");'
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>typeof</code> للتحقق من نوع المتغير <code>three</code> .
    testString: 'assert(code.match(/typeof[\( ]three\)?/g), "Your code should use <code>typeof</code> to check the type of the variable <code>three</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
