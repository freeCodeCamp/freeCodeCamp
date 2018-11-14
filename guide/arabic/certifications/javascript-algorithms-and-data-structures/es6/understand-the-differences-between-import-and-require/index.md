---
title: Understand the Differences Between import and require
localeTitle: فهم الاختلافات بين الاستيراد وتتطلب
---
## فهم الاختلافات بين الاستيراد وتتطلب

دعونا نوضح: `require()` تحميل الملف بأكمله ومكوناته (الوظائف ، المتغيرات) ، في حين أن `import _ from` يسمح لك باختيار المكونات التي تريدها.

في هذا الدرس ، يتم تكليفك باستيراد الدالة `capitalizeStrings()` ، التي تأتي من الملف `"string-functions"` .

## تلميح 1:

املأ الفراغات: `import { function_name } from "file_name"` . اسم الدالة الخاص بك هو `capitalizeStrings` واسم الملف الخاص بك هو `"string-functions"` .

## تنبيه المفسد - الحل إلى الأمام!

## حل

 `"use strict"; 
 import { capitalizeString } from "string-functions"; 
 capitalizeString("hello!"); 
`