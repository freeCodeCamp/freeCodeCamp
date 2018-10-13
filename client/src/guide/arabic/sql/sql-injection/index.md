---
title: SQL Injection
localeTitle: حقن SQL
---
## حقن SQL

حقن SQL هو أسلوب ضار يهدف إلى تسوية قواعد البيانات أو إتلافها. إنها واحدة من أكثر تقنيات قرصنة الإنترنت شيوعًا.

يتم تنفيذ حقن SQL عن طريق وضع تعليمات برمجية ضارة في عبارات SQL عن طريق إدخال.

المثال التالي هو أحد مقتطفات التعليمات البرمجية التي سيتم استرداد مستخدم من قاعدة بيانات تستند إلى `AccountId` .

 `passedInAccountId = getRequestString("AccountId"); 
 sql = "select * from Accounts where AccountId = " + passedInAccountId; 
` 

يمكن استخدام حقن SQL لخرق هذا الرمز عن طريق حقن `1=1;` بيان `AccountId` .

`https://www.foo.com/get-user?AccountId="105 OR 1=1;"`

`1=1` سيقيم دائمًا إلى `TRUE` . سيؤدي ذلك إلى إخراج التعليمة البرمجية التي تم تنفيذها كل جدول الحسابات.