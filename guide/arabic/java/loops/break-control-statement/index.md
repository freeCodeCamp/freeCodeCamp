---
title: Break Control Statement
localeTitle: بيان التحكم في الاستراحة
---
# بيان التحكم في الاستراحة

إنهاء الحلقة ويبدأ تنفيذ التعليمة البرمجية التي تتبع مباشرة الحلقة. إذا كان لديك حلقات متداخلة ، فسيؤدي بيان `break` فقط إلى إنهاء الحلقة التي يتم وضعها فيها.

 `// Loop 1 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break; // Will terminate Loop 2, but Loop 1 will keep going 
        } 
    } 
 } 
` 

ولكن إذا كنت تريد الخروج من الحلقة الخارجية أيضًا ، فيمكنك استخدام تصنيف للخروج:

 `loop1: // This is a label 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break loop1; // Will break out of Loop 1, instead of Loop 2 
        } 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZA/0)

قد تكون عبارات `break` مفيدة بشكل خاص أثناء البحث عن عنصر في صفيف. يؤدي استخدام `break` في التعليمة البرمجية التالية إلى تحسين الكفاءة أثناء توقف الحلقة بمجرد العثور على العنصر الذي نبحث عنه ( `searchFor` ) ، بدلاً من الاستمرار حتى يتم الوصول إلى نهاية `arrayInts` .

 `int j = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 for (int i : arrayOfInts) 
 { 
    if (arrayOfInts[j] == searchFor) 
    { 
        break; 
    } 
    j++; 
 } 
 
 System.out.println("j = " + j); 
` 

يمكن استخدام بيان الاستراحة أيضًا ضمن عبارة "بيان".

 `int i = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 while(i < 10){ 
 System.out.println("i = " + j); 
 if(arrayOfInts[i] > 7){ 
  break; 
  } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZC/0)