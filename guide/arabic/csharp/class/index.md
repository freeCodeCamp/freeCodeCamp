---
title: Class
localeTitle: صف دراسي
---
## صف دراسي

يتم تعريف الفئة في C # كنوع مرجع. لكي تقوم بتأسيس متغير بنوع مرجعي ، يجب عليك تحديد الكلمة الرئيسية `new` ، وإلا سيكون للمتغير القيمة الافتراضية للقيمة `null` . إنظر في الأسفل للمثال.

 `// The value of variableOne is null at this point. 
 NewClass variableOne; 
 
 // Now the value of variableOne will be an instance of the class NewClass 
 variableOne = new NewClass(); 
` 

في وقت التشغيل عندما يتم إنشاء الفئة يتم تخصيص ذاكرة كافية على كومة الذاكرة المؤقتة لمثيل محدد من الفئة التي يحتفظ بها المتغير.

#### خلق الطبقات

لإنشاء فصل دراسي في C # ، نحتاج إلى استخدام الكلمة الأساسية `class` متبوعة بمعرّف فريد.

مثل اللغات الأخرى ، يقوم C # بإنشاء مُنشئ افتراضي لا يقبل أي معلمات. يمكننا أيضًا تحديد مُنشئنا الخاص بنا إذا احتجنا إلى استخدام معلمات خاصة أو الحصول على خطوات إنشاء مخصصة في مُنشئنا.

 `public class NewClass 
 { 
    NewClass(string name) 
    { 
        // Initialization steps... 
    } 
 } 
` 

الصف هو نموذج أولي أو مخطط منه يتم إنشاء الكائنات منه. في C # ، يتم تعريف الفصل باستخدام فئة الكلمة الأساسية. يتم استخدام فئة الجمع بين بعض الأساليب والخصائص والمجالات والأحداث والمندوبين في وحدة واحدة. قد تحتوي الفئة على فئات متداخلة أيضًا.

#### مثال: النظر في حالة فئة الموظف أدناه:

 `using System; 
 
 namespace CPrograms 
 { 
    class Employee 
    { 
        private string name; 
        private int employeeId; 
 
        public Employee(string name, int employeeId) 
        { 
            this.name = name; 
            this.employeeId = employeeId; 
        } 
        public void PrintEmployee() 
        { 
            Console.WriteLine("Employee Name: {0} , Employee ID: {1}", this.name, this.employeeId); 
        } 
    } 
 
    class Program 
    { 
        static void Main(string[] args) 
        { 
            Employee employeeObject = new Employee("John Doe", 420156); 
            employeeObject.PrintEmployee(); 
        } 
    } 
 } 
` 

يمكن للفئة أن ترث من فئة أساسية واحدة فقط. ومع ذلك ، يمكن أن تنفذ من أكثر من واجهة واحدة.

## معلومات اكثر

اقرأ المزيد حول الفصول الدراسية [هنا](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)