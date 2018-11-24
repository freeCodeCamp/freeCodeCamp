---
title: jQuery Animate
localeTitle: jQuery تحريك
---
## jQuery تحريك

طريقة jQuery المتحركة تجعل من السهل إنشاء رسوم متحركة بسيطة ، باستخدام بضعة أسطر من التعليمات البرمجية فقط. الهيكل الأساسي هو على النحو التالي:

 `$(".selector").animate(properties, duration, callbackFunction()); 
` 

بالنسبة لوسيطة `properties` تحتاج إلى تمرير كائن javascript ، مع خصائص CSS التي تريد تحريكها كمفاتيح ، والقيم التي تريد تحريكها كقيم. `duration` التي تحتاجها لإدخال مقدار الوقت بالمللي ثانية يجب أن تأخذ الرسوم المتحركة. يتم تنفيذ `callbackFunction()` بمجرد الانتهاء من الرسوم المتحركة.

### مثال

مثال بسيط سيبدو هكذا:

 `$(".awesome-animation").animate({ 
    opacity: 1, 
    bottom: += 15 
 }, 1000, function() { 
    $(".different-element").hide(); 
 }); 
` 

#### معلومات اكثر:

لمزيد من المعلومات ، يرجى زيارة [الموقع الرسمي](http://api.jquery.com/animate/)