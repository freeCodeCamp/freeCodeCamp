---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: تطابق كل شيء لكن الحروف والأرقام
---

## Description
<section id="description"> لقد تعلمت أنه يمكنك استخدام اختصار لمطابقة <code>[A-Za-z0-9_]</code> الأبجدية العددية <code>[A-Za-z0-9_]</code> باستخدام <code>\w</code> . النمط الطبيعي الذي قد ترغب في البحث عنه هو عكس alphanumerics. يمكنك البحث عن عكس <code>\w</code> مع <code>\W</code> لاحظ أن النمط المعاكس يستخدم حرفًا كبيرًا. هذا الاختصار هو نفسه <code>[^A-Za-z0-9_]</code> . <blockquote style=";text-align:right;direction:rtl"> اترك shortHand = / \ W /؛ <br> السماح للأرقام = &quot;42 ٪&quot; ؛ <br> اسمحوا الجملة = &quot;الترميز!&quot; ؛ <br> numbers.match (اختزال)؛ // عائدات [&quot;٪&quot;] <br> sentence.match (اختزال)؛ // عائدات [&quot;!&quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> استخدم class <code>\W</code> حرف الاختصار لحساب عدد الأحرف غير الأبجدية الرقمية في علامات الاقتباس والسلاسل المختلفة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي العلم العام.
    testString: 'assert(nonAlphabetRegex.global, "Your regex should use the global flag.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 6 أحرف غير أبجدية رقمية في <code>&quot;The five boxing wizards jump quickly.&quot;</code> .
    testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.");'
  - text: يجب أن يستخدم تعبيرك العادي الحرف المختصر.
    testString: 'assert(/\\W/.test(nonAlphabetRegex.source), "Your regex should use the shorthand character to match characters which are non-alphanumeric.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 8 أحرف غير أبجدية رقمية في <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, "Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: يجب أن يعثر تعبيرك المنطقي على 6 أحرف غير أبجدية رقمية في <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: يجب أن يعثر <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code> على 12 حرفًا غير أبجدي رقمي في <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, "Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
