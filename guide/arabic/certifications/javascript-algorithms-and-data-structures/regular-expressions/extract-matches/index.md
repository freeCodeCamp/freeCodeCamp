---
title: Extract Matches
localeTitle: استخراج مباريات
---
## استخراج مباريات

باستخدام طريقة `match()` ، يمكنك استخراج أجزاء من سلسلة تتطابق مع تعبيرك العادي. في هذا التحدي ، أنت تقوم باستخراج كلمة "ترميز" من السلسلة المقدمة.

## تلميح 1:

قم بتغيير التعبير العادي الخاص بك لاكتشاف كلمة "الترميز".

## تلميح 2:

هل قمت باستدعاء طريقة `match()` على السلسلة؟

## تنبيه المفسد - الحل إلى الأمام!

## حل:

 `let extractStr = "Extract the word 'coding' from this string."; 
 let codingRegex = /coding/; 
 let result = extractStr.match(codingRegex); 
`