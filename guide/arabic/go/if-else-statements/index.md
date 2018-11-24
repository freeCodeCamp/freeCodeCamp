---
title: if else Statements
localeTitle: if else البيانات
---## المقدمة

بيان `if` ينفذ عبارة إذا كان الشرط المحدد هو **الصحيح** . إذا كانت الحالة **خاطئة** ، يمكن تنفيذ جملة أخرى باستخدام عبارة `else` .

**ملاحظة:** العبارة `else` اختيارية.

 `  x := 7 
  if x%2 == 0 { 
    // This statement is executed if x is even 
  } else { 
    // This statement is executed if x is odd 
  } 
` 

متعددة `if...else` البيانات يمكن أن تتداخل لخلق `else if` الشرط.

 `  x := 7 
  if x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 4 { 
    // this statement is executed if x is 4 
  } else if x == 7 { 
    // this statement is executed if x is 7 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 
` 

في العودة يمكن أن تسبق و `if` شرط مع بيان. بعد ذلك ، يكون تعريف المتغير الحاوي صالحًا للكتلة الكاملة في `if` الحظر.

 `  if x := 3; x == 2 { 
    // this statement is executed if x is 2 
  } else if x == 3 { 
    // this statement is executed if x is 3 
  } else { 
    // this statement is executed if none of the aboves is true 
  } 
`