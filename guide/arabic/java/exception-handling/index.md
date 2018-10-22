---
title: Exceptions in Java
localeTitle: الاستثناءات في جافا
---
## ما هو استثناء؟

استثناء هو حدث غير مرغوب فيه أو غير متوقع ، والذي يحدث أثناء تنفيذ برنامج أي في وقت التشغيل ، الذي يعطل التدفق الطبيعي لتعليمات البرنامج.

## خطأ مقابل استثناء

خطأ: يشير الخطأ إلى وجود مشكلة خطيرة لا يجب أن يحاول تطبيق معقول التقاطها. استثناء: يشير الاستثناء إلى الشروط التي قد يحاول تطبيق معقول التقاطها.

## التسلسل الهرمي الاستثناء

جميع أنواع الأخطاء والاستثناءات هي فئات فرعية للفئة Throwable ، وهي فئة أساسية من التسلسل الهرمي. ويرأس فرع واحد استثناء. يتم استخدام هذه الفئة للظروف الاستثنائية التي يجب أن تلتقطها برامج المستخدم. NullPointerException هو مثال لمثل هذا الاستثناء. فرع آخر ، يتم استخدام الخطأ من قبل نظام وقت التشغيل Java (JVM) للإشارة إلى وجود أخطاء يجب القيام بها مع بيئة وقت التشغيل نفسها (JRE). StackOverflowError مثال على مثل هذا الخطأ.

## كيفية استخدام جملة try-catch

 `try { 
 // block of code to monitor for errors 
 // the code you think can raise an exception 
 } 
 catch (ExceptionType1 exOb) { 
 // exception handler for ExceptionType1 
 } 
 catch (ExceptionType2 exOb) { 
 // exception handler for ExceptionType2 
 } 
 // optional 
 finally { 
 // block of code to be executed after try block ends 
 } 
`