---
title: Interfaces
localeTitle: واجهات
---
# واجهات

واجهة في جافا قليلا مثل فئة، ولكن مع فارق كبير: و `interface` يمكن أن يكون _فقط_ تواقيع طريقة والحقول والطرق الافتراضية. منذ Java 8 ، يمكنك أيضًا إنشاء [طرق افتراضية](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html) . في الجزء التالي ، يمكنك مشاهدة مثال على الواجهة:

 `public interface Vehicle { 
    public String licensePlate = ""; 
    public float maxVel 
    public void start(); 
    public void stop(); 
    default void blowHorn(){ 
      System.out.println("Blowing horn"); 
   } 
 } 
` 

تحتوي الواجهة أعلاه على حقلين وطريقتين وطريقة افتراضية. وحدها ، ليست ذات فائدة كبيرة ، ولكنها تستخدم عادة مع الفصول. ماذا؟ بسيطة ، عليك أن تتأكد من أن بعض الصف يقوم `implements` .

 `public class Car implements Vehicle { 
    public void start() { 
        System.out.println("starting engine..."); 
    } 
    public void stop() { 
        System.out.println("stopping engine..."); 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CItd/0)

الآن ، هناك **قاعدة أساسية** : يجب على الفئة تنفيذ **كافة** الطرق في الواجهة. يجب أن تحتوي الطرق _على نفس_ التوقيع _بالضبط_ (الاسم والمعلمات والاستثناءات) كما هو موضح في الواجهة. الفئة _لا_ تحتاج إلى إعلان الحقول رغم ذلك ، فقط الطرق.

## مثيلات واجهة

بمجرد إنشاء فئة Java تقوم `implements` أي واجهة ، يمكن الإشارة إلى مثيل الكائن كمثيل للواجهة. هذا المفهوم مشابه لمبدأ إنشاء الوراثة.

 `// following our previous example 
 
 Vehicle tesla = new Car(); 
 
 tesla.start(); // starting engine ... 
` 

**لا يمكن أن** تحتوي واجهة على أساليب منشئ ، لذلك **لا يمكنك** إنشاء مثيل لواجهة بنفسها. يجب إنشاء مثيل لفئة معينة تقوم بتطبيق واجهة للرجوع إليها. فكر في الواجهات على أنها نموذج عقد فارغ ، أو نموذج.

ما الذي يمكنك القيام به مع هذه الميزة؟ تعدد الأشكال! يمكنك استخدام الواجهات فقط للإشارة إلى مثيلات الكائن!

 `class Truck implements Vehicle { 
    public void start() { 
        System.out.println("starting truck engine..."); 
    } 
    public void stop() { 
        System.out.println("stopping truck engine..."); 
    } 
 } 
 
 class Starter { 
    // static method, can be called without instantiating the class 
    public static void startEngine(Vehicle vehicle) { 
        vehicle.start(); 
    } 
 } 
 
 Vehicle tesla = new Car(); 
 Vehicle tata = new Truck(); 
 
 Starter.startEngine(tesla); // starting engine ... 
 Starter.startEngine(tata); // starting truck engine ... 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CItm/0)

## ولكن ماذا عن واجهات متعددة؟

