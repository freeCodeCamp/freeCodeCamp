---
title: Generate Random Fractions with JavaScript
localeTitle: توليد الكسور العشوائية مع جافا سكريبت
---
# توليد الكسور العشوائية مع جافا سكريبت

الأرقام العشوائية مفيدة لإنشاء سلوك عشوائي.

يحتوي JavaScript على دالة `Math.random()` التي تنشئ رقمًا عشريًا عشوائيًا بين 0 (شامل) وليس تمامًا 1 (خاص). وبالتالي يمكن `Math.random()` بإرجاع 0 ولكن أبداً إرجاع 1.

## ملحوظة

مثل تخزين القيم مع عامل التشغيل المتساوي ، سيتم حل جميع استدعاءات الدوال قبل تنفيذ عملية الإرجاع ، حتى نتمكن من إرجاع قيمة الدالة `Math.random()` .

## تعليمات

قم بتغيير randomFraction لإرجاع رقم عشوائي بدلاً من إرجاع 0.

## **تحذير !!!**

### **تنبيه المفسد!**

حل يجب اتباعه:

 `function randomFraction() { 
  // Only change code below this line. 
  var result = 0; 
  // Math.random() can generate 0. We don't want to     return a 0, 
  // so keep generating random numbers until we get one     that isn't 0 
  while (result === 0) { 
    result = Math.random(); 
  } 
 
  return result; 
  // Only change code above this line. 
 } 
`