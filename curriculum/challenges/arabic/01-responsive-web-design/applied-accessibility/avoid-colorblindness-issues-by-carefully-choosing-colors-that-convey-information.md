---
id: 587d778f367417b2b2512aad
title: >-
  تجنب مشاكل عمى الألوان عن طريق اختيار الألوان التي تنقل المعلومات بعناية
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

هناك أشكال مختلفة من عمى الألوان. يمكن أن تتراوح هذه من انخفاض الحساسية إلى طول موجي معين من الضوء إلى عدم القدرة على رؤية اللون على الإطلاق. أكثر الأشكال شيوعاً هو انخفاض الحساسية للكشف عن اللون الأخضر.

على سبيل المثال، إذا كان لون المحتوى لديك في الواجهة الأمامية والخلفية ذا لون أخضر من درجتين متفاوتتين، قد لا يكون المستخدم المصاب بعمى الألوان قادراً على تمييزهما. يمكن النظر إلى الألوان المتشابهة على أنها جيران على عجلة الألوان، وينبغي تجنب تلك التركيبات عند نقل المعلومات الهامة.

**ملاحظة:** بعض أدوات اختيار الألوان على الإنترنت تتضمن محاكاة مرئية لكيفية ظهور الألوان لأنواع مختلفة من عمى الألوان. هذه موارد رائعة بالإضافة إلى الآلات الحاسبة للتحقق من التباين عبر الإنترنت.

# --instructions--

يختبر Camper Cat أنماطًا مختلفة لزر مهم، ولكن اللون الأصفر (`#FFFF33`) للخلفية (`background-color`) و الاخضر (`#33FF33`) للون النص (`color`) هي درجات مجاورة على عجلة الألوان ولا يمكن لبعض المصابين بعمى الألوان التمييز ببنهم. (خفتهم المتشابهة تفشل أيضًا في فحص نسبة التباين). غيّر لون النص `color` إلى اللون الأزرق المظلم (`#003366`) لحل كلتا المشكلتين.

# --hints--

يجب أن يغير الكود الخاص بك لون نص `color` للزر `button` إلى اللون الأزرق الداكن.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
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
