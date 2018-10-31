---
title: Object Freeze
localeTitle: تجميد الكائن
---
## تجميد الكائن

الأسلوب `Object.freeze()` بتجميد كائن. سوف _يمنعك_ كائن مجمّد من:

*   إضافة خصائص جديدة إليه
*   إزالة المساهمات الموجودة منه
*   تغيير التعداد أو قابلية التهيئة أو قابلية خصائصه الحالية

### بناء الجملة

 `Object.freeze(obj) 
` 

### المعلمات

`obj`

*   الهدف من التجميد.

### عائدات

الكائن المجمدة.

### ملاحظة مهمة

ستؤدي محاولة إضافة أو إزالة أو تعديل خصائص كائن مجمّد إلى فشل. هذا الفشل إما أن يكون صامتًا أو يرمي `TypeError` (إذا تم تمكين وضع Strict). بالإضافة إلى ذلك ، `Object.freeze()` هي عملية ضحلة. هذا يعني أن الكائن المتداخل ، الكائن المجمّد ، قابل للتعديل.

### مثال

 `// Create your object 
 let person = { 
  name: 'Johnny', 
  age: 23, 
  guild: 'Army of Darkness', 
  hobbies: ['music', 'gaming', 'rock climbing'] 
 } 
 
 // Modify your object 
 person.name = 'John' 
 person.age = 24 
 person.hobbies.splice(1,1) 
 delete person.guild 
 
 // Verify your object has been modified 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // Freeze your object 
 Object.freeze(person) 
 
 // Verify that your object can no longer be modified 
 person.name = 'Johnny' // fails silently 
 person.age = 23 // fails silently 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // The freeze is "shallow" and nested objects (including arrays) can still be modified 
 person.hobbies.push('basketball') 
 consol.log(person.hobbies) // ['music', 'rock climbing', 'basketball'] 
` 

#### معلومات اكثر:

[وثائق MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)