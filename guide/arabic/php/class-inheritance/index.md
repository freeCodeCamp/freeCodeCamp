---
title: Class Inheritance
localeTitle: الوراثة الطبقية
---
## الوراثة الطبقية

_إعادة تسمية الكود مع الميراث في البرمجة الموجهة الموجهة_

هنا ، سوف نتحدث عن كيف يمكننا إعادة استخدام الكود الذي كتبناه دون الحاجة إلى أي تعليل برمجي باستخدام الميراث.

### فئة رجل

هذه هي صفحتنا `Man` :

 `<?php 
 class Man 
 { 
    // 1. Declare the class variables 
    public $name; 
    protected $age; 
    public $height; 
    public $fav_sports; 
    private $fav_drinks; 
 
    // 2. Create a constructor method with 3 required parameters: name, age and height 
    public function __construct($name, $age, $height) 
    { 
        // 2A. Assign the values of parameters to class properties 
        // Also known as instance variables 
        // Using "$this->property_name" 
        $this->name = $name; 
        $this->age = $age; 
        $this->height = $height; 
 
        // 2B. Print out the man's attributes and values upon instantiation 
        echo "Our man's name is: " . $this->name . "\n"; 
        echo "He is " . $this->age . " years old and " . $this->height . " tall."; 
    } 
 
    // 3. Create class methods 
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
 
    // 4. Age getter method 
    public function getAge() 
    { 
        return $this->age; 
    } 
 
    // Age setter method 
    public function setAge($age) 
    { 
        $this->age = $age; 
    } 
 
    // 5. Favorite Drinks setter method 
    public function setFavDrinks($drinks = array()) 
    { 
        if ($drinks) { 
            $this->fav_drinks = $drinks; 
        } 
    } 
 
    // Favorite Drinks getter method 
    public function getFavDrinks() 
    { 
        return $this->fav_drinks; 
    } 
 } 
` 

### رجل صحي

لنفترض أننا نريد إنشاء فئة أخرى تسمى `HealthyMan` والتي تحتوي على كل خصائص وأساليب فئة `Man` .

بدون الاضطرار إلى إعادة كتابة جميع الرموز الخاصة بفئة `Man` ، يمكننا إعادة استخدام هذا الرمز باستخدام الكلمة الأساسية الممتدة.

 `<?php 
 class HealthyMan extends Man 
 { 
 
 } 
` 

الآن لدينا جميع خصائص وأساليب الفصل من رجل داخل `HealthyMan` . يمكننا `HealthyMan` فئة `HealthyMan` للتحقق من هذا سريع حقيقي.

 `<?php 
 $jackie = new HealthyMan('Jackie', 25, '5\' 5"'); 
 // => Our man's name is: Jackie 
 // => He is 25 years old and 5' 5" tall. 
` 

يمكننا المضي قدمًا ووضع رياضة ومشروبات HealthyMan aka aka المفضلة.

 `<?php 
 $jackie->fav_sports = ['swimming', 'weight training']; 
 print_r($jackie->fav_sports); 
 // => 
 // Array 
 // ( 
 //     [0] => swimming 
 //     [1] => weight training 
 // ) 
 
 $jackie->setFavDrinks(['Matcha tea', 'Oolong Tea']); 
 print_r($jackie->getFavDrinks()); 
 // => 
 // Array 
 // ( 
 //     [0] => Matcha tea 
 //     [1] => Oolong Tea 
 // ) 
` 

الآن دعنا نرى ما إذا كان باستطاعتنا الاتصال بطرق `giveFirmHandshakes()` الرجل مثل `giveFirmHandshakes()` و `beStubborn()` و `notPutToiletPaper()` .

 `<?php 
 echo "\n" . $jackie->giveFirmHandshakes(); 
 // => I give firm handshakes. 
 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn. 
 
 echo "\n" . $jackie->notPutToiletPaper(); 
 // => It's not humanly possible to remember to put toilet paper rolls when they are finished 
` 

نحصل على كل هذه الأشياء من خلال مجرد ترميز فئة رجل باستخدام الكلمة الأساسية الممتدة.

### رجل صحي حقيقي

