---
title: Import a Default Export
localeTitle: استيراد تصدير افتراضي
---
## استيراد تصدير افتراضي

يكون استيراد قيمة افتراضية للتصدير هو نفسه تقريبًا عند استيراد تصدير عادي ؛ أنت لا تحتاج إلى الأقواس المتعرجة لتحديد اسم ما تستورده من الملف!

## تلميح 1:

املأ الفراغات: `import _ from "file-name"` . قم بتوصيل اسم الوحدة (الذي يتم `subtract` ) إلى `_` ووضع `"math-functions"` في `"file-name"` .

## تنبيه المفسد - الحل إلى الأمام!

## حل:

 `"use strict"; 
 import subtract from "math_functions"; 
 subtract(7,4); 
`