---
title: Backtracking Algorithms
localeTitle: خوارزميات التراجع
---
# خوارزميات التراجع

التراجع هو خوارزمية عامة لإيجاد كل الحلول (أو بعض) لبعض المشاكل الحسابية ، ولا سيما مشاكل الرضا المقيدة ، التي تبني بشكل متزايد المرشحين للحلول ، وتتخلى عن كل مرشح جزئي _("backtracks")_ بمجرد أن يحدد أن المرشح لا يستطيع من المحتمل أن تكتمل إلى حل صالح.

### مثال على المشكلة (مشكلة جولة فارس)

_يتم وضع الفارس على أول كتلة من لوحة فارغة ، ويتحرك وفقا لقواعد لعبة الشطرنج ، يجب زيارة كل مربع مرة واحدة بالضبط._

\# # # # # اتبعها فارس لتغطية جميع الخلايا فيما يلي هو رقعة الشطرنج مع 8 × 8 خلايا. تشير الأرقام في الخلايا إلى تحريك عدد Knight. [![حل جولة فارس - عن طريق اويلر](https://upload.wikimedia.org/wikipedia/commons/d/df/Knights_tour_%28Euler%29.png)](https://commons.wikimedia.org/wiki/File:Knights_tour_(Euler).png)

### خوارزمية السذاجة لجولة نايت

تقوم Naive Algorithm بتوليد جميع الجولات واحدة تلو الأخرى والتحقق مما إذا كانت الجولة التي تم إنشاؤها تفي بالقيود.

 `while there are untried tours 
 { 
   generate the next tour 
   if this tour covers all squares 
   { 
      print this path; 
   } 
 } 
` 

### خوارزمية التراجع عن جولة نايت

فيما يلي خوارزمية Backtracking لمشكلة جولة Knight.

 `If all squares are visited 
    print the solution 
 Else 
   a) Add one of the next moves to solution vector and recursively 
   check if this move leads to a solution. (A Knight can make maximum 
   eight moves. We choose one of the 8 moves in this step). 
   b) If the move chosen in the above step doesn't lead to a solution 
   then remove this move from the solution vector and try other 
   alternative moves. 
   c) If none of the alternatives work then return false (Returning false 
   will remove the previously added item in recursion and if false is 
   returned by the initial call of recursion then "no solution exists" ) 
` 

### معلومات اكثر

[ويكيبيديا](https://en.wikipedia.org/wiki/Backtracking)

[المهوسون 4 المهوسون](http://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)

[مقدمة مثيرة جدا للرجوع](https://www.hackerearth.com/practice/basic-programming/recursion/recursion-and-backtracking/tutorial/)