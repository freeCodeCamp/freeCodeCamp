---
title: Spread syntax
localeTitle: بناء الجملة
---
## بناء الجملة

يسمح بناء جملة Spread بتكرار مثل تعبير صفيف أو سلسلة يتم توسيعها في أماكن حيث يتم توقع صفر أو أكثر من الوسيطات (لمكالمات الوظيفة) أو العناصر (بالنسبة إلى القيم الحرفية للمصفوفة) ، أو تعبير كائن ليتم توسيعه في الأماكن التي يكون فيها الصفر متوقعًا .

### بناء الجملة

لمكالمات الوظائف:

 `myFunction(...iterableObj); 
` 

بالنسبة للمعايير الحرفية أو الأوتار:

 `[...iterableObj, '4', 'five', 6]; 
` 

### أمثلة

#### انتشر في المكالمات وظيفة

#### استبدال تطبيق

من الشائع استخدام `Function.prototype.apply` في الحالات التي تريد فيها استخدام عناصر مصفوفة كوسيطة للدالة.

 `function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction.apply(null, args); 
` 

مع صيغة الانتشار يمكن كتابة ما سبق على النحو التالي:

 `function myFunction(x, y, z) { } 
 var args = [0, 1, 2]; 
 myFunction(...args); 
` 

يمكن لأي وسيطة في قائمة الوسيطة استخدام صيغة الانتشار ويمكن استخدامها عدة مرات.

 `function myFunction(v, w, x, y, z) { } 
 var args = [0, 1]; 
 myFunction(-1, ...args, 2, ...[3]); 
` 

### تقديم طلب جديد

عند استدعاء منشئ مع `new` ، فإنه من غير الممكن استخدامها **مباشرة** مجموعة و `apply` ( `apply` يفعل `[[Call]]` وليس `[[Construct]]` ). ومع ذلك ، يمكن استخدام مصفوفة بسهولة مع شكر جديد لنشر الجملة:

 `var dateFields = [1970, 0, 1];  // 1 Jan 1970 
 var d = new Date(...dateFields); 
` 

لاستخدام جديدة مع مجموعة من المعلمات دون بناء جملة الانتشار ، يجب عليك القيام بذلك **بشكل غير مباشر من** خلال التطبيق الجزئي:

 `function applyAndNew(constructor, args) { 
   function partial () { 
      return constructor.apply(this, args); 
   }; 
   if (typeof constructor.prototype === "object") { 
      partial.prototype = Object.create(constructor.prototype); 
   } 
   return partial; 
 } 
 
 
 function myConstructor () { 
   console.log("arguments.length: " + arguments.length); 
   console.log(arguments); 
   this.prop1="val1"; 
   this.prop2="val2"; 
 }; 
 
 var myArguments = ["hi", "how", "are", "you", "mr", null]; 
 var myConstructorWithArguments = applyAndNew(myConstructor, myArguments); 
 
 console.log(new myConstructorWithArguments); 
 // (internal log of myConstructor):           arguments.length: 6 
 // (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null] 
 // (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"} 
` 

### انتشر في الحرفيين مجموعة

#### مجموعة أكثر قوة الحرفية

بدون صيغة الانتشار ، لإنشاء مصفوفة جديدة باستخدام مصفوفة موجودة كجزء واحد منها ، لم يعد بناء الجملة الحرفية الحرفية كافياً ويجب استخدام الكود الحتمي بدلاً من ذلك باستخدام توليفة من الدفع ، لصق ، كونتاكت ، إلخ. يصبح أكثر مقتضبة:

 `var parts = ['shoulders', 'knees']; 
 var lyrics = ['head', ...parts, 'and', 'toes']; 
 // ["head", "shoulders", "knees", "and", "toes"] 
` 

تماما مثل انتشار لقوائم الحجج ، `...` يمكن استخدامها في أي مكان في الصفيف الحرفية ويمكن استخدامه عدة مرات.

### انسخ صفيف

 `var arr = [1, 2, 3]; 
 var arr2 = [...arr]; // like arr.slice() 
 arr2.push(4); 
 
 // arr2 becomes [1, 2, 3, 4] 
 // arr remains unaffected 
` 

> **ﻣﻼﺣظﺔ** : ﺗرﺗﻔﻊ ﺑﻧود اﻟﻣﺟﺎﻣﻊ ﺑﺷﮐل ﻓﻌﺎل إﻟﯽ ﻣﺳﺗوى واﺣد أﺛﻧﺎء ﻧﺳﺦ ﻣﺻﻔوﻓﺔ. لذلك ، قد يكون غير مناسب لنسخ صفائف متعددة الأبعاد كما يظهر المثال التالي (هو نفسه مع Object.assign () وبناء الجملة spread).

 `var a = [[1], [2], [3]]; 
 var b = [...a]; 
 b.shift().shift(); // 1 
 // Now array a is affected as well: [[], [2], [3]] 
` 

### طريقة أفضل لسلسل صفائف

`Array.concat` غالباً لسَلسَلة صفيف إلى نهاية صفيف موجود. بدون صيغة الانتشار يتم ذلك على النحو التالي:

 `var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Append all items from arr2 onto arr1 
 arr1 = arr1.concat(arr2); 
` 

مع صيغة الانتشار يصبح هذا:

 `var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr1, ...arr2]; 
` 

غالباً ما يتم استخدام `Array.unshift` لإدراج صفيف من القيم في بداية صفيف موجود. بدون صيغة الانتشار يتم ذلك على النحو التالي:

 `var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 // Prepend all items from arr2 onto arr1 
 Array.prototype.unshift.apply(arr1, arr2) // arr1 is now [3, 4, 5, 0, 1, 2] 
` 

مع صيغة الانتشار يصبح هذا:

 `var arr1 = [0, 1, 2]; 
 var arr2 = [3, 4, 5]; 
 arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2] 
`