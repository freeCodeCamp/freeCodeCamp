---
title: Classes
localeTitle: الطبقات
---
## الطبقات

جافا سكريبت لا تملك مفهوم الطبقات بطبيعتها.

ولكن يمكننا محاكاة وظائف الطبقة عن طريق الاستفادة من الطبيعة النموذجية لجافا سكريبت.

تفترض هذه المقالة أن لديك فهم أساسي [للنماذج الأولية](/src/pages/javascript/prototypes/index.md) .

من أجل الوضوح ، دعونا نفترض أننا نريد إنشاء فصل يمكنه القيام بما يلي

 `var p = new Person('James','Bond'); // create a new instance of Person class 
    p.log() // Output: 'I am James Bond' // Accessing a function in the class 
    // Using setters and getters 
    p.profession = 'spy' 
    p.profession // output: James bond is a spy 
` 

### استخدام الكلمة الرئيسية للفئة

كما هو الحال في أي لغة برمجة أخرى ، يمكنك الآن استخدام الكلمة الأساسية `class` لإنشاء فصل دراسي.

هذا غير مدعوم في المتصفحات القديمة وتم تقديمه في ECMAScript 2015.

 `class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
` 

  
  

`class` هي مجرد السكر النحوي على نموذج الوراثة القائم على النموذج الأولي لجافا سكريبت.

بشكل عام ، يستخدم المبرمجون الطرق التالية لإنشاء فصل دراسي في JavaScript.

### استخدام أساليب مضافة إلى النماذج الأولية:

هنا ، تتم إضافة جميع الأساليب إلى النموذج الأولي

 `function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 } 
 
 Person.prototype.log = function() { 
    console.log('I am', this._firstName, this._lastName); 
 } 
 
 // This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above. 
 // Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript 
 Object.defineProperty(Person.prototype, 'profession', { 
    set: function(val) { 
        this._profession = val; 
    }, 
    get: function() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 }) 
` 

يمكنك أيضا كتابة أساليب النموذج الأولي على وظيفة `Person` النحو التالي

 `Person.prototype = { 
    log: function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
    set profession(val) { 
        this._profession = val; 
    } 
 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
` 

### استخدام أساليب مضافة داخليا

هنا تضاف الأساليب داخليا بدلا من النموذج الأولي

 `function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 
    this.log = function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
 
    Object.defineProperty(this, 'profession', { 
        set: function(val) { 
            this._profession = val; 
        }, 
        get: function() { 
            console.log(this._firstName, this._lastName, 'is a', this._profession); 
        } 
    }) 
 } 
` 

### إخفاء التفاصيل في فصول بالرموز

في أغلب الأحيان يجب إخفاء بعض الخصائص والأساليب لمنع الوصول من خارج الوظيفة. مع الفئات ، للحصول على هذه الوظيفة ، إحدى الطرق للقيام بذلك باستخدام الرموز. Symbol هو نوع جديد من جافا سكريبت المدمج ، والذي يمكن استدعاؤه لإعطاء قيمة رمزية جديدة. كل رمز فريد ويمكن استخدامه كمفتاح على الكائن. لذا ، فإن إحدى حالات استخدام الرموز هي أنه يمكنك إضافة شيء إلى كائن قد لا تمتلكه ، وقد لا ترغب في التصادم مع أي مفاتيح أخرى للعنصر ، لذلك ، فإن إنشاء كائن جديد وإضافة خاصية على هذا الكائن باستخدام الرمز هو الأكثر أمانًا . أيضا ، عندما يتم إضافة قيمة الرمز إلى كائن ؛ لا أحد آخر يعرف كيفية الحصول عليه.

 `class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 // With the above code, even though we can access the properties outside the function to change their content what if we don't want that. 
 // Symbols come to rescue. 
 let s_firstname  = new Symbol(); 
 
 class Person { 
    constructor(firstName, lastName) { 
        this[s_firstName] = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this[s_firstName], this._lastName, 'is a', this._profession); 
    } 
` 

#### معلومات اكثر: