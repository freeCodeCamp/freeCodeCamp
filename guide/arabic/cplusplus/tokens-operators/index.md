---
title: Operators
localeTitle: العاملين
---# العاملين :

*   يسمح لك المشغلون بإجراء عمليات على بياناتك.
*   تسمى البيانات التي يتم تشغيلها باسم _المعامل_ .
*   الأنواع المختلفة لمشغلي C ++ هي:
*   _OPERANDS_ هي البيانات التي يقوم المشغل _بتنفيذها_ بأوامر معينة.
*   المشغلين من 3 أنواع: أحادي (يعمل على 1 المعامل) ، ثنائي (يعمل على 2 معاملات) ، ثلاثي (يعمل على 3 معاملات).

### 1 مشغلات الإدخال / الإخراج -

*   تسمح لك هذه المشغلات بتوجيه الإدخال والإخراج.
    
    ## مهارة الإدخال ">>" ##
    
    يُستخدم لقراءة البيانات من الإدخال القياسي (بيان "cin").
    
    ## عامل الإخراج "<<"
    
    يستخدم لإرسال الإخراج في بيان `cout` .
    

### 2 المشغلين الحساب -

*   تتيح لك هذه الشركات إجراء العمليات الحسابية الأساسية.

1.  _يضيف_ عامل التشغيل `+` المعاملين.
    
2.  يقوم `-` المشغل _بطرح_ المعاملتين.
    
3.  يقوم المشغل `*` _بضرب_ المعاملتين.
    
4.  _يقسم_ `/` المشغل ويعطي _حاصل_ المعاملان.
    
5.  _يقسم_ عامل التشغيل `%` ويعطي _الباقي_ من المنطقتين. (أو ، بالنسبة إلى القارئ المائل رياضياً ، `a % b` هو أساسًا نتيجة "mod b"
    
    ### مثال على استخدام العوامل الحسابية:
    
    \`\` \`حزب الشعب الكمبودي
    

# تتضمن

استخدام اسم للمحطة؛

انت مين() { int a = 5؛ // المعامل الأول int b = 10؛ // المعامل الثاني

 `    cout << "+ operator " << a+b << "\n"; //Add 
    cout << "- operator " << ab << "\n"; //Subtract 
    cout << "* operator " << a*b << "\n"; //Multiply 
    cout << "/ operator " << b/a << "\n"; //Find Quotient 
    cout << "modulus operator " << b%a << "\n"; //Find remainder 
 
    return 0; 
` 

} \`\` \`

انتاج :

 `+ operator 15 
 - operator -5 
 * operator 50 
 / operator 2 
 modulus operator 0 
` 

[جرب الرمز بنفسك! :)](https://repl.it/Mge9)

### عامل الزيادة:

*   `++` يُعرف باسم عامل الزيادة. يزيد من قيمة متغير عدد صحيح بواسطة 1.

نوعان من الزيادة:

*   الزيادة الأولية تقوم أولاً بزيادة القيمة ثم تستخدمها. مثال: `int a ; ++a;`
*   زيادة البريد أولاً يستخدم المتغير ثم زيادة عليه. مثال: `int b; b++;`

### مشغل التناقص:

*   `--` يعرف باسم مشغل تناقص. يقلل من قيمة متغير عدد صحيح بواسطة 1.

نوعان من تناقص:

*   قبل decrement أولاً decrements القيمة ويستخدمها. مثال: `int a ; --a;`
*   يستخدم decrement بوست أولاً المتغير ثم تقليله. مثال: `int b; b--;`

مثال لمشغلي الزيادة والانقاص:

 `#include <iostream> 
 using namespace std; 
 
 int main() 
 { 
        int a = 3 ,b = 4; 
 
         // INCREMENT 
        cout<< "Value of int a PRE INCREMENTED : " << ++a << "\n"; 
        cout<< "Value of int b POST INCREMENTED : " << b++ << "\n"; 
        cout<< "Value of b is changed after using once : " << b << "\n"; 
 
         // DECREMENT 
        cout << "\n"; //go to next line 
        a = 10; //Assigning a new value to a 
        b = 10; //Assigning a new value to b 
        cout << "Value of int a PRE DECREMENTED : " << --a << "\n"; 
        cout << "Value of int b POST DECREMENTED : " << b-- << "\n"; 
        cout << "Value of b is changed after using once : " << b << "\n"; 
 
        return 0; 
 } 
` 

انتاج :

 `Value of int a PRE INCREMENTED : 4 
 Value of int b POST INCREMENTED : 4 
 Value of b is changed after using once : 5 
 
 Value of int a PRE DECREMENTED : 9 
 Value of int b POST DECREMENTED : 10 
 Value of b is changed after using once : 9 
` 

[جرب الرمز بنفسك! :)](https://repl.it/Mgg4/2)

### 3: العلاقات العلائقية:

*   تخبرنا عوامل التشغيل هذه العلاقة بين المعاملات 2 وإرجاع قيمة منطقية (0 أو 1). إذا كانت العلاقة `true` فإنه يؤدي إلى 1. إذا كان realtion غير صحيح فإنه ينتج 0.
    
*   المشغلين العلائقيين الستة هم:
    
    1.  أقل من `<`
    2.  أكبر من `>`
    3.  أقل من أو يساوي `<=`
    4.  أكبر من أو يساوي `>=`
    5.  يساوي `==`
    6.  لا يساوي `!=`

### 4: المشغلات المنطقية:

*   تجمع عوامل التشغيل هذه بين التعبيرات الخاصة بالعمليات المنطقية. هم انهم :

1.  منطقية AND `&&` : يتم تقييمها إلى true إذا كانت كلتا القيمتين صحيحة.
    
2.  منطقية أو `||` : تقيم إلى true إذا كانت أي قيمة صحيحة.
    
3.  منطقي لا `!` : إذا كان _التعبير_ صحيحًا ، فإن _التعبير_ هو false. هذا المشغل يعكس قيمة الحقيقة وهو مشغل وحيد.
    
    ### 5\. المشغلين الدائمين:
    
    عامل التشغيل `?:` هو المشغل الثلاثي ، أو _المشغل الشرطي_ ، لأنه يمكن استخدامه لاستبدال بيان `if else` ، أو حتى `if else if` statement. بناء الجملة:
    

`condition ? ValueIfTrue : ValueIfFalse` . هذا يوسع إلى:

 `if(condition) 
 ValueIfTrue; 
 else ValueIfFalse; 
` 

إن استدعاء القيمة `ValueIfTrue` هو أمر خاطئ قليلاً ، لأنه لا يلزم أن يكون رقمًا. شيء من هذا القبيل:

`condition ? FirstLevelTrueValue : ConditionIfFalse ? SecondLevelTrueValue : SecondLevelFalseValue` يعمل أيضًا ، ويتم تفسيره كإجراء `if else if` :

 `if(condition) 
 FirstLevelTrueValue; 
 else if(ConditionIfFalse) 
 SecondLevelTrueValue; 
 else SecondLevelFalseValue; 
` 

وبالمثل، متداخلة `if` يمكن أيضا أن تكون البيانات باستخدام مشغلي الثلاثي.

_العربة ، أنت الآن تعرف ما هي الرموز. المقالة القادمة ستكون على وشك_ _تهانينا_

**حظا سعيدا لكم جميعا**

**الترميز سعيدة! :)**

**لا تتردد في طرح أي استفسارات على صفحة GitHub [FreeCodeCamp](https://forum.freecodecamp.org/) أو [منتدى FreeCodeCamp.](https://forum.freecodecamp.org/)**