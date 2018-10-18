---
title: If-Else Statement
localeTitle: If-Else Statement
---## ماذا يفعل بيان If-Else؟

*   عبارة If-Else عبارة عن ملحق عبارة If بسيطة.
*   في عبارة If البسيطة ، إذا كانت قيمة تعبير الاختبار غير صحيحة ، فإننا نتخطى رمز الحظر ونستمر في بياننا التالي.
*   ولكن في كثير من الأحيان ، نرغب في تنفيذ خطوات معينة إذا كانت قيمة التعبير التجريبي خاطئة.
*   في مثل هذه الحالات ، نستخدم بيان if-else.

### الشكل العام لبيان "If-Else"

 `if (test expression) 
 { 
  //statements that run if the test expression is true 
 } 
 else 
 { 
  //statements that run if the test expression is false 
 } 
` 

### مثال على بيان If-Else

إذا كان اختبار التعبير صحيحًا:

 `int a=10; 
 if (a < 20) // This expression is true, so... 
 { 
  //...the code in this block gets executed, and... 
 } 
 else 
 { 
  //...the code in this block gets skipped. 
 } 
 //program continues 
` 

إذا كان اختبار التعبير غير صحيح:

 `int a=10; 
 if (a>20) // This expression is false, so this time... 
 { 
  //...this code gets skipped... 
 } 
 else 
 { 
  //...and this code executes instead. 
 } 
 //program continues 
` 

### مثال في C ++:

 `//Program to check whether number entered by user is positive or negative 
 #include <iostream> 
 using namespace std; 
 int main() 
 { 
  int no; 
  cout << "Enter a number: " << endl; 
 
  cin >> no; 
 
  // condition to check if number is positive or negative 
  if (no >= 0) // positive 
  { 
    // block if value is true 
    cout << "You entered a positive number: " << no << endl; 
  } 
  else         // negative 
  { 
    // block if value is false 
    cout << "You entered a negative number: " << no << endl; 
  } 
 
  // program continues 
  cout << "This step is always printed" << endl; 
  return 0; 
 } 
` 

#### انتاج |

*   عندما يتم إدخال رقم موجب:

 `Enter a number: 
 4 
 You entered a positive number: 4 
 This step is always printed 
` 

*   عندما يتم إدخال رقم سالب:

 `Enter a number: 
 -200 
 You entered a negative number: -200 
 This step is always printed 
` 

[جرب الشفرة بنفسك](https://repl.it/MzBq)

# **لا تتردد في طرح أي استفسارات على صفحة GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) أو [منتدى FreeCodeCamp.](https://forum.freecodecamp.org/)**

[جرب الشفرة بنفسك](https://repl.it/MzBq)

### استخدام إذا كان ... آخر إذا ... آخر سلم

إذا كان علينا اتخاذ قرارات استنادًا إلى أكثر من شرط واحد في حالة استخدام آخر. نستخدم آخر إذا كان الشرط على النحو التالي -

 `#include<iostream> 
 int main() 
 { 
    int score; 
    std::cout<<"Enter your score: \n"; 
    std::cin>>score; 
    if(score>=90) 
        std::cout<<"Top performance."; 
    else if(score<90 && score>=70) 
        std::cout<<"Good performance"; 
    else if(score<70 && score>=45) 
        std::cout<<"Average performance"; 
    else if(score<45 && score>=30) 
        std::cout<<"You can improve it."; 
   return 0; 
 } 
` 

#### انتاج |

 `Enter your score: 
 85 
 Good performance 
` 

### مثال آخر إذا كان ... آخر إذا ... آخر سلم

لنفترض أن لدينا إدخال المستخدم رقمين وسوف نعرض إذا كان أي من الرقمين أكبر من الآخر. وإذا لم يكن أي منهما أكبر من الآخر ، فنطبع العبارة "كلاهما متساويان".

في هذا scinerio سوف نحتاج إلى ... آخر إذا ... آخر بيان سلم. سيبدو البرنامج كما يلي:

 `#include<iostream> 
 using namespace std; 
 int main() 
 { 
    int number1,number2; 
    cout << "Enter first number: \n"; 
    cin >> number1; 
    cout << "Enter second number: \n"; 
    cin >> number2; 
 
    if(number1 > number2)     // Checks if the first number is greater than the second number 
    { 
        cout << "Number 1 is greater."; 
    } 
    else if(number2 > number1)    // Checks if the second number is greater than the first number 
    { 
        cout << "Number 2 is greater."; 
    } 
    else    // If both of the above cases return false, then both numbers are equal 
    { 
        cout << "Both the numbers are equal."; 
    } 
 
    return 0; 
 } 
` 

#### انتاج |

 `Enter first number: 
 85 
 Enter second number: 
 86 
 Number 2 is greater. 
` 

*   لاحظ أن البرنامج سيتحقق فقط من حالة "آخر إذا" عندما لا يكون شرط "if" الأولي مرضياً. وإذا لم يتم استيفاء أي من هذه الشروط ، يتم تنفيذ كتلة "آخر" آخر والتي تطبع البيان: "كلا الأرقام متساوية".
    
*   حجم إذا كان ... آخر إذا ... قد يختلف السلم الآخر اعتمادًا على المشكلة التي يحاول البرنامج حلها وعدد الشروط التي تحتاج إلى التحقق منها.
    

**حظا سعيدا لكم جميعا**

**الترميز سعيدة! :)**

**لا تتردد في طرح أي استفسارات على صفحة GitHub [في freeCodeCamp.org](https://forum.freecodecamp.org/) أو [منتدى freeCodeCamp.org](https://forum.freecodecamp.org/)** .