---
title: Function.prototype.bind
localeTitle: Function.prototype.bind
---
## Function.prototype.bind

`bind` هو طريقة على النموذج الأولي لجميع الوظائف في JavaScript. يسمح لك بإنشاء وظيفة جديدة من وظيفة موجودة ، وتغيير وظيفة `this` السياق الجديدة ، وتقديم أي حجج تريد أن يتم استدعاء الوظيفة الجديدة بها. وسيسبق الوسيطات المقدمة `bind` أي وسائط يتم تمريرها إلى الدالة الجديدة عندما يتم استدعاؤها.

### باستخدام `bind` لتغيير `this` في وظيفة

الحجة الأولى المقدمة لل `bind` هي `this` السياق سوف تكون ملزمة وظيفة ل. إذا كنت لا ترغب في تغيير قيمة `this` الممر `null` كوسيطة الأولى.

يتم تكليفك بكتابة الكود لتحديث عدد الحضور عند وصولهم إلى المؤتمر. يمكنك إنشاء صفحة ويب بسيطة تحتوي على زر ، عند النقر فوق ذلك ، بزيادة `numOfAttendees` خاصية على كائن الاستجواب. يمكنك استخدام jQuery لإضافة معالج النقر إلى الزر الخاص بك ، ولكن بعد النقر فوق الزر ، لم يتغير كائن الإيداع. قد تبدو شفرتك شيئًا كهذا.

 `var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees); 
` 

هذه مشكلة شائعة عند العمل مع jQuery و JavaScript. عند النقر فوق زر `this` الكلمة في الطريقة التي تم تمريرها إلى ومسج `on` طريقة يرجع زر وليس الكائن المؤتمر. يمكنك ربط `this` السياق الخاص بك بالطريقة لحل المشكلة.

 `var nodevember = { 
  numOfAttendees: 0, 
  incrementNumOfAttendees: function() { 
    this.numOfAttendees++; 
  } 
  // other properties 
 }; 
 
 $('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember)); 
` 

الآن عند النقر فوق الزر يشير `this` إلى كائن `nodevember` .

### توفير الحجج لوظيفة مع `bind`

كل وسيطة تم تمريرها `bind` بعد الأول سوف تسبق أية وسائط يتم تمريرها عند استدعاء الوظيفة. هذا يسمح لك بتطبيق الحجج مسبقًا على إحدى الوظائف. في المثال أدناه ، تأخذ `combineStrings` معًا. `bind` ثم يتم استخدامها لإنشاء دالة التي توفر دائما "كول" كسلسلة الأولى.

 `function combineStrings(str1, str2) { 
  return str1 + " " + str2 
 } 
 
 var makeCool = combineStrings.bind(null, "Cool"); 
 
 makeCool("trick"); // "Cool trick" 
` 

يحتوي الدليل على [هذا المرجع](https://guide.freecodecamp.org/javascript/this-reference) على مزيد من المعلومات حول كيفية تغيير ما تشير إليه `this` الكلمة الرئيسية.

يمكن العثور على مزيد من التفاصيل حول طريقة `bind` على [مستندات MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) الخاصة بـ Mozilla.