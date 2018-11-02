---
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: استخدم Destructuring Assignment لتعيين متغيرات من الكائنات
---
## استخدم Destructuring Assignment لتعيين متغيرات من الكائنات

# يتطلب هذا التحدي بعض الحدس حول كائنات السلسلة في javascript.

عند إنشاء كائن سلسلة يستند إلى [النموذج الأولي السلسلة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) .

وبالتالي ، فإن لكل سلسلة خاصية طولية ؛ genericString = {length: 13}. (هذه هي الخاصية المعتمدة فقط من String.prototype.)

# إعادة تعيين خصائص باستخدام deconstruction.

 `var basicOjb = {x: 40}; 
 //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6: 
 const { x: bigX } = basicOjb; 
 consle.log(bigX) // ans = 40 
` 

ضع قيمة الخاصية الطول 'str' في len.