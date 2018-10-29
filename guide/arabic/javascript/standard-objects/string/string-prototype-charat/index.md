---
title: String.prototype.charAt
localeTitle: String.prototype.charAt
---
إرجاع الأسلوب `charAt()` الحرف المحدد من سلسلة.

## بناء الجملة

 `str.charAt(index) 
` 

## المعلمات

**فهرس**

عدد صحيح بين 0 و 1 - أقل من طول السلسلة.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/65zt5h10%28v=vs.94%29.aspx)

## وصف

تتم فهرسة الأحرف في سلسلة من اليسار إلى اليمين. فهرس الحرف الأول هو 0 ، والفهرس للحرف الأخير في سلسلة تسمى `stringName` هو `stringName.length - 1` . إذا كان الفهرس الذي أدخلته خارج النطاق ، فسيقوم جافا سكريبت بإرجاع سلسلة فارغة.

## أمثلة

 `var anyString = 'Brave new world'; 
 
 console.log("The character at index 0   is '" + anyString.charAt(0)   + "'"); // 'B' 
 console.log("The character at index 1   is '" + anyString.charAt(1)   + "'"); // 'r' 
 console.log("The character at index 2   is '" + anyString.charAt(2)   + "'"); // 'a' 
 console.log("The character at index 3   is '" + anyString.charAt(3)   + "'"); // 'v' 
 console.log("The character at index 4   is '" + anyString.charAt(4)   + "'"); // 'e' 
 console.log("The character at index 999 is '" + anyString.charAt(999) + "'"); // '' 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charAt(str.length - 1)); 
 
 // Output: Z 
`