---
title: Use Capture Groups to Search and Replace
localeTitle: استخدم مجموعات الالتقاط للبحث واستبدال
---
## استخدم مجموعات الالتقاط للبحث واستبدال

باستخدام `.replace()` مع تعيين المعلمة الأولى للبحث عن جزء من السلسلة الأصلية لاستبدالها ، ويجب أن تكون المعلمة الثانية الاستبدال.

## تلميح 1:

قم بتعديل regex بحيث يقوم `fixRegex` بالكشف عن جزء من السلسلة لاستبداله ويجب تعديل متغير `replaceText` إلى السلسلة التي ستحل محل `fixRegex` .

## تنبيه المفسد - الحل إلى الأمام!

## حل

 `let huhText = "This sandwich is good."; 
 let fixRegex = /good/; // Change this line 
 let replaceText = "okey-dokey"; // Change this line 
 let result = huhText.replace(fixRegex, replaceText); 
`