---
id: 587d7dbf367417b2b2512bbc
title: تقسيم تصميماتك إلى قطع (Chunks) أصغر مع أجزاء (Partials)
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

<dfn>الأجزاء (Partials)</dfn> في Sass هي ملفات منفصلة تحتوي على أجزاء من تعلميات برمجية CSS. وهي مستوردة ومستخدمة في ملفات Sass الأخرى. هذه طريقة رائعة لتجميع تعليمات برمجية مماثلة إلى نموذج (module) للحفاظ على تنظيمها.

أسماء الجزئيات (partials) تبدأ بحرف السطر (`_`)، الذي يخبر Sass أنه جزء صغير من CSS ولا يتحول الجزء إلى مِلَفّ CSS. كذلك تنتهي ملفات Sass بملحق المِلَفّ `.scss`. لجلب التعليمات البرمجية في الجزء الجزئي (partial) إلى مِلَفّ Sass آخر، استخدم التوجيه `@import`.

على سبيل المثال، إذا تم حفظ جميع mixins الخاصة بك في اسم جزئي "\_mixins.scss"، وهي ضرورية في مِلَفّ "main.scss"، هذه هي كيفية استخدامها في المِلَفّ الرئيس:

```scss
@import 'mixins'
```

لاحظ أن امتداد السطر والملف غير ضروري في تعبير `import` - تفهمه Sass على أنه جزئي. بمجرد استيراد جزء (partial) إلى مِلَفّ، تكون جميع المتغيرات (variables), و mixins, والتعليمات البرمجية الأخرى متاحة للاستخدام.

# --instructions--

اكتب بيان `@import` لاستيراد اسم جزئي `_variables.scss` إلى المِلَفّ main.scss.

# --hints--

يجب أن تستخدم التعليمات البرمجية الخاصة بك توجيه `@import` ولا يجب أن تتضمن أسفل السطر في اسم المِلَفّ.

```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- The main.scss file -->
```

# --solutions--

```html
@import 'variables'
```
