---
title: Array.prototype.toLocaleString
localeTitle: Array.prototype.toLocaleString
---
## Array.prototype.toLocaleString

إرجاع الأسلوب `toLocaleString()` سلسلة تمثل عناصر صفيف. يتم تحويل كل العناصر إلى سلاسل باستخدام أساليب toLocaleString الخاصة بها. الهدف من استدعاء هذه الوظيفة هو أن يكون محددًا محليًا.

##### بناء الجملة:

 `arr.toLocaleString(); 
` 

##### المعلمات

*   `locales` (اختياري) - وسيطة تحمل إما سلسلة أو صفيف من علامات اللغة [BCP 47 علامة اللغة](http://tools.ietf.org/html/rfc5646) .
*   `options` (اختياري) - كائن مع خصائص التكوين

##### قيمة الإرجاع

سلسلة تمثل عناصر الصفيف مفصولة بسلسلة خاصة بالإعدادات المحلية (مثل الفاصلة "،")

## أمثلة

 `var number = 12345; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myString = myArray.toLocaleString(); 
 
 console.log(myString); 
 // OUTPUT '12345,10/25/2017, 4:20:02 PM,foo' 
` 

يمكن عرض مخرجات مختلفة بناء على اللغة ومعرف المنطقة (اللغة).

 `var number = 54321; 
 var date = new Date(); 
 var myArray = [number, date, 'foo']; 
 var myJPString = myArray.toLocaleString('ja-JP'); 
 
 console.log(myJPString); 
 // OUTPUT '54321,10/26/2017, 5:20:02 PM,foo' 
` 

### معلومات اكثر:

المصدر: [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)