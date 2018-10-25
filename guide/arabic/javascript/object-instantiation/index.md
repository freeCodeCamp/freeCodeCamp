---
title: Object Instantiation
localeTitle: Instantization كائن
---
## Instantization كائن

في Javascript ومعظم اللغات الأخرى ، يحتوي الكائن على سلسلة من الخصائص ، والتي تعد زوجًا رئيسيًا ذا قيمة. هناك العديد من الخيارات المتاحة لك عندما تحتاج إلى بناء كائن.

### تهيئة متغير كائن

يمكنك إنشاء كائن بخصائص محددة مسبقًا مثل:

 `let myObject = { 
  name: "Dave", 
  age: 33 
 } 
` 

### خلق كائن فارغ

يؤدي هذا إلى إنشاء كائن فارغ داخل متغير myObject الخاص بنا:

 `let myObject = new Object(); 
` 

عندما ترغب في إضافة خصائص إلى الكائن الخاص بك ، يمكنك ببساطة استخدام إما تدوين نقطي أو تدوين قوس مع اسم الخاصية الذي تختاره:

 `myObject.name = "Johnny Mnemonic" 
 myObject["age"] = 55 
` 

### باستخدام وظيفة منشئ

يمكنك تعريف دالة منشئ يمكنك استخدامها لإنشاء الكائنات الخاصة بك:

 `function Kitten(name, cute, color) { 
  this.name = name, 
  this.cute = cute, 
  this.color = color 
 } 
` 

يمكنك تعريف متغير يحتوي على إنشاء مثيل لهذا الكائن عن طريق استدعاء دالة منشئ:

 `let myKitten = new Kitten("Nibbles", true, "white") 
` 

### Object.create ()

يتيح لك الأسلوب Object.create () (المحدد أولاً في ECMAScript 5.1) إنشاء كائنات. يسمح لك باختيار كائن النموذج الأصلي للكائن الجديد دون الحاجة إلى تعريف دالة منشئ مسبقًا.

 `// Our pre-defined object 
 let kitten = { 
  name: "Fluff", 
  cute: true, 
  color: "gray" 
 } 
 // Create a new object using Object.create(). kitten is used as the prototype 
 let newKitten = Object.create(kitten) 
 
 console.log(newKitten.name) // Will output "Fluff" 
` 

#### معلومات اكثر

[مقال MDN حول العمل مع الكائنات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)