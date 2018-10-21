---
title: If
localeTitle: إذا
---
# إذا

بيان if تنفيذ كتل مختلفة من التعليمات البرمجية استناداً إلى الشروط.

 ``if (condition) { 
    // Do something when `condition` is true 
 } 
 else { 
    // Do something when `condition` is false 
 } 
`` 

عندما `condition` صحيحة، رمز داخل `if` قسم ينفذ، وإلا `else` ينفذ. في بعض الأحيان ، ستحتاج إلى إضافة شرط ثانٍ. من أجل قراءة، يجب عليك استخدام `else if` بدلا من أن تعشش `if` البيانات.

 ``if (condition) { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) { 
    // Do something if `anotherCondition` is ture 
 } 
 else { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
`` 

ﻻﺣ Note أن `else` وﻣﺎ `else if` آﺎﻧﺖ اﻷﻗﺴﺎم ﻏﻴﺮ ﻣﻄﻠﻮﺑﺔ ، ﺑﻴﻨﻤﺎ `if` آﺎﻧﺖ إﻟﺰاﻣﻴﺔ.

## مثال

 `#include <stdio.h> 
 
 int main () { 
 
   // Local variable definition 
   int a = 10; 
 
   // Check the boolean condition 
   if(a < 5) { 
      // If condition is true then print the following 
      printf("a is less than 5!\n" ); 
   } 
   else { 
      // If condition is false then print the following 
      printf("a is not less than 5!\n" ); 
   } 
 
   printf("Value of a is : %d\n", a); 
 
   return 0; 
 } 
` 

## انتاج |

 `-> a is not less than 5! 
 -> Value of a is : 100 
`