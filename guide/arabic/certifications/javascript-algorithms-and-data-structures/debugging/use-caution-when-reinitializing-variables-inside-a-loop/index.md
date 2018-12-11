---
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: استخدام الحذر عند Reinitializing متغيرات داخل حلقة
---
## استخدام الحذر عند Reinitializing متغيرات داخل حلقة

*   يجب حل هذا التحدي من خلال إعادة تعريف نطاق `row[]` .
*   فيما يلي مثال على المصفوفة المطلوبة.

 `[ 
 [0][0], 
 [0][0], 
 [0][0] 
 ] 
` 

*   ومع ذلك ، فإن المصفوفة الحالية - الموضحة أدناه - بعيدة عن المصفوفة المرغوبة

 `[ 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0] 
 ] 
` 

*   يحدث هذا الخطأ بسبب `row[]` صف يتم الإعلان عنه كمتغير عمومي خارج الحلقة المتداخلة.
*   ومع ذلك ، لملء المصفوفة بشكل صحيح يجب إعادة تعيين `row[]` بعد كل تكرار للحلقة الخارجية.

## حل

 `function zeroArray(m, n) { 
  let newArray = []; 
  for (let i = 0; i < m; i++) { 
     let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */ 
    for (let j = 0; j < n; j++) { 
 
      row.push(0); 
    } 
    newArray.push(row); 
  } 
  return newArray; 
 } 
 let matrix = zeroArray(3, 2); 
 console.log(matrix); 
`