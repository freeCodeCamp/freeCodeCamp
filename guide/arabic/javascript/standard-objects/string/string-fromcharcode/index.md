---
title: String fromCharCode
localeTitle: سلسلة من CharCode
---
إرجاع الأسلوب `String.fromCharCode()` ثابت سلسلة تم إنشاؤها باستخدام التسلسل المحدد من قيم Unicode.

## بناء الجملة

 `String.fromCharCode(num1[, ...[, numN]]) 
` 

### المعلمات

**num1، ...، numN**

تسلسل من الأرقام التي تكون قيم Unicode.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/wb4w0k66%28v=vs.94%29.aspx)

## وصف

هذا الأسلوب بإرجاع سلسلة وليس كائن سلسلة.

لأن `fromCharCode()` هو أسلوب ثابت من String ، فأنت تستخدمه دائمًا كـ `String.fromCharCode()` ، بدلاً من استخدامه كطريقة لعنصر String الذي قمت بإنشائه.

## أمثلة

 `String.fromCharCode(65, 66, 67);  // "ABC" 
 
 var test = String.fromCharCode(112, 108, 97, 105, 110); 
 document.write(test); 
 
 // Output: plain 
`