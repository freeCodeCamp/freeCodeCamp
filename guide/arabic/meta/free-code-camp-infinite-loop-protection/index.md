---
title: Free Code Camp Infinite Loop Protection
localeTitle: معسكر حر لانهائي حماية حلقة
---
يحتوي رمز كود Free Code Camp على ميزة Infinite Loop Protect المضمنة من Loop Protect من [JSBin](https://github.com/jsbin/loop-protect) . تحمي الحلقة حماية بعض الشفرات في حلقات أنشأها المستخدم للسماح بالخروج الآمن في حالة مرور أكثر من ~ 500 مللي ثانية دون الخروج من الحلقة. سوف حماية حلقة التقاط العديد من ولكن ليس كافة المشكلات حلقة لا نهائية. إذا رأيت هذه الرسالة:

`Error: Potential infinite loop at line X`

هذا يعني أنك قد تم حمايتك من حلقة لا نهائية.

**ملاحظة:** لا يمكن لـ Loop Protect اكتشاف العودية غير المحدودة.

## تعطيل حلقة حماية

في بعض الحالات - كمبيوتر بطيء أو حلقة طويلة - قد تحصل على حماية حلقة غير صحيحة. لتعطيل حماية الحلقة ، أضف التعليق التالي عبر سطر قوائم رسائل حماية الحلقة:

`//noprotect`

**تحذير:** تعطيل حماية الحلقة يعني أنك قد تسمح للشفرة بالانتقال إلى حلقة لا نهائية ، مما يتسبب في عدم استجابة المتصفح.

## استعادة الشفرة غير المستجيبة

إذا كنت قد أخطأت وحماية حلقة العزل بشكل غير صحيح ولديك الآن حل لا يستجيب ، يمكنك تعطيل تشغيل Auto Code.

بشكل افتراضي ، يقوم موقع Free Code Camp تلقائيًا بتحميل وتشغيل آخر حل مسجل لك. إذا كنت قد أنشأت عن غير قصد حلقة لا نهائية أو خطأ آخر غير قابل للاسترداد أو ببساطة لا تثق في الشفرة ، فيمكنك تعطيل التفعيل التلقائي عن طريق وضع ما يلي في عنوان URL الخاص بك: run = disabled

مثال:

 `URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?solution=function%20meetBonfire(argument) 
 
 No-Run URL: http://www.freecodecamp.com/challenges/Algorithm-meet-Algorithm#?run=disabled&solution=function%20meetBonfire(argument) 
`