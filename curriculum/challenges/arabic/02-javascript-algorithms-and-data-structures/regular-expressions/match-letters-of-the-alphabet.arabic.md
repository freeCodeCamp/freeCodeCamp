---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: تطابق حروف الأبجدية
---

## Description
<section id="description"> لقد رأيت كيف يمكنك استخدام <code>character sets</code> لتحديد مجموعة من الأحرف لمطابقة ، ولكن هذا كثير من الكتابة عندما تحتاج إلى مطابقة مجموعة كبيرة من الأحرف (على سبيل المثال ، كل حرف في الأبجدية). لحسن الحظ ، هناك ميزة مضمنة تجعل هذا قصيرة وبسيطة. داخل مجموعة <code>character set</code> ، يمكنك تحديد نطاق من الأحرف لمطابقة أحرف <code>hyphen</code> : <code>-</code> . على سبيل المثال ، لمطابقة الأحرف الصغيرة <code>a</code> خلال <code>e</code> قد تستخدم <code>[ae]</code> . <blockquote style=";text-align:right;direction:rtl"> دع catStr = &quot;قطة&quot; ؛ <br> السماح batStr = &quot;الخفافيش&quot; ؛ <br> السماح matStr = &quot;حصيرة&quot; ؛ <br> let bgRegex = / [ae] at /؛ <br> catStr.match (bgRegex)؛ // Returns [&quot;cat&quot;] <br> batStr.match (bgRegex)؛ // Returns [&quot;bat&quot;] <br> matStr.match (bgRegex)؛ // يعود لاغيا </blockquote></section>

## Instructions
<section id="instructions"> تطابق جميع الحروف في سلسلة <code>quoteSample</code> . <strong>ملحوظة</strong> <br> تأكد من مطابقة الأحرف <strong>الكبيرة</strong> والصغيرة <strong><strong>.</strong></strong> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق معجمك <code>alphabetRegex</code> مع 35 عنصرًا.
    testString: 'assert(result.length == 35, "Your regex <code>alphabetRegex</code> should match 35 items.");'
  - text: يجب أن يستخدم <code>alphabetRegex</code> reggex <code>alphabetRegex</code> العلم العام.
    testString: 'assert(alphabetRegex.flags.match(/g/).length == 1, "Your regex <code>alphabetRegex</code> should use the global flag.");'
  - text: التعابير المنطقية الخاصة بك <code>alphabetRegex</code> يجب استخدام حالة العلم حساسة.
    testString: 'assert(alphabetRegex.flags.match(/i/).length == 1, "Your regex <code>alphabetRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
