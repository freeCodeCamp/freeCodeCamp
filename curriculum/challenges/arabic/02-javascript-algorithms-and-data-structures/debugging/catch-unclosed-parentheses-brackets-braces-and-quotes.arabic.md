---
id: 587d7b84367417b2b2512b36
title: 'Catch Unclosed Parentheses, Brackets, Braces and Quotes'
challengeType: 1
videoUrl: ''
localeTitle: قبض على الأقواس غير المغلقة ، بين قوسين ، الأقواس والاقتباسات
---

## Description
<section id="description"> هناك خطأ آخر في بناء الجملة يجب أن يكون على دراية بأن جميع أقواس الفتح ، الأقواس ، الأقواس المعقوفة ، وعلامات الاقتباس لها زوج إغلاق. يؤدي نسيان قطعة إلى الحدوث عند تحرير الشفرة الحالية وإدراج عناصر تحتوي على أحد أنواع الزوج. أيضًا ، توخ الحذر عند تضمين كتل التعليمات البرمجية في الآخرين ، مثل إضافة وظيفة رد اتصال كوسيطة إلى طريقة ما. هناك طريقة واحدة لتجنب هذا الخطأ بمجرد كتابة الحرف الافتتاحي ، وتضمين على الفور تطابق الإغلاق ، ثم حرك المؤشر للخلف بينهما واستمر في الترميز. لحسن الحظ ، فإن معظم برامج تحرير الشفرة الحديثة تولد النصف الثاني من الزوج تلقائيًا. </section>

## Instructions
<section id="instructions"> أصلح خطأ الزوج في الشفرة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تعمل شفرتك على إصلاح الجزء المفقود من المصفوفة.
    testString: 'assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g), "Your code should fix the missing piece of the array.");'
  - text: 'يجب أن تقوم التعليمات البرمجية الخاصة بك بإصلاح الجزء المفقود من طريقة <code>.reduce()</code> . يجب أن يظهر إخراج وحدة التحكم أن &quot;مجموع قيم الصفيف: 6&quot;.'
    testString: 'assert(arraySum === 6, "Your code should fix the missing piece of the <code>.reduce()</code> method. The console output should show that "Sum of array values is: 6".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
