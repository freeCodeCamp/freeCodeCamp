---
title: Return Statement
localeTitle: بيان العودة
---
## المقدمة

عندما يتم استدعاء بيان **الإرجاع** في وظيفة ، يتم إيقاف تنفيذ هذه الوظيفة. إذا تم تحديدها ، يتم إرجاع قيمة محددة إلى المتصل الوظيفي. إذا تم حذف التعبير ، يتم إرجاع غير `undefined` بدلاً من ذلك.

 `    return expression; 
` 

يمكن أن تعود الوظائف:

*   القيم الأولية (السلسلة ، العدد ، القيمة المنطقية ، وما إلى ذلك)
*   أنواع الكائنات (المصفوفات ، الكائنات ، الوظائف ، إلخ)

عدم إرجاع أي شيء على سطر جديد بدون استخدام الأقواس. هذا هو quirk JavaScript وستكون النتيجة غير محددة. حاول دائمًا استخدام الأقواس عند إرجاع شيء ما على أسطر متعددة.

 `function foo() { 
    return 
      1; 
 } 
 
 function boo() { 
    return ( 
      1 
    ); 
 } 
 
 foo(); --> undefined 
 boo(); --> 1 
` 

## أمثلة

تقوم الدالة التالية بإرجاع مربع الوسيطة الخاصة به **x** حيث يمثل **x** رقمًا.

 `    function square(x) { 
       return x * x; 
    } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7VT/0)

تقوم الدالة التالية بإرجاع منتج الوسيطات الخاصة به ، **arg1** و **arg2** .

 `    function myfunction(arg1, arg2){ 
       var r; 
       r = arg1 * arg2; 
       return(r); 
    } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/C7VU/0)

عندما تقوم دالة `return` قيمة sa ، يمكن تعيين القيمة لمتغير باستخدام عامل assigment ( `=` ). في المثال أدناه ، تقوم الدالة بإرجاع مربع الوسيطة. عندما يحل وظيفة أو ينتهي قيمته هي `return` قيمة أد. ثم يتم تعيين القيمة للمتغير `squared2` .

 `    function square(x) { 
        return x * x; 
    } 
 
    let squared2 = square(2); // 4 
` 

إذا لم يكن هناك بيان إقرار صريح ، بمعنى أن الدالة تفتقد الكلمة الرئيسية `return` ، فإن الدالة تقوم بإرجاع `undefined` تلقائيًا. في المثال التالي ، تفتقد الدالة `square` الكلمة الرئيسية التي تم `return` . عندما يتم تعيين نتيجة استدعاء الوظيفة إلى متغير ، يكون للمتغير قيمة `undefined` .

 `    function square(x) { 
        let y = x * x; 
    } 
 
    let squared2 = square(2); // undefined 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/M8BE)

#### معلومات اكثر:

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

[رابط MSDN](https://msdn.microsoft.com/en-us/library/22a685h9.aspx)