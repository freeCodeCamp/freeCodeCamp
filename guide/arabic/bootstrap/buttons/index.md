---
title: Buttons
localeTitle: وصفت
---
## وصفت

يوفر لك إطار Bootstrap خيارات متعددة لتصميم الأزرار. تساعدك هذه الأنماط على توفير تمثيل مرئي للمستخدم لما قد يفعله الزر.

#### كيف تستعمل:

لاستخدام أزرار bootstrap ، اتبع الخطوات نفسها التي تريد إنشاء زر لها في HTML ، إلا أنك تقوم أيضًا بتطبيق فئة CSS المناسبة على الزر. تم توفير مثال على التعليمات البرمجية أدناه.

**مثال الكود:**

`<button type="button" class="btn btn-primary">Primary</button>`

ابتدائي

يمكنك أيضًا استخدام أزرار bootstrap مع عناصر `<a>` و `<input>` كما هو موضح في الأمثلة أدناه.

`<a class="btn btn-primary" href="#" role="button">This button is a link</a>`

[هذا الزر هو رابط](#)

`<input class="btn btn-primary" type="submit" value="Submit">`

#### Bootstrap زر قائمة الطبقة:

هذه قائمة بفئات CSS التي يوفرها bootstrap للأزرار.

`.btn` هذا هو الزر الأساسي في bootstrap.

الأساسية

`.btn-default` هذا هو الزر الافتراضي في bootstrap.

افتراضي

`.btn-primary` هذا هو الزر الأساسي ل bootstrap.

ابتدائي

`.btn-success` هذا هو زر نجاح `.btn-success` .

نجاح

`.btn-info` هذا هو زر معلومات bootstrap.

معلومات

`.btn-warning` وهذا هو زر التحذير في bootstrap.

تحذير

`.btn-danger` هذا هو زر الخطر في `.btn-danger` .

خطر

`.btn-link` هذا هو زر رابط bootstrap.

حلقة الوصل

`.btn-light` هذا هو زر الإضاءة في `.btn-light` .

ضوء

#### أحجام زر Bootstrap:

هذه قائمة بفئات CSS للحجم المختلف للأزرار.

`.btn-lg` هذا هو الزر الكبير في bootstrap.

كبير

`.btn-sm` هذا هو زر صغير في bootstrap.

صغير

`.btn-xs` هذا هو زر صغير إضافي في bootstrap.

صغير جدا

#### أزرار Bootstrap المحددة:

من الممكن أيضًا أن يكون لديك أزرار محددة بدلاً من تلوينها بالكامل. يتم تحقيق ذلك عن طريق وضع `outline` الإصلاح الأوسط بين فئة الزر الذي تريده. سيكون استخدام العينة كما يلي:

`<button type="button" class="btn btn-outline-primary">Primary</button>`

تعتبر الأزرار المحددة جزءًا من Bootstrap منذ الإصدار 4 ، الرجاء التأكد من أنك تستخدم الإصدار الصحيح إذا كنت غير قادر على تشغيلها.

_ملاحظة: لا تقم بتضمين النقطة في سمة فئة HTML ، يتم استخدام الإشارة إلى الفئات ذات النقطة فقط عند ضبط الفئات في CSS._

#### معلومات اكثر:

*   [وثائق أزرار Bootstrap](https://getbootstrap.com/docs/4.0/components/buttons/)
*   [وثائق مجموعة زر Bootstrap](http://getbootstrap.com/docs/4.0/components/button-group/)
*   [Bootstrap البدء](/articles/bootstrap/bootstrap-get-started)