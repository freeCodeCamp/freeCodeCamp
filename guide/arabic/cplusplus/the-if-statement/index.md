---
title: C++ If Statement
localeTitle: C ++ If Statement
---# بيان IF.

**ماذا يفعل بيان if؟**

*   يقوم بيان `if` بتقييم تعبير الاختبار الموجود داخل الأقواس.
*   تستخدم عبارة `if` معاملات علائقية ومنطقية لإجراء تعابير منطقية.

* * *

الشكل العام لبيان `if` :

 `  if (Test Expression / Condition) 
  { 
    // Block of statements if test expression is True 
  } 
` 

إذا كانت قيمة تعبير الاختبار **صحيحة** ، فإن كتلة التعبير كود داخل العبارة اذا تم تنفيذها.

إذا كانت قيمة التعبير التجريبي **خاطئة** ، فإن كتلة التعبير كود داخل العبارة إذا تم تخطيها واستمرار التعليمة البرمجية الخاصة بك.

مثال `if` البيان:

 `  int a = 10; 
 
  // true statement 
  if (a < 20) 
  { 
    // execute this block of code 
  } 
 
  // false statement 
  if (a < 0) 
  { 
    // Skip this block of code. 
  } 
` 

مثال في C ++:

 `  // Program to check if number entered by the user is positive 
  // If negative, the block of code is skipped 
 
  #include <iostream> 
  using namespace std; 
 
  int main() 
  { 
    int no ; 
    cout << "Enter a number: "; 
    cin >> no; 
 
    // if statement to check if the number is positive 
    if ( no > 0) 
    { 
      cout << "You have entered a positive number: " << no << endl; 
    } 
 
    // If number is not positive, then if statement is skipped a program continues 
    cout << "This step is always printed" << endl; 
 
    return 0; 
  } 
` 

**انتاج:**

مخرج 1:

 `Enter a number: 5 
 You have entered a positive number: 5 
 This step is always printed 
 ``` 
 This is the output when the number entered is positive. 
 
 OUTPUT 2: 
` 

أدخل رقمًا: -1 تتم دائمًا طباعة هذه الخطوة \`\` \` هذا هو الإخراج عندما يكون الرقم الذي تم إدخاله سالبًا.

[جرب الرمز بنفسك! :)](https://repl.it/Mg9X)

_تهانينا . هذه هي نهاية المقالة على جملة IF_

**حظا سعيدا لكم جميعا**

**الترميز سعيدة! :)**

**لا تتردد في طرح أي استفسارات على صفحة GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) أو [منتدى FreeCodeCamp.](https://forum.freecodecamp.org/)**