---
title: Inheritance
localeTitle: ميراث
---
# ميراث

يشير وراثة Java إلى قدرة فئة Java على أن `inherit` الخصائص من فئة أخرى. فكر في الأمر وكأنه طفل يرث العقارات من والديه ، وهذا المفهوم مشابه جدًا لذلك. في لغة جافا ، يطلق عليه أيضًا اسم " _تمديد -_ فئة". بعض الأشياء البسيطة التي يجب تذكرها:

*   يسمى الفصل الذي يمتد أو يرث اسم **الفئة الفرعية**
*   تسمى الفئة التي يتم توسيعها أو توارثها بـ **superclass**

وهكذا ، يعطي الميراث جافا القدرة الرائعة على _إعادة استخدام_ الكود ، أو مشاركة الكود بين الطبقات!

دعونا وصف ذلك مع المثال الكلاسيكي لل `Vehicle` الفئة و `Car` الفئة:

 `public class Vehicle { 
    public void start() { 
        // starting the engine 
    } 
 
    public void stop() { 
        // stopping the engine 
    } 
 } 
 
 public class Car extends Vehicle { 
    int numberOfSeats = 4; 
 
    public int getNumberOfSeats() { 
        return numberOfSeats; 
    } 
 } 
` 

هنا ، يمكننا رؤية فئة `Car` ترث خصائص فئة `Vehicle` . لذلك ، ليس علينا كتابة نفس الكود `start()` الطريقتين `start()` و `stop()` `Car` كذلك ، حيث أن هذه الخصائص متاحة من الشركة الأم أو الطبقة الفائقة. لذلك ، فإن الكائنات التي تم إنشاؤها من فئة `Car` سيكون لها هذه الخصائص _أيضًا_ !

 `Car tesla = new Car(); 
 
 tesla.start(); 
 
 tesla.stop(); 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJXz/0)

ولكن ، هل للصف الرئيسي أساليب الطفل؟ لا ، لا.

لذلك ، عندما تحتاج إلى مشاركة جزء شائع من التعليمات البرمجية بين عدة صفوف ، من الجيد دائمًا أن يكون لديك فئة رئيسية ، ثم قم بتمديد هذه الفئة كلما دعت الحاجة! يقلل عدد أسطر التعليمات البرمجية ، ويجعل وحدات التعليمات البرمجية ، ويبسط الاختبار.

## ما يمكن أن يكون موروثا؟

*   جميع الحقول والأساليب `protected` `public` من الوالدين

## ما لا يمكن أن يورث؟

*   `private` مجالات وأساليب
*   الصانعين. وعلى الرغم من منشئ فئة فرعية _أن_ ندعو منشئ الفائقة إذا المحددة لها (المزيد عن ذلك لاحقا!)
*   فئات متعددة. يدعم Java تواريت **واحدة** فقط ، أي أنه يمكنك فقط ترث فئة واحدة في كل مرة.
*   مجالات. لا يمكن تجاوز الحقول الفردية للفئة حسب الفئة الفرعية.

## اكتب الصب والمراجع

في Java ، من الممكن الإشارة إلى فئة فرعية _كمثال_ لفئة الطبقة المميزة الخاصة بها. يطلق عليه _تعدد الأشكال_ في البرمجة الشيئية (OOP) ، والقدرة على كائن تأخذ على أشكال كثيرة. على سبيل المثال، `Car` كائن الفئة يمكن الرجوع إليها على أنها `Vehicle` مثيل فئة مثل هذا:

 `Vehicle car = new Car(); 
` 

على الرغم من أن العكس غير ممكن:

 `Car car = new Vehicle(); // ERROR 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJYB/0)

نظرًا لأنه يمكنك الرجوع إلى فئة فرعية من Java كمثيل فائق ، يمكنك بسهولة عرض مثيل لكائن فئة فرعية إلى مثيل superclass. من الممكن إرسال كائن superclass إلى نوع فئة فرعية ، ولكن _فقط إذا كان الكائن بالفعل مثيلًا للفئة الفرعية_ . لذا ضع ذلك في اعتبارك:

 `Car car = new Car(); 
 Vehicle vehicle = car; // upcasting 
 Car car2 = (Car)vechile; //downcasting 
 
 Bike bike = new Bike(); // say Bike is also a subclass of Vehicle 
 Vehicle v = bike; // upcasting, no problem here. 
 Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJYM/0)

الآن أنت تعرف كيفية مشاركة التعليمات البرمجية من خلال علاقة الوالدين والطفل. ولكن ، ماذا لو ، كنت لا تحب تنفيذ طريقة معينة في فئة الطفل وتريد أن تكتب واحدة جديدة لذلك؟ ماذا تفعل بعد ذلك؟

## تجاوز ذلك!

تسمح لك Java _بإلغاء_ أو إعادة تعريف الطرق المحددة في الطبقة الفائقة. على سبيل المثال ، يكون لفئة `Car` الخاصة بك تطبيق مختلف `start()` من `Vehicle` ، لذلك يمكنك القيام بذلك:

 `public class Vehicle { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void start() { 
      System.out.println("Car start code"); 
  } 
 } 
 
 Car car = new Car(); 
 car.start(); // "Car start code" 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJYZ/1)

