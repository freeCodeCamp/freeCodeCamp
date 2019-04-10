---
title: With
localeTitle: مع
---
## مع

جافا سكريبت `with` بيان هو وسيلة مختصرة لتحرير العديد من الخصائص على كائن واحد. معظم المطورين تثبيط استخدام `with` ، وكنت أفضل عدم استخدام هذه الكلمة.

**ملاحظة:** `"strict mode"` يحظر استخدام `with` .

### بناء الجملة

 `with (expression) 
  statement 
` 

### مثال للاستخدام

في JavaScript ، يمكنك تعديل خصائص أحد الكائنات على حدة مثل أدناه:

 `let earth = {}; 
 earth.moons = 1; 
 earth.continents = 7; 
` 

`with` يمنحك اختصار لتعديل الخصائص على كائن:

 `with (earth) { 
  moons = 1; 
  continents = 7; 
 } 
` 

في حين أن هذا المثال مفتعل ، يمكنك فهم حالات الاستخدام `with` المزيد إذا كان لديك كائنات أكبر مثل أدناه:

 `earth.continents.australia.geography.ocean = "Pacific"; 
 earth.continents.australia.geography.river = "Murray"; 
 earth.continents.australia.geography.mountain = "Kosciuszko"; 
` 

### البدائل

يجب عدم استخدامه `with` وجود مشكلات بسيطة في الأخطاء والتوافق. يتمثل أسلوب موصى به للغاية في تعيين الكائن إلى متغير ، ثم تعديل خصائص المتغير. هنا مثال على استخدام كائن أكبر:

 `let earth = { 
  continents: { 
    australia: { 
      geography: {} 
    } 
  } 
 }; 
 
 let geo = earth.continents.australia.geography; 
 
 geo.ocean = "Pacific"; 
 geo.river = "Murray"; 
 geo.mountain = "Kosciuszko"; 
` 

### حاول

https://repl.it/Mixg/5

#### معلومات اكثر:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)

[https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/](https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)

[http://2ality.com/2011/06/with-statement.html](http://2ality.com/2011/06/with-statement.html)