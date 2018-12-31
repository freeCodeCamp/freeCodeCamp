---
title: Reuse Patterns Using Capture Groups
localeTitle: إعادة استخدام الأنماط باستخدام مجموعات الالتقاط
---
## إعادة استخدام الأنماط باستخدام Capture Group

## تلميح 1:

كود المقدمة أدناه:

 `let testString = "test test test "; 
 let reRegex =/(test)\s\1/; 
 let result = reRegex.test(testString); 
` 

سوف تتطابق `result` مع `test test` فقط لأن `\1` في هذا المثال تشير إلى نفس النص الذي تم مؤخرًا تطابقه مع المجموعة الأولى `(test)` .

إذا كنا سنترجم التعبير المعتاد حرفياً ، فسيبدو شيئًا كالتالي:

 `let re = /(test)\s\1/; 
 let literalRe = /test\stest/; 
` 

كل من `rea` و `literalRe` تطابق نفس الشيء.

## تلميح 2:

نظرا للرمز أدناه:

 `let testString = "test test test "; 
 let reRegex =/(test)(\s)\1\2\1/; 
 let result = reRegex.test(testString); 
` 

سيطابق `test test test` كامل `test test test` بسبب: `\1` يكرر (اختبار) `\2` يكرر (\\ s)

## تلميح 3:

الكود أدناه:

 `let testString = "test test test test test test"; 
 let reRegex =/(test)(\s)\1\2\1/g; 
 let result = reRegex.test(testString); 
` 

نظرًا لأننا استخدمنا `\g` ، فلن يعود التعبير المعتاد الخاص بنا بعد أول مباراة كاملة ( `test test test` ) ويطابق كل التكرار.

## تنبيه المفسد - الحل إلى الأمام!

## حل:

 `let repeatNum = "42 42 42"; 
 let reRegex =  /^(\d+)\s\1\s\1$/; 
 let result = reRegex.test(repeatNum); 
`
