---
title: Arrow Functions
localeTitle: وظائف السهم
---
## وظائف السهم

لقد تغيرت الوظائف في ES6 قليلاً. أعني بناء الجملة.

 `// Old Syntax 
 function oldOne() { 
 console.log("Hello World..!"); 
 } 
 
 // New Syntax 
 var newOne = () => { 
 console.log("Hello World..!"); 
 } 
` 

قد يكون بناء الجملة الجديد مربكًا بعض الشيء. ولكن سأحاول شرح بناء الجملة. هناك جزئين من بناء الجملة.

1.  var newOne = ()
2.  \=> {}

الجزء الأول هو مجرد إعلان متغير وتعيين الدالة (أي) () إليها. يقول فقط المتغير هو في الواقع وظيفة.

ثم الجزء الثاني هو إعلان الجزء الأساسي من الوظيفة. جزء السهم مع الأقواس المتعرجة يحدد جزء الجسم.

مثال آخر مع المعلمات:

 `let NewOneWithParameters = (a, b) => { 
 console.log(a+b); // 30 
 } 
 NewOneWithParameters(10, 20); 
` 

تعتبر الأقواس اختيارية عندما يكون هناك اسم معلمة واحد فقط:

 `let newOneWithOneParam = a => { 
 console.log(a); 
 } 
` 

ميزة لا تصدق من وظيفة الأسهم هو أنه لا يمكنك إعادة وظيفة السهم. سوف يطلق عليه دائما مع السياق الذي تم تعريفه فيه. مجرد استخدام وظيفة عادية.

 `// Old Syntax 
 axios.get(url).then(function(response) { 
  this.data = response.data; 
 }).bind(this); 
 
 // New Syntax 
 axios.get(url).then(response => { 
  this.data = response.data; 
 }); 
` 

لا أعتقد أنني بحاجة إلى تقديم تفسير لهذا. انها بسيطة.