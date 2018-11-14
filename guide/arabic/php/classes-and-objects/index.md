---
title: Classes and Objects
localeTitle: الطبقات والكائنات
---
# الطبقات والكائنات

الطبقات هي الطريقة التي نمثل بها أنواع الكائنات في العالم. قد تكون الأشياء هي _الحالات_ الفعلية لتلك الطبقة في العالم. يعرّف فئة _خصائص_ _وسلوك_ كائن من تلك الفئة. يحدد الفصل كيف يمكن أن يتفاعل الكائن مع بقية العالم. تسمح لنا الفصول أيضًا بتجريد التفاصيل التي لا نريد إظهارها للآخرين!

قل على سبيل المثال لديك كلب يدعى سبوت. Spot هو مثال واحد لكائن Dog (class).

كود PHP لتعريف فئة:

 `// Dog class 
 class dog { 
    // Keep name and age private - we don't want to be able to change these! 
    private $name; 
 
    private $age; 
 
    // Constructor allows us to make an object of this class with given parameters. 
    function __construct($name, $age){ 
        $this->name = $name; 
        $this->age = $age; 
        echo 'Dog named: '.$this->name.' is '.$this->age.' years old.'; 
    } 
 
    // Destructor gets called when the item is deleted. 
    function __destruct(){ 
        echo 'Dog '.$this->name.' has ran off into the sunset'; 
    } 
 
    function getname() { 
        echo $this->name; 
    } 
 
    function getage() { 
        echo $this->age; 
    } 
 
 } 
 
 $mydog = new dog("Spot", "8"); 
 echo $mydog->getname(); 
 echo $mydog->getage(); 
` 

سترد الشفرة أعلاه: كلب يدعى: سبوت 8 سنوات. بقعة 8 وقد دارت بقعة الكلب الى غروب الشمس

أنا خلقت كائن $ mydog من الكلب الطبقي. تم استدعاء منشئه ، استخدمت بعض الأساليب داخل الطبقة ، ثم تم استدعاء destructor.