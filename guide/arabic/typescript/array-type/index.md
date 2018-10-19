---
title: Array Type
localeTitle: نوع المصفوفة
---
# نوع المصفوفة

لديك حق الوصول الكامل إلى صفائف في TypeScript. يمكن كتابة الصفائف بطريقتين مختلفتين في TypeScript:

**نوع البيانات\[\]**  
DataType متبوعة بأقواس مربعة `[]`

 `let names: string[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
` 

**مجموعة <نوع البيانات>**  
`Array` متبوعة <DataType>

 `let names: Array<string> = ['Javier', 'Emma', 'John', 'Sophia', 'Emma']; 
` 

## أساليب مدمجة

في نوع الصفيف في Typescript ، يمكنك استخدام بعض الوظائف المضمنة. كل نوع لديه طرق مشتركة وفريدة من نوعها. أدناه يمكنك أن تقرأ عن أكثر استخدامات من أساليب نوع الصفيف. في المثال ، سنستخدم تصريح الصفيف من الأعلى.

### البوب ​​()

يزيل العنصر الأخير من مصفوفة ويعود إليه.

 `var element = names.pop(); 
 //element = Emma 
 var element2 = names.pop(); 
 //element2 = Sophia 
` 

### إدفع()

يضيف عنصرًا واحدًا أو أكثر إلى نهاية الصفيف ويعود بالطول الجديد للمصفوفة.

 `var length = names.push('Tobias'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias'] 
 // lenght = 6 
 var length2 = names.push('Jack','Lily'); 
 // names[] = ['Javier', 'Emma', 'John', 'Sophia', 'Emma', 'Tobias','Jack','Lily'] 
 // lenght2 = 8 
` 

### عكس()

عكس ترتيب الصفيف وإرجاعها

 `var reverseNames = names.reverse(); 
 //reverseNames = ['Emma','Sophia','John','Emma','Javier'] 
` 

[المزيد من الطرق والوصف في TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)