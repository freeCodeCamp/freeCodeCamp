---
title: The C Programming Language
localeTitle: لغة البرمجة C
---
## مبادئ

*   اقامة
*   برنامجك الأول C #
*   أنواع ومتغيرات
*   بيانات التحكم في التدفق
*   العاملين
*   سلاسل
*   الفصول ، الكائنات ، الواجهة والطرق الرئيسية
*   الحقول والخصائص
*   نطاق ومعدلات إمكانية الوصول
*   التعامل مع الاستثناءات

## متوسط

*   الأدوية
*   الأحداث ، المندوبين وتعديلات لامدا
*   إطار مجموعة
*   LINQ

## المتقدمة

*   برمجة غير متزامنة (Async and Await)
*   مكتبة المهام المتوازية

## ما هو الجديد في C # 6

*   Null-Conditional Operator
*   Auto-Initializers
*   تعبير Nameof
*   تعبير وظائف بودي وخصائص
*   ميزات أخرى

## المبادئ الشيئية (OOP)

*   التغليف
*   التجريد
*   ميراث
*   تعدد الأشكال

## المبادئ الصلبة

*   مبدأ المسؤولية الواحدة
*   مفتوح المبدأ مغلق
*   مبدأ استبدال Liskov
*   مبدأ الفصل بين الواجهة
*   مبدأ الانقلاب التبعية

## C # Best practices، Pattern Designs & Test Driven Development (TDD)

## اقامة

