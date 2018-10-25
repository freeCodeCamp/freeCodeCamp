---
title: String.prototype.slice
localeTitle: String.prototype.slice
---
`.slice()` الأسلوب سلسلة JavaScript `.slice()` جزء من سلسلة وإرجاع سلسلة جديدة.

## بناء الجملة

 `str.slice(beginSliceIndex [, endSliceIndex]); 
` 

## المعلمات

**beginSliceIndex**

مؤشر الصفر القائم حيث يجب أن تبدأ الشريحة. إذا كان startSliceIndex عبارة عن رقم سالب ، فإن `.slice()` تعول إلى الخلف من نهاية السلسلة لتحديد مكان بدء الشريحة.

**endSliceIndex**

اختياري. فهرس يستند إلى الصفر حيث يجب أن تنتهي الشريحة. إذا تم حذفها ، `.slice()` استخراج `.slice()` إلى نهاية السلسلة.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## وصف

`.slice()` النص خارج سلسلة واحدة ويعيد سلسلة جديدة.

## أمثلة

**باستخدام `.slice()` لإنشاء سلسلة جديدة**

 `var string1 = "Hello World!"; 
 var string2 = string1.slice(3); 
 console.log(string2);                           // Will log "lo World!" 
 
 var string3 = string1.slice(3, 7); 
 console.log(string3);                           // Will log "lo W" 
` 

**باستخدام `.slice()` مع مؤشرات سلبية**

 `var string = "Hello World!" 
 str.slice(-3);                                  // Returns "ld!" 
 str.slice(-3, -1);                              // Returns "ld" 
 str.slice(0, -1);                               // Returns "Hello World" 
`