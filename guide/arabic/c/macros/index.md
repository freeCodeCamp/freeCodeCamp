---
title: Macros in C
localeTitle: وحدات الماكرو في C
---
## وحدات الماكرو في C

ماكرو هو جزء من التعليمة البرمجية باسم معين. عند استخدام الاسم ، يتم استبداله بمحتوى الماكرو.

#### تحديد وحدات الماكرو

يتم استخدام الكلمة الأساسية `#define` لتحديد وحدات الماكرو الجديدة. يتبعه اسم ومحتوى. حسب الاصطلاح ، تتم كتابة أسماء الماكرو في أحرف كبيرة.

 `#define PI 3.14 
` 

إذا كنت تستخدم الماكرو بهذه الطريقة:

 `printf("Value of PI: %d", PI); 
` 

هو نفس كتابة هذا:

 `printf("Value of PI: %d", 3.14); 
` 

#### أنواع وحدات الماكرو

هناك نوعان من وحدات الماكرو. وحدات الماكرو `Object-like` ، أظهر أعلاه ، ووحدات الماكرو `Function-like` .

#### وحدات تشبه وظيفة

تشبه دالة تستخدم نفس الكلمة `#define` . الفرق هو أنك تستخدم قوسين زوج بعد اسم الدالة.

 `#define hello_world() printf("Hello World!") 
` 

لذلك اتصلت:

 `hello_world() 
` 

لقد حصلت:

 `printf("Hello World!"); 
` 

يمكنك تعيين المعلمات أيضًا:

 `#define hello(X) printf("Hello " X "!") 
` 

الآن الاتصال:

 `hello("World"); 
` 

تحصل على equivallent:

 `printf("Hello World!"); 
` 

#### معلومات اكثر:

[وثائق مجلس التعاون الخليجي عبر الإنترنت: وحدات الماكرو](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[وثائق مجلس التعاون الخليجي عبر الإنترنت: وحدات ماكرو تشبه الكائنات](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[وثائق مجلس التعاون الخليجي على الإنترنت: وحدات الماكرو مثل وظيفة](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)