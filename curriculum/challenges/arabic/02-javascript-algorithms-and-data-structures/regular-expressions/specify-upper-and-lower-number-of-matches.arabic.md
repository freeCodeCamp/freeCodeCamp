---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
videoUrl: ''
localeTitle: تحديد العلوي والسفلي عدد من المباريات
---

## Description
<section id="description"> أذكر أنك تستخدم علامة الجمع <code>+</code> للبحث عن حرف واحد أو أكثر والعلامة النجمية <code>*</code> للبحث عن صفر أو أكثر من الأحرف. هذه هي مريحة ولكن في بعض الأحيان تريد أن تتطابق مع مجموعة معينة من الأنماط. يمكنك تحديد العدد السفلي والعلوي من الأنماط مع <code>quantity specifiers</code> . يتم استخدام محددات الكمية مع الأقواس المتعرجة ( <code>{</code> و <code>}</code> ). يمكنك وضع رقمين بين الأقواس المتعرجة - للعدد السفلي والأعلى من الأنماط. على سبيل المثال، لمطابقة فقط الرسالة <code>a</code> التي تظهر بين <code>3</code> و <code>5</code> مرات في سلسلة <code>&quot;ah&quot;</code> ، رجإكس الخاص سيكون <code>/a{3,5}h/</code> . <blockquote style=";text-align:right;direction:rtl"> اترك A4 = &quot;aaaah&quot; ؛ <br> دع A2 = &quot;aah&quot; ؛ <br> السماح لـ multipleA = / a {3،5} h /؛ <br> multipleA.test (A4)؛ // يعود صحيح <br> multipleA.test (A2)؛ // إرجاع خاطئة </blockquote></section>

## Instructions
<section id="instructions"> تغيير التعبير المعتاد <code>ohRegex</code> لمباراة فقط <code>3</code> إلى <code>6</code> إلكتروني <code>h</code> الصورة في كلمة <code>&quot;Oh no&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك المعتاد الأقواس المتعرجة.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: يجب ألا يتطابق <code>&quot;Ohh no&quot;</code> العادي مع <code>&quot;Ohh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: يجب أن يتطابق <code>&quot;Ohhh no&quot;</code> المعتاد مع <code>&quot;Ohhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: يجب أن يتطابق <code>&quot;Ohhhh no&quot;</code> المعتاد مع <code>&quot;Ohhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: يجب أن يتطابق <code>&quot;Ohhhhh no&quot;</code> العادي مع <code>&quot;Ohhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: يجب أن يتطابق <code>&quot;Ohhhhhh no&quot;</code> المعتاد مع <code>&quot;Ohhhhhh no&quot;</code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: يجب ألا يتطابق <code>&quot;Ohhhhhhh no&quot;</code> العادي مع <code>&quot;Ohhhhhhh no&quot;</code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
