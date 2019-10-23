---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: المباراة جميع الحروف والأرقام
---

## Description
<section id="description"> باستخدام فئات الأحرف ، تمكنت من البحث عن جميع حروف الأبجدية باستخدام <code>[az]</code> . هذا النوع من فئة الأحرف شائع بما فيه الكفاية أن هناك اختصارًا له ، على الرغم من أنه يتضمن بضعة أحرف إضافية أيضًا. إن أقرب فئة أحرف في JavaScript لتطابق الأبجدية هي <code>\w</code> . هذا الاختصار يساوي <code>[A-Za-z0-9_]</code> . فئة الأحرف هذا تطابق الأحرف الكبيرة والصغيرة بالإضافة إلى الأرقام. ملاحظة ، يتضمن فئة الأحرف هذه أيضًا حرف تسطير أسفل السطر ( <code>_</code> ). <blockquote style=";text-align:right;direction:rtl"> let longHand = / [A-Za-z0-9 _] + /؛ <br> اترك shortHand = / \ w + /؛ <br> السماح للأرقام = &quot;42&quot; ؛ <br> السماح varNames = &quot;important_var&quot; ؛ <br> longHand.test (الأرقام)؛ // يعود صحيح <br> shortHand.test (الأرقام)؛ // يعود صحيح <br> longHand.test (varNames)؛ // يعود صحيح <br> shortHand.test (varNames)؛ // يعود صحيح </blockquote> ومن المعروف أيضا أن هذه الفئات طابع الاختصار كما <code>shorthand character classes</code> . </section>

## Instructions
<section id="instructions"> استخدم class <code>\w</code> حرف الاختصار لحساب عدد الأحرف الأبجدية الرقمية في علامات الاقتباس والسلاسل المختلفة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك العادي العلم العام.
    testString: 'assert(alphabetRegexV2.global, "Your regex should use the global flag.");'
  - text: يجب أن يستخدم تعبيرك العادي الحرف المختصر
    testString: 'assert(/\\w/.test(alphabetRegexV2.source), "Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.");'
  - text: يجب أن يعثر تعبيرك المنطقي على 31 حرفًا أبجديًا رقميًا في <code>&quot;The five boxing wizards jump quickly.&quot;</code>
    testString: 'assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31, "Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>");'
  - text: يجب أن يعثر تعبيرك المنطقي على 32 حرفًا أبجديًا رقميًا في <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32, "Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: يجب أن يعثر تعبيرك المعتاد على 30 حرفًا أبجديًا رقميًا في <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30, "Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: يجب أن يعثر <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code> على 36 حرفًا أبجديًا رقميًا في <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36, "Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
