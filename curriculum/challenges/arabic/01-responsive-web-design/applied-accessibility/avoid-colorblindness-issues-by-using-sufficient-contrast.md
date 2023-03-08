---
id: 587d778f367417b2b2512aac
title: تجنب مشاكل عمى الألوان باستخدام تباين كافٍ
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMEUw'
forumTopicId: 301012
dashedName: avoid-colorblindness-issues-by-using-sufficient-contrast
---

# --description--

يشكل اللون جزءا كبيرا من التصميم البصري، ولكن استخدامه يطرح مسألتين تتعلقان بإمكانية الوصول. أولا، لا ينبغي استخدام اللون وحده كوسيلة وحيدة لنقل معلومات هامة لأن مستخدمي قارئ الشاشة لن يروها. ثانيًا ، تحتاج ألوان المقدمة والخلفية إلى تباين كافٍ حتى يتمكن المستخدمون الذين يعانون من عمى الألوان من تمييزها.

شملت التحديات السابقة إيجاد بدائل نصية لمعالجة المسألة الأولى. أدخل التحدي الأخير أدوات للتحقق من التباين للمساعدة مع التحدي الثاني. نسبة التباين 4.5:1 الموصى بها من WCAG تنطبق على استخدام الألوان بالإضافة إلى تركيبات التدرج الرمادي.

ويواجه المستخدمون الذين يعانون من عمى الألوان مشكلة في التمييز بين بعض الألوان والألوان الأخرى - عادة المشكلة تكون بدرجات اللون ولكن في بعض الأحيان بمدي خفة اللون ايضا. قد تتذكر أنه تم حساب نسبة التباين باستخدام قيم النصوع (أو الإضاءة) النسبية لألوان المقدمة والخلفية.

من الناحية العملية ، يمكن الوصول إلى نسبة التباين 4.5:1 عن طريق التظليل (إضافة الأسود إلى) اللون الأغمق والتلوين (إضافة الأبيض إلى) اللون الأفتح. تعتبر الظلال الداكنة على عجلة الألوان عبارة عن ظلال من الأزرق والبنفسجي والأرجواني والأحمر ، بينما الألوان الفاتحة هي البرتقالي والأصفر والأخضر والأزرق والأخضر.

# --instructions--

يقوم Camper Cat بتجربة استخدام الألوان لنص مدونته وخلفيتها، ولكن دمجة لألون الأخضر للخلفية `background-color` مع لون النص الماروني (maroon) الحالي `color` له نسبة تباين 2.5:1. يمكنك بسهولة ضبط إضاءة الألوان بما اته عرفها، باستخدام خاصية في الـ CSS و هي `hsl()` (التي تمثل hue بمعني التدرج و saturation بمعني التشبع و lightness بمعني الخفة) بتغيير الوسيطة (argument) الثالثة. زيادة قيمة الخفة lightness للون الخلفية `background-color` من 35% إلى 55%، وتقليل قيمة الخفة لـ `color` من 20% إلى 15%. وهذا ما يحسّن التباين إلى 5.9:1.

# --hints--

يجب علي الكود الخاص بك فقط تغيير قيمة الخفة lightness لخاصية `color` للنص إلى قيمة 15%.

```js
assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi));
```

يجب علي الكود الخاص بك فقط تغيير قيمة الخفة lightness لخاصية `background-color` إلى قيمة 55%.

```js
assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 15%);
    background-color: hsl(120, 25%, 55%);
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
