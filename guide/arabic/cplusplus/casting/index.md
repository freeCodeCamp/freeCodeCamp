---
title: Casting
localeTitle: صب
---
## صب

المصبوب عامل تشغيل خاص يفرض تحويل نوع بيانات واحد إلى نوع آخر

يختلف الصب في C ++ إلى حد ما عن C ++ يجعل استخدام وظائف الصب متميزة.

### static\_cast

يتم استخدام قالب ثابت للتحويلات الضمنية بين الأوليات ونوع التحميل الزائد.

### const\_cast

يمكن استخدام Const Cast لإلقاء العقوبة. هذا مفيد عندما تكون هناك رغبة في تحوير قيمة ثابتة. وينبغي استخدام ذلك بشكل مقتصد ، وبدلاً من ذلك ، ينبغي للمرء أن يفكر في جعل المعلمات / الوظائف غير ثابتة في الحالات التي يتم فيها استخدام قالب بث.

يمكن أن يؤدي Const Cast أيضًا إلى سلوك غير معروف. يجب أن يكون التطبيق الوحيد لـ Const const هو إزالة الثوابت من القيمة التي تم تمريرها إلى الدالة والعلامة المميزة. إذا كانت القيمة const حقيقةً ، أي ، يتم وضع علامة const في وقت التحويل البرمجي وتعيين قيمة ، سيؤدي تحويل const وتغيير المتغير إلى سلوك غير معروف.

 `const int y = 10;             // y is set to 10. 
 const_cast<int &>(y) = 20;    // undefined behaviour. 
` 

### dynamic\_cast

يتم استخدام الإرسال الديناميكي لإلقاء كائن ضمن التسلسل الهرمي الخاص به (إلى الأصل ، من الأصل إلى الأشقاء). لا يمكن استدعاء الطبقة الديناميكية إلا على فئات متعددة الأشكال. وبالتالي ، فإن الطبقة الأصلية في هذه الحالة يجب أن يكون `MyClass` عضوًا ظاهريًا ، موجودًا على شكل destructor افتراضي.

إذا فشل `nullptr` الديناميكي ، فسيتم إرجاع `nullptr` . قد يكون التمثيل الديناميكي مفيدًا في تحديد أنواع الكائنات في وقت التشغيل. ومع ذلك ، تجدر الإشارة إلى أن المصبوب الديناميكي ليس مجانيًا وفي بعض الحالات قد تكون التقنيات الأخرى أكثر كفاءة في تحديد نوع الصف في وقت التشغيل.

### reinterpret\_cast

ربما تكون إعادة التسمية المسببة للتوتر هي الأخطر من بين جميع أشكال C ++ ، ولكن عند استخدامها بشكل صحيح يمكن أن تكون مثالية. لا تؤدي إعادة صياغة التسمية إلى حدوث أي تكلفة للأداء نظرًا لأنها لا تؤدي أي تحويلات. إنه ببساطة يرشد المحول البرمجي لمعالجة الكائن المصبوب كما لو كان من النوع المطلوب. يمكن أن يؤدي ذلك أيضًا إلى ظهور مشكلات المحاذاة ، لذا يجب استخدامها بشكل مقتصد وفقط عندما يتم التعرف على الآثار الجانبية وحسابها.

#### ملاحظة على الطرز C- النمط

يدعم C ++ استخدام قوالب C النمط ، على الرغم من أنها غير مستحسن. سيُسْتَخْدِم استخدام الزهر على النمط C على المحول البرمجي أن يقوم أولاً بأداء _قالب_ ثابت _، في حالة_ فشل الاستطاعة _الثابتة_ ، يتم استخدام reinterpret\_cast في مكانه. لهذا السبب ، قد ينتج عن أنماط C النمط نتائج غير متوقعة وتثير مشكلات غير متوقعة.

## أمثلة

 `#include <iostream> 
 
 class MyClass { 
 public: 
    virtual ~MyClass() = default; 
 
    void greet() { 
        std::cout << "Hello World!" << std::endl; 
    } 
 }; 
 
 class MyClassChild : public MyClass { 
 }; 
 
 void reinterpretCastTest(void *objectPtr) { 
    // Let's assume we know objectPtr is of type MyClass * 
    auto myClassObj = reinterpret_cast<MyClassChild *>(objectPtr); 
    myClassObj->greet(); 
 } 
 
 void constCastTest(const MyClassChild &myClassChild) { 
    auto nonConst = const_cast<MyClassChild &>(myClassChild); 
    nonConst.greet(); 
 } 
 
 void dynamicCastTest(MyClass *myClass) { 
    auto *child = dynamic_cast<MyClassChild *>(myClass); 
    child->greet(); 
 } 
 
 void staticCastTest(float floatVal) { 
    // Convert the float into an int. 
    auto intVal = static_cast<int>(floatVal); 
    std::cout << intVal << std::endl; 
 } 
 
 int main() { 
    MyClassChild myClass; 
    reinterpretCastTest(&myClass); 
    constCastTest(myClass); 
    dynamicCastTest(&myClass); 
    staticCastTest(10.5); 
 
    return 0; 
 } 
`