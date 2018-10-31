---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
videoUrl: ''
localeTitle: استخدم وحدة تحكم جافا سكريبت للتحقق من قيمة المتغير
---

## Description
<section id="description"> يحتوي كل من Chrome و Firefox على وحدات تحكم جافا سكريبت ممتازة ، تُعرف أيضًا باسم DevTools ، لتصحيح أخطاء جافا سكريبت. يمكنك العثور على أدوات مطوري البرامج في قائمة Chrome أو وحدة تحكم الويب في قائمة FireFox. إذا كنت تستخدم متصفحًا مختلفًا أو هاتفًا جوالًا ، فنحن نوصي بشدة بالتبديل إلى مكتبي Firefox أو Chrome. من المحتمل أن تكون طريقة <code>console.log()</code> ، التي &quot;تطبع&quot; مخرجات ما داخل أقواسها إلى وحدة التحكم ، أداة التصحيح الأكثر فائدة. يمكن وضعه في النقاط الاستراتيجية في التعليمات البرمجية الخاصة بك تظهر لك القيم المتوسطة للمتغيرات. من الجيد أن يكون لديك فكرة عن ما يجب أن يكون عليه المخرج قبل النظر إلى ما هو عليه. وجود نقاط تحقق لرؤية حالة الحسابات الخاصة بك في جميع أنحاء التعليمات البرمجية الخاصة بك سيساعد على تضييق نطاق المشكلة. في ما يلي مثال لطباعة &quot;Hello world!&quot; إلى وحدة التحكم: <code>console.log(&#39;Hello world!&#39;);</code> </section>

## Instructions
<section id="instructions"> استخدم الأسلوب <code>console.log()</code> لطباعة قيمة المتغير <code>a</code> المكان الذي تمت الإشارة إليه في التعليمة البرمجية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك <code>console.log()</code> للتحقق من قيمة المتغير <code>a</code> .
    testString: 'assert(code.match(/console\.log\(a\)/g), "Your code should use <code>console.log()</code> to check the value of the variable <code>a</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 5;
let b = 1;
a++;
// Add your code below this line


let sumAB = a + b;
console.log(sumAB);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
