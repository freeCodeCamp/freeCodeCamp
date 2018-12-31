---
title: Learn About Functional Programming
localeTitle: تعرف على برمجة وظيفية
---
## تعرف على برمجة وظيفية

تحتوي الدالة على إدخال أو معلمة `const myFunc = (input) => { ...code to execute... }` . في هذه الحالة ، الإدخال هو عدد أكواب الشاي المراد إنشاؤها.  

### طريقة

يجب تغيير سطر واحد فقط من رمز لتمرير هذا challenege. يجب استدعاء الدالة `getTea()` وتخزينها في متغير `tea4TeamFCC` . تأكد من قراءة وظيفة `getTea()` وفهم ما يفعله بالضبط. تأخذ الدالة في متغير واحد - `numOfCups` . يتم `teaCups[]` صفيف `teaCups[]` لأول مرة ويتم إعداد حلقة for up لأعداد عدد الكؤوس التي تم تمريرها إلى الدالة. ثم يتم دفع كوب جديد من الشاي إلى الصفيف من خلال كل تكرار للحلقة.

وبالتالي نتج عنه صفيف مليء `getTea()` الشاي التي تم تمريرها في الأصل إلى وظيفة `getTea()` .

### حل

 `/** 
 * A long process to prepare tea. 
 * @return {string} A cup of tea. 
 **/ 
 const prepareTea = () => 'greenTea'; 
 
 /** 
 * Get given number of cups of tea. 
 * @param {number} numOfCups Number of required cups of tea. 
 * @return {Array<string>} Given amount of tea cups. 
 **/ 
 const getTea = (numOfCups) => { 
  const teaCups = []; 
 
  for(let cups = 1; cups <= numOfCups; cups += 1) { 
    const teaCup = prepareTea(); 
    teaCups.push(teaCup); 
  } 
 
  return teaCups; 
 }; 
 
 // Add your code below this line 
 
 const tea4TeamFCC = getTea(40); // :( 
 
 // Add your code above this line 
 
 console.log(tea4TeamFCC); 
`