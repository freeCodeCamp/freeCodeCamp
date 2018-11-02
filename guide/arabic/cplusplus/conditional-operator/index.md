---
title: Conditional Operator
localeTitle: مشغل شرطي
---
## مشغل شرطي

المشغل الشرطي هو مشغل ثلاثي ، وهو يحتاج إلى 3 معاملات. تقوم بإرجاع واحدة من قيمتين بناءً على نتيجة تعبير يستخدم المشغل الشرطي لاستبدال عبارات if-else البسيطة.

بناء الجملة :

 `  (condition)?(expression-1):(expression-2); 
` 

هنا ، يتم تقييم expression-1 عندما يكون الشرط صحيحًا ويتم تقييم expression-2 عندما تكون condtion خاطئة. عبارة if-else مشابهة ستكون:

 `if(condition) 
  { 
    expression-1; 
  } 
 else 
  { 
    expression-2; 
  } 
` 

ومن ثم فإن العامل الشرطي سهل للغاية عندما تحتاج إلى كتابة عبارة if-else بسيطة. ويمكن أيضا أن تستخدم في # تعريف preprocessor عندما يتم استخدام حالة مماثلة في أماكن متعددة.

على سبيل المثال ، يمكن استخدام الحد الأقصى لعدد المشغلين الشرطيين على النحو التالي:

 `#define big(a,b) (a>=b)?a:b 
 
 int maximum,x=5,y=6; // variable to store maximum of two numbers 
 maximum=(x>y)?x:y; // directly using conditional operator 
 maximum=big(x,y); // using the #define preprocessor defined above as big 
` 

**حظا سعيدا لكم جميعا**

**الترميز سعيدة! :)**

**لا تتردد في طرح أي استفسارات على صفحة GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) أو [منتدى FreeCodeCamp.](https://forum.freecodecamp.org/)**