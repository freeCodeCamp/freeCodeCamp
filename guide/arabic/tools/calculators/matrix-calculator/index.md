---
title: Matrix Calculator
localeTitle: حاسبة المصفوفة
---
## حاسبة المصفوفة

يتم استخدام حاسبة المصفوفة لتنفيذ الجمع أو الطرح أو الضرب. بالإضافة إلى ذلك ، يمكن إجراء عمليات خاصة بالمصفوفات ، مثل تحويل المصفوفة ، أو الانقلاب أو تحديد رتبة المصفوفة.

تم تصميم Matrix من الصفوف والأعمدة (nxm). غالباً ما تضع العمليات التي تتم على المصفوفات بعض القيود على أبعاد المصفوفة.

##### إضافة:

تتم الإضافة بإضافة قيم لمصفوفتين من **نفس** الأبعاد. والنتيجة هي صفيف من نفس الأبعاد كالأبعاد الأصلية.

 `// matrices a and b are represented by an array of arrays (rows of columns) 
 function addMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] + b[i][j]; 
    } 
  } 
 
  return result; 
 } 
` 

##### الطرح:

يتم الطرح عن طريق طرح قيم المصفوفتين من **نفس** الأبعاد. والنتيجة هي صفيف من نفس الأبعاد كالأبعاد الأصلية.

 `// matrices a and b are represented by an array of arrays (rows of columns) 
 function subtractMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] - b[i][j]; 
    } 
  } 
 
  return result; 
 } 
` 

##### عمليه الضرب:

يمكن إجراء الضرب إما بضرب مصفوفة بواسطة عددي ، أو بضرب المصفوفات. إذا ضربنا مصفوفتين ، فيمكن تنفيذه فقط إذا كان عدد الأعمدة في المصفوفة اليسرى مساوياً لعدد الصفوف في المصفوفة اليمنى.

 `// matrices a and b are represented by an array of arrays (rows of columns) 
 function multiplyMatrices(a, b) { 
  // we might want to add here constraints for the dimensions 
  //let's assume that b has to be either a scalar or an array 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || ((!Array.isArray(b) || !Array.isArray(b[0])) && isNaN(b))) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  if (!isNaN(b)) { 
    for (let i = 0; i < a.length; i++) { 
      for (let j = 0; j < a[i].length; j++) { 
        a[i][j] = a[i][j] * b; 
      } 
    } 
    return a; 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      let sum = 0; 
      for (let k = 0; k < b[i].length; k++) { 
        sum += a[i][k] * b[k][j]; 
      } 
      result[i][j] = sum; 
    } 
  } 
 
  return result; 
 } 
` 

#### معلومات اكثر:

https://en.wikipedia.org/wiki/Matrix\_(mathematics)