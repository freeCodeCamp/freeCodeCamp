---
title: Array.prototype.push
localeTitle: Array.prototype.push
---
تُستخدم طريقة `push()` لإضافة عنصر جديد أو أكثر إلى نهاية صفيف. كما تقوم بإرجاع طول الصفيف الجديد.

### بناء الجملة

 `arr.push([element1[, ...[, elementN]]]) 
` 

### المعلمات

*   **elementN** العناصر المطلوب إضافتها إلى نهاية الصفيف.

### قيمة الإرجاع

الطول الجديد للمصفوفة التي تم استدعاء الطريقة بها.

## وصف

و `push()` وطريقة _دفع_ العناصر إلى نهاية صفيف. يمكن أن يأخذ صفر أو أكثر من الحجج. إذا لم يتم تقديم أي حجج ، ستقوم ببساطة بإرجاع طول الصفيف الحالي. إذا تم توفير وسيطة واحدة أو أكثر ، فستضيف هذه الوسيطات إلى المصفوفة بالترتيب الذي تتم كتابته به.

تقوم هذه الطريقة أيضًا بإرجاع طول الصفيف الجديد بعد دفع العنصر (العناصر) إليه.

## مثال:

 `var myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran']; 
` 

افترض أن لديك مجموعة من أطفال House Stark من Game of Thrones. ومع ذلك ، فإن أحد الأعضاء ، **آريا** ، مفقود. معرفة الرمز أعلاه ، يمكنك إضافتها بتعيين `'Arya'` إلى الصفيف في الفهرس بعد الفهرس الأخير مثل:

 `myStarkFamily[4] = 'Arya'; 
` 

المشكلة مع هذا الحل هو أنه لا يمكن معالجة الحالات العامة. إذا كنت لا تعرف مسبقا ما طول الصفيف ، لا يمكنك إضافة عناصر جديدة بهذه الطريقة. هذا هو ما `push()` ل. لا نحتاج إلى معرفة طول المصفوفة. نحن نضيف فقط عنصرنا في نهاية الصفيف.

 `myStarkFamily.push('Arya'); 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya'] 
 
 var newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon 
 console.log(newLength);  // 6 
 console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon'] 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)