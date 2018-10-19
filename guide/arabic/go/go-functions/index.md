---
title: Go Functions
localeTitle: الذهاب وظائف
---
## الذهاب وظائف

الدالة هي كتلة من التعليمة البرمجية التي تقوم بتنفيذ مهمة عندما يتم استدعاؤها ، بحيث يعرف اسم الدالة ذلك ويستخدم في استدعاء الدالة.

يبدأ تعريف الدالة بالكلمة الأساسية `func` متبوعة باسم الدالة ثم وسيطات الدالة وأخيراً أنواع القيم التي تم إرجاعها. يربط التصريح اسم الدالة بالوظيفة. ضع في اعتبارك أن النوع يأتي بعد اسم المتغير في كل من الوسيطات والقيم التي تم إرجاعها. مثال لإعلان الدالة هو ما يلي

 `func add(a int, b int) int 
` 

يمكن أن تحتوي الدالة على 0 أو العديد من الوسائط استنادًا إلى وظيفتها المطلوبة

 `func zero() int { /* Function Definition */ } 
 func increment(x int) int { /* Function Definition */ } 
 func add(x, y int) int { /* Function Definition */ } 
` 

يدعم Go إرجاع قيم متعددة. تقوم الدالة التالية بإرجاع قيمتين: مجموع الوسيطتين ، والفرق بين الوسيط الأول والثاني

 `func addAndSubtract(x, y int) (int, int) { 
  return x + y, x - y 
 } 
 
 addAndSubtract(7, 4) // Returns 11, 3 
` 

Go يعتمد أيضًا تسمية القيم التي تم إرجاعها

 `func mulitplyByThreeAndDivideByFive(x int) (product int, quotient int) { 
    product = x * 3 
    quotient = x / 5 
    return 
 } 
 
 mulitplyByThreeAndDivideByFive(20) // Returns 60, 4 
` 

#### معلومات اكثر:

*   [جولة في الذهاب](https://tour.golang.org/basics/4)
*   [الذهاب عن طريق المثال](https://gobyexample.com/functions)
*   [Golang كتاب](https://www.golang-book.com/books/intro/7)
*   [مواصفات لغة برمجة Go](https://golang.org/ref/spec#Function_declarations)