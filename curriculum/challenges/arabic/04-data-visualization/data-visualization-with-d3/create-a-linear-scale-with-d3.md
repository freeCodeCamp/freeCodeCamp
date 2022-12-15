---
id: 587d7fab367417b2b2512bda
title: إنشاء مقياس خطي مع D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

يملأ البيانات المرسومة كل من مخطط بياني شريطي وانسياب (النِّقَاط المبعثرة) على لوحة SVG قاصدًا. بيد أنه إذا كان ارتفاع الشريط أو إحدى نِقَاط البيانات أكبر من الارتفاع أو العرض SVG، ستذهب خارج نطاق SVG.

في D3، هناك مقاييس للمساعدة في ملأ البيانات. تكون `scales` وظائف (functions) تخبر البرنامَج كيفية ملأ مجموعة من نِقَاط البيانات الخام على البكسلات (px) في لوحة SVG.

على سبيل المثال، قل أن لديك لوحة SVG بحجم 100x500، وأنت تريد ملأ الناتج إجمال المحلي (Gross Domestic Product) لعدد من الدول. ومجموعة الأعداد ستكون في حدود المليار أو تريليون دولار. يمكنك توفير D3 من المقياس لمعرفة كيفية وضع قيم الناتج المحلي الإجمالي الكبيرة في تلك المساحة 100x500.

من غير المحتمل أن تملأ البيانات الخام كما هي. قبل الملأ، عيّن المقياس لكامل مجموعتك للبيانات. بحيث أن قيم `x` و `y` تتناسب مع عرض وطول اللوحة.

ولدى D3 عدة أنواع من المقاييس. للحصول على مقياس خطي (linear scale) (يستخدم عادة مع البيانات الكمية (quantitative data))، هناك طريقة في D3 تسمى `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

بشكل افتراضي، يستخدم المقياس عَلاقة الهُوِيَّة (identity relationship). تطابق قيمة المدخل (Input) قيمة المخرج (output). يشمل تحد أخر كيفية تغيير ذلك.

# --instructions--

تغيير متغير (variable) مسمى `scale` لإنشاء مقياس خطي (linear scale). ثم عيّن متغير (variable) مسمى `output` إلى scale, الذي فعلته بالإدخال وسيط بقيمة `50`.

# --hints--

يجب أن يكون النص في `h2` بقيمة `50`.

```js
assert($('h2').text() == '50');
```

يجب أن يستخدم كودك طريقة (method) تسمى `scaleLinear()`.

```js
assert(code.match(/\.scaleLinear/g));
```

يجب أن يُفاعِل متغير `output` وظيفة `scale` مع وسيط `50`.

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
