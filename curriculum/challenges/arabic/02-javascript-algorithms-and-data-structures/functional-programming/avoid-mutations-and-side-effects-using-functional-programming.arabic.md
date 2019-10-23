---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: تجنب الطفرات والآثار الجانبية باستخدام البرمجة الوظيفية
---

## Description
<section id="description"> إذا لم تكن قد برزت بالفعل ، كانت المشكلة في التحدي السابق مع استدعاء <code>splice</code> في وظيفة <code>tabClose()</code> . لسوء الحظ ، يغير <code>splice</code> الصفيف الأصلي الذي يتم استدعاؤه ، لذلك استعملت المكالمة الثانية له مصفوفة معدلة ، وأعطت نتائج غير متوقعة. هذا مثال صغير لنمط أكبر بكثير - تقوم باستدعاء وظيفة على متغير أو صفيف أو كائن ، وتقوم الوظيفة بتغيير المتغير أو شيء ما في الكائن. أحد المبادئ الأساسية للبرمجة الوظيفية هو عدم تغيير الأشياء. التغييرات تؤدي إلى البق. من السهل منع الأخطاء مع العلم أن وظائفك لا تغير أي شيء ، بما في ذلك وسائط الدالة أو أي متغير عالمي. لم يكن للمثال السابق أي عمليات معقدة ولكن طريقة <code>splice</code> غيرت الصفيف الأصلي ، وأدت إلى خلل. أذكر أنه في البرمجة الوظيفية ، وتغيير أو تغيير الأمور يسمى <code>mutation</code> ، ويسمى النتيجة <code>side effect</code> . من الناحية المثالية ، ينبغي أن تكون <code>pure function</code> ، بمعنى أنها لا تسبب أي آثار جانبية. دعونا نحاول إتقان هذا الانضباط وعدم تغيير أي متغير أو كائن في الكود. </section>

## Instructions
<section id="instructions"> ملء رمز لوظيفة <code>incrementer</code> بحيث تقوم بإرجاع قيمة المتغير العالمي <code>fixedValue</code> بنسبة واحد. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لا يجب أن تقوم الدالة <code>incrementer</code> بتغيير قيمة <code>fixedValue</code> .
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: يجب أن ترجع الدالة <code>incrementer</code> الخاص بك قيمة أكبر من قيمة <code>fixedValue</code> .
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