لذلك ، من السهل تجاوز الأساليب في الفئة الفرعية. على الرغم من أن هناك _صيد_ . لن يتم تجاوز سوى طريقة الطبقة الفائقة هذه _بنفس طريقة توقيع_ الطريقة الفرعية. ويعني هذا أن تعريف طريقة الفئة الفرعية يجب أن يكون له نفس الاسم ، نفس العدد ونوع المعلمات ، وبالتتابع نفسه بالضبط. وبالتالي ، لن تتخطى `public void start()` `public void start(String key)` تجاوز `public void start()` .

**ملاحظات** :

*   لا يمكنك تجاوز الطرق الخاصة للفئة العليا. (واضح جدا ، أليس كذلك؟)
*   ماذا لو تم القضاء على طريقة الطبقة المتفوقة التي تقوم بتجاوزها في الفئة الفرعية أو تغيير الأساليب؟ سوف تفشل في وقت التشغيل! لذا توفر لك Java `@Override` يمكنك وضعه فوق طريقة الطبقة الفرعية ، والتي ستحذر مترجم تلك الحوادث!

تعتبر التعليقات التوضيحية في Java ممارسة جيدة للتشفير ، ولكنها ليست ضرورة. المترجم ذكي بما فيه الكفاية لمعرفة الغلبة من تلقاء نفسه رغم ذلك. بخلاف لغات OOP الأخرى ، التعليقات التوضيحية في Java لا تقوم بالضرورة بتعديل الطريقة أو إضافة وظائف إضافية.

## كيفية استدعاء أساليب الطبقة الفائقة؟

مضحك تسأل عن ذلك! ما عليك سوى استخدام الكلمة الرئيسية `super` :

 `public class Vehicle() { 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public void run() { 
      super.start(); 
  } 
 } 
 
 Car car = new Car(); 
 car.run(); // "Vehicle start code" 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJY4/0)

**ملاحظة** : على الرغم من أنه يمكنك استدعاء الأسلوب الأصل باستخدام استدعاء `super` ، فلا يمكنك زيادة التسلسل الهرمي للإرث مع مكالمات `super` مقفلة.

## كيف تعرف نوع الصف؟

باستخدام `instanceof` الكلمة. بوجود الكثير من الطبقات والفئات الفرعية ، سيكون من المربك قليلاً معرفة أي فئة هي فئة فرعية واحدة في وقت التشغيل. لذا ، يمكننا استخدام `instanceof` لتحديد ما إذا كان الكائن عبارة عن مثيل لفئة أو مثيل لفئة فرعية أو مثيل لواجهة.

 `Car car = new Car(); 
 
 boolean flag = car instanceof Vehicle; // true in this case! 
` 

## المقاولون والميراث

كما ذكرنا سابقًا ، لا يمكن تكوين المنشئات بشكل مباشر عن طريق فئة فرعية. على الرغم من أن فئة فرعية _مطلوبة_ لاستدعاء constructor الأصل الخاص به [كأول عملية](http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor) في مُنشئه الخاص. ماذا؟ كنت تفكر في ذلك ، وذلك باستخدام `super` :

 `public class Vehicle { 
    public Vehicle() { 
        // constructor 
    } 
    public void start() { 
      System.out.println("Vehicle start code"); 
    } 
 } 
 
 public class Car extends Vehicle { 
    public Car() { 
      super(); 
    } 
    public void run() { 
      super.start(); 
  } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJY8/0)

تذكر ، إذا لم يكن لدى الطبقة المميزة أي تعريفات ، فلن تضطر إلى الاتصال بها بشكل مفصل في الفئة الفرعية. جافا يعالج ذلك داخليا بالنسبة لك! يتم إجراء الاستدعاء إلى منشئ `super` في الحالة عندما يتم استدعاء الفئة الفائقة مع أي مُنشئ آخر غير _المُنشئ الافتراضي_ .

إذا لم يتم تعريف أية أدوات بناء أخرى ، فستقوم Java باستدعاء مُنشئ الفئة الفائقة الافتراضي ( _حتى إذا لم يتم تعريفه بشكل صريح_ ).

تهانينا ، الآن أنت تعرف كل شيء عن الميراث! قراءة المزيد حول الطرق المتقدمة لوراثة الأشياء في Class Abstract [واجهات Intergaces](//forum.freecodecamp.com/t/java-docs-interfaces) !