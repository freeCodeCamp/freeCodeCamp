---
title: Ternary Operator
localeTitle: مشغل ثلاثي
---
يستبدل مشغل Ternary كتلة `if` / `else` بتنسيق مكثف. ما يلي هو الشكل العام للمشغل الثلاثي.

 `condition ? expr1 : expr2 
` 

## وصف

إذا كان الشرط صحيحاً ، يقوم المشغل بحل قيمة expr1 ؛ خلاف ذلك ، فإنه يحل قيمة expr2.

على سبيل المثال ، لعرض رسالة مختلفة بناءً على قيمة متغير isMember ، يمكنك استخدام هذا البيان:

 `let isMember = true; 
 
 let message = isMember ? 'Welcome Back!' : 'You need to login'; // 'Welcome Back' 
` 

ومن الطرق المفيدة الأخرى لاستخدام المشغل الثلاثي هو حثه على تنفيذ وظيفة أو طريقة بشكل مشروط

 `    function memberOpen(){ 
        console.log("open"); 
    } 
 
    function memberClose(){ 
        console.log("close"); 
    } 
 
    let isMember = true; 
 
    (isMember) ? memberOpen() : memberClose(); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/M8Ge/1)

## وظائف التشغيل مع المشغل الثلاثي

من الممكن أيضًا تشغيل الوظائف باستخدام مشغل الثلاثي ، والذي قد يكون مفيدًا وقابلًا للقراءة في بعض الأحيان. ومع ذلك ، استخدمه بعناية ، لأنه من الصعب تصحيحه.

 `    const runFirst = true; 
    runFirst ? first() : second(); 
` 

## تسلسل باستخدام مشغل الثلاثي

يمكنك أيضًا ربط مشغل ثلاثي إلى أجل غير مسمى ، بطريقة مماثلة لاستخدام `else if's` قبل آخر غيره من كتلة `if` / `else` . في كل مرة يتم استخدام القولون لتوضيح الجزء الآخر من المشغل الثلاثي ، يمكن تحديد حالة جديدة حتى يتم استخدام شرط الإنهاء النهائي.

 `    function displayNum(num) { 
     return  num === 3 ? 'number is 3' : num === 2 ? 'number is 2' : num === 1 ? 'number is 1 ' : 'number is not in range'; 
    } 
` 

هذه الطريقة تحتاج إلى استخدامها في الأماكن الصحيحة ولكن ، كما هو الحال مع عدة `else if's` يمكن أن يؤدي في بعض الأحيان إلى قراءة المزيد من التعليمات البرمجية باستخدام عبارة التبديل.

**اقرأ المزيد:** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)