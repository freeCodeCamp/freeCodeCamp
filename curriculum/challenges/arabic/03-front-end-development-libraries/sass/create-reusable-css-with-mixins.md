---
id: 587d7dbd367417b2b2512bb6
title: إنشاء CSS قابل لاعادة الاستخدام مع Mixins
challengeType: 0
forumTopicId: 301455
dashedName: create-reusable-css-with-mixins
---

# --description--

في الـ Sass، الـ <dfn>mixin</dfn> هو مجموعة من تعريفات الـ CSS التي يمكن إعادة استخدامها في الـ stylesheet.

تتطلب ميزات CSS الأحدث وقتاً قبل اعتمادها بالكامل و قبل ان تكون جاهزة للاستخدام في جميع المتصفحات. مع إضافة الميزات إلى المتصفحات، قد تحتاج قواعد CSS التي تستخدمها إلى vendor prefixes. فكّر في `box-shadow`:

```scss
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```

يعتبر الامر الكثير من الكتابة لاعادة كتابة هذه القاعدة لجميع العناصر التي تحتوي على `box-shadow` أو لتغيير كل قيمة لاختبار تأثيرات مختلفة. يعدّ Mixins مثل الوظائف (functions) في CSS. إليك كيفية كتابة واحدة:

```scss
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```

يبدأ تعريف `@mixin` يتبعه اسم مخصص. هذه الحجج ( `$x`, و `$y`, و `$blur`, و `$c` في المثال أعلاه) اختيارية. الآن في أي وقت تكون قاعدة `box-shadow` مطلوبة، خط واحد فقط يستبدل mixin الذي يضطر إلى كتابة جميع رموز (vendor prefixes). يتم استدعاء mixin مع توجيه `@include`:

```scss
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```

# --instructions--

اكتب mixin إلى `border-radius` وأعطيه حجة `$radius`. ينبغي أن تستخدم جميع الرموز (vendor prefixes) من المثال. ثم استخدم mixin باسم `border-radius` لإعطاء عنصر `#awesome` حدود نصف قطر بقيمة `15px`.

# --hints--

يجب أن تعلن التعليمات البرمجية الخاصة بك mixin اسمه `border-radius` يحتوي على حِجَّة اسمها `$radius`.

```js
assert(code.match(/@mixin\s+?border-radius\s*?\(\s*?\$radius\s*?\)\s*?{/gi));
```

يجب أن يتضمن تعليماتك البرمجية `-webkit-border-radius` رموز (vendor prefix) التي تستخدم حِجَّة `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-webkit-border-radius:\$radius;/gi)
);
```

يجب أن يتضمن تعليماتك البرمجية `-moz-border-radius` رموز (vendor prefix) التي تستخدم حِجَّة `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/-moz-border-radius:\$radius;/gi)
);
```

يجب أن يتضمن تعليماتك البرمجية `-ms-border-radius` رموز (vendor prefix) التي تستخدم حِجَّة `$radius`.

```js
assert(__helpers.removeWhiteSpace(code).match(/-ms-border-radius:\$radius;/gi));
```

يجب أن يتضمن تعليماتك البرمجية `border-radius` رموز (vendor prefix) التي تستخدم حِجَّة `$radius`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/border-radius:\$radius;/gi).length ==
    4
);
```

يجب أن تتصل التعليمات البرمجية الخاصة بك إلى `border-radius mixin` باستخدام الكلمة المفتاحية `@include`، ثم تضعها إلى `15px`.

```js
assert(code.match(/@include\s+?border-radius\(\s*?15px\s*?\)\s*;/gi));
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;

  }
</style>

<div id="awesome"></div>
```

# --solutions--

```html
<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```
