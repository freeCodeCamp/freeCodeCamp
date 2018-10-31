---
title: Constructors
localeTitle: الصانعين
---
إذا كان هناك نسخ من أحد الفصول ، فما هو الهدف؟ يجب أن أتمكن من تخزين البيانات فيه بشكل صحيح؟

هذا عندما نستخدم إما **getter** (على سبيل المثال ، getName ()) / **setter** (على سبيل المثال ، setName ()) ، أو في هذه الحالة البناءون ، لتهيئة فئة. بشكل أساسي ، تحتوي كل فئة Java على مُنشئ وهو الأسلوب الذي يسمى أولاً عند تهيئة أي كائن من الفئة. فكر في الأمر على أنه رمز صغير.

عند كتابة فصل دراسي بدون أي مُنشئ ، ينشئ المحول البرمجي لـ Java مُنشئًا افتراضيًا:

 `public class Car { 
    private String name; 
 } 
 
 Car modelS = new Car(); 
` 

هذا التهيئة بدون معلمات هي طريقة استدعاء المُنشئ الافتراضي. يمكنك أيضًا الحصول على مُنشئ افتراضي مكتوب بهذه الطريقة:

 `public class Car { 
    private String name; 
 
    // User Specified Default Constructor 
    public Car() { 
        name = "Tesla"; 
    } 
 } 
` 

ثم ، عند استدعاء `new Car()` ، سيتم الحصول على تهيئة `name` المتغير تلقائيًا إلى "Tesla" لمثيل كائن السيارة هذا.

من الواضح أن المنشئات هي بالضبط كما تبدو: فهي تستخدم `construct` أي ، إنشاء كائن من فئة معينة.  
يشبه البنّاء إعلانات الأسلوب ، لكنهم مختلفون بعض الشيء بمعنى أنهم:

1.  يتم تسمية بالضبط نفس الفئة.
2.  ليس لديك نوع عودة.

وبالتالي ، فإن الغرض من استخدام `constructors` هو توفير:

1.  طريقة لإنشاء كائن.
2.  توفير القيم الأولية لخصائص الكائن.
3.  التحكم في كيفية إنشاء كائن.

دعونا ننظر في مثال آخر. لنفترض أن شركة هوندا (الشركة المصنعة للسيارات) تريد أن يتم تسمية جميع سياراتها باسم `Honda <a name>` . من أجل تنفيذ ذلك ، قد نمثل هذا باستخدام فئة على النحو التالي:

 `public class Car { 
 
    private String name; 
 
    // Constructor. 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CTJ4/1)

لاحظ أنه عندما نقوم بكتابة مُنشئ بهذه الطريقة ، أي توفير معلمة ، فنحن نسيطر على (النقطة رقم 3) الطريقة التي يتم بها إنشاء مثيل `Car` . باختصار ، نحن نقول في هذا المثال **أنك يجب أن تقدم اسمًا نموذجيًا للحصول على مثيل لفئة السيارات** .

لماذا هذا مهم؟ هناك أوقات تريد فيها مثيل `one and only one` وفئة `one and only one` للاستخدام في تطبيقك بأكمله. إحدى الطرق لتحقيق ذلك هي باستخدام منشئ `private` .

افترض أنك بحاجة إلى فصل يمثل البنك. لا تريد أن ينشئ الأشخاص مثيلًا `Bank` الإطلاق. لذلك ، يمكنك تصميم صفك:

 `public class Bank { 
 
    private static Bank instance; 
 
    private Bank(){ 
    } 
 
    public static Bank getInstance(){ 
        if(null == instance){ 
            instance = new Bank(); 
        } 
        return instance; 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CTJz/0)

لاحظ أن منشئ `private` . هذا يفرض حقيقة أنه لا يسمح لأي شخص آخر بإنشاء مثيل للبنك.  
في الواقع ، إذا كنت في فصل آخر ، فحاول:

 `Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank. 
` 

لذلك ، الطريقة الوحيدة للوصول إلى المثيل باستخدام `Bank.getInstance()` . تسمى مثل هذه الحالات `Singleton` منذ أن تحصل على مثيل واحد بالضبط (لكل VM لتكون دقيقة) طوال فترة تطبيقك.

يمكن أن يكون هناك عدد كبير من المنشئات في الفصل. ولكن يجب أن تختلف في المعلمات الأسلوب. هذا هو التحميل الزائد. على وجه الدقة ، نقول أن التحميل الزائد للمنشئ قد حدث عندما يكون هناك نوعان أو أكثر لهما نفس الاسم ، ولكن معلمات طريقة مختلفة. ونتيجة لذلك ، تحتوي الوظيفتان على تواقيع مختلفة للطريقة ويتم التعامل معها بواسطة Java كمنشئات مختلفة تمامًا. فمثلا:

 `public class Car { 
 
    private String name; 
    private String carType; 
 
    // Constructor. 
    public Car(){ 
        this.name = "No Name"; 
        this.carType = "No Type"; 
    } 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public Car(String model, String carType){ 
        this.name = model; 
        this.carType = carType; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public String getCarType(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
 
        // Other Way To Initialize 
        Car car = new Car("Civic","Sedan"); 
        System.out.println( car.getName() + " "+ car.getCarType() ); 
 
    } 
 } 
` 

لذلك ، الطريقة الوحيدة للوصول إلى المثيل باستخدام `Bank.getInstance()` . تسمى مثل هذه الحالات `Singleton` منذ أن تحصل على مثيل واحد بالضبط (لكل VM لتكون دقيقة) طوال فترة تطبيقك.

## نسخ المنشئ

يعتبر مُنشئ النسخة مُنشئًا يقوم بإنشاء كائن من خلال تهيئته بكائن من نفس الفئة ، والذي تم إنشاؤه مسبقًا. يتم استخدام منشئ النسخ ل-

1.  تهيئة كائن من آخر من نفس النوع.
2.  انسخ كائن لتمريره كوسيطة للدالة.
3.  نسخ كائن لإرجاعها من وظيفة. هنا هو برنامج يظهر استخدام بسيط لمنشئ النسخة:

 `class Complex { 
 
    private double re, im; 
 
    // A normal parametrized constructor 
    public Complex(double re, double im) { 
        this.re = re; 
        this.im = im; 
    } 
 
    // Copy constructor 
    Complex(Complex c) { 
        System.out.println("Copy constructor called"); 
        re = c.re; 
        im = c.im; 
    } 
 
    } 
 } 
` 

[تشغيل الرمز الكامل](https://repl.it/MwnJ)

// ## Constructor Chaining