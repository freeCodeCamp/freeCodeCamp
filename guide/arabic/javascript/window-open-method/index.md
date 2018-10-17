---
title: Window Open Method
localeTitle: نافذة طريقة مفتوحة
---
## نافذة طريقة مفتوحة

يمكن استخدام الأسلوب `open()` لتحميل مورد محدد في سياق الاستعراض (الإطار أو علامة التبويب) بالاسم المحدد. إذا لم يكن هذا الاسم موجودًا ، فسيتم إنشاء نافذة جديدة ويتم تحميل المورد في السياق الخاص به.

## Prameters

`url` يشير DOMString إلى المورد المراد تحميله. يمكن أن يكون هذا مسارًا أو عنوان URL لأي مورد يدعمه المتصفح.

`windowName` DOMString الذي يحدد اسم سياق التصفح (النافذة أو علامة التبويب) الذي سيتم تحميل المحتوى عليه ؛ إذا كان الاسم لا يشير إلى سياق موجود ، يتم إنشاء إطار جديد ويتم إعطاؤه الاسم المحدد بواسطة windowName. يمكن استخدام هذا الاسم بعد ذلك كهدف للارتباطات والنماذج من خلال تحديده على أنه السمة الهدف.

`windowFeatures` `optional` DOMString يحتوي على قائمة مفصولة بفواصل لميزات النوافذ مع القيم المطابقة لها في النموذج "name = value". تتضمن هذه الميزات خيارات مثل الحجم الافتراضي للموقف والموضع في النافذة وما إلى ذلك.

## بناء الجملة

 `  var window =  window.open(url, windowName, [windowFeatures]); 
` 

## مثال

 `var windowObjectReference; 
 var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes"; 
 
 function openRequestedPopup() { 
  windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", strWindowFeatures); 
 } 
` 

إذا كانت هناك نافذة تحمل الاسم بالفعل ، فسيتم تحميل strURL في النافذة الحالية. في هذه الحالة ، تكون قيمة الإرجاع للطريقة هي النافذة الموجودة ويتم تجاهل strWindowFeatures.

#### معلومات اكثر:

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)