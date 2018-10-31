---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: ''
localeTitle: تعلم كيف تعمل CSSkeyframes وخصائص الرسوم المتحركة
---

## Description
<section id="description"> لتحريك عنصر ، تحتاج إلى معرفة خصائص الحركة وقاعدة <code>@keyframes</code> . تتحكم خصائص الرسم المتحرك في الكيفية التي ينبغي أن يتصرف بها <code>@keyframes</code> القاعدة <code>@keyframes</code> بما يحدث أثناء ذلك الرسم المتحرك. هناك ثمانية خصائص للرسوم المتحركة في المجموع. وهذا التحدي يبقيه بسيطة وتغطية اثنين من أهمها أولا: <code>animation-name</code> يحدد اسم للرسوم المتحركة، والذي يستخدم لاحقا من قبل <code>@keyframes</code> أن أقول CSS التي تسيطر على الذهاب مع والرسوم المتحركة. تحدد <code>animation-duration</code> الوقت للرسوم المتحركة. <code>@keyframes</code> هو كيفية تحديد ما يحدث بالضبط داخل الرسوم المتحركة على مدار المدة. يتم ذلك عن طريق إعطاء خصائص CSS &quot;إطارات&quot; محددة أثناء الرسوم المتحركة ، مع نسب تتراوح من 0٪ إلى 100٪. إذا قارنت هذا بفيلم ، فإن خصائص CSS لـ 0٪ هي كيفية عرض العنصر في المشهد الافتتاحي. تتمثل خصائص CSS بنسبة 100٪ في كيفية ظهور العنصر في النهاية قبل بدء القوائم مباشرةً. بعد ذلك ، يقوم CSS بتطبيق السحر على نقل العنصر خلال المدة المحددة للعمل على المشهد. في ما يلي مثال لتوضيح استخدام <code>@keyframes</code> وخصائص الرسم المتحرك: <blockquote style=";text-align:right;direction:rtl"> #anim { <br> اسم الرسوم المتحركة: ملونة. <br> مدة الرسوم المتحركة: 3 ثوانٍ ؛ <br> } <br> keyframes الملونة { <br> 0٪ <br> لون الخلفية: أزرق ؛ <br> } <br> 100٪ { <br> لون الخلفية: أصفر. <br> } <br> } </blockquote> للعنصر مع <code>anim</code> الهوية، ورمز المقتطف أعلاه يحدد <code>animation-name</code> إلى <code>colorful</code> ويحدد <code>animation-duration</code> إلى 3 ثوان. ثم <code>@keyframes</code> القاعدة <code>@keyframes</code> بخصائص الرسم المتحرك بالاسم <code>colorful</code> . يضبط اللون على اللون الأزرق في بداية الرسم المتحرك (0٪) والذي سينتقل إلى اللون الأصفر بنهاية الصورة المتحركة (100٪). أنت لا تقتصر على الانتقالات في نهاية البداية فقط ، يمكنك تعيين خصائص للعنصر لأي نسبة تتراوح بين 0٪ و 100٪. </section>

## Instructions
<section id="instructions"> أنشئ <code>rect</code> للعنصر الذي يحتوي على <code>rect</code> id ، من خلال تعيين <code>animation-name</code> على قوس قزح <code>animation-duration</code> إلى 4 ثوانٍ. بعد ذلك ، قم بالإعلان عن قاعدة <code>@keyframes</code> ، وقم بتعيين <code>background-color</code> في بداية الرسم المتحرك ( <code>0%</code> ) إلى اللون الأزرق ، وسط الرسم المتحرك ( <code>50%</code> ) إلى اللون الأخضر ، ونهاية الحركة ( <code>100%</code> ) إلى الأصفر. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون للعنصر ذو معرف <code>rect</code> خاصية <code>animation-name</code> ذات قيمة قوس قزح.
    testString: 'assert($("#rect").css("animation-name") == "rainbow", "The element with id of <code>rect</code> should have an <code>animation-name</code> property with a value of rainbow.");'
  - text: يجب أن يكون للعنصر ذي معرف <code>rect</code> خاصية <code>animation-duration</code> ذات قيمة 4 أضعاف.
    testString: 'assert($("#rect").css("animation-duration") == "4s", "The element with id of <code>rect</code> should have an <code>animation-duration</code> property with a value of 4s.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> <code>animation-name</code> لقوس قزح.
    testString: 'assert(code.match(/@keyframes\s+?rainbow\s*?{/g), "The <code>@keyframes</code> rule should use the <code>animation-name</code> of rainbow.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> لقوس قزح <code>background-color</code> أزرق عند 0٪.
    testString: 'assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of blue at 0%.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> لقوس قزح <code>background-color</code> خضراء بنسبة 50٪.
    testString: 'assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of green at 50%.");'
  - text: يجب أن تستخدم قاعدة <code>@keyframes</code> لقوس قزح <code>background-color</code> أصفر بنسبة 100٪.
    testString: 'assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi), "The <code>@keyframes</code> rule for rainbow should use a <code>background-color</code> of yellow at 100%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {


  }




</style>
<div id="rect"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
