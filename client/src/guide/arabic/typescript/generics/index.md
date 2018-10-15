---
title: Generics
localeTitle: الأدوية
---
## الأدوية

يمكن للمطورين استخدام `Generics` لتحديد قيود النوع للفئات وأعضاء المثيلات وأعضاء ثابتة والوظائف.

### ماذا تفعل الأجيال؟

وبشكل أساسي ، فإنها تعمل كعناصر نائبة للأنواع بحيث يمكن استخدام مكون في أماكن متعددة عبر تطبيقك من خلال استيعاب أنواع مختلفة.

### ما هي مشكلة حل Generics؟

لنفترض أنك تريد التأكد من أن قيم الإدخال والإرجاع الخاصة بالوظيفة من نفس النوع ، وهذا هو المكان الذي تأتي فيه الأدوية.

##### المهام

 `function printMessage(arg: any): any { 
  return arg; 
 } 
 
 // typescript won't complain because the argument type and return type aren't being typed properly 
 const myMessage: string = printMessage(1); 
` 

كما ترى من أعلاه ، فإن تمرير `any` نوع من الوسيطة في الدالة ، بالإضافة إلى نوع الإرجاع ، لا يعد مثاليًا حيث يتم فقد معلومات النوع في العملية.

 `// updated example 
 function printMessage<T>(arg: T): T { 
  return arg; 
 } 
 
 // typescript complains because the variable type and the return type of the function don't match 
 const myMessage: string = printMessage(1); 
 
 // resolve the issue by making sure both types match each other 
 const myMessage: number = printMessage(1); 
` 

إن تضمين `<T>` مع الدالة يخبر TypeScript أنه عام ، وأن تمرير ذلك كمرجع سيجعل TypeScript يعلم أن القيم المرتبطة به من نفس النوع.

##### الطبقات

 `class Person { 
  fullName: string; 
 
  constructor(fullName: string) { 
    this.fullName = fullName; 
  } 
 
  getFullName() { 
    return 'My name is ' + this.fullName; 
  } 
 } 
 
 class Guest extends Person {}; 
 
 let guest = new Guest('abc'); 
 
 function getUser<T>(user: T): T { 
  return user; 
 } 
 
 // foo will be of type 'guest' because it's being passed in as the argument 
 const foo = getUser(guest); 
`