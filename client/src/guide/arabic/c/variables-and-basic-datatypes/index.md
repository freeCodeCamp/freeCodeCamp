---
title: Variables and Basic Data Types 
localeTitle: المتغيرات وأنواع البيانات الأساسية
---
# المتغيرات وأنواع البيانات الأساسية

## ما هو المتغير؟

متغيرات تخزين القيم. بشكل أساسي ، تعطي اسمًا لقيمة مخزنة ، والتي تريد استخدامها لاحقًا. من المهم ملاحظة أن أحد المتغيرات يمكنه تخزين قيمة واحدة في وقت واحد. ولكن في وقت لاحق ، يمكنك تغيير القيم المخزنة لاحقًا في الشفرة ويمكنك أيضًا تعيين قيمة أحد المتغيرات إلى آخر.

> عند إنشاء متغير ، يطلق عليه `declaring` ، وعندما تعطيه قيمة للتخزين ، فإنه يطلق عليه `assignment` . إذا أعطيت المتغير قيمة في نفس وقت الإعلان عنه ، فسيتم تسميته `initializing` . C هو صعب للغاية حول كيفية إنشاء المتغيرات وما تخزن فيه. C هي لغة `strongly typed` ، مما يعني أنه عليك تحديد نوع واسم كل متغير عندما تعلنه. يمكن أن يتكون اسم المتغير من أحرف ، وأرقام ، وحرف الشرطة السفلية.

## أنواع أساسية

يوجد في المعيار C أربعة أنواع من البيانات الأساسية المهمة: `int` ، و `float` ، و `double` ، و `char` .

### الأعداد الصحيحة

بالنسبة لقيم الأعداد الكاملة ، يتم استخدام الكلمة الأساسية `int` (اختصارًا لعدد صحيح). دعونا ننظر في برنامج بسيط:

 `#include <stdio.h> 
 int main(void){ 
 
 int a; // Declaring a variable which stores integer values and is called 'a' 
 int b = 5; //Initializing an int called 'b' with the value 5 
 a = 6; // Assigning the value 6 to the variable 'a' 
 int c; 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things 
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
 
 return 0; 
 } 
` 

دعونا نكسر ما فعلناه تحت `Some shingy things` :

 `printf("%d \n", c); 
` 

لطباعة قيمة المتغير `c` ، يمكنك استخدام الدالة `printf()` . لاحظ أن `%d` مضمن في علامات الاقتباس المزدوجة. هذا يخبر الكمبيوتر أن تتوقع قيمة **د** ecimal ، وأنه بعد الفاصلة.

 `printf("%d %d \n", a, b); 
` 

يمكنك طباعة عدة أعداد صحيحة بالترتيب الموضح بعد الفاصلة.

لاحظ أنه عند محاولة تخزين قيمة عشرية في `int` ، ستحصل فقط على جزء منه ، لأنه سيتم اقتطاعه.

يمكننا أيضا كتابة البرنامج بالطريقة أدناه:

 `#include <stdio.h> 
 int main(void){ 
 
 int a=3,b=4,c; // we can also assign and declare the values in 1 line 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 
 
 return 0; 
 } 
` 

### يطفو ويضاعف

لتخزين القيم العشرية، يمكنك استخدام `float` و `double` الكلمات الرئيسية. والفرق بينهما هو الدقة ، `double` يحتوي على 13 رقمًا بينما يحتوي `float` على حوالي 7 ، ولكن هذا يختلف من وحدة المعالجة المركزية إلى وحدة المعالجة المركزية. \`\` \`C #تتضمن int main (void) { ضعف a = 3.23 ؛ printf ("المتغير a له القيمة:٪ f \\ n"، a)؛ // يمكن طباعة القيم المزدوجة بـ٪ f العودة 0 }

 ``### Characters 
 You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code: 
`` 

C

# تتضمن

int main (void) { char a = 'A'؛ / / تهيئة حرف char بقيمة "A" ، لاحظ علامات الاقتباس البسيطة! printf ("الحرف was:٪ c"، a) // يمكن طباعة الأحرف بـ٪ c العودة 0 }

 ``## The Boolean type 
 Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`. 
`` 

C

# تتضمن

# تتضمن

int main (void) { bool a = true؛ bool b = false؛

العودة 0 } \`\` \`

## تعليقات

يخبر نوع متغير المحول البرمجي مقدار المساحة لإنشاء (تخصيص) للمتغير. الآن لقد رأيت أنواع البيانات الأساسية ، ولكن هناك معدّلات لهم لتعديل مقدار المساحة المخصصة لمتغير. يمكن أن تقوم المعدّلات بزيادة القيم الافتراضية أو تقليلها. يحتوي C على 5 معدّلات: `short` ، `long` ، `signed` ، `unsigned` ، `long long` . وهي مسبوقة للأنواع الأساسية.