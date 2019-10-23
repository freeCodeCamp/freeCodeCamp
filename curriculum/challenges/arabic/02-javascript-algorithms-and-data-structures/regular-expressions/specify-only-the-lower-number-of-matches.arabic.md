---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: تحديد عدد أقل من المطابقات فقط
---

## Description
<section id="description"> يمكنك تحديد العدد السفلي والأعلى من الأنماط مع <code>quantity specifiers</code> باستخدام الأقواس المتعرجة. في بعض الأحيان ، تحتاج فقط إلى تحديد عدد أقل من الأنماط بدون حد أعلى. لتحديد عدد أقل من الأنماط فقط ، احتفظ بالرقم الأول متبوعًا بفاصلة. على سبيل المثال، لمطابقة فقط سلسلة <code>&quot;hah&quot;</code> مع الرسالة <code>a</code> تظهر ما لا يقل عن <code>3</code> مرات، من شأنه أن التعابير المنطقية الخاص بك سيكون <code>/ha{3,}h/</code> . <blockquote style=";text-align:right;direction:rtl"> اترك A4 = &quot;haaaah&quot;؛ <br> دع A2 = &quot;haah&quot; ؛ <br> اترك A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;؛ <br> السماح لـ multipleA = / ha {3،} h /؛ <br> multipleA.test (A4)؛ // يعود صحيح <br> multipleA.test (A2)؛ // إرجاع خاطئة <br> multipleA.test (A100)؛ // يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> تغيير التعبير المعتاد <code>haRegex</code> لتتناسب مع كلمة <code>&quot;Hazzah&quot;</code> فقط عندما يكون لديه أربعة أو أكثر من بريد إلكتروني <code>z</code> الصورة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك المعتاد الأقواس المتعرجة.
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: يجب ألا يتطابق <code>&quot;Hazzah&quot;</code> العادي مع <code>&quot;Hazzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzah"), "Your regex should not match <code>"Hazzah"</code>");'
  - text: يجب ألا يتطابق <code>&quot;Hazzzah&quot;</code> العادي مع <code>&quot;Hazzzah&quot;</code>
    testString: 'assert(!haRegex.test("Hazzzah"), "Your regex should not match <code>"Hazzzah"</code>");'
  - text: يجب أن يتطابق <code>&quot;Hazzzzah&quot;</code> العادي مع <code>&quot;Hazzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzah"), "Your regex should match <code>"Hazzzzah"</code>");'
  - text: يجب أن يتطابق <code>&quot;Hazzzzzah&quot;</code> العادي مع <code>&quot;Hazzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzah"), "Your regex should match <code>"Hazzzzzah"</code>");'
  - text: يجب أن يتطابق <code>&quot;Hazzzzzzah&quot;</code> العادي مع <code>&quot;Hazzzzzzah&quot;</code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), "Your regex should match <code>"Hazzzzzzah"</code>");'
  - text: يجب أن يتطابق التعبير العادي مع <code>&quot;Hazzah&quot;</code> مع 30 <code>z</code> \ in.
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), "Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
