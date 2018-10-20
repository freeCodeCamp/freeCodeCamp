---
title: Capitalize the First Letter of a String
localeTitle: تكبير الحرف الأول من سلسلة
---
لتكبير الحرف الأول من سلسلة عشوائية ، يجب اتباع الخطوات التالية:

1.  الحصول على الحرف الأول من السلسلة؛
2.  تحويل الحرف الأول إلى أحرف كبيرة؛
3.  الحصول على ما تبقى من السلسلة ؛
4.  لسَلسَلة الحرف الأول بالأحرف الكبيرة مع باقي السلسلة وإرجاع النتيجة ؛

## 1\. احصل على أول رسالة من السلسلة

يجب عليك استخدام طريقة [charAt ()](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932) ، في _الفهرس 0_ ، لتحديد الحرف الأول من السلسلة.

 `var string = "freeCodecamp"; 
 
 string.charAt(0); // Returns "f" 
` 

> ملاحظة: يفضل استخدام `charAt` `[ ]` ( [تدوين قوس](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) ) باسم `str.charAt(0)` إرجاع سلسلة فارغة ( _`''`_ ) لـ `str = ''` بدلاً من `undefined` في حالة `''[0]` .

## 2\. تحويل الحرف الأول إلى أحرف كبيرة

يمكنك استخدام أسلوب [toUpperCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950) وتحويل سلسلة الاستدعاء إلى الحالة العليا.

 `var string = "freeCodecamp"; 
 
 string.charAt(0).toUpperCase(); // Returns "F" 
` 

## 3\. الحصول على البقية من السلسلة

يمكنك استخدام طريقة [شريحة ()](https://github.com/freecodecamp/freecodecamp/wiki/js-array-prototype-slice) والحصول على الباقي من السلسلة (من الحرف الثاني ، _الفهرس 1_ ، إلى نهاية السلسلة).

 `var string = "freeCodecamp"; 
 
 string.slice(1); // Returns "reeCodecamp" 
` 

## 4\. قم بإرجاع النتيجة بإضافة الحرف الأول وبقية السلسلة

يجب إنشاء دالة تقبل سلسلة كوسيطة فقط وترجع سلسلة الأحرف الأولى `string.charAt(0).toUpperCase()` والباقي من السلسلة `string.slice(1)` .

 `var string = "freeCodecamp"; 
 
 function capitalizeFirstLetter(str) { 
  return str.charAt(0).toUpperCase() + str.slice(1); 
 } 
 
 capitalizeFirstLetter(string); // Returns "FreeCodecamp" 
` 

أو يمكنك إضافة هذه الوظيفة إلى `String.prototype` لاستخدامها مباشرةً على سلسلة باستخدام التعليمة البرمجية التالية ( _بحيث لا يمكن حساب هذه الطريقة ولكن يمكن استبدالها أو حذفها لاحقًا_ ):

 `var string = "freeCodecamp"; 
 
 /* this is how methods are defined in prototype of any built-in Object */ 
 Object.defineProperty(String.prototype, 'capitalizeFirstLetter', { 
    value: function () { 
        return this.charAt(0).toUpperCase() + this.slice(1); 
    }, 
    writable: true, // so that one can overwrite it later 
    configurable: true // so that it can be deleted later 
 }); 
 
 string.capitalizeFirstLetter(); // Returns "FreeCodecamp" 
` 

### مصدر

[stackoverflow - استخدم الحرف الأول من السلسلة في جافا سكريبت](http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript/1026087#1026087)