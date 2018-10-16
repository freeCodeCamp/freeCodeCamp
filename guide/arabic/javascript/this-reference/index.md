---
title: this reference
localeTitle: هذا المرجع
---
## `this` المرجع

في JavaScript ، تحتوي كل وظيفة على `this` المرجع الذي تم إنشاؤه تلقائيًا عندما تعلنه. يشبه `this` المرجع تمامًا `this` المرجع في اللغات الأخرى القائمة على الفصل مثل Java أو C # (جافا سكريبت هي لغة مبنية على النموذج وليس مفهوم "class"): _يشير إلى الكائن الذي يستدعي الوظيفة_ (هذا الكائن أحيانًا يسمى _السياق_ ). في JavaScript ، ومع ذلك ، _يمكن ربط `this` المرجع داخل الوظائف بكائنات مختلفة اعتمادًا على مكان استدعاء الدالة_ . فيما يلي 5 قواعد أساسية `this` الربط في JavaScript:

### المادة 1

عندما يتم استدعاء دالة في النطاق العمومي ، يكون `this` المرجع بشكل افتراضي مرتبطًا **بالعنصر العام** ( `window` في المستعرض ، أو `global` في Node.js). فمثلا:

 `function foo() { 
  this.a = 2; 
 } 
 
 foo(); 
 console.log(a); // 2 
` 

ملاحظة: إذا قمت بالإعلان عن الدالة `foo()` أعلاه في الوضع المقيد ، فإنك تقوم باستدعاء هذه الوظيفة في النطاق العالمي ، فسيكون `this` `undefined` `this.a = 2` التعيين هذا. `this.a = 2` إلى `this.a = 2` استثناء `Uncaught TypeError` .

### القاعدة 2

دعونا نفحص المثال أدناه:

 `function foo() { 
  this.a = 2; 
 } 
 
 var obj = { 
  foo: foo 
 }; 
 
 obj.foo(); 
 console.log(obj.a); // 2 
` 

بوضوح ، في المقتطف أعلاه ، يتم استدعاء الدالة `foo()` مع _السياق_ هو كائن `obj` `this` الإشارة مرتبطة الآن بـ `obj` . لذلك عندما يتم استدعاء دالة مع كائن سياق ، سيكون `this` المرجع مرتبطًا بهذا الكائن.

### القاعدة 3

`.call` ، `.apply` و `.bind` يمكن لجميع استخدامها في موقع الدعوة إلى ربط صراحة `this` . باستخدام `.bind(this)` هو شيء قد تراه في الكثير من مكونات React.

 `var foo = function() { 
  console.log(this.bar) 
 } 
 
 foo.call({ bar: 1 }) // 1 
` 

في ما يلي مثال سريع عن كيفية استخدام كل منها لربط `this` :

*   `fn.call(thisObj, fnParam1, fnParam2)` `.call()` : `fn.call(thisObj, fnParam1, fnParam2)`
*   `.apply()` : `fn.apply(thisObj, [fnParam1, fnParam2])`
*   `.bind()` : `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### القاعدة 4

 `function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
 
 var p1 = new Point2D(1, 2); 
 console.log(p1.x); // 1 
 console.log(p1.y); // 2 
` 

الشيء الذي يجب أن تلاحظه هو الدالة `Point2D` التي يتم `Point2D` رئيسية `new` ، `this` المرجع مرتبط بـ كائن `p1` . لذلك عندما يتم استدعاء دالة بكلمة رئيسية `new` ، فإنها ستنشئ كائنًا جديدًا وستكون `this` الإشارة مرتبطة بهذا الكائن.

ملاحظة: عند استدعاء وظيفة بكلمة رئيسية `new` ، فإننا نسميها أيضًا _كوظيفة مُنشئ_ .

### القاعدة 5

تحدد جافا سكريبت قيمة `this` في وقت التشغيل ، بناءً على السياق الحالي. لذلك قد يشير `this` بعض الأحيان إلى شيء آخر غير ما تتوقعه.

خذ بعين الاعتبار هذا المثال لفئة Cat باستخدام طريقة تسمى `makeSound()` ، متبعاً النمط في القاعدة 4 (أعلاه) مع دالة منشئ وكلمة رئيسية `new` .

 `var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.makeSound(); // Fat Daddy says: Mrrooowww 
` 

الآن دعونا نحاول إعطاء القطة وسيلة `annoy()` الناس عن طريق تكرار صوته 100 مرة ، مرة واحدة كل نصف ثانية.

 ``var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(function() { 
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
`` 

لا يعمل ذلك لأننا قمنا بإنشاء سياق جديد بنطاق عالمي داخل الاستدعاء `setInterval` ، لذا لم يعد `this` يشير إلى مثيلتنا. في مستعرض ويب ، `makeSound()` `this` بدلاً من ذلك إلى كائن الإطار ، الذي لا يحتوي على أسلوب `makeSound()` .

طريقتان لجعلها تعمل:

1) قبل إنشاء إطار جديد، تعيين `this` إلى متغير محلي يدعى `me` ، أو `self` ، أو ما تريد أن نسميها، واستخدام هذا المتغير داخل الاستدعاء.

 `var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var self = this; 
        var t = setInterval(function() { 
            self.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
` 

2) باستخدام ES6 ، يمكنك تجنب تعيين `this` للمتغير المحلي باستخدام وظيفة السهم ، والتي تربط `this` بسياق الرمز المحيط حيث تم تعريفه.

 `var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(() => { 
            this.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
` 

### موارد آخرى

*   [javascriptissexy.com](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
*   [أنت لا تعرف شبيبة](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)