---
title: String Type
localeTitle: نوع السلسلة
---
# نوع السلسلة

سلاسل يمكن أن تكون مكتوبة مع `''` علامات الاقتباس المفردة أو `""` علامات اقتباس مزدوجة. كن متسقًا مع شفرتك واختر نمطًا.

 `let dog: string = 'Fido'; 
 let activity: string = "Playing Outside"; 
` 

يمكن كتابة السلاسل باستخدام حرفية القالب:

 ``let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`; 
`` 

## أساليب مدمجة

في نوع Typescript ، يمكنك استخدام بعض الوظائف المضمنة. كل نوع لديه طرق مشتركة وفريدة من نوعها. أدناه يمكنك أن تقرأ عن أكثر استخدامات من أساليب نوع السلسلة.

### انقسام ("فاصل" ، حد)

مع وظيفة الانقسام ، يمكنك تقسيم السلسلة الخاصة بك عند فاصل محدد. يمكنك تعيين رقم حد ، وهذا يعني عدد الانقسامات التي يتعين عليها فعلها. إرجاع السلسلة splitted في نوع صفيف.

 `let names: string = 'Sarah,Lily,John,Paula,Harvey'; 
 let array: string[] = names.split(','); 
 //array = ['Sarah','Lily','John','Paula','Harvey'] 
 let array2: string[] = names.split(',',2); 
 //array2 = ['Sarah','Lily'] 
` 

### SUBSTR (startAt، طول)

تعود هذه الطريقة بسلسلة فرعية ، والتي `startAt` عند حرف `startAt` من السلسلة الأصلية ، ويكون طولها `length` .

 `let names: string = 'Harvey Specter'; 
 let substr: string = names.substr(3,10); 
 //substr = 'rvey Spect' 
` 

### فرعية (startAt، endAt)

تشبه هذه الطريقة substr () ، ولكن لها معلمات مختلفة. المعلمة الثانية هي أيضًا فهرس حول السلسلة الأصلية ، وليس رقم طول.

 `let names: string = 'Harvey Specter'; 
 let substring: string = names.substring(3,10); 
 //substring = 'rvey Spe' 
` 

[المزيد من الطرق والوصف في TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)