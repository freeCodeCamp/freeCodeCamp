---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Factorialize عدد
---

## Description
<section id="description"> عودة المضروب من عدد صحيح المقدمة. إذا تم تمثيل العدد الصحيح بالحرف n ، فإن العامل الحاسوبي هو نتاج جميع الأعداد الصحيحة الموجبة أقل من أو يساوي n. غالبًا ما يتم تمثيل العوامل بعبارة الاختزال <code>n!</code> على سبيل المثال: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code> فقط تزويد الأعداد الصحيحة التي تزيد عن أو تساوي الصفر بالوظيفة. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يعيد <code>factorialize(5)</code> رقمًا.
    testString: 'assert(typeof factorialize(5) === "number", "<code>factorialize(5)</code> should return a number.");'
  - text: يجب أن يعيد <code>factorialize(5)</code> 120.
    testString: 'assert(factorialize(5) === 120, "<code>factorialize(5)</code> should return 120.");'
  - text: يجب أن يعيد التجهيز <code>factorialize(10)</code> 3628800.
    testString: 'assert(factorialize(10) === 3628800, "<code>factorialize(10)</code> should return 3628800.");'
  - text: يجب أن تعيد إنتاجية <code>factorialize(20)</code> 2432902008176640000.
    testString: 'assert(factorialize(20) === 2432902008176640000, "<code>factorialize(20)</code> should return 2432902008176640000.");'
  - text: يجب أن يعيد <code>factorialize(0)</code> 1.
    testString: 'assert(factorialize(0) === 1, "<code>factorialize(0)</code> should return 1.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorialize(num) {
  return num;
}

factorialize(5);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
