---
title: Array.prototype.splice
localeTitle: Array.prototype.splice
---
## Array.prototype.splice

تشبه طريقة لصق [Array.prototype.slice](https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice) ، ولكن على عكس `slice()` فإنه يغير المصفوفة التي يطلق عليها. كما يختلف في أنه يمكن استخدامه لإضافة قيم إلى صفيف وكذلك إزالتها.

### المعلمات

`splice()` يمكن أن يأخذ واحد أو أكثر

#### لصق (بدء)

إذا تم تضمين معلمة واحدة فقط ، فسيقوم `splice(start)` بإزالة كل عناصر الصفيف من `start` إلى نهاية الصفيف.

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(2); 
 // exampleArray is now ['first', 'second']; 
` 

إذا كانت `start` سلبية ، فسيتم حسابها إلى الخلف من نهاية الصفيف.

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(-1); 
 // exampleArray is now ['first', 'second', 'third']; 
` 

#### لصق (ابدأ ، deleteCount)

إذا تم تضمين معلمة ثانية `splice(start, deleteCount)` فسيؤدي `splice(start, deleteCount)` إلى إزالة عناصر `deleteCount` من الصفيف ، بدءًا من `start` .

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth']; 
` 

#### لصق (ابدأ ، deleteCount ، newElement1 ، newElement2 ، ...)

إذا تم تضمين أكثر من معلمتين ، فستكون المعلمات الإضافية عناصر جديدة تتم إضافتها إلى الصفيف. سيبدأ موقع هذه العناصر المضافة في `start` .

يمكن إضافة العناصر دون إزالة أي عناصر بتمرير `0` كمعامل ثان.

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 0, 'new 1', 'new 2'); 
 // exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth'] 
` 

يمكن أيضا استبدال العناصر.

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2, 'new second', 'new third'); 
 // exampleArray is now ['first', 'new second', 'new third', 'fourth'] 
` 

### قيمة الإرجاع

بالإضافة إلى تغيير الصفيف الذي يتم استدعاؤه ، يقوم `splice()` أيضًا بإرجاع صفيف يحتوي على القيم التي تمت إزالتها. هذه طريقة لقطع صفيف إلى صفيفين مختلفين.

 `let exampleArray = ['first', 'second', 'third', 'fourth']; 
 let newArray = exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth'] 
 // newArray is ['second', 'third'] 
` 

#### معلومات اكثر:

[MDN - Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)