نعم ، يمكنك تنفيذ واجهات متعددة في فصل واحد. أثناء [تواجدك](//forum.freecodecamp.com/t/java-docs-inheritance) في [التوارث](//forum.freecodecamp.com/t/java-docs-inheritance) داخل الصفوف ، تم تقييدك في فئة واحدة فقط ، يمكنك هنا توسيع أي عدد من الواجهات. ولكن لا ننسى تنفيذ _جميع_ أساليب جميع واجهات ، وإلا سوف تفشل التجميع!

 `public interface GPS { 
    public void getCoordinates(); 
 } 
 
 public interface Radio { 
    public void startRadio(); 
    public void stopRadio(); 
 } 
 
 public class Smartphone implements GPS,Radio { 
    public void getCoordinates() { 
        // return some coordinates 
    } 
    public void startRadio() { 
      // start Radio 
    } 
    public void stopRadio() { 
        // stop Radio 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CIto/0)

## بعض ميزات واجهات

*   يمكنك وضع المتغيرات داخل واجهة ، على الرغم من أنه لن يكون قرارًا معقولًا لأن الفئات غير مرتبطة بالمتغير نفسه. باختصار ، تجنب وضع المتغيرات!
*   تكون جميع المتغيرات والطرق في الواجهة عامة ، حتى إذا تركت الكلمة الرئيسية `public` .
*   لا يمكن للواجهة تحديد تنفيذ طريقة معينة. ما يصل إلى فئات للقيام بذلك. على الرغم من وجود استثناء حديث (انظر أدناه).
*   إذا قامت فئة بتطبيق واجهات متعددة ، فهناك احتمال بعيد لتداخل توقيع الأسلوب. بما أن Java لا تسمح بطرق متعددة من نفس التوقيع بالضبط ، فقد يؤدي هذا إلى حدوث مشكلات. انظر [هذا السؤال](http://stackoverflow.com/questions/2598009/method-name-collision-in-interface-implementation-java) لمزيد من المعلومات.

## طرق الواجهة الافتراضية

قبل Java 8 ، لم يكن لدينا طريقة لتوجيه واجهة لتطبيق طريقة معينة. هذا يؤدي إلى الكثير من الارتباك وفواصل التعليمات البرمجية إذا تم تغيير تعريف واجهة فجأة.

لنفترض أنك كتبت مكتبة مفتوحة المصدر تحتوي على واجهة. لنفترض أن عملاءك ، أي جميع المطورين تقريبًا في جميع أنحاء العالم ، يستخدمونها بكثافة ويسعدون. الآن كان عليك ترقية المكتبة بإضافة تعريف أسلوب جديد إلى الواجهة لدعم ميزة جديدة. ولكن هذا من شأنه أن يكسر _جميع عمليات_ البناء لأن كل الطبقات التي تقوم بتنفيذ هذه الواجهة يجب أن تتغير الآن. يا لها من كارثة!

لحسن الحظ ، توفر لك Java 8 الآن الطرق `default` للواجهات. _يمكن أن_ تحتوي الطريقة `default` على التنفيذ الخاص بها _مباشرة_ داخل الواجهة! لذا ، إذا لم يقم تطبيق Class بتنفيذ طريقة افتراضية ، فسيأخذ المترجم التنفيذ المذكور داخل الواجهة. جميل أليس كذلك؟ لذلك في مكتبتك ، يمكنك إضافة أي عدد من الطرق الافتراضية في واجهات دون الخوف من كسر أي شيء!

 `public interface GPS { 
    public void getCoordinates(); 
    default public void getRoughCoordinates() { 
        // implementation to return coordinates from rough sources 
        // such as wifi & mobile 
        System.out.println("Fetching rough coordinates..."); 
    } 
 } 
 
 public interface Radio { 
    public void startRadio(); 
    public void stopRadio(); 
 } 
 
 public class Smartphone implements GPS,Radio { 
    public void getCoordinates() { 
        // return some coordinates 
    } 
    public void startRadio() { 
      // start Radio 
    } 
    public void stopRadio() { 
        // stop Radio 
    } 
 
    // no implementation of getRoughCoordinates() 
 } 
 
 Smartphone motoG = new Smartphone(); 
 motog.getRoughCoordinates(); // Fetching rough coordinates... 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CItp/0)

### ولكن ، ماذا يحدث إذا كان للواجهتين نفس توقيع الطريقة؟

سؤال رائع. في هذه الحالة ، إذا لم تقدم التطبيق في الصف ، فسوف يتم خلط المترجم الضعيف ويفشل ببساطة! يجب عليك توفير تنفيذ طريقة افتراضية داخل الفئة أيضًا. هناك أيضًا طريقة رائعة تستخدم ميزة `super` للاتصال بأي تطبيق تريده:

 `public interface Radio { 
    // public void startRadio(); 
    // public void stopRadio(); 
 
    default public void next() { 
        System.out.println("Next from Radio"); 
    } 
 } 
 
 public interface MusicPlayer { 
    // public void start(); 
    // public void pause(); 
    // public void stop(); 
 
    default public void next() { 
        System.out.println("Next from MusicPlayer"); 
    } 
 } 
 
 public class Smartphone implements Radio, MusicPlayer { 
    public void next() { 
        // Suppose you want to call MusicPlayer next 
        MusicPlayer.super.next(); 
    } 
 } 
 
 Smartphone motoG = new Smartphone(); 
 motoG.next(); // Next from MusicPlayer 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CIts/0)

## طرق ثابتة في واجهات

جديد أيضا إلى Java 8 هو القدرة على إضافة أساليب ثابتة إلى واجهات. تتشابه الطرق الثابتة في الواجهات تقريبًا مع الطرق الثابتة في الفصول الخرسانية. الاختلاف الكبير الوحيد هو أن الأساليب `static` غير موروثة في الفئات التي تقوم بتطبيق الواجهة. وهذا يعني أنه يتم الإشارة إلى الواجهة عند استدعاء الأسلوب الثابت وليس الفئة التي تقوم بتطبيقه.

 `interface MusicPlayer { 
  public static void commercial(String sponsor) { 
    System.out.println("Now for a message brought to you by " + sponsor); 
  } 
 
  public void play(); 
 } 
 
 
 class Smartphone implements MusicPlayer { 
    public void play() { 
        System.out.println("Playing from smartphone"); 
    } 
 } 
 
 class Main { 
  public static void main(String[] args) { 
    Smartphone motoG = new Smartphone(); 
    MusicPlayer.commercial("Motorola"); // Called on interface not on implementing class 
    // motoG.commercial("Motorola"); // This would cause a compilation error 
  } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CIts/9)

## وراثة واجهة

من الممكن أيضًا في Java لواجهة _ترث_ واجهة أخرى ، باستخدام ، تفكر في ذلك ، `extends` الكلمة الرئيسية:

 `public interface Player { 
    public void start(); 
    public void pause(); 
    public void stop(); 
 } 
 
 public interface MusicPlayer extends Player { 
    default public void next() { 
        System.out.println("Next from MusicPlayer"); 
    } 
 } 
` 

هذا يعني ، أن تطبيق Class `MusicPlayer` Interface (واجهة `MusicPlayer` يجب أن يقوم بتنفيذ _جميع_ أساليب `MusicPlayer` بالإضافة إلى `Player` :

 `public class SmartPhone implements MusicPlayer { 
    public void start() { 
        System.out.println("start"); 
    } 
    public void stop() { 
        System.out.println("stop"); 
    } 
    public void pause() { 
        System.out.println("pause"); 
    } 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CIty/0)

عفوًا ، هل نسيت `next()` ؟ انظر ، لأنه كان طريقة `default` ، لم يكن لدي لتوفير التنفيذ على الإطلاق. (لن يعمل لـ JDK <8)

لذلك ، الآن لديك فهم جيد للواجهات! اذهب لمعرفة المزيد عن "الطبقات المستخلصة" لتعرف كيف تقدم لك جافا طريقة أخرى لتعريف العقود.