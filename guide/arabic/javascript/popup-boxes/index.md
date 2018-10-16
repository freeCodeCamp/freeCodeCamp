---
title: Popup Boxes
localeTitle: مربعات منبثقة
---
## مربعات منبثقة

مربعات النوافذ المنبثقة (أو مربعات الحوار) هي إطارات مشروطة تستخدم لإشعار المستخدم أو تحذيره أو للحصول على مدخلات من المستخدم.

تمنع المربعات المنبثقة المستخدم من الوصول إلى جوانب أخرى من البرنامج حتى يتم إغلاق النافذة المنبثقة ، لذلك يجب ألا يتم استخدامها بشكل مفرط.

هناك ثلاثة أنواع مختلفة من الأساليب المنبثقة المستخدمة في JavaScript: [window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) و [window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) و [window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) .

### محزر

تعرض [طريقة التنبيه](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) رسائل لا تتطلب من المستخدم إدخال استجابة. بمجرد استدعاء هذه الوظيفة ، سيظهر مربع حوار تنبيه مع الرسالة المحددة (الاختيارية). سيُطلب من المستخدمين تأكيد الرسالة قبل انتهاء التنبيه.

### مثال:

`window.alert("Welcome to our website");`

![مثال تنبيه MDN](https://mdn.mozillademos.org/files/130/AlertHelloWorld.png)

### تؤكد

تشبه [طريقة التأكيد](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) `window.alert()` ، ولكنها تعرض أيضًا زر إلغاء في `window.alert()` المنبثقة. تقوم الأزرار بإرجاع القيم المنطقية: true for OK و false for Cancel.

### مثال:

 `var result = window.confirm('Are you sure?'); 
 if (result === true) { 
    window.alert('Okay, if you're sure.'); 
 } else { 
    window.alert('You seem uncertain.'); 
 } 
` 

![MDN Confirm Example](https://mdn.mozillademos.org/files/7163/firefoxcomfirmdialog_zpsf00ec381.png)

### مستعجل

يتم استخدام [أسلوب](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) الموجه عادةً للحصول على إدخال النص من المستخدم. يمكن أن تأخذ هذه الوظيفة وسيطتين ، كلاهما اختياري: رسالة ليتم عرضها للمستخدم وقيمة افتراضية للعرض في حقل النص.

### مثال:

`var age = prompt('How old are you?', '100');`

![مثال موجه MDN](https://mdn.mozillademos.org/files/11303/prompt.png)

### خيارات التصميم الأخرى:

إذا كنت غير راضٍ عن النوافذ المنبثقة JavaScript الافتراضية ، يمكنك استبدالها في مكتبات UI المختلفة. على سبيل المثال ، يوفر SweetAlert بديلاً لطيفًا لوحدات JavaScript القياسية. يمكنك تضمينها في HTML الخاص بك عبر CDN (شبكة توصيل المحتوى) والبدء في استخدامها.

 `<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> 
` 

الصيغة على النحو التالي: `swal(title, subtitle, messageType)`

 `swal("Oops!", "Something went wrong on the page!", "error"); 
` 

سيعمل الكود أعلاه على إنتاج النافذة المنبثقة التالية: ![SweetAlert مثال](https://ludu-assets.s3.amazonaws.com/lesson-content/rWqOoQXgDrSVSMrAKiZ9) SweetAlert ليست بأي حال المعادل الوحيد للوحدات القياسية ، ولكنها نظيفة وسهلة التنفيذ.

#### معلومات اكثر:

*   [MDN window.alert ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
*   [MDN window.confirm ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
*   [MDN window.prompt ()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)