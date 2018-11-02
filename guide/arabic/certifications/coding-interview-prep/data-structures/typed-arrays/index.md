---
title: Typed Arrays
localeTitle: مصفوفات مكتوبة
---
## مصفوفات مكتوبة

### طريقة:

*   في هذا التحدي ، نحتاج أولاً إلى إنشاء مخزن مؤقت من 64 بايت. يمكننا استخدام `ArrayBuffer()` منشئ.
*   بعد إنشاء مخزن مؤقت نحتاج إلى إنشاء Int32Array ، لذلك يمكننا استخدام `Int32Array()` .

### حل:

 `//Create a buffer of 64 bytes 
 var buffer = new ArrayBuffer(64); 
 
 //Make 32-bit int typed array with the above buffer 
 var i32View = new Int32Array(buffer); 
` 

### المراجع:

*   [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)