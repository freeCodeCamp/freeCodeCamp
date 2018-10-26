---
title: Checking if the Element Is Currently Hidden
localeTitle: التحقق مما إذا كان العنصر مخفي حاليًا
---
إذا كنت بحاجة إلى التحقق من حالة رؤية بعض العناصر على الصفحة ، فيمكنك القيام بذلك بسهولة مع مكتبة jQuery مع كتلة بسيطة من التعليمات البرمجية مثل واحد أدناه.

 `var display = ( jQuery('#someElement').is(':visible') ); 
 var visibility = ( jQuery('#someElement').css('visibility') != 'hidden' ); 
 var status = ( display && visibility ); 
 console.log( status ); 
` 

لذا ، إذا كان العنصر مرئيًا حاليًا على الصفحة ، **`console.log(status)`** الأمر **`console.log(status)`** `true` وفي أية حالة أخرى ، سيظهر `false` . سيتم إرجاع العبارة `false` في هاتين الحالتين:

*   إذا `display:none;` العنصر `display:none;`
*   إذا كان العنصر به مستوى `visibility: hidden`

وللتحقق الأكثر تقدمًا من هذا القبيل: **هو العنصر المرئي على إطار العرض الآن** الذي أوصي به لاستخدام [المساعد jQuery onScreen](http://benpickles.github.io/onScreen/)