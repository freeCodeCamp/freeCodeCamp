---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: توليد الكسور العشوائية مع جافا سكريبت
---

## Description
<section id="description"> الأرقام العشوائية مفيدة لإنشاء سلوك عشوائي. يحتوي JavaScript على دالة <code>Math.random()</code> التي تنشئ رقمًا عشريًا عشوائيًا بين <code>0</code> (شامل) وليس تمامًا <code>1</code> (خاص). وبالتالي ، يمكن أن يقوم <code>Math.random()</code> بإرجاع <code>0</code> ولكن لا يُرجع أبدًا <strong>ملاحظة</strong> <code>1</code> <br> مثل <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">تخزين القيم مع عامل التشغيل المتساوي</a> ، سيتم حل جميع استدعاءات الدوال قبل تنفيذ عملية <code>return</code> ، حتى نتمكن من <code>return</code> قيمة الدالة <code>Math.random()</code> . </section>

## Instructions
<section id="instructions"> قم بتغيير <code>randomFraction</code> لإرجاع رقم عشوائي بدلاً من إرجاع <code>0</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomFraction</code> يجب إرجاع رقم عشوائي.
    testString: 'assert(typeof randomFraction() === "number", "<code>randomFraction</code> should return a random number.");'
  - text: يجب أن يكون الرقم الذي تم إرجاعه بواسطة <code>randomFraction</code> عشريًا.
    testString: 'assert((randomFraction()+""). match(/\./g), "The number returned by <code>randomFraction</code> should be a decimal.");'
  - text: يجب أن تستخدم <code>Math.random</code> لإنشاء الرقم العشري العشوائي.
    testString: 'assert(code.match(/Math\.random/g).length >= 0, "You should be using <code>Math.random</code> to generate the random decimal number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function randomFraction() {

  // Only change code below this line.

  return 0;

  // Only change code above this line.
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
