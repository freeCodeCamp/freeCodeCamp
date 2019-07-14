---
title: While-loop
localeTitle: undefined
---
تقوم عبارة loop while بتنفيذ العبارة المستهدفة بشكل متكرر طالما أن الشرط المعطى صحيح.

بناء الجملة: بينما (الشرط) { صياغات)؛ }

النقطة الأساسية في حلقة while هي أن الحلقة قد لا تعمل أبدًا. عندما يتم اختبار الشرط وتكون النتيجة خاطئة ، سيتم تخطي جسم الحلقة وسيتم تنفيذ العبارة الأولى بعد حلقة while.

مثال:

 `#include <iostream>
 using namespace std;

 int main () {
   // Local variable declaration:
   int a = 10;

   // while loop execution
   while( a < 20 ) {
      cout << "value of a: " << a << endl;
      a++;
   }

   return 0;
 }
`

انتاج:

قيمة أ: 10 قيمة أ: 11 قيمة أ: 12 قيمة أ: 13 قيمة a: 14 قيمة أ: 15 قيمة أ: 16 قيمة أ: 17 قيمة أ: 18 قيمة من: 19

### مصادر

www.tutorialspoint.com