---
id: 587d778f367417b2b2512aad
title: Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information
challengeType: 0
videoUrl: ''
localeTitle: تجنب مشاكل عمى الألوان عن طريق اختيار الألوان التي تنقل المعلومات بعناية
---

## Description
<section id="description"> هناك أشكال مختلفة من عمى الألوان. يمكن أن تتراوح هذه من حساسية منخفضة إلى طول موجة معين من الضوء إلى عدم القدرة على رؤية اللون على الإطلاق. الشكل الأكثر شيوعًا هو الحساسية المنخفضة للكشف عن الخضر. على سبيل المثال ، إذا كان لونان أخضران مشابهان هما لون المقدمة والخلفية للمحتوى الخاص بك ، فقد لا يتمكن مستخدم colorblind من تمييزها. يمكن اعتبار الألوان القريبة كجيران على عجلة الألوان ، ويجب تجنب هذه المجموعات عند نقل معلومات مهمة. <strong>ملحوظة</strong> <br> تشتمل بعض أدوات اختيار الألوان عبر الإنترنت على محاكاة بصرية لكيفية ظهور الألوان لأنواع مختلفة من عمى الألوان. هذه موارد رائعة بالإضافة إلى الآلات الحاسبة لفحص التباين عبر الإنترنت. </section>

## Instructions
<section id="instructions"> العربة القط هو اختبار الأساليب المختلفة لزر مهم، ولكن الأصفر ( <code>#FFFF33</code> ) <code>background-color</code> والأخضر ( <code>#33FF33</code> ) النص <code>color</code> والأشكال على عجلة الألوان ويمكن تمييزها تقريبا لبعض المستخدمين colorblind المجاورة. (الخفوت مماثلة أيضا فشل في فحص نسبة التباين). غيّر <code>color</code> النص إلى اللون الأزرق الداكن ( <code>#003366</code> ) لحل كلا المشكلتين. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تغيير التعليمات البرمجية الخاصة بك <code>color</code> النص <code>button</code> إلى الأزرق الداكن.
    testString: 'assert($("button").css("color") == "rgb(0, 51, 102)", "Your code should change the text <code>color</code> for the <code>button</code> to the dark blue.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
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
