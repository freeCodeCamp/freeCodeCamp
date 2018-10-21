---
title: Basic Operations
localeTitle: العمليات الأساسية
---
# العمليات الأساسية

تدعم Java العمليات التالية على المتغيرات:

*   **الحساب** : `Subtraction (-)` `Addition (+)` ، `Subtraction (-)` ، `Multiplication (*)` ، `Division (/)` ، `Modulus (%)` ، `Increment (++)` ، `Decrement (--)` .
*   **سلسلة سلسلة** : `+` يمكن استخدامها لسلسلة سلسلة ، ولكن الطرح `-` على سلسلة ليست عملية صالحة.
*   **علائقي** : `Equal to (==)` ، `Not Equal to (!=)` ، `Greater than (>)` ، `Less than (<)` ، `Greater than or equal to (>=)` ، `Less than or equal to (<=)`
*   **Bitwise** : `Bitwise And (&)` ، `Bitwise Or (|)` ، `Bitwise XOR (^)` ، `Bitwise Compliment (~)` ، `Left shift (<<)` ، `Right Shift (>>)` ، `Zero fill right shift (>>>)`
*   **منطقي** : `Logical And (&&)` `Logical Or (||)` `Logical Not (!)`
*   **التعيين** : `=` ، `+=` ، `-=` ، `*=` ، `/=` ، `%=` ، `<<=` ، `>>=` ، `&=` ، `^=` ، `|=`
*   **الآخرين** : `Conditional/Ternary(?:)` ، `instanceof`

في حين أن معظم العمليات لا تحتاج إلى شرح ، فإن المشغل الشرطي (Ternary) يعمل كما يلي:

`expression that results in boolean output ? return this value if true : return this value if false;`

مثال: الشرط الحقيقي:

 `    int x = 10; 
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true 
` 

حالة كاذبة:

 `    int x = 25; 
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false 
` 

يتم استخدام مثيل المشغل لفحص الكتابة. يمكن استخدامه لاختبار ما إذا كان الكائن عبارة عن مثيل لفئة أو فئة فرعية أو واجهة. تنسيق عام _**مثيل** الكائن من فئة / فئة فرعية / واجهة_

هنا هو برنامج لتوضيح عامل instanecof: \`\` \`جافا الشخص obj1 = شخص جديد ()؛ الشخص obj2 = فتى جديد ()؛

 `    // As obj is of type person, it is not an 
    // instance of Boy or interface 
    System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */ 
` 

\`\` \`