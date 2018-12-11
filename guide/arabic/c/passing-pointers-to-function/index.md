---
title: Passing pointers to funtions
localeTitle: تمرير مؤشرات إلى funtions
---
# تمرير مؤشرات إلى funtions

C يسمح تمرير مؤشر إلى دالة. لتحقيق ذلك ، قم ببساطة بتعريف المعلمات كنوع مؤشر. تعد هذه الطريقة في تمرير المراجع إلى الدالات مفيدة عندما تريد تعديل المتغيرات الخارجة عن نطاق تلك الوظيفة.

 `// incorrect implementation of swap 
 #include <stdio.h> 
 void swap(int a, int b){ 
    int c; 
    c = a; 
    a = b; 
    b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(var1, var2); 
    printf("Value of var1: %d \n", var1); // prints 10 
    printf("Value of var2: %d \n", var2); // prints 20 
 } 
` 

في مثال التعليمة البرمجية هذه ، لا تعمل وظيفة التبديل كما هو مقصود حيث تقوم بتبديل اثنين من المتغيرات الموجودة فقط داخل نطاق تلك الوظيفة. لإصلاح هذا ، نقوم بإجراء تعديل كما هو موضح أدناه.

 `// correct implementation of swap 
 #include <stdio.h> 
 void swap(int* a, int* b){ 
    int c = *a; 
    *a = *b; 
    *b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(&var1, &var2); 
    printf("Value of var1: %d \n", var1); // prints 20 
    printf("Value of var2: %d \n", var2); // prints 10 
 } 
` 

في المثال الثاني من التعليمات البرمجية ، تمكّنت من تغيير قيم المتغيرات فقط لأنك كنت تعمل باستمرار على عدم الرجوع إلى المؤشر داخل الدالة بدلاً من محاولة تغيير القيم مباشرة.