---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
videoUrl: ''
localeTitle: المباراة جميع غير الارقام
---

## Description
<section id="description"> أظهر التحدي الأخير كيفية البحث عن الأرقام باستخدام الاختصار <code>\d</code> باستخدام أحرف صغيرة <code>d</code> . يمكنك أيضًا البحث عن غير أرقام باستخدام اختصار مماثل يستخدم حرف <code>D</code> كبيرًا بدلاً من ذلك. الاختصار للبحث عن أحرف غير رقمية هو <code>\D</code> هذا يساوي فئة الأحرف <code>[^0-9]</code> ، والتي تبحث عن حرف واحد ليس رقمًا بين الصفر والتاسع. </section>

## Instructions
<section id="instructions"> استخدم فئة حرف الاختصار غير digits <code>\D</code> لحساب عدد غير أرقام في عناوين الأفلام. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي حرف الاختصار لمطابقة الأحرف غير المكونة
    testString: 'assert(/\\D/.test(noNumRegex.source), "Your regex should use the shortcut character to match non-digit characters");'
  - text: يجب أن يستخدم تعبيرك العادي العلم العام.
    testString: 'assert(noNumRegex.global, "Your regex should use the global flag.");'
  - text: يجب ألا يعثر التعبير المعتاد على أي أرقام في <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(noNumRegex) == null, "Your regex should find no non-digits in <code>"9"</code>.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 6 أرقام في <code>&quot;Catch 22&quot;</code> .
    testString: 'assert("Catch 22".match(noNumRegex).length == 6, "Your regex should find 6 non-digits in <code>"Catch 22"</code>.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 11 رقمًا غير رقمي في <code>&quot;101 Dalmatians&quot;</code> .
    testString: 'assert("101 Dalmatians".match(noNumRegex).length == 11, "Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.");'
  - text: 'يجب أن يعثر تعبيرك المعتاد على 15 رقمًا غير رقمي في <code>&quot;One, Two, Three&quot;</code> .'
    testString: 'assert("One, Two, Three".match(noNumRegex).length == 15, "Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.");'
  - text: يجب أن يعثر تعبيرك المعتاد على 12 رقمًا غير رقمي في <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(noNumRegex).length == 12, "Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.");'
  - text: 'يجب أن يعثر تعبيرك المعتاد على 17 رقمًا غير رقمي في <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, "Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
