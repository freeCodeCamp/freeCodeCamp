---
title: Register a Store Listener
localeTitle: تسجيل مستمع المتجر
---
## تسجيل مستمع المتجر

دعونا نكسر التعليمات إلى أسفل لتحديد ما يطلبه بالضبط.

> _اكتب دالة رد اتصال تقوم بزيادة عدد المتغير الشامل في كل مرة يتلقى فيها المخزن إجراءً وتمرير هذه الوظيفة إلى أسلوب store.subscribe ()._

يمكننا تلخيص هذه الخطوات في قطع صغيرة:

1.  اكتب وظيفة رد اتصال
2.  زيادة عدد المتغيرات العالمية
3.  تمرير وظيفة إلى `store.subscribe()` طريقة.

رائع! الآن دعونا نراجع بعض الأساسيات مرة أخرى.

### ما هي "وظيفة رد الاتصال" في الإنجليزية بسيطة؟

وظيفة رد الاتصال هي ببساطة دالة يتم استدعائها بعد إجراء وظيفة أخرى يتم تنفيذها. في العالم الحقيقي ، قد يكون شيء من هذا القبيل:

 `// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed. 
 let carIsBroken = true; 
 const callCarOwner = () => console.log('Hello your car is done!'); 
 const fixCar = (carIsBroken, callCarOwner) => { 
  if (carIsBroken === true) { 
    carIsBroken = false; 
  } 
  console.log(carIsBroken); 
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'. 
  callCarOwner(); 
 } 
 fixCar(carIsBroken, callCarOwner); 
` 

### كيف تزيد من عدد المتغيرات؟

يمكننا القيام بذلك عن طريق استخدام عامل التشغيل "+ =".

 `let count = 1; 
 const addOne = () => count +=1; 
` 

### كيف يمكنك تمرير وظيفة إلى طريقة؟

يمكننا تمرير وظيفة إلى طريقة بالطريقة نفسها التي قد نمرر بها متغيرًا إلى طريقة ما. فقط قم بتمريرها كحجة!

 `function sayHi() { 
  console.log('Hi!'); 
 } 
 store.subscribe(sayHi); 
` 

تريد تحديث هذا؟ [تحرير هذا كعب الرهان على جيثب.](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)