---
title: Classes and Objects
localeTitle: الطبقات والكائنات
---
# الطبقات والكائنات

الفصول هي مجموعات من المتغيرات والعمليات عليها. يمكن أن يكون للفئة متغيرات ، أو طرق (أو وظائف) ، أو منشئات (أو طرق يتم استخدامها للبدء ، أكثر من ذلك لاحقًا!).

قد تحتوي الفئة على أي من أنواع المتغيرات التالية.

*   متغيرات الفئة: هي المتغيرات التي يتم تعريفها داخل تعريف الفئة ، خارج أي أسلوب ، باستخدام الكلمة الأساسية الثابتة. يتم مشاركة متغير فئة عبر كافة مثيلات الفئة. تُعرف متغيرات الصنف أيضًا باسم المتغيرات الساكنة ، حيث يتم إدخالها مرة واحدة فقط في وقت تجميع المجموعة ، ومن ثم تكون نسخة واحدة فقط متاحة لجميع الحالات.
*   متغيرات المثيل: الاختلاف مع متغيرات الفئة هو أن متغيرات الحالة تتم تهيئتها داخل مُنشئ الفئة ولا يتم مشاركتها عبر جميع الكائنات. في وقت إنشاء مثيل ، يتم إنشاء نسخة جديدة من متغير المثيل.

 `public class Example { 
 
    private static int myVar = 1; // Class Variable 
 
    private int mySecondVar; // Instance Variable 
    Example(int mySecondVar) { 
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor 
` 

فكر في `Class` كمخطط لإنشاء شيء ملموس. A `Class` يخبرك كيف 'ما' و 'كيف' ل `object` قال من الدرجة سيبدو مرة واحدة `instantiated` . في جوهرها ، فإنه يحدد `properties` (مثل اللون ، سعة المحرك) `behavior` (توقف ، تسريع ، تغيير التروس ، والسمك إلخ) لسيارة في الحالة أدناه.

الكائنات هي _أمثلة_ لفئة. جميع الكائنات هي أمثلة لفئة معينة. تخيل أن يكون الصف "قالبًا" ، والذي منه ينسخ كل كائن. عندما تقوم بإنشاء كائن ، فإنها تقوم بشكل أساسي بإنشاء كائن جديد في مخطط الفصل. الآن دعونا ننظر إلى هذا في جزء صغير من التعليمات البرمجية:

 `// Car class 
 public class Car { 
    // car name 
    private String name; 
 
    // car manufacturer name 
    private String manufacturerName; 
 
    // constructor 1 
    public Car() { 
    } 
 
    // constructor 2 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
 
    // getter name method 
    public String getName() { 
        return name; 
    } 
 
    // getter manufacture method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 
    //setter name method 
    public void setName(String name){ 
        this.name = name; 
    } 
 
    //setter manufacture method 
    public void setManufacture(String man){ 
        this.manufacturerName = man; 
    } 
 } 
 
 // sample code 
 
 Car modelS = new Car("Model S","Tesla"); 
 // prints Tesla Model S 
 System.out.println("Full Car Model S= " + modelS.getManufacturerName() + " : " + modelS.getName()); 
 
 Car modelX = new Car(); 
 modelX.setName("Model X"); 
 modelX.setManufacture("BMW"); 
 // prints Tesla Model X 
 System.out.println("Full Car Model X= " + modelX.getManufacturerName() + " : " + modelX.getName()); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJZP/0)

لذا ، `Car` هي فئة ، والتي تحتوي على حقول أو `name` خصائص و `manufacturerName` . `modelS` هو كائن من فئة `Car` . لذلك ، `modelS` أيضًا `modelS` على نفس الخصائص والأساليب.

من المعيار إلى حد كبير ضمان "معلومات" الكائن ، في هذه الحالة `name` المتغيرات `manufacturerName` ، لتكون خاصة ويتم الوصول إليها فقط عن طريق هذه الحاصدين والمستأجرين. هذا يمنع مشكلة في التعليمات البرمجية التصحيح التي تتضمن المتغيرات عضو الكائن. إذا تم الإعلان عن المتغيرات الخاصة بالأعضاء ، ولأي سبب تعطل البرنامج ، يمكنك الحصول على تتبع مكدس معقدة نوعًا ما قد يصعب الإشارة إلى الخطأ. إن تبقي المتغيرات الخاصة ، ولا يمكن الوصول إليها إلا عن طريق الحاصلين على الجوائز والمستأجرين ، سوف تبسط رسالة الخطأ هذه.