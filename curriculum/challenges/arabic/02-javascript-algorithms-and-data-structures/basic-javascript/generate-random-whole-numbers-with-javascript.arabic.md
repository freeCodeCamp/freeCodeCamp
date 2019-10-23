---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: توليد أرقام كاملة عشوائية مع جافا سكريبت
---

## Description
<section id="description"> من الرائع أن نتمكن من توليد أرقام عشرية عشوائية ، ولكنها أكثر فائدة إذا استخدمناها لإنشاء أرقام صحيحة عشوائية. <ol style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> استخدم <code>Math.random()</code> لإنشاء عشري عشوائي. </li><li style=";text-align:right;direction:rtl"> اضرب هذا الرقم العشري العشوائي بـ <code>20</code> . </li><li style=";text-align:right;direction:rtl"> استخدم دالة أخرى ، <code>Math.floor()</code> الرقم إلى أقرب رقم <code>Math.floor()</code> له. </li></ol> تذكر أن <code>Math.random()</code> لا يمكنها أبدًا إرجاع <code>1</code> و ، نظرًا لأننا نقوم بالتقريب ، فمن المستحيل الحصول على <code>20</code> بالفعل. ستعطينا هذه التقنية عددًا صحيحًا بين <code>0</code> و <code>19</code> . وضع كل شيء معا ، وهذا هو ما تبدو عليه الكود لدينا: <code>Math.floor(Math.random() * 20);</code> نحن نطلق على <code>Math.random()</code> ، بضرب النتيجة بـ 20 ، ثم نمرر قيمة <code>Math.floor()</code> القيمة إلى أقرب رقم <code>Math.floor()</code> . </section>

## Instructions
<section id="instructions"> استخدم هذه التقنية لتوليد وإرجاع رقم صحيح عشوائي بين <code>0</code> و <code>9</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون نتيجة <code>randomWholeNum</code> .
    testString: 'assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})(), "The result of <code>randomWholeNum</code> should be a whole number.");'
  - text: يجب أن تستخدم <code>Math.random</code> لإنشاء رقم عشوائي.
    testString: 'assert(code.match(/Math.random/g).length > 1, "You should be using <code>Math.random</code> to generate a random number.");'
  - text: يجب أن تضاعف نتيجة <code>Math.random</code> بمقدار 10 لجعله رقمًا بين صفر وتسعة.
    testString: 'assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g), "You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.");'
  - text: يجب عليك استخدام <code>Math.floor</code> لإزالة الجزء العشري من الرقم.
    testString: 'assert(code.match(/Math.floor/g).length > 1, "You should use <code>Math.floor</code> to remove the decimal part of the number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
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
