---
title: For Loop
localeTitle: لحلقة
---
A For Loop هو عبارة تكرارية تستخدم للتحقق من وجود بعض الشرط ، وبناءً على الشرط ، يتم تنفيذ كتلة من التعليمات البرمجية بشكل متكرر حتى يتم استيفاء الشرط المحدد.

يتم تمييز حلقة for عن حلقات التكرار الأخرى من خلال متغير حلقة صريح أو متغير حلقة يسمح للجسم من الحلقة معرفة التسلسل الدقيق لكل تكرار.

ومن ثم ، فإن حلقة for هي بنية تحكم في التكرار تسمح لك بكتابة حلقة بكفاءة تحتاج إلى تنفيذ عدد محدد من المرات.

## بناء الجملة

 `for ( init; condition; increment ) { 
   statement(s); 
 } 
` 

من المسموح به لوضع الزيادة insie للحلقة مثل في حلقة في حين. بمعنى أن بناء الجملة مثل هذا يمكن أن يعمل أيضًا.

 `for ( init; condition;) { 
   statement(s); 
   increment; 
 } 
` 

### فيه

تسمح لك هذه الخطوة بتعريف وتهيئة أي متغيرات تحكم في الحلقة. يتم تنفيذ هذه الخطوة أولاً ومرة ​​واحدة فقط.

### شرط

القادم يتم تقييم الشرط. إذا كان صحيحًا ، فسيتم تنفيذ نص الحلقة. إذا كانت تحتوي على false ، لا يتم تنفيذ نص الحلقة ويذهب تدفق عنصر التحكم إلى التكرار التالي (تكرار عملية).

### تحديث

يستخدم بيان التحديث لتغيير متغير الحلقة باستخدام عمليات بسيطة مثل الجمع أو الطرح أو الضرب أو القسمة. ينفّذ بيان التحديث بعد تنفيذ نص الحلقة.

## التنفيذ:

 `#include <iostream> 
 using namespace std; // Here we use the scope resolution operator to define the scope of the standar functions as std:: 
 
 int main () { 
   // for loop execution 
   for( int a = 10; a < 20; a = a + 1 ) { // The loop will run till the value of a is less than 20 
      cout << "value of a: " << a << endl; 
   } 
 
   return 0; 
 }``` 
 
 Output: 
 value of a: 10 
 value of a: 11 
 value of a: 12 
 value of a: 13 
 value of a: 14 
 value of a: 15 
 value of a: 16 
 value of a: 17 
 value of a: 18 
 value of a: 19 
 
 ##Single lined loop 
 The body of the for loop need not be enclosed in braces if the loop iterates over only one satatement. 
 ##Example 
` 

ج ++ #تتضمن استخدام اسم للمحطة؛

انت مين () { // خط واحد للحلقة لـ (int a = 10؛ a <20؛ a = a + 1) cout << "قيمة a:" << a << endl؛

العودة 0 } \`\` \`

هذا من شأنه أن يولد نفس الناتج مثل البرنامج السابق. أي انتاج: قيمة أ: 10 قيمة أ: 11 قيمة أ: 12 قيمة أ: 13 قيمة a: 14 قيمة أ: 15 قيمة أ: 16 قيمة أ: 17 قيمة أ: 18 قيمة من: 19

 `## Explanation 
 Here's the initialization condition is first set to a=10. The loop first checks for this condition. It then checks for the condition expression ie a<20 which holds true as 10<20(for the first case). Now the body of the loop is executed and we get the output "Value of a: 10". Then the update expression is executed which adds the number 1 to 'a' and the value of 'a' gets updated to 11 and the same steps are followed (as above) until the value of v reaches less than 20 ie 19. 
 
 # Range-based for-loop 
 C++ also has what we call range-based for loops which iterates through all the elements of a container(eg array). 
 
 ## Syntax 
` 

لـ (العنصر: الحاوية) صياغات)؛ }

int \[5\] array = {1، 2، 3، 4، 5} لـ (int i: array) cout << i << endl؛ }

انتاج: 1 2 3 4 5 \`\` \`