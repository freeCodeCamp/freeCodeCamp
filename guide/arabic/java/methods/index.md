---
title: Methods
localeTitle: أساليب
---
# أساليب

الطريقة الأكثر تميزا في جاوة هو على الارجح `public static void main(String[]args)` حيث `public` يعني أن المستخدمين من الوصول إلى الأسلوب `static` يعني أن أسلوب يستند إلى "الطبقة" بدلا من "مثيل" `void` وسائل أنه لن يتم إرجاع أي شيء من الطريقة إلى طريقة أخرى (مستوى أعلى) ، والسبب `main` هو اسم هذه الطريقة الخاصة.

`getName()` و `getManufacturerName()` هما طريقتان "Getter" استخدمناها هنا. بشكل عام ، تتكون الطرق في Java من هذه الأجزاء -

*   وصول Modifer (اختياري) - `public` ، `private` ، أو `protected` . الإعدادات الافتراضية لحزم خاصة إذا تم حذفها
*   عودة نوع - هذا مطلوب، فإنه يدل على قيمة ما إرجاع الأسلوب، أو `void` إذا تم إرجاع أي شيء
*   اسم الأسلوب - يتبع اتفاقية camelCase
*   قائمة المعلمات - قائمة المعلمات مع اسمها ونوعها ، فارغة إذا لم يتم قبول أي معلمات
*   جسد الطريقة محاطًا بـ `{ }`

يمكن أيضًا أن تحتوي الطرق بشكل اختياري على الكلمة الرئيسية `static` ، أي أنها مرتبطة بالفئة نفسها ، بدلاً من مثيل للفئة ، الرئيسية السابقة `public static void main()` .

لاحظ ، على عكس جافا سكريبت ، **يتعين** علينا تحديد نوع الإرجاع لأي طريقة نكتبها ، وإلا فسوف يفشل في وقت التحويل البرمجي. إذا كنت لا تريد طريقة لإرجاع أي شيء ، فاستخدم نوع الإرجاع `void` .

يحتوي كل أسلوب على توقيع ، وهو تركيبة نوع البيانات والاسم وعدد الوسيطات التي تأخذها الطريقة. في `public static void main` ، لا يحتوي الأسلوب على نوع بيانات محدد ويستخدم بدلاً من ذلك `void` للإعلان عن عدم إرجاع أي بيانات. في طريقة تسمى `public static double ave(double val, double val)` يكون نوع البيانات "double" (0.0) ، ويكون الاسم "ave" (متوسط) بينما تأخذ الطريقة اثنين من الوسيطات. **يجب أن** يكون لكل طريقة توقيع فريد.

 `public class Car { 
    private String name; 
    private String manufacturersName; 
 
    public void changeName() { 
        name = "Tesla"; 
    } 
 
    public String getName(){ 
        return name; 
    } 
 
    public String getManufacurername(){ 
        return manufacturersName; 
    } 
 
 } 
` 

يمكن تمرير المعلمات في الأساليب. المعلمات معلنة فقط بعد اسم الأسلوب ، داخل الأقواس. بناء الجملة لإعلان المعلمة هو \[نوع البيانات\] \[الاسم\].

 `public class Car { 
    private String name; 
 
    public void changeName(String newName) { 
        name = newName; 
    } 
 } 
` 

كما هو الحال مع أي لغة أخرى ، يتم استخدام الأساليب (أو الوظائف ، إذا كنت هنا من JS world) في كثير من الأحيان من حيث النمطية والقابلية لإعادة الاستخدام.

غالبًا ما تخدم الطرق العديد من الأغراض مثل تحديث المعلومات في كائن ما أو تقديم البيانات إلى المتصل. وهنا بعض الأمثلة.

 `public class Car { 
    private int numberOfWheels; 
 
    public void setNumberOfWheels(int newNumberOfWheels) { 
        numberOfWheels = newNumberOfWheels; 
    } 
 
    public int getNumberOfWheels() { 
        return numberOfWheels; 
    } 
 } 
` 

في حالة `getNumberOfWheels()` يكون نوع الإرجاع هو رقم `int` . يخبر `return` الكلمة الرئيسية جافا بتمرير قيمة متغير متغير `numberOfWheels` . ومع ذلك ، لا يحتوي `setNumberOfWheels(int newNumberOfWheels)` على أي نوع من أنواع الإرجاع ، حيث إنه عبارة عن أسلوب محدد كما تمت رؤيته سابقًا. في هذه الحالة على الرغم من أنه يأخذ في الوسيطة من نوع `int` ويجعل مثيل varicOfWheels `numberOfWheels` يساوي `newNumberOfWheels` .

توجد أيضًا طريقة خاصة تسمى مُنشئ تسمح بضبط البيانات أو العمليات التي سيتم تنفيذها عند إنشاء الطبقة. هذا المنشئ ليس لديه نوع الإرجاع.

 `public class Car { 
    private String model; 
    private int numberOfWheels; 
 
    public Car(String model, int numberOfWheels) { 
        this.model = model; 
        this.numberOfWheels = numberOfWheels; 
    } 
 } 
` 

في `Car` الفئة و `Car(String model, int numberOfWheels)` طريقة يكون لديك نفس الاسم من أجل جافا لمعرفة أنه هو المنشئ. الآن في أي وقت تقوم بإنشاء مثيل `Car` جديدة مع الكلمة الأساسية `new` ستحتاج إلى استدعاء هذا المنشئ وتمرير في البيانات المطلوبة.