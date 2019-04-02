---
title: Destructuring Assignment
localeTitle: مهمة التدمير
---
## مهمة التدمير

بنية تركيب Destructuring عبارة عن تعبير Javascript يجعل من الممكن فك حزم القيم أو الخصائص من المصفوفات أو الكائنات.

لنفترض أن لديك صفيفًا يحتوي على الاسم الأول واسم العائلة كقيمتين ، ولكنك ترغب في إعادة تعيين هذه القيم إلى شيء أكثر وصفية. يمكنك استخدام Destructuring لإنجاز هذا.

**ES5 Destructuring**

 `var fullName = ["John", "Smith"]; 
 var firstName = fullName[0]; 
 var lastName = fullName[1]; 
 
 console.log(firstName, lastName); // John Smith 
` 

**ES6 Destructuring**

 `const fullName = ["John", "Smith"]; 
 const [firstName, lastName] = fullName; 
 
 console.log(firstName, lastName); // John Smith 
` 

توضح الأمثلة المذكورة أعلاه فائدة استخدام تعيين Destructuring ES6.

يمكنك أيضًا استخدام Destructuring على الكائنات باستخدام بناء جملة مشابه

 `const fullName = { first: "John", last: "Smith"}; 
 const {first, last} = fullName; 
 
 console.log(first, last); // John Smith 
` 

يختلف تعيين Destructuring Object (كائن Destructuring) عن بعض الشيء لأن الكائن يجب أن يكون له خصائص بالأسماء التي تقوم بتعيينها. لذلك ، لن يعمل الرمز أدناه على النحو المنشود.

 `const fullName = { first: "John", last: "Smith"}; 
 const {firstName, lastName} = fullName; 
 
 console.log(firstName, lastName); // undefined undefined 
` 

لا يزال بإمكانك تحقيق النتيجة المرجوة باستخدام بناء الجملة التالي.

 `const obj = {propertyName: value} 
 {propertyName: desiredVariableName} = obj 
` 

مثالنا السابق سوف يعاد كتابته على النحو التالي:

 `const fullName = { first: "John", last: "Smith"}; 
 const {first: firstName, last: lastName} = fullName; 
 
 console.log(firstName, lastName); // John Smith 
`