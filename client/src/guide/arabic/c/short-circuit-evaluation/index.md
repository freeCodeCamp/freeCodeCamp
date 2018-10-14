---
title: Short-Circuit Evaluation
localeTitle: تقييم الدوائر القصيرة
---
# تقييم الدوائر القصيرة

يتكون التقييم Short-Circuit من فحص أو تنفيذ الوسيطة الثانية فقط إذا كانت الوسيطة الأولى غير كافية لتحديد قيمة التعبير.

يمكنك إجراء تقييم للدارة القصيرة باستخدام && و || العاملين.

## مثال مع && operator:

 `  canOpenFile(filename) && openFile(filename); // If you can open the file then open it. 
` 

المثال أعلاه مكافئ لما يلي:

 `  if ( canOpenFile(filename) ) { 
    openFile(filename); 
  } 
` 

## مثال مع || المشغل أو العامل:

 `  isServerOn || startServer(); // If the server is not on then start it. 
 ``` 
 The example above is equivalent to: 
 
 ```c 
  if ( !isServerOn ) { 
    startServer(); 
  } 
 ``` 
 
 ## Keep it all together in real example 
 
 ```c 
 #include <stdio.h> 
 #include <stdlib.h> 
 
 char *getName(); 
 
 int main(int argc, char *argv[]) { 
    // Get first argument passed via terminal 
    char *name = argv[1]; 
 
    // If name is not passed via terminal then print message and then get the name 
    name || printf("Please give me your name:") && (name = getName()); 
 
    printf("Hello %s\n", name); 
 } 
 
 char *getName() { 
    // Allocate memory 
    char *name = malloc(30); 
 
    scanf("%s", name); 
    return name; 
 } 
`