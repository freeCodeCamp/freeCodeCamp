---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: تحديد العدد الدقيق للمباريات
---

## Description
<section id="description"> يمكنك تحديد العدد السفلي والأعلى من الأنماط مع <code>quantity specifiers</code> باستخدام الأقواس المتعرجة. في بعض الأحيان ، لا تريد سوى عدد محدد من التطابقات. لتحديد عدد معين من الأنماط ، يكون هذا الرقم واحدًا فقط بين الأقواس المتعرجة. على سبيل المثال، لمطابقة فقط كلمة <code>&quot;hah&quot;</code> مع الرسالة <code>a</code> <code>3</code> مرات، من شأنه أن التعابير المنطقية الخاص بك سيكون <code>/ha{3}h/</code> . <blockquote style=";text-align:right;direction:rtl"> اترك A4 = &quot;haaaah&quot;؛ <br> دع A3 = &quot;haaah&quot; ؛ <br> اترك A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;؛ <br> السماح لـ multipleHA = / ha {3} h /؛ <br> multipleHA.test (A4)؛ // إرجاع خاطئة <br> multipleHA.test (A3)؛ // يعود صحيح <br> multipleHA.test (A100)؛ // إرجاع خاطئة </blockquote></section>

## Instructions
<section id="instructions"> قم بتغيير <code>timRegex</code> regex regex <code>timRegex</code> مع الكلمة <code>&quot;Timber&quot;</code> فقط عندما يكون لها أربعة أحرف <code>m</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك المعتاد الأقواس المتعرجة.
    testString: 'assert(timRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;Timber&quot;</code>
    testString: 'assert(!timRegex.test("Timber"), "Your regex should not match <code>"Timber"</code>");'
  - text: يجب ألا يتطابق <code>&quot;Timmber&quot;</code> العادي مع <code>&quot;Timmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmber"), "Your regex should not match <code>"Timmber"</code>");'
  - text: يجب ألا يتطابق <code>&quot;Timmmber&quot;</code> العادي مع <code>&quot;Timmmber&quot;</code>
    testString: 'assert(!timRegex.test("Timmmber"), "Your regex should not match <code>"Timmmber"</code>");'
  - text: يجب أن يتطابق <code>&quot;Timmmmber&quot;</code> العادي مع <code>&quot;Timmmmber&quot;</code>
    testString: 'assert(timRegex.test("Timmmmber"), "Your regex should match <code>"Timmmmber"</code>");'
  - text: يجب ألا يتطابق التعبير العادي مع <code>&quot;Timber&quot;</code> مع 30 <code>m</code> في الصورة.
    testString: 'assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"), "Your regex should not match <code>"Timber"</code> with 30 <code>m</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
