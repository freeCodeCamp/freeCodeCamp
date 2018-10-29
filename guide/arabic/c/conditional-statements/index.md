---
title: Conditional Statements
localeTitle: عبارات شرطية
---# البيانات الشرطية في C

تُعرف أيضًا العبارات الشرطية باسم العبارات المتفرعة. هم ما يسمى ذلك لأن البرنامج يختار اتباع فرع واحد أو آخر.

## 1\. إذا كان البيان

هذا هو الشكل الأكثر بساطة من البيانات الشرطية. يتكون من تعبيرات منطقية متبوعة ببيان واحد أو أكثر. إذا تم تقييم التعبير المنطقي إلى **true** ، فسيتم تنفيذ كتلة الكود داخل العبارة "if". إذا تم تقييم التعبير المنطقي إلى **false** ، فسيتم تنفيذ أول مجموعة من التعليمات البرمجية بعد نهاية العبارة "if" (بعد قوس التجميع الختامي).

**_تفترض_** لغة البرمجة C **_أي قيم غير صفرية وغير خالية كصيغة_** وإذا كانت **_إما صفرية أو خالية ، فيتم افتراضها كقيمة خاطئة_** .

#### بناء الجملة

 `if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
` 

#### مثال

 `int a = 100; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
` 

#### نتيجة

`a is less than 200`

## 2\. إذا ... بيان آخر

إذا تم تقييم التعبير المنطقي إلى **true** ، فسيتم تنفيذ كتلة if ، وإلا سيتم تنفيذ حظر آخر.

#### بناء الجملة

 `if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
 else 
 { 
    //Block of Statements executed when boolean_expression is false 
 } 
` 

#### مثال

 `int a = 300; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
 else 
 { 
    printf("a is more than 200\n"); 
 } 
` 

#### نتيجة

`a is more than 200`

## 3\. إذا ... آخر إذا ... بيان آخر

عند استخدام ... إذا كانت هناك بيانات أخرى ، فإن هناك بعض النقاط التي يجب وضعها في الاعتبار -

*   **إذا كان** يمكن أن يكون **صفر أو آخر** ، **ويجب أن يأتي بعد أي شيء آخر** .
*   **إذا كان** يمكن أن يكون **صفر إلى كثير آخر إذا كان** **يجب أن يأتي قبل الآخرين** .
*   مرة واحدة في **حالة** نجاح أي شيء آخر ، سيتم اختبار أي من بقية الآخرين إذا كان وإلا.

#### بناء الجملة

 `if(boolean_expression_1) 
 { 
    //Block of Statements executed when boolean_expression_1 is true 
 } 
 else if(boolean_expression_2) 
 { 
    //Block of Statements executed when boolean_expression_1 is false and boolean_expression_2 is true 
 } 
 else if(boolean_expression_3) 
 { 
    //Block of Statements executed when both boolean_expression_1 and boolean_expression_2 are false and boolean_expression_3 is true 
 } 
 else 
 { 
    //Block of Statements executed when all boolean_expression_1, boolean_expression_2 and boolean_expression_3 are false 
 } 
` 

#### مثال

 `int a = 300; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
 } 
 else if(a == 200) 
 { 
    printf("a is equal to 200\n"); 
 } 
 else if(a == 300) 
 { 
    printf("a is equal to 300\n"); 
 } 
 else 
 { 
    printf("a is more than 300\n"); 
 } 
` 

#### نتيجة

`a is equal to 300`

## 4\. متداخلة إذا كان البيان

دائمًا ما يكون قانونيًا في برمجة C لتضمين عبارات if-else ، مما يعني أنه يمكنك استخدام عبارة if أو إذا كانت عبارة داخل عبارة أخرى ، أو إذا كان عبارة (عبارات).

#### بناء الجملة

 `if(boolean_expression_1) 
 { 
    //Executed when boolean_expression_1 is true 
    if(boolean_expression_2) 
    { 
      //Executed when both boolean_expression_1 and boolean_expression_2 are true 
    } 
 } 
` 

#### مثال

 `int a = 100; 
 int b = 200; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
    if(b == 200) 
    { 
        printf("b is equal to 200\n"); 
    } 
 } 
` 

#### نتيجة

 `a is equal to 100 
 b is equal to 200 
` 

## 5\. تبديل بيان الحالة

غالبًا ما يكون بيان التبديل أسرع من المتداخلة إذا كان… else (ليس دائمًا). أيضا ، بناء جملة العبارة التبديل هو أنظف وسهلة الفهم.

### بناء جملة حالة التبديل

 `switch (n) 
 { 
    case constant1: 
        // code to be executed if n is equal to constant1; 
        break; 
 
    case constant2: 
        // code to be executed if n is equal to constant2; 
        break; 
        . 
        . 
        . 
    default: 
        // code to be executed if n doesn't match any constant 
 } 
` 

عندما يتم العثور على ثابت لحالة يتوافق مع تعبير التبديل ، يمرر التحكم في البرنامج إلى كتلة التعليمة البرمجية المرتبطة بهذه الحالة.

في pseudocode أعلاه ، افترض أن قيمة n تساوي constant2. سيقوم المحول البرمجي بتنفيذ كتلة التعليمات البرمجية المرتبطة مع بيان الحالة حتى نهاية كتلة التبديل ، أو حتى يتم مصادفة بيان الفاصل.

يُستخدم بيان الإيقاف لمنع تشغيل التعليمة البرمجية في الحالة التالية.

### مثال:

 `// Program to create a simple calculator 
 // Performs addition, subtraction, multiplication or division depending the input from user 
 
 # include <stdio.h> 
 
 int main() 
 { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch(operator) 
    { 
        case '+': 
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber); 
            break; 
 
        case '-': 
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber); 
            break; 
 
        case '*': 
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber); 
            break; 
 
        case '/': 
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/secondNumber); 
            break; 
 
        // operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
` 

### انتاج |

 `Enter an operator (+, -, *,): - 
 Enter two operands: 32.5 
 12.4 
 32.5 - 12.4 = 20.1 
` 

يتم تخزين عامل التشغيل '-' الذي تم إدخاله من قبل المستخدم في متغير المشغل. ويتم تخزين اثنين من المعاملات 32.5 و 12.4 في المتغيرات firstNumber و secondNumber على التوالي.

ثم ، السيطرة على البرنامج يقفز إلى

 `printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
` 

وأخيرًا ، ينهي بيان الاستراحة عبارة التبديل.

إذا لم يتم استخدام كشف الفاصل ، يتم تنفيذ جميع الحالات بعد الحالة الصحيحة.