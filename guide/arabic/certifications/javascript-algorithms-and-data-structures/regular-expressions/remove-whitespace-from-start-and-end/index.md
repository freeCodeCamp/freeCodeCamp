---
title: Remove Whitespace from Start and End
localeTitle: إزالة Whitespace من البداية والنهاية
---
## إزالة Whitespace من البداية والنهاية

لحل هذا التحدي عليك ببساطة إنشاء سلسلة regex تطابق أي مسافات في بداية أو في نهاية السلسلة.

## تلميح 1:

فكر في كيفية تحديد سلاسل فرعية في بداية أو نهاية سلسلة.

## تلميح 2:

فكر في كيف يمكنك تحديد مسافة بيضاء

## تنبيه المفسد - الحل إلى الأمام!

## حل:

 `let hello = "   Hello, World!  "; 
 let wsRegex = /^\s+|\s+$/g; // Change this line 
 let result = hello.replace(wsRegex, ''); // Change this line 
`