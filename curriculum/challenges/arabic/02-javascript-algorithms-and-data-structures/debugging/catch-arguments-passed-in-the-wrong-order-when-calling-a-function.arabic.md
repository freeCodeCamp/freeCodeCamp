---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
videoUrl: ''
localeTitle: Catch Arguments Passed in the Wrong Order When Calling a Function
---

## Description
<section id="description"> استمرار المناقشة حول وظائف الاستدعاء ، فإن الخطأ التالي الذي يجب الانتباه إليه هو عندما يتم توفير وسيطات الدالة بترتيب غير صحيح. إذا كانت الوسيطات هي أنواع مختلفة ، مثل دالة تتوقع مصفوفة وعددًا صحيحًا ، فمن المحتمل أن يؤدي ذلك إلى حدوث خطأ في وقت التشغيل. إذا كانت الوسيطات من نفس النوع (كل الأعداد الصحيحة ، على سبيل المثال) ، فإن منطق الكود لن يكون ذا معنى. تأكد من توفير جميع الحجج المطلوبة ، بالترتيب الصحيح لتجنب هذه المشاكل. </section>

## Instructions
<section id="instructions"> ترفع الدالة <code>raiseToPower</code> قاعدة إلى الأس. للأسف ، لا يتم استدعائه بشكل صحيح - قم بإصلاح الكود بحيث تكون قيمة <code>power</code> المتوقعة 8. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحدد شفرتك <code>power</code> المتغيرة بحيث تساوي 2 مرفوعة إلى الطاقة الثالثة ، وليس 3 مرفوعة إلى الطاقة الثانية.
    testString: 'assert(power == 8, "Your code should fix the variable <code>power</code> so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.");'
  - text: يجب أن تستخدم التعليمة البرمجية الخاصة بك الترتيب الصحيح للوسيطات الخاصة <code>raiseToPower</code> وظيفة <code>raiseToPower</code> .
    testString: 'assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g), "Your code should use the correct order of the arguments for the <code>raiseToPower</code> function call.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
