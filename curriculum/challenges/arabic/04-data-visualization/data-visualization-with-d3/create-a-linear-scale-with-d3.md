---
id: 587d7fab367417b2b2512bda
title: إنشاء مقياس خطي مع D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

رَسَم البيانات كلا من المخطوطان, أعمدة وانسياب (النِّقَاط المبعثرة), مباشرا على لوحة SVG. ولكن إذا كان ارتفاع العمود أو إحدى نِقَاط البيانات أكبر من ارتفاع أو عرض مساحة SVG، سيقع خارج نطاق منطقة SVG.

في D3، هناك مقاييس (scales) للمساعدة في تخطيط البيانات. تكون `scales` وظائف (functions) تخبر البرنامَج كيفية ملأ مجموعة من نِقَاط البيانات الخام على عدد البكسلس (pixels) في لوحة SVG.

على سبيل المثال، قل أن لديك لوحة SVG بحجم 100x500، وتريد رسم الناتج المحلي الإجمالي (Gross Domestic Product) لعدد من الدول. ومجموعة الأعداد ستكون في حدود المليار أو تريليون دولار. يمكنك توفير D3 من مقياس (scale) لمعرفة كيف توضع قيم الناتج المحلي الإجمالي (GDP) الكبيرة في تلك المساحة 100x500.

من غير المحتمل أن ترسم البيانات الخام كما هي. قبل الرسم، عيّن المقياس لكامل مجموعة البيانات. بحيث أن قيم `x` و `y` تتناسب مع عرض وطول اللوحة.

ولدى D3 عدة أنواع من المقاييس. للحصول على مقياس خطي (linear scale) (يستخدم عادة مع البيانات الكمية (quantitative data))، هناك طريقة في D3 تسمى `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

بشكل افتراضي، يستخدم المقياس عَلاقة الهُوِيَّة (identity relationship). تطابق قيمة المدخل (input) قيمة المخرج (output). يشمل تحدي أخر كيفية تغيير ذلك.

# --instructions--

غيّر المتغير `scale` لإنشاء مقياس خطي (linear scale). ثم عيّن متغير `output` إلى وظيفة scale, الذي فعَِلت بإدخال معطى بقيمة `50`.

# --hints--

يجب أن يكون النص في `h2` بقيمة `50`.

```js
assert($('h2').text() == '50');
```

يجب أن يستخدم كودك طريقة `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

يجب أن يُفعَِل متغير `output` وظيفة `scale` مع معطى `50`.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
