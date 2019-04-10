---
title: Structures
localeTitle: الهياكل
---
## الهياكل في C

### ما هي الهياكل؟

*   **البنية** هي نوع معرف من قبل المستخدم في C. إنه يستند إلى فكرة أن أوقات معينة ، مبرمج يريد إدارة ليس فقط أنواع البيانات البدائية ولكن أيضا أنواع البيانات المعرفة من قبل المبرمج.
*   يتكون **الهيكل** ، كما يوحي الاسم ، من أنواع مختلفة من البيانات الأولية ، مثل الأحرف والأعداد الصحيحة ومتغيرات النقطة العائمة والمصفوفات وما إلى ذلك.
*   يمكن أن يحتوي **الهيكل** أيضًا على العديد من أنواع البيانات الأخرى المعرفة بواسطة المستخدم. سوف تتعلم عن البنى المتداخلة التالية.
*   تشكل **الهياكل** أساس **_البرمجة الشيئية_** حيث أن مفهوم _الطبقة_ ينشأ من البنى.

### الكلمة الأساسية

*   يمكن أن تساعدنا الكلمة الأساسية `struct` في تعريف نوع بيانات المعرفة من قبل المستخدم.

 `struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }; 
` 

*   يمكننا أيضًا تحديد **بنية** باستخدام **الرموز المميزة لـ typedef** مما يجعل تهيئة البنية لاحقًا في برنامجنا أسهل.

 `typedef struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }Record; 
` 

في `main()` ، يتم تعريف **StudentRecord** نوع البيانات المعرفة من قبل المستخدم على النحو التالي:

 `int main(void) 
 { 
  struct StudentRecord student1; 
 } 
` 

وباستخدام **typedef** ، يبدو نوع البيانات المعرفة من قبل المستخدم:

 `int main(void) 
 { 
  Record student1; 
 } 
` 

للوصول إلى البيانات المخزنة في **student1** ، نستخدم عامل نقطة ( **.** ) للوصول إلى محتويات متغير نوع البنية.

 `int main(void) 
 { 
  struct StudentRecord student1; 
  student1.Class = 10; 
  printf("Enter Name of Student\n"); 
  scanf("%s",&student1.Name); 
  printf("Enter Address of Student\n"); 
  scanf("%s",&student1.Address); 
  printf("Enter Phone Number of Student\n"); 
  scanf("%s",&student1.Phone); 
  // Printing the Data 
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone); 
 } 
` 

### معلومات اكثر

https://www.tutorialspoint.com/cprogramming/c\_structures.htm