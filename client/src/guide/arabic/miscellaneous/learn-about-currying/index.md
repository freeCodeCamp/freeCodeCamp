---
title: Learn About Currying
localeTitle: تعلم عن الركوع
---
إنه فعل أخذ دالة بأكثر من وسيطة واحدة وتحويلها إلى دالة مكافئة تأخذ وسيطة واحدة. يعتمد هذا على إعادة الوظائف المطبقة جزئيًا.

**أصلي**

 `function add (verb, a, b) { 
   return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
 } 
 
 add('sum', 5, '6') 
   //=> 'The sum of 5 and 6 is 11' 
` 

**النسخة الكاريضة**

 `function addCurried (verb) { 
    return function (a) { 
      return function (b) { 
        return "The " + verb + " of " + a + ' and ' + b + ' is ' + (a + b) 
      } 
    } 
  } 
 
  addCurried('total')(6)(5) 
   //=> 'The total of 6 and 5 is 11' 
` 

إن التمارين باليد ستكون جهدًا مدهشًا ، لكن علاقتها الوثيقة بالتطبيق الجزئي تعني أنه إذا تركت تطبيقًا جزئيًا ، فيمكنك أن تستمد من الكاري. أو إذا كان لديك منحنى ، يمكنك استخلاص تطبيق جزئي الأيسر.

هذه وظيفة تقوم بأداء أي وظيفة مع وسيطين:

 `  function curryTwo (fn) { 
    return function (x) { 
      return callFirst(fn, x) 
    } 
  } 
 
  function add2 (a, b) { return a + b } 
 
  curryTwo(add2)(5)(6) 
   //=> 11 
`