---
title: Object Oriented Programming
localeTitle: البرمجة الشيئية
---
## البرمجة الشيئية

البرمجة الشيئية ، كما يوحي الاسم ، تدور حول الكائنات. أنت تحاول بشكل أساسي إنشاء جزء من البرنامج منظم بعناية في الكائنات. هذا النهج يجعل التعليمة البرمجية قابلة للتطوير مع مكونات قابلة لإعادة الاستخدام.

### MAN كلاس

لنفترض أنك تريد إنشاء برنامج حول الرجال بشكل عام.

إن الرجال العاديين لديهم كل أنواع الأشياء المشتركة مثل إعطاء مصافحات قوية ، كونهم عنيدين ، لا يضعون ورق التواليت ، أو الوقوع في الحب مع أحدث الأدوات ، إلخ. يمكن وصف هذه الأمور بأنها سلوكيات أو أساليب كائن الإنسان.

يتمتع الرجال أيضًا بميزات مميزة خاصة بهم مثل العمر والطول والرياضات المفضلة والمشروبات المفضلة ، إلخ. ويمكن وصف هذه الخصائص بأنها خصائص أو سمات كائن الرجل.

مع وضع هذه الأمور في الاعتبار ، لم يعد إنشاء فئة رجل أمرًا صعبًا بعد الآن. لذا ، سيذهب البرنامج هكذا.

 `<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 } 
` 

### الرجل الهدف

الآن أن لدينا هذه الفئة _الرجل،_ ونحن يمكن أن تخلق أي رجل معين عن طريق إنشاء مثيل من الطبقة المعروفة باسم مثيل الفئة.

 `<?php 
 
 // Create a Man object called "Jack" (ie instantiation) 
 $jack = new Man(); 
 
 // Set values to Jack's attributes 
 $jack->name = "Jack"; 
 $jack->age = 30; 
 $jack->height = "6 feet"; 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
` 

هنا يمكنك أن ترى أن رجلاً اسمه جاك تم إنشاؤه باسم "جاك" ، وارتفاع "6 أقدام" ، و "كرة السلة وكرة القدم" الرياضية المفضلة ، والمشروبات المفضلة "القهوة والشاي الأخضر". تسمى هذه السمات متغيرات الحالة.

ثم لديه سلوكيات جميع الرجال مثل إعطاء يد صلبة ، وهو عنيد وعدم وضع ورق التواليت. وتسمى كل هذه السلوكيات سبيل المثال.

### CONSTRUCTORS

لقد أنشأنا حتى الآن صفًا يدعى "رجل" وشيء يدعى "جاك" عن طريق إنشاء هذا الفصل. كما أعطينا قيم جاك لصفاته (الاسم والطول والرياضات المفضلة والمشروبات) واستدعاء سلوكياته الشائعة لجميع الرجال (إعطاء مصافحات قوية ، والبقاء عنيدًا وعدم وضع أوراق المرحاض).

لنأخذ هذه الفكرة خطوة أخرى ونجعل جاك يبدأ في تقديم نفسه كلما أنشأنا كائن جاك دون الاضطرار إلى طباعته بشكل فردي على النحو التالي:

 `<?php 
 // Print out Jack's attributes and values 
 echo "Our man's name is: " . $jack->name . "\n"; 
 echo "He is " . $jack->age . " years old and " . $jack->height . " tall."; 
` 

هذا هو المكان الصانعين يلعبون. إن المنشئات هي أساليب خاصة يتم استدعائها عند إنشاء كائن.

لذا ، فإن الفكرة هي طباعة اسم جاك وعمرها وارتفاعها عندما نقوم بإنشاء كائن "جاك" عن طريق إنشاء دروس للإنسان. ولتحقيق ذلك ، نحتاج إلى تحديد الاسم والعمر والطول عند إنشاء الكائن على النحو التالي:

 `<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
` 

يخبر هذا الكود "رجل الطبقة" بإنشاء كائن به 3 معلمات: "Jack" للاسم ، 30 لـ age و "6 feet" للارتفاع.

والآن بعد أن نجحنا في تمرير هذه المعلمات أثناء تأليف الصف ، يمكننا بسهولة استخدامها لجعل طريقة المنشئ.

 `<?php 
 // Create a constructor method with 3 required parameters: name, age and height 
 public function __construct($name, $age, $height) 
 { 
    // Print out to say "object created" 
    echo "object created\n"; 
 
    // Assign the values of parameters to properties 
    // Also known as instance variables 
    // Using "$this->property_name" 
    $this->name = $name; 
    $this->age = $age; 
    $this->height = $height; 
 
    // Print out Jack's attributes and values 
    echo "Our man's name is: " . $this->name . "\n"; 
    echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
 } 
` 

لذلك ، الآن عندما نقوم بتشكيل فئة Man ، نحتاج إلى وضع 3 معلمات وسيتم طباعتها على الفور.

 `<?php 
 // Create a Man object called "Jack" 
 $jack = new Man('Jack', 30, '6 feet'); 
` 

`Object created` `Our man's name is: Jack` `He is 30 years old and 6 feet tall.`

سيكون رمز كاملة مع منشئ شيء من هذا القبيل:

 `<?php 
 
 class Man 
 { 
    // 1. Declare the properties 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    // 2. Create a constructor method with 3 required parameters: name, age and height 
    public function __construct($name, $age, $height) 
    { 
        // 2A. Assign the values of parameters to class properties 
        // Also known as instance variables 
        // Using "$this->property_name" 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
 
        // 2B. Print out Jack's attributes and values 
        echo "Our man's name is: " . $this->name . "\n"; 
        echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
    } 
 
    // 3. Create methods 
    public function giveFirmHandshakes() 
    { 
        return "I give firm handshakes."; 
    } 
 
    public function beStubborn() 
    { 
        return "I am stubborn."; 
    } 
 
    public function notPutToiletPaper() 
    { 
        return "It's not humanly possible to remember to put toilet paper rolls when they are finished"; 
    } 
 } 
 
 // 4. Create a Man object called "Jack" 
 // This will print out the echo statements inside "__construct" method inside the class 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 // 5. Set values to Jack's favorite sports and drinks 
 $jack->fav_sports = ["basketball", "soccer"]; 
 $jack->fav_drinks = ["coffee", "green tea"]; 
 
 // Print out Jack's favorite sports and drinks 
 echo "His favorite sports are: "; 
 foreach ($jack->fav_sports as $sport) { 
    echo $sport . " "; 
 } 
 
 echo "\nHis favorite drinks are: "; 
 foreach ($jack->fav_drinks as $drink) { 
    echo $drink . " "; 
 } 
 
 // Print out Jack's behaviors common to all men 
 // (hint: defined in Man class) 
 echo "\nHe said these are some of his behaviors common to other men: "; 
 echo "\n\t" . $jack->giveFirmHandshakes(); 
 echo "\n\t" . $jack->beStubborn(); 
 echo "\n\t" . $jack->notPutToiletPaper(); 
` 

الآن ، ليس علينا تحديد اسم جاك وعمرها وارتفاعها بشكل منفصل وطباعتها مرة أخرى. عندما نقوم بإنشاء كائن Jack ، فإننا نقوم فقط بتحديد خصائصه كمعلمات وسيقومون بطباعتها تلقائيًا بمساعدة المُنشئ. يمكننا أيضا وضع الرياضة المفضلة لديه والمشروبات في المعلمة إذا كنا نريد من قبل

تحديدها كمعلمات أثناء إنشاء الكائن و وضع خطوط الصدى داخل المنشئ. يمكنك زيارة هنا لمزيد من المعلومات حول تنفيذ PHP من المنشئ. كانت رحلة OOP بطيئة ولكنها ثابتة.

### الحفاظ على أسرار الرجل

إذا لاحظت أن جميع متغيرات الصفوف (الاسم ، العمر ، الطول ، fav _sports و fav_ drinks) يتم الإعلان عنها على أنها عامة داخل فئة Man. الآن ، بعد إنشاء كائن رجل ، لدينا حق الوصول إلى جميع ممتلكاته عن طريق الاتصال بهم ببساطة:

 `<?php 
 echo $jack->name; 
 echo $jack->height; 
` 

ولكن ماذا لو أردنا أن نبقي بعض الأمور سرية عن الرجل؟ ربما لا يريد أن يعرف الجميع سنه ... أو ... ربما يريد فقط بعض الأشخاص أن يعرفوا مشروباته المفضلة. يمكننا تحقيق ذلك عن طريق تغيير مستوى رؤية هذه الخصائص من العامة إلى المحمية وحتى الخاصة.

يمكن الوصول إلى الأماكن العامة في أي مكان ، سواء داخل أو خارج الفصل.

يمكن الوصول إلى الخصائص المحمية داخل الصف وداخل فئة (أطفال) الأطفال.

تتمتع الخصائص الخاصة بنفس الرؤية المحمية كما لا يمكن الوصول إليها من قبل فئة (أطفال) الأطفال.

سنتحدث عن وراثة فصل في وقت ما. في الوقت الحالي ، دعنا نحاول تعيين فئة العمر محمية و private\_drinks خاصة في فئة Man.

 `<?php 
 
 class Man 
 { 
    // 1. Declare the variables 
    public $name; 
    protected $age; 
    public $height; 
    public $fav_sports; 
    private $fav_drinks; 
    ..... 
    ..... 
` 

الآن إذا حاولت إنشاء مثيل للفئة وتسمية العمر و fav\_drinks ، فسوف تحصل على خطأ.

 `<?php 
 $jack = new Man('Jack', 30, '6 feet'); 
 
 echo $jack->age; 
 // Fatal error:  Cannot access protected property Man::$age 
 
 print_r($jack->fav_drinks); 
 // Fatal error:  Cannot access private property Man::$fav_drinks 
` 

### المحددات والرسومات

الآن بعد أن قمنا بحماية عمر جاك والمشروبات المفضلة ، كيف يمكننا الوصول إليهم بالضبط وتحديثها؟

للحصول على الخصائص المحمية أو الخاصة ، نحتاج إلى إنشاء طريقة getter مثل هذا داخل فئة Man (لاحظ أن هذه طريقة للفصل مع ظهور للجمهور).

 `<?php 
 public function getAge() 
 { 
    return $this->age; 
 } 
` 

الآن يمكننا بسهولة الحصول على عمر جاك عن طريق استدعاء هذه الطريقة:

 `<?php 
 echo $jack->getAge(); 
 
 Jack just realized he turned 31 last week, how do we update his age? Can't we just do this? 
` 

فب

 ``Since age property is protected, we cannot access it directly outside the class whether to read it or update it. You will get a fatal error. 
 
 `Fatal error:  Cannot access protected property Man::$age` 
 
 In order to update a protected/private property, we need to create a setter method inside the class with public visibility. 
`` 

فب

 `Now we can easily update Jack's age by just calling this setter method: 
` 

فب

echo $ jack-> getAge ()؛ // 31

 `We can also create setter and getter class methods for fav_drinks. Note that we have made the parameter for setFavDrinks optional. So, if you don't pass an array to setFavDrinks, it will default to an empty array. 
` 

فب

الوظيفة العامة getFavDrinks () { return $ this-> fav\_drinks؛ }

 `To set Jack's fav_drinks: 
` 

فب

للحصول على fav\_srinks من Jack:

 `<?php 
 echo json_encode($jack->getFavDrinks()); 
 // ["coffee","green tea"] 
` 

وتسمى هذه الطريقة في تطبيق واستخدام أساليب الصف لاسترجاع وتحديث خصائص الصفات بالتغليف في البرمجة الشيئية. يمكننا أيضًا تعيين مستوى الرؤية لطرق الصفوف تمامًا مثل الطريقة التي استخدمناها في خصائص الصف.