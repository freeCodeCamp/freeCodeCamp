---
title: Let and Const
localeTitle: واسمحوا Const
---
## سمح

دعونا مماثلة ل var ولكن دعونا لها نطاق. دعونا لا يمكن الوصول إليها إلا في مستوى الكتلة يتم تعريفها.

 `if (true) { 
 let a = 40; 
 console.log(a); //40 
 } 
 console.log(a); // undefined 
` 

في المثال أعلاه ، يتم تعريف المتغير "a" داخل عبارة If ، وبالتالي لا يمكن الوصول إليه خارج الدالة.

مثال آخر:

 `let a = 50; 
 let b = 100; 
 if (true) { 
 let a = 60; 
 var c = 10; 
 console.log(a/c); // 6 
 console.log(b/c); // 10 
 } 
 console.log(c); // 10 
 console.log(a); // 50 
` 

## CONST

يتم استخدام Const لتعيين قيمة ثابتة للمتغير. ولا يمكن تغيير القيمة. انها ثابتة.

 `const a = 50; 
 a = 60; // shows error. You cannot change the value of const. 
 const b = "Constant variable"; 
 b = "Assigning new value"; // shows error. 
` 

فكر في مثال آخر.

 `const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go']; 
 LANGUAGES = "Javascript"; // shows error. 
 LANGUAGES.push('Java'); // Works fine. 
 console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java'] 
` 

قد يكون هذا مربكًا قليلاً.

النظر في هذا الطريق. عندما تحدد متغير const ، تشير Javascript إلى عنوان القيمة إلى المتغير. في مثالنا ، يشير المتغير 'LANGUAGES' بالفعل إلى الذاكرة المخصصة للصفيف. لذلك لا يمكنك تغيير المتغير للإشارة إلى بعض مواقع الذاكرة الأخرى لاحقًا. طوال البرنامج يشير فقط إلى الصفيف.