إذا كنا نرث `HealthyMan` من فئة `Man` ولا نفعل شيئًا بها ، فعندئذٍ يتفوق على الهدف كله.

يحتوي تصنيف HealthyMan على خصائص إضافية مثل `body_fat_percentage` و `workout_per_week` ، وأساليب مثل `eatHealthy()` و `meditateDaily()` و `laughOften()` .

بما أن هذه خصائص شخصية ، فيمكننا إما أن نضع عليها رؤية محمية أو خاصة وأن ننشئ طرق تعيين / تراكب للتغليف الكامل.

 `<?php 
 class HealthyMan extends Man 
 { 
    /** 
     * HealthyMan properties 
     */ 
    private $body_fat_percentage; 
    private $workout_per_week; 
 
    /** 
     * HealthyMan methods 
     */ 
    public function eatHealthy() 
    { 
        return "I only eat healthy meals."; 
    } 
 
    public function meditateDaily() 
    { 
        return "I set aside 20 minutes daily to meditate."; 
    } 
 
    public function laughOften() 
    { 
        return "I watch funny TV shows to unwind myself."; 
    } 
 
    /** 
     * HealthyMan Setters and Getters 
     */ 
    public function setBodyFatPercentage($fat_percentage) 
    { 
        $this->body_fat_percentage  = $fat_percentage; 
    } 
 
    public function getBodyFatPercentage() 
    { 
        return $this->body_fat_percentage; 
    } 
 
    public function setWorkoutPerWeek($workout_times) 
    { 
        $this->workout_per_week = $workout_times; 
    } 
 
    public function getWorkoutPerWeek() 
    { 
        return $this->workout_per_week; 
    } 
 } 
` 

يمكننا استدعاء هذه الطرق لمعرفة ما إذا كانت تعمل كما هو متوقع:

 `<?php 
 
 echo "\n" . $jackie->eatHealthy(); 
 // => I only eat healthy meals. 
 
 echo "\n" . $jackie->meditateDaily(); 
 // => I set aside 20 minutes daily to meditate. 
 
 echo "\n" . $jackie->laughOften(); 
 // => I watch funny TV shows to unwind myself. 
 
 $jackie->setBodyFatPercentage(12); 
 echo "\nBody Fat %: " . $jackie->getBodyFatPercentage(); 
 // => Body Fat %: 12 
 
 $jackie->setWorkoutPerWeek(5); 
 echo "\nWorkout Times Per Week: " . $jackie->getWorkoutPerWeek(); 
 // => Workout Times Per Week: 5 
` 

لقد نجحنا في إعادة استخدام الشفرة الحالية ونفذنا برنامجًا دراسيًا للأطفال.

### هل هو ذلك العنيد؟

على الرغم من أنه ورث عن `beStubborn()` من فئة Man ، حيث أن Jackie رجل سليم ، فهو عنيد فقط مرة واحدة فقط في فترة. يمكننا أن نحصل على `beStubborn()` " `beStubborn()` Healthy Man's `beStubborn()` " ليقول "أنا عنيد من حين `beStubborn()` " بدلاً من "أنا عنيد" فقط عن طريق تجاوز أسلوب "الطبقة الأم".

 `<?php 
 class HealthyMan extends Man 
 { 
    ..... 
    ..... 
 
    public function beStubborn() 
    { 
        return "I am stubborn once in a while."; 
    } 
 
    ..... 
    ..... 
 } 
` 

الآن عندما نتمكن من `beStubborn()` طريقة `beStubborn()` ، سنرى مخرجًا مختلفًا عن ذي قبل:

 `<?php 
 echo "\n" . $jackie->beStubborn(); 
 // => I am stubborn once in a while. 
` 

يوضح هذا كيف يعمل overriding الأسلوب في OOP.

باستخدام تجاوز الأسلوب ، نقوم بشكل أساسي بإعادة تعريف طريقة "الفئة الأصل" داخل الفئة الفرعية.

بهذه الطريقة ، يحتفظ أي مثيل لفئة الأبوين بطريقته الأصلية في حين أن أي مثيل للفئة الفرعية له الطريقة المعدلة أو التي تم تجاوزها.