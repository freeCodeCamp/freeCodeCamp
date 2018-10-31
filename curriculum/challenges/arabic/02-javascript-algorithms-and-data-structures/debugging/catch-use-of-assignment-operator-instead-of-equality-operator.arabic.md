---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
videoUrl: ''
localeTitle: قبض على استخدام مشغل التعيين بدلا من مشغل المساواة
---

## Description
<section id="description"> تعتمد البرامج المتفرعة ، أي البرامج التي تقوم بأشياء مختلفة إذا تم استيفاء شروط معينة ، على <code>if</code> <code>else if</code> <code>else</code> عبارات أخرى في جافا سكريبت أو غير ذلك أو <code>else</code> . تأخذ الحالة أحيانًا شكل اختبار ما إذا كانت النتيجة مساوية لقيمة ما. يتم نطق هذا المنطق (باللغة الإنجليزية ، على الأقل) على أنه &quot;إذا كان x يساوي y ، ثم ...&quot; والذي يمكن أن يترجم حرفيًا إلى تعليمة برمجية باستخدام عامل التشغيل أو <code>=</code> أو عامل التشغيل. هذا يؤدي إلى تدفق التحكم غير متوقع في البرنامج الخاص بك. كما تم تغطيته في التحديات السابقة ، يقوم عامل التعيين ( <code>=</code> ) في JavaScript بتعيين قيمة لاسم متغير. و <code>==</code> و <code>===</code> عوامل التحقق من المساواة (اختبار <code>===</code> الثلاثي من أجل المساواة الصارمة ، مما يعني أن القيمة والنوع هما نفس الشيء). يعيّن الرمز أدناه <code>x</code> إلى 2 ، والتي يتم تقييمها على أنها <code>true</code> . تقريبًا كل قيمة من تلقاء نفسها في جافا سكريبت يتم تقييمها إلى <code>true</code> ، باستثناء ما يُعرف بالقيم &quot;الفالية&quot;: <code>false</code> ، و <code>0</code> ، و <code>&quot;&quot;</code> (سلسلة فارغة) ، و <code>NaN</code> ، و <code>undefined</code> ، و <code>null</code> . <blockquote style=";text-align:right;direction:rtl"> دع x = 1؛ <br> دعنا y = 2؛ <br> إذا (x = y) { <br> // سيتم تشغيل هذا الكود لأية قيمة لـ y (ما لم يتم تعيين y في الأصل كالفلا) <br> } آخر { <br> // كتلة الكود هذا هو ما يجب تشغيله (لكن لن) في هذا المثال <br> } </blockquote></section>

## Instructions
<section id="instructions"> أصلح الشرط بحيث يقوم البرنامج بتشغيل الفرع الصحيح ، ويتم تعيين القيمة المناسبة <code>result</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحدد شفرتك الشرط حتى تتحقق من المساواة ، بدلاً من استخدام الواجب.
    testString: 'assert(result == "Not equal!", "Your code should fix the condition so it checks for equality, instead of using assignment.");'
  - text: يمكن أن تستخدم الحالة إما <code>==</code> أو <code>===</code> لاختبار المساواة.
    testString: 'assert(code.match(/x\s*?===?\s*?y/g), "The condition can use either <code>==</code> or <code>===</code> to test for equality.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
