---
title: Promises
localeTitle: وعود
---
## وعود

جافا سكريبت واحد مترابطة ، مما يعني أنه لا يمكن تشغيل نصين من النص البرمجي في نفس الوقت ؛ لديهم لتشغيل واحد تلو الآخر. الوعد هو كائن يمثل الانتهاء النهائي (أو الفشل) لعملية غير متزامنة ، والقيمة الناتجة عنها.

 `var promise = new Promise(function(resolve, reject) { 
  // do thing, then… 
 
  if (/* everything worked */) { 
    resolve("See, it worked!"); 
  } 
  else { 
    reject(Error("It broke")); 
  } 
 }); 
` 

## الوعد موجود في واحدة من هذه الحالات

*   معلق: الحالة الأولية ، لم يتم الوفاء بها أو رفضها.
*   اكتملت العملية بنجاح.
*   مرفوض: فشلت العملية.

يعمل الكائن Promise كوكيل لقيمة غير معروفة بالضرورة عند إنشاء الوعد. يسمح لك بربط معالجات بقيمة نجاح نهائي أو إجراء غير متزامن في الإجراء. يتيح هذا للأساليب غير المتزامنة إرجاع قيم مثل الأساليب المتزامنة: بدلاً من إرجاع القيمة النهائية على الفور ، ترجع الطريقة غير المتزامنة وعدًا لتوفير القيمة في مرحلة ما في المستقبل.

## باستخدام "ثم" (الوعد تسلسل)

لاتخاذ العديد من المكالمات غير المتزامنة ومزامنتها واحدة تلو الأخرى ، يمكنك استخدام تسلسل الوعد. يسمح هذا باستخدام قيمة من الوعد الأول في عمليات الاسترجاع اللاحقة لاحقًا.

 `Promise.resolve('some') 
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some') 
    return new Promise(function(resolve, reject) { 
      setTimeout(function() { 
        string += 'thing'; 
        resolve(string); 
      }, 1); 
    }); 
  }) 
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves 
    console.log(string); // <-- Logs 'something' to the console 
  }); 
` 

## Promise API

هناك 4 طرق ثابتة في فئة Promise:

*   Promise.resolve
*   Promise.reject
*   Promise.all
*   Promise.race

## يمكن تقييد الوعود معاً

عند كتابة الوعود لحل مشكلة معينة ، يمكنك تجميعها معًا لتشكيل المنطق.

 `var add = function(x, y) { 
  return new Promise((resolve,reject) => { 
    var sum = x + y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not add the two values!")); 
    } 
  }); 
 }; 
 
 var subtract = function(x, y) { 
  return new Promise((resolve, reject) => { 
    var sum = x - y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not subtract the two values!")); 
    } 
  }); 
 }; 
 
 // Starting promise chain 
 add(2,2) 
  .then((added) => { 
    // added = 4 
    return subtract(added, 3); 
  }) 
  .then((subtracted) => { 
    // subtracted = 1 
    return add(subtracted, 5); 
  }) 
  .then((added) => { 
    // added = 6 
    return added * 2; 
  }) 
  .then((result) => { 
    // result = 12 
    console.log("My result is ", result); 
  }) 
  .catch((err) => { 
    // If any part of the chain is rejected, print the error message. 
    console.log(err); 
  }); 
` 

هذا مفيد _لاتباع_ نموذج _برمجة وظيفية_ . بواسطة انشاء وظائف لمعالجة البيانات يمكنك تجميعها معا لتجميع النهائي نتيجة. إذا تم _رفض_ السلسلة في أي مرحلة من سلسلة الوظائف سوف تخطي إلى معالج `catch()` الأقرب.

لمزيد من المعلومات حول البرمجة [الوظيفية](https://en.wikipedia.org/wiki/Functional_programming) : [البرمجة الوظيفية](https://en.wikipedia.org/wiki/Functional_programming)

## وظيفة المولدات

في الإصدارات الحديثة ، قدمت JavaScript المزيد من الطرق للتعامل مع Promises. أحد هذه الطرق هو مولد الدالة. مولدات الدالة هي دالات "يمكن إيقافها". عند استخدامها مع Promises ، يمكن للمولدات أن تجعل عملية القراءة أكثر سهولة وأن تظهر "متزامنة".

 `const myFirstGenerator = function* () { 
  const one = yield 1; 
  const two = yield 2; 
  const three = yield 3; 
 
  return 'Finished!'; 
 } 
 
 const gen = myFirstGenerator(); 
` 

ها هو أول مولد لدينا ، والذي يمكنك رؤيته بواسطة بناء الجملة `function*` . و `gen` متغير أعلنا لن يتم تشغيل `myFirstGenerator` ، ولكن بدلا من ذلك سوف "هذه المولدات جاهزة للاستخدام".

 `console.log(gen.next()); 
 // Returns { value: 1, done: false } 
` 

عندما نقوم بتشغيل `gen.next()` فإنه سوف `gen.next()` . وبما أن هذه هي المرة الأولى التي نطلق عليها `gen.next()` ، فسوف يتم تشغيل `yield 1` `gen.next()` مؤقتًا حتى نسميه `gen.next()` مرة أخرى. عندما `yield 1` يسمى، فإنه سيعود لنا `value` التي أسفرت عن وجود أو عدم ومولد `done` .

 `console.log(gen.next()); 
 // Returns { value: 2, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 3, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 'Finished!', done: true } 
 
 console.log(gen.next()); 
 // Will throw an error 
` 

بينما نستمر في استدعاء `gen.next()` ، سيستمر الأمر في `yield` التالي `gen.next()` المؤقت في كل مرة. وبمجرد عدم وجود مزيد من `yield` المتبقي ، فستستمر في تشغيل بقية المولد ، والتي في هذه الحالة تعود ببساطة `'Finished!'` . إذا اتصلت بـ `gen.next()` مرة أخرى ، فسوف ترمي خطأ عندما ينتهي المولد.

الآن ، تخيل إذا كان كل `yield` في هذا المثال عبارة عن `Promise` ، سيبدو الرمز نفسه متزامنًا للغاية.

### Promise.all (iterable) مفيد جدًا لطلبات متعددة لمصدر مختلف

ترجع طريقة Promise.all (iterable) وعدًا واحدًا يحل عندما يتم حل جميع الوعود في الوسيطة المتقابلة أو عندما لا تحتوي الوسيطة القابلة للتكرار على أي وعود. إنها ترفض سبب الوعد الأول الذي يرفض.

 `var promise1 = Promise.resolve(catSource); 
 var promise2 = Promise.resolve(dogSource); 
 var promise3 = Promise.resolve(cowSource); 
 
 Promise.all([promise1, promise2, promise3]).then(function(values) { 
  console.log(values); 
 }); 
 // expected output: Array ["catData", "dogData", "cowData"] 
` 

### معلومات اكثر

لمزيد من المعلومات حول الوعود: [وعود](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)