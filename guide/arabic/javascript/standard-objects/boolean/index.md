---
title: Boolean
localeTitle: منطقية
---
## منطقية

الكائن المنطقي هو مجمّع كائن لقيمة منطقية (صواب أو خطأ). يمكنك تعريف Boolean بشكل صريح باعتباره `new Boolean([value])` . يتم تحويل الوسيطة `value` الاختيارية إلى قيمة منطقية. إذا لم يتم تحديد قيمة، `0` ، `-0` ، `null` ، `false` ، `NaN` ، `undefined` ، أو سلسلة فارغة ( `""` )، يتم تعيين الكائن إلى false. جميع القيم الأخرى ، بما في ذلك أي كائن أو السلسلة "false" ، تنشئ كائنًا ذا قيمة حقيقية. الاستثناء المثير للاهتمام هو عندما يتم تمرير `document.all` الخاص بـ DOM كوسيطة `Boolean` ، يتم تقييمه على أنه `false` 1 .

القيمة المنطقية المنطقية ( `true` و `false` ) ليست نفس قيم الكائن `Boolean` ( `true` و `false` ).

#### معلومات اكثر:

[الفرق بين الكائنات المنطقية والأجواء المنطقية في جافا سكريبت - تنقيط جافا سكريبت](http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html)

### مصادر

1.  [أنت لا تعرف JavaScript ، الفصل 4](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch4.md) ، السطر: 364. تم الوصول إليها في 31 أكتوبر 2017.