---
title: Polymorphism with Abstract and Interface
localeTitle: تعدد الأشكال مع الملخص والواجهة
---
## تعدد الأشكال مع الملخص والواجهة

_مشاركة وفرض الكود مع تعدد الأشكال باستخدام الطبقة التجريدية والواجهة_

سوف نتعمق في البرمجة الشيئية ونحاول التفكير من حيث أنماط التصميم لمشاركة وتطبيق الشفرة الخاصة بنا باستخدام تعدد الأشكال (Polymorphism).

### فئة الملخص

لنفترض أن لدينا فئة تسمى Man مع بعض الخصائص ( `name` `age` `height` `fav_drinks` و `fav_sports` ) والطرق ( `giveFirmHandshakes` و `beStubborn` و `notPutToiletPaper` ).

 `<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
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

نحتاج إلى تحديد الاسم والعمر والطول لتكوين هذه الفئة وفقًا لما يتطلبه المنشئ.

 `<?php 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 
 echo sprintf('%s - %s - %s', $jack->name, $jack->age, $jack->height); 
 // => Jack - 26 - 5 Feet 6 Inches 
` 

الآن ، دعنا نقول أننا نريد إضافة طريقة جديدة لهذه الفئة تسمى isActive.

يقوم هذا الأسلوب بالتحقق من الخاصية النشطة وإرجاع الرسالة المناسبة بناءً على قيمة نشطة مع القيمة الافتراضية للقيمة false. يمكننا تعيينه على حق لأولئك الرجال النشطين.

 `<?php 
 
 class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
    public $active = false; 
 
    ..... 
    ..... 
 
    public function isActive() 
    { 
        if ($this->active == true) { 
            return "I am an active man."; 
        } else { 
            return "I am an idle man."; 
        } 
    } 
 } 
 
 $jack = new Man('Jack', '26', '5 Feet 6 Inches'); 
 $jack->active = true; 
 echo $jack->isActive(); 
 // => I am an active man. 
 
 $jake = new Man('Jake', '30', '6 Feet'); 
 echo "\n" . $jake->isActive(); 
 // => I am an idle man. 
` 

ماذا لو لم يكن الرجل نشطًا أو خاملًا؟

ماذا لو كان هناك مقياس من 1 إلى 4 يقيس مدى نشاط الرجل (1 - الخمول ، 2 - نشط طفيفة ، 3 - متوسطة النشاط ، 4 - نشطة جدا)؟

يمكننا الحصول على if..sese..else مثل هذه العبارات:

 `<?php 
 
 public function isActive() 
 { 
    if ($this->active == 1) { 
        return "I am an idle man."; 
    } elseif ($this->active == 2) { 
        return "I am a lightly active man."; 
    } elseif ($this->active == 3) { 
        return "I am a moderately active man."; 
    } else { 
        return "I am a very active man."; 
    } 
 } 
` 

الآن ، لنأخذ هذه خطوة أخرى.

ماذا لو لم تكن الخاصية النشطة للإنسان مجرد رقم صحيح (1 ، 2 ، 3 ، 4 ، وما إلى ذلك)؟

ماذا لو كانت قيمة النشاط "رياضية" أم "كسولة"؟

لا يتعين علينا إضافة المزيد من عبارات elseif تبحث عن مباراة مع تلك السلاسل؟

يمكن استخدام الطبقات المجردة لهذا السيناريو.

مع الفصول التجريدية ، تقوم بشكل أساسي بتعريف الفئة على أنها مجردة والأساليب التي تريد تطبيقها كملخص دون وضع أي كود داخل هذه الطرق.

ثم يمكنك إنشاء فئة تابعة توسيع الفئة المجردة الأصل وتنفيذ الأساليب المجردة في تلك الفئة التابعة.

بهذه الطريقة ، ستقوم بفرض جميع الفئات الفرعية لتحديد نسختها الخاصة من الأساليب المجردة. دعنا نرى كيف يمكننا أن نضع طريقة `isActive()` بنا `isActive()` .

# 1: تعريف الصف كملخص.

 `<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 } 
` 

# 2: إنشاء طريقة مجردة للطريقة التي تريد فرضها داخل الطبقة المجردة.

 `<?php 
 abstract class Man 
 { 
 ..... 
 ..... 
 abstract public function isActive(); 
 } 
` 

# 3: إنشاء فئة تابعة لتوسيع الفئة المجردة.

 `<?php 
 
 class AthleticMan extends Man 
 { 
 ..... 
 ..... 
 } 
` 

# 4: تنفيذ الطريقة المجردة داخل فئة الطفل.

 `<?php 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
` 

# 5: تحفيظ فئة الطفل (وليس الطبقة المجردة).

 `<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
