---
title: Arguments
localeTitle: الحجج
---
يُعتبر كائن الوسيطات كائنًا **شبيهًا بالصفيف** _(في أن بنية الكائن تشبه كائن الصفيف ، ومع ذلك لا ينبغي اعتبارها صفيفًا كما تحتوي على جميع وظائف كائن)_ التي تخزن جميع الوسيطات التي تم تمريرها إلى وظيفة وهي ملكية خاصة لتلك الوظيفة. لو كنت لتمر 3 الحجج إلى وظيفة، ويقول `storeNames()` ، سيتم تخزين هذه الحجج 3 داخل الكائن يسمى **الحجج** وسيبدو هذا عندما نعبر الحجج `storeNames("Mulder", "Scully", "Alex Krycek")` إلى `storeNames("Mulder", "Scully", "Alex Krycek")` :

*   أولاً ، نعلن عن وظيفة ونجعلها ترجع كائن الوسائط.

\`\` \`جافا سكريبت  
function storeNames () {return arguments؛ }

 `*   Then, when we execute that function with **n arguments**, 3 in this case, it will return the object to us and it will **look like** an array. We can convert it to an array, but more on that later... 
` 

جافا سكريبت // إذا قمنا بتنفيذ السطر التالي في وحدة التحكم: storeNames ("Mulder"، "Scully"، "Alex Kryceck")؛ // سيكون الناتج {'0': 'Mulder' ، '1': 'Scully' ، '2': 'Alex Kryceck'}

 ``If you want to know more about this, such as converting it to an array or the optimization problem that comes with using the _slice(_) method and how to solve it, click on **read more** (Gitter Chat Only). 
 
 ## Treat it as an array 
 
 You can invoke arguments by using `arguments[n]` (where _n_ is the index of the argument in the array-like object) but if you want to use it as an array for iteration purposes or applying array methods to it, you need to _convert it to an array_ by declaring a variable and using the Array.prototype.slice.call method (because _arguments_ is not an array): 
`` 

جافا سكريبت var args = Array.prototype.slice.call (الحجج) ؛

// أو طريقة es6: var args = Array.from (الحجج)

 `Since **slice()** has two (the parameter **end** is optional) parameters, you can grab a certain portion of the arguments by specifying (using the _slice.call()_ method renders these two parameters optional, not just _end_) the beginning and the ending of your portion; check out the following code: 
` 

جافا سكريبت function getGrades () { var args = Array.prototype.slice.call (الحجج ، 1 ، 3) ؛ عودة الارجاع }

// دعونا إخراج هذا! console.log (getGrades (90، 100، 75، 40، 89، 95))؛

// يجب أن يكون الناتج: // // \[100 ، 75\] <- لماذا؟ لأنه بدأ من الفهرس 1 وتوقف عند الفهرس 3 // لذلك ، لم يؤخذ في الاعتبار المؤشر 3 (40). // // إذا أزلنا المعلمة "3" ، لن نتركها سوى (الحجج ، 1) // كل حجة من الفهرس 1: \[100 ، 75 ، 40 ، 89 ، 95\].

 `### Optimization issues with Array.slice() 
 
 There is a little problem, it's not recommended to use slice in the arguments object (optimization reasons)... 
 
 > **Important**: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object. 
 > 
 > _by_ **_Mozilla Developer Network_** <a href='https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Functions/arguments' target='_blank' rel='nofollow'>(reference)<a> 
 
 
 
 So, what other method is available to convert _arguments_ to an array? I recommend the for-loop (not the for-in loop), you can do it like this: 
` 

جافا سكريبت var args = \[\]؛ // صفيف فارغ ، في البداية. لـ (var i = 0؛ i <arguments.length؛ i ++) { args.push (الحجج \[أنا\]) } // Now 'args' هي مصفوفة تحمل وسائطك. \`\` \`

لمزيد من المعلومات حول مشكلات التحسين:  
القتلة الأمثل: [إدارة الحجج](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)

### معلمة الراحة ES6 كطريقة للتحايل على كائن الوسائط

في ES2015 / ES6 من الممكن استخدام المعلمة المتبقية ( `...` ) بدلاً من كائن الوسائط في معظم الأماكن. لنفترض أن لدينا الوظيفة التالية (غير ES6):

 `function getIntoAnArgument() { 
    var args = arguments.slice(); 
    args.forEach(function(arg) { 
        console.log(arg); 
    }); 
 } 
` 

يمكن استبدال هذه الوظيفة في ES6 من خلال:

 `function getIntoAnArgument(...args) { 
    args.forEach(arg => console.log(arg)); 
 } 
` 

لاحظ أننا استخدمنا أيضًا وظيفة سهم لتقصير معاودة الاتصال forEach!

كائن الوسائط غير متاح داخل جسم وظيفة السهم.

يجب أن تأتي المعلمة الباقية كوسيطة أخيرة في تعريف الدالة الخاص بك.  
`function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }`