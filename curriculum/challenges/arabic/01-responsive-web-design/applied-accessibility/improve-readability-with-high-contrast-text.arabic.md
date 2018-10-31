---
id: 587d778e367417b2b2512aab
title: Improve Readability with High Contrast Text
challengeType: 0
videoUrl: ''
localeTitle: تحسين إمكانية القراءة مع نص عالي التباين
---

## Description
<section id="description"> قد يؤدي التباين المنخفض بين ألوان المقدمة والخلفية إلى صعوبة قراءة النص. يحسن التباين الكافي من سهولة قراءة المحتوى الخاص بك ، ولكن ماذا يعني &quot;كاف&quot; بالضبط؟ توصي إرشادات الوصول إلى محتوى الويب (WCAG) بنسبة تباين تبلغ 4.5 إلى 1 على الأقل للنص العادي. يتم حساب النسبة بمقارنة قيم النصوع النسبي للونين. يتراوح هذا من 1: 1 لنفس اللون ، أو بدون تباين ، إلى 21: 1 للون الأبيض في مقابل أسود ، وهو أقوى تباين. هناك العديد من أدوات التحقق من التباين المتاحة عبر الإنترنت والتي تحسب هذه النسبة لك. </section>

## Instructions
<section id="instructions"> يتميز اختيار Camper Cat للنص باللون الرمادي الفاتح على خلفية بيضاء لمشاركته الأخيرة في المدونة بنسبة تباين تبلغ 1.5: 1 ، مما يجعل من الصعب قراءتها. قم بتغيير <code>color</code> النص من الرمادي الحالي ( <code>#D3D3D3</code> ) إلى اللون الرمادي الداكن ( <code>#636363</code> ) لتحسين نسبة التباين إلى 6: 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تغيير التعليمات البرمجية الخاصة بك <code>color</code> النص الخاص <code>body</code> إلى الرمادي الداكن.
    testString: 'assert($("body").css("color") == "rgb(99, 99, 99)", "Your code should change the text <code>color</code> for the <code>body</code> to the darker gray.");'
  - text: التعليمات البرمجية لا ينبغي تغيير <code>background-color</code> لل <code>body</code> .
    testString: 'assert($("body").css("background-color") == "rgb(255, 255, 255)", "Your code should not change the <code>background-color</code> for the <code>body</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: #D3D3D3;
    background-color: #FFF;
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
