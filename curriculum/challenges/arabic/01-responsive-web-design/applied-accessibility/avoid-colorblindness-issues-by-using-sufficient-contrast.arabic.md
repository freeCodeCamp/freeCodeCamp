---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: تجنب مشكلات Colorblindness عن طريق استخدام التباين الكافي
---

## Description
<section id="description"> يمثل اللون جزءًا كبيرًا من التصميم المرئي ، ولكن استخدامه يقدم مشكلتي إمكانية الوصول. أولاً ، لا ينبغي استخدام اللون وحده باعتباره الطريقة الوحيدة لنقل المعلومات المهمة لأن مستخدمي قارئ الشاشة لن ​​يراها. ثانيًا ، تحتاج ألوان المقدمة والخلفية إلى تباين كافٍ بحيث يمكن لمستخدمي colorblind التمييز بينها. غطت التحديات السابقة وجود بدائل نصية لمعالجة القضية الأولى. أظهر التحدي الأخير أدوات فحص التباين للمساعدة في الثانية. تنطبق نسبة التباين الموصى بها لـ WCAG والتي تبلغ 4.5: 1 على استخدام الألوان بالإضافة إلى مجموعات المقاييس الرمادية. يواجه مستخدمو Colorblind صعوبة في تمييز بعض الألوان عن الآخرين - عادةً ما تكون في اللون ، ولكن في بعض الأحيان خفيفة. يمكنك تذكر أن نسبة التباين يتم حسابها باستخدام قيم النصوع النسبي (أو الإضاءة) لألوان المقدمة والخلفية. من الناحية العملية ، يمكن الوصول إلى نسبة 4.5: 1 عن طريق جعل اللون الداكن أكثر قتامة وإضاءة اللون الأخف بمساعدة أداة فحص الألوان. تعتبر الألوان الداكنة على عجلة الألوان من الألوان الزرقاء والبنفسجية والمغناطيسية والأحمر ، في حين أن الألوان الفاتحة هي البرتقال والأصفر والأخضر والأزرق. </section>

## Instructions
<section id="instructions"> يجرّب Camper Cat استخدام اللون لنص المدونة وخلفيته ، لكن مجموعته الحالية من <code>background-color</code> الأخضر مع <code>color</code> النص الماروني له نسبة تباين تبلغ 2.5: 1. يمكنك بسهولة ضبط خفة الألوان منذ أن أعلنها باستخدام خاصية CSS <code>hsl()</code> (والتي تعني التوهج والتشبع والخفة) عن طريق تغيير الوسيطة الثالثة. قم بزيادة قيمة خفة <code>background-color</code> في <code>background-color</code> من 35٪ إلى 55٪ ، وخفض قيمة خفة <code>color</code> من 20٪ إلى 15٪. هذا يحسن التباين إلى 5.9: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية بتغيير قيمة الإضاءة فقط لخاصية <code>color</code> النص إلى قيمة 15٪.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: يجب أن تقوم التعليمات البرمجية بتغيير قيمة الإضاءة فقط لخاصية <code>background-color</code> إلى قيمة 55٪.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>A Word on the Recent Catnip Doping Scandal</h2>
    <p>The influence that catnip has on feline behavior is well-documented, and its use as an herbal supplement in competitive ninja circles remains controversial. Once again, the debate to ban the substance is brought to the public's attention after the high-profile win of Kittytron, a long-time proponent and user of the green stuff, at the Claw of Fury tournament.</p>
    <p>As I've stated in the past, I firmly believe a true ninja's skills must come from within, with no external influences. My own catnip use shall continue as purely recreational.</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
