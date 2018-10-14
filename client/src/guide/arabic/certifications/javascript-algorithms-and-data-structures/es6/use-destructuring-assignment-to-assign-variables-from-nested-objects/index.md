---
title: Use Destructuring Assignment to Assign Variables from Nested Objects
localeTitle: استخدم Destructuring Assignment لتعيين متغيرات من الكائنات المتداخلة
---
## استخدم Destructuring Assignment لتعيين متغيرات من الكائنات المتداخلة

نصيحة لاجتياز الاختبار النهائي: _تم استخدام التدمير المتداخل_

يريد الاختبار الحصول على `max` والحد `max` فقط. إذا قمت بتفكيك ثابت الخاص بك لاحتواء كلاً من `max` و `min` ، فسوف يفشل الاختبار.

## المفسد!

هنا هو الحل رمز:

 `const { tomorrow: { max: maxOfTomorrow } } = forecast; 
`