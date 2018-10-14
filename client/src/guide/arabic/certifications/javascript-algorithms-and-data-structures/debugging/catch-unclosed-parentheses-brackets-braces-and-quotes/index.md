---
title: Catch Unclosed Parentheses, Brackets, Braces and Quotes
localeTitle: قبض على الأقواس غير المغلقة ، بين قوسين ، الأقواس والاقتباسات
---
## قبض على الأقواس غير المغلقة ، بين قوسين ، الأقواس والاقتباسات

تقلل طريقة تقليل () صفيفًا إلى قيمة واحدة. إذا لم تكن على دراية بها ، يعرض التعليمة البرمجية التالية مثالاً على استخدام الطريقة:

 `const array1 = [1, 2, 3, 4]; 
 console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10 
` 

يمكنك أيضًا تعريف الوسيطة إلى طريقة الاختزال كمتغير أو ثابت وتسليمها إلى الوظيفة ، على سبيل المثال ،

 `const array1 = [1, 2, 3, 4]; 
 const reducer = (accumulator, currentValue) => accumulator + currentValue; 
 
 // 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer));      // expected output: 10 
 
 // 5 + 1 + 2 + 3 + 4 
 console.log(array1.reduce(reducer, 5));   // expected output: 15 
` 

يمكنك رؤية وتشغيل هذا الرمز في [Array.prototype.reduce ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) .

## حل:

 ``let myArray = [1, 2, 3]; 
 let arraySum = myArray.reduce((previous, current) =>  previous + current); 
 console.log(`Sum of array values is: ${arraySum}`); 
``