[LinqPad](http://www.linqpad.net/) عبارة عن [لوحة شاشة](http://www.linqpad.net/) NET لاختبار سريعا مقتطفات C # [code.The](http://www.linqpad.net/) الإصدار القياسي مجاني وأداة مثالية للمبتدئين لتنفيذ العبارات والتعبيرات والبرامج اللغوية.

بدلاً من ذلك ، يمكنك أيضًا تنزيل [Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) وهو [IDE قابل](https://en.wikipedia.org/wiki/Integrated_development_environment) للتوسعة يستخدمه معظم المتخصصين لإنشاء تطبيقات المؤسسة.

## برنامجك الأول C #

 `//this is the single line comment 
 
 /** This is multiline comment, 
 compiler ignores any code inside comment blocks. 
 **/ 
 
 //This is the namespace, part of the standard .NET Framework Class Library 
 using System; 
 // namespace defines the scope of related objects into packages 
 namespace Learning.CSharp 
 { 
  // name of the class, should be same as of .cs file 
  public class Program 
  { 
    //entry point method for console applications 
   public static void Main() 
    { 
      //print lines on console 
      Console.WriteLine("Hello, World!"); 
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console. 
      Console.ReadLine(); 
    } 
  } 
 } 
` 

يجب أن يكون لكل تطبيق من تطبيقات C # وحدة التحكم [طريقة رئيسية](https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx) تمثل نقطة دخول البرنامج.

تحرير [HelloWorld](https://dotnetfiddle.net/kY7QRm) في .NET Fiddle ، أداة مستوحاة من [JSFiddle](http://jsfiddle.net) حيث يمكنك تغيير مقتطفات الشفرة والتحقق من الإخراج لنفسك. لاحظ أن هذا مجرد مشاركة واختبار مقتطفات الشفرة ، وليس لاستخدامها في تطوير التطبيقات.

إذا كنت تستخدم visual studio ، اتبع هذا [البرنامج التعليمي](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx) لإنشاء تطبيق وحدة التحكم وفهم أول برنامج C #.

## أنواع ومتغيرات

C # هي لغة مكتوبة بقوة. كل متغير لديه نوع. كل تعبير أو بيان يتم تقييمه إلى قيمة. هناك نوعان من الأنواع في C #

*   أنواع القيم
*   أنواع المرجع.

**أنواع القيم** : المتغيرات التي تحتوي على أنواع قيم تحتوي على قيم مباشرة. إن تعيين متغير نوع قيمة واحد إلى آخر ينسخ القيمة المحتواة.

[تحرير في .NET Fiddle](https://dotnetfiddle.net/JCkTxb)

 `int a = 10; 
 int b = 20; 
 a=b; 
 Console.WriteLine(a); //prints 20 
 Console.WriteLine(b); //prints 20 
` 

لاحظ أنه في اللغات الديناميكية الأخرى قد يكون هذا مختلفًا ، ولكن في C # يكون هذا دائمًا نسخة قيمة. عند إنشاء نوع القيمة ، يتم إنشاء مساحة واحدة على الأرجح في [بنية تخزين العناصر](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) ، وهي بنية بيانات "LIFO" (آخر في أول خطوة). المكدس لديه حدود الحجم وعمليات الذاكرة فعالة. أمثلة قليلة من أنواع البيانات المضمنة هي `int, float, double, decimal, char and string` .

النوع | مثال | وصف  
\--------- | -------------------------------------------------- --------------------------- | -------------------------------------------------- -------------------------------------------------- -----------------------------  
_عدد صحيح_ `int fooInt = 7;` | **وقعت 32 بت** عدد صحيح  
_طويل_ | `long fooLong = 3000L;` | **وقعت** عدد صحيح **64 بت** . **يتم استخدام L لتحديد أن قيمة المتغير هذه من النوع long / ulong**  
_مزدوج_ | `double fooDouble = 20.99;` | الدقة: **15-16 رقمًا**  
_تعويم_ | `float fooFloat = 314.5f;` | الدقة: **7 أرقام** . **يتم استخدام F لتحديد أن قيمة المتغير هذه من نوع float**  
_عشري_ | `decimal fooDecimal = 23.3m;` | الدقة: من **28 إلى 29 رقمًا** . المزيد من الدقة والنطاق الأصغر يجعلها مناسبة **للحسابات المالية والنقدية**  
_تشار_ | `char fooChar = 'Z';` | **حرف Unicode 16 بت** واحد  
_منطقية_ | `bool fooBoolean = false;` | منطقية - **صحيحة و خاطئة**  
_سلسلة_ `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **سلسلة من أحرف Unicode.**

للحصول على قائمة كاملة بجميع أنواع البيانات المضمنة ، انظر [هنا](https://msdn.microsoft.com/en-us/library/ms228360)

[**أنواع المراجع**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) : تخزن متغيرات أنواع المراجع إشارات إلى الكائنات الخاصة بها ، مما يعني أنها تخزن العنوان إلى موقع البيانات الموجودة على [المكدس](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2) ، وتُعرف أيضًا بالمؤشرات. يتم تخزين البيانات الفعلية على ذاكرة [الكومة](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3) . لا يؤدي تعيين نوع المرجع إلى نوع آخر إلى نسخ البيانات ، وإنما ينشئ النسخة الثانية من المرجع الذي يشير إلى نفس الموقع على كومة الذاكرة المؤقتة.

في كومة الذاكرة المؤقتة ، يتم تخصيص الكائنات ثم deallocated بترتيب عشوائي ولهذا السبب يتطلب مقدار الحمل من إدارة الذاكرة [وجمع البيانات المهملة](https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110) .aspx).

إذا لم تكن تكتب [تعليمات برمجية غير آمنة](https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx) أو تتعامل مع [التعليمات البرمجية غير المُدارة](https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100) .aspx) ، فلا داعي للقلق بشأن عمر مواقع الذاكرة الخاصة بك. سيعتني مترجمو .NET و CLR بهذا ، ولكن لا يزال من الجيد الاحتفاظ بهذا العقل لتحسين أداء تطبيقاتك.

مزيد من المعلومات [هنا](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91)

## بيانات التحكم في التدفق

*   [if else](https://msdn.microsoft.com/en-us/library/5011f09h.aspx) statement: [Edit in .NET Fiddle](https://dotnetfiddle.net/IFVB33)
    
     `        int myScore = 700; 
            if (myScore == 700) 
            { 
                Console.WriteLine("I get printed on the console"); 
            } 
            else if (myScore > 10) 
            { 
                Console.WriteLine("I don't"); 
            } 
            else 
            { 
                Console.WriteLine("I also don't"); 
            }` 
    
     `    /** Ternary operators 
         A simple if/else can also be written as follows 
         &lt;condition&gt; ? &lt;true&gt; : &lt;false&gt; **/ 
        int myNumber = 10; 
        string isTrue = myNumber == 10 ? "Yes" : "No"; 
    ` 
    
*   بيان [التبديل](https://msdn.microsoft.com/en-GB/library/06tc147t.aspx) : [تحرير في .NET Fiddle](https://dotnetfiddle.net/lPZftO)
    
    باستخدام النظام
    
    برنامج الطبقة العامة { الفراغ الثابت العام Main () { int myNumber = 0؛ التبديل (myNumber) { // يمكن أن يحتوي قسم التبديل على أكثر من علامة حالة واحدة. الحالة 0: حالة 1: { Console.WriteLine ("Case 0 or 1")؛ استراحة؛ }
    
     `        // Most switch sections contain a jump statement, such as a break, goto, or return.; 
            case 2: 
                Console.WriteLine("Case 2"); 
                break; 
            // 7 - 4 in the following line evaluates to 3. 
            case 7 - 4: 
                Console.WriteLine("Case 3"); 
                break; 
            // If the value of myNumber is not 0, 1, 2, or 3 the 
            //default case is executed.* 
            default: 
                Console.WriteLine("Default case. This is also optional"); 
                break; // could also throw new Exception() instead 
        } 
     } 
    ` 
    
    }
    
*   [For](https://msdn.microsoft.com/en-us/library/ch45axte.aspx) & [Foreach](https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx) : [Edit in .NET Fiddle](https://dotnetfiddle.net/edxtvq)
    
    لـ (int i = 0؛ i <10؛ i ++) { Console.WriteLine (ط)؛ // print 0-9 }
    
    Console.WriteLine (Environment.NewLine)؛ لـ (int i = 0؛ i <= 10؛ i ++) { Console.WriteLine (ط)؛ // print 0-10 }
    
    Console.WriteLine (Environment.NewLine)؛ لـ (int i = 10 - 1؛ i> = 0؛ i--) // decrement loop { Console.WriteLine (ط)؛ // يطبع 9-0 }
    
    Console.WriteLine (Environment.NewLine)؛ //إلى عن على (؛ ؛ ) { // جميع التعبيرات اختيارية. هذا البيان // ينشئ حلقة لا نهائية. \* //  
    }
    
*   [أثناء](https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx) [القيام](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) [بالمهام](https://dotnetfiddle.net/O5hOF1) [أثناء](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) : [تحرير في .NET Fiddle](https://dotnetfiddle.net/O5hOF1)
    
    // استمر في فترة التكرار حتى يساوي الفهرس 10. int i = 0؛ بينما (أنا <10) { Console.Write ("While statement")؛ Console.WriteLine (i)؛ // اكتب الفهرس على الشاشة. i ++؛ // زيادة المتغير. }
    
    عدد int = 0؛ // نفذ العمل أولاً ، حتى يتم استيفاء الشرط ، أي ينتهي عند وجود رقم يساوي 4. فعل { Console.WriteLine (العدد) ؛ // يطبع القيمة من 0-4 عدد ++؛ // أضف واحدة للرقم. } بينما (العدد <= 4) ؛