` 

كامل تعريف فئة الملخص ورمز التنفيذ:

 `<?php 
 
 abstract class Man 
 { 
    public $name; 
    public $age; 
    public $height; 
    public $fav_sports; 
    public $fav_drinks; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
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
 
    abstract public function isActive(); 
 } 
 
 class AthleticMan extends Man 
 { 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
` 

في هذا الكود ، ستلاحظ أن `isActive()` يتم تعريف الأسلوب المجرد داخل الطبقة `isActive()` `Man` ويتم تنفيذه داخل فئة `AthleticMan` للطفولة.

الآن لا يمكن إنشاء مثيل لطبقة `Man` مباشرة لإنشاء كائن.

 `<?php 
 $ted = new Man('Ted', '30', '6 feet'); 
 echo $ted->isActive(); 
 // => Fatal error:  Uncaught Error: Cannot instantiate abstract class Man 
` 

أيضا ، كل فئة طفل من الطبقة المجردة (درجة `Man` ) تحتاج إلى تنفيذ جميع الأساليب المجردة. سوف يؤدي عدم تنفيذ مثل هذا إلى خطأ فادح.

 `<?php 
 class LazyMan extends Man 
 { 
 
 } 
 
 $robert = new LazyMan('Robert', '40', '5 feet 10 inches'); 
 echo $robert->isActive(); 
 // => Fatal error:  Class LazyMan contains 1 abstract method 
 // => and must therefore be declared abstract or implement 
 // => the remaining methods (Man::isActive) 
` 

باستخدام الفصول التجريدية ، يمكنك فرض بعض الأساليب ليتم تنفيذها بشكل فردي من قبل الفئات الفرعية.

### جهة تعامل

هناك مفهوم آخر للبرمجة الموجهة للكائنات يرتبط ارتباطًا وثيقًا بالفئات المستخلصة المسماة Interface.

والفرق الوحيد بين الطبقات الخلاصة والواجهات هو أنه في الطبقات الخلاصة ، يمكن أن يكون لديك مزيج من الأساليب المحددة ( `giveFirmHandshakes()` ، `isStubborn()` ، وما إلى ذلك) والأساليب المجردة ( `isActive()` ) داخل الفئة الرئيسية بينما في واجهات ، يمكنك فقط تحديد (عدم تنفيذ) الطرق داخل الفئة الرئيسية.

دعنا نرى كيف يمكننا تحويل فئة مجردة الإنسان أعلاه إلى واجهة.

# 1: تعريف الواجهة بكل الطرق (استخدام الواجهة بدلاً من الفصل).

 `<?php 
 interface Man 
 { 
    public function __construct($name, $age, $height); 
 
    public function giveFirmHandshakes(); 
 
    public function beStubborn(); 
 
    public function notPutToiletPaper(); 
 
    public function isActive(); 
 } 
` 

# 2: إنشاء فئة يقوم بتنفيذ الواجهة (استخدم الأدوات بدلاً من extends). يجب أن تقوم هذه الفئة بتطبيق جميع الطرق المعرفة داخل الواجهة بما في ذلك طريقة المنشئ.

 `<?php 
 class AthleticMan implements Man 
 { 
    public $name; 
    public $age; 
    public $height; 
 
    public function __construct($name, $age, $height) 
    { 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
    } 
 
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
 
    public function isActive() 
    { 
        return "I am a very active athlete."; 
    } 
 } 
` 

# 3: تحفيز فئة التنفيذ (AthleticMan)

 `<?php 
 $jack = new AthleticMan('Jack', '26', '5 feet 6 inches'); 
 echo $jack->isActive(); 
 // => I am a very active athlete. 
` 

باستخدام الواجهات ، يجب أن تضع في اعتبارك ما يلي:

*   لا يمكن تنفيذ الطرق داخل الواجهة.
    
*   لا يمكن تعريف المتغيرات (الخصائص) داخل الواجهة.
    
*   يجب تنفيذ جميع الطرق المحددة داخل الواجهة في فئة الطفل (تطبيق).
    
*   يجب تحديد جميع المتغيرات الضرورية داخل فئة الطفل.
    
*   تقوم واجهة المستخدم بتطبيق فئات التنفيذ الخاصة بها لتنفيذ كافة الطرق في الواجهة.
    

إذن ، ما هو استخدام الواجهات؟

لا يمكننا إنشاء فئة جديدة من AthleticMan وإنشاء جميع الطرق بدلاً من تطبيق الواجهة؟

هذا هو المكان الذي تأتي فيه _أنماط التصميم_ .

يتم استخدام الواجهات عندما يكون هناك فئة أساسية ( `Man` ) تريد فرضك على القيام بالأشياء (إنشاء كائن ، إعطاء GiveFirmHandshakes ، beStubborn ، notPutToiletPaper ومعرفة ما إذا كنت نشطًا) ولكن لا تريد أن تخبرك بالضبط كيف تقوم بذلك .

يمكنك المضي قدمًا وإنشاء فئات تنفيذية مع عمليات التنفيذ حسب ما تراه مناسبًا.

طالما يتم تنفيذ جميع الطرق ، لا تهتم واجهة `Man` كيف.

لقد ذهبنا على كيفية وموعد استخدام الطبقات المجردة والواجهات في PHP. إن استخدام مفاهيم OOP هذه لتكوين فِرَق ذات وظائف مختلفة تشترك في "المخطط" الأساسي نفسه (الطبقة المجردة أو الواجهة) يسمى تعدد الأشكال (Polymorphism).