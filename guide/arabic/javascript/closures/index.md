---
title: Closures
localeTitle: إغلاق
---
# إغلاق

الإغلاق هو الجمع بين الوظيفة والبيئة المعجمية (النطاق) التي تم الإعلان عن هذه الوظيفة ضمنها. عمليات الإغلاق هي خاصية أساسية وقوية لجافا سكريبت. تتناول هذه المقالة "كيف" و "لماذا" حول الإغلاق:

### مثال

 `//we have an outer function named walk and an inner function named fly 
 
 function walk (){ 
 
  var dist = '1780 feet'; 
 
  function fly(){ 
    console.log('At '+dist); 
  } 
 
  return fly; 
 } 
 
 var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc 
 //you would expect that once the walk function above is run 
 //you would think that JavaScript has gotten rid of the 'dist' var 
 
 flyFunc(); //Logs out 'At 1780 feet' 
 //but you still can use the function as above 
 //this is the power of closures 
` 

### مثال آخر

 `function by(propName) { 
    return function(a, b) { 
        return a[propName] - b[propName]; 
    } 
 } 
 
 const person1 = {name: 'joe', height: 72}; 
 const person2 = {name: 'rob', height: 70}; 
 const person3 = {name: 'nicholas', height: 66}; 
 
 const arr_ = [person1, person2, person3]; 
 
 const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ] 
` 

إغلاق "يتذكر" البيئة التي تم إنشاؤه فيها. تتكون هذه البيئة من أي متغيرات محلية كانت ضمن النطاق في الوقت الذي تم فيه إنشاء الإغلاق.

 `function outside(num) { 
  var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers' 
  return function inside() { // This is the function which the closure 'remembers' 
    console.log(rememberedVar) 
  } 
 } 
 
 var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside' 
 var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside' 
 
 remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) => 7 
 remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) => 9 
` 

عمليات الإغلاق مفيدة لأنها تتيح لك "تذكر" البيانات ثم تتيح لك العمل على هذه البيانات من خلال الوظائف التي تم إرجاعها. هذا يسمح لجافا سكريبت بمحاكاة الأساليب الخاصة الموجودة في لغات البرمجة الأخرى. تعتبر الطرق الخاصة مفيدة لتقييد الوصول إلى التعليمات البرمجية بالإضافة إلى إدارة مساحة الاسم العام الخاصة بك.

### المتغيرات الخاصة والأساليب

يمكن أيضًا استخدام عمليات الإغلاق لتغليف البيانات / الطرق الخاصة. الق نظرة على هذا المثال:

 `const bankAccount = (initialBalance) => { 
  const balance = initialBalance; 
 
  return { 
    getBalance: function() { 
      return balance; 
    }, 
    deposit: function(amount) { 
      balance += amount; 
      return balance; 
    }, 
  }; 
 }; 
 
 const account = bankAccount(100); 
 
 account.getBalance(); // 100 
 account.deposit(10); // 110 
` 

في هذا المثال ، لن نتمكن من الوصول إلى `balance` من أي مكان خارج وظيفة `bankAccount` ، مما يعني أننا قمنا للتو بإنشاء متغير خاص. أين الإغلاق؟ حسنًا ، فكر في ما `bankAccount()` . إنها في الواقع ترجع كائنًا يحتوي على مجموعة من الوظائف داخله ، ومع ذلك عندما نطلق على `account.getBalance()` ، فإن الوظيفة قادرة على "تذكر" مرجعها الأولي إلى `balance` . هذه هي قوة الإغلاق ، حيث "تتذكر" الدالة نطاقها المعجمى (ترجمة النطاق الزمني) ، حتى عندما يتم تنفيذ الوظيفة خارج النطاق المعجمى.

**مضاهاة متغيرات نطاق الكتلة.**

لم يكن جافا سكريبت مفهومًا لمتغيرات النطاق. بمعنى أنه عند تحديد متغير داخل forloop على سبيل المثال ، فإن هذا المتغير مرئي من خارج forloop أيضًا. إذن كيف يمكن أن تساعدنا الإغلاقات في حل هذه المشكلة؟ لنلقي نظرة.

 `    var funcs = []; 
 
    for(var i = 0; i < 3; i++){ 
        funcs[i] = function(){ 
            console.log('My value is ' + i);  //creating three different functions with different param values. 
        } 
    } 
 
    for(var j = 0; j < 3; j++){ 
        funcs[j]();             // My value is 3 
                                // My value is 3 
                                // My value is 3 
    } 
` 

نظرًا لأن المتغير i ليس به نطاق نطاق ، فقد تم تحديث القيمة في جميع الوظائف الثلاث باستخدام عداد الحلقة وإنشاء قيم ضارة. يمكن أن يساعدنا الإغلاق في حل هذه المشكلة من خلال إنشاء لقطة للبيئة التي كانت عليها الدالة عند إنشائها ، مع الحفاظ على حالتها.

 `    var funcs = []; 
 
    var createFunction = function(val){ 
        return function() {console.log("My value: " + val);}; 
    } 
 
    for (var i = 0; i < 3; i++) { 
        funcs[i] = createFunction(i); 
    } 
    for (var j = 0; j < 3; j++) { 
        funcs[j]();                 // My value is 0 
                                    // My value is 1 
                                    // My value is 2 
    } 
` 

تحتوي الإصدارات المتأخرة من javascript es6 + على كلمة رئيسية جديدة تسمى let والتي يمكن استخدامها لإعطاء متغير blockscope. هناك أيضًا العديد من الوظائف (forEach) والمكتبات بأكملها (lodash.js) المخصصة لحل مثل هذه المشكلات مثل تلك الموضحة أعلاه. يمكنهم بالتأكيد تعزيز الإنتاجية الخاصة بك ، ولكن يبقى من المهم للغاية أن يكون لديك معرفة بكل هذه القضايا عند محاولة إنشاء شيء كبير.

تحتوي عمليات الإغلاق على العديد من التطبيقات الخاصة المفيدة عند إنشاء برامج جافا سكريبت كبيرة الحجم.

1.  محاكاة المتغيرات الخاصة أو التغليف
2.  إجراء مكالمات جانب الخادم غير المتزامن
3.  إنشاء متغير نطاق الكتلة.

**محاكاة المتغيرات الخاصة.**

بخلاف العديد من اللغات الأخرى ، لا تحتوي Javascript على آلية تسمح لك بإنشاء متغيرات حالة مغلفة ضمن كائن. يمكن أن يسبب متغيرات الحالة العامة الكثير من المشاكل عند إنشاء برامج متوسطة إلى كبيرة الحجم. لكن مع الإغلاق ، يمكن تخفيف هذه المشكلة.

تشبه إلى حد كبير المثال السابق ، يمكنك إنشاء دالات تقوم بإرجاع القيم الحرفية للكائنات بطرق لها الوصول إلى المتغيرات المحلية للكائن دون تعريضها. وبالتالي ، مما يجعلها خاصة على نحو فعال.

يمكن أن تساعدك الإغلاقات أيضًا في إدارة مساحة الاسم العامة لديك لتجنب التصادمات مع البيانات المشتركة عالميًا. عادة يتم مشاركة جميع المتغيرات العالمية بين جميع النصوص في مشروعك ، والتي بالتأكيد سوف تعطيك الكثير من المتاعب عند بناء برامج متوسطة إلى كبيرة. لهذا السبب يستخدم مؤلفو المكتبة والوحدات النمطية الإغلاق لإخفاء أساليب وبيانات الوحدة بالكامل. يسمى هذا نمط الوحدة النمطية ، ويستخدم تعبير دالة استدعى على الفور والذي يصدر فقط وظائف معينة إلى العالم الخارجي ، مما يقلل بشكل كبير من حجم المراجع العالمية.

وإليك عينة قصيرة من هيكل عظمي وحدة نمطية.

 `var myModule = (function() = { 
    let privateVariable = 'I am a private variable'; 
 
    let method1 = function(){ console.log('I am method 1'); }; 
    let method2 = function(){ console.log('I am method 2, ', privateVariable); }; 
 
    return { 
        method1: method1, 
        method2: method2 
    } 
 }()); 
 
 myModule.method1(); // I am method 1 
 myModule.method2(); // I am method 2, I am a private variable 
` 

تعتبر عمليات الإغلاق مفيدة في التقاط أمثلة جديدة للمتغيرات الخاصة الموجودة في بيئة "تذكر" ، ولا يمكن الوصول إلى هذه المتغيرات إلا من خلال الدالة أو الأساليب التي تم إرجاعها.

### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)  
[إغلاق جافا سكريبت](https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44)