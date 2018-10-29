---
title: Strings
localeTitle: سلاسل
---
# سلاسل

سلاسل هي تسلسل من الشخصيات. في Java ، تعد `String` `Object` . ينبغي عدم الخلط بين السلاسل مع `char` كأحرف حرفيا 1 قيمة بدلا من سلسلة من الأحرف. لا يزال بإمكانك استخدام قيمة واحدة داخل سلسلة ، ومع ذلك يفضل استخدام `char` عند التحقق من حرف واحد.

 `String course = "FCC"; 
 System.out.println(course instanceof Object); 
` 

انتاج:

 `true 
` 

يمكنك إنشاء كائن سلسلة بالطرق التالية:

1.  `String str = "I am a String"; //as a String literal`
2.  `String str = "I am a " + "String"; //as a constant expression`
3.  `String str = new String("I am a String"); //as a String Object using the constructor`

قد تفكر: ما الفرق بين الثلاثة؟

حسنًا ، باستخدام الكلمة الأساسية `new` تضمن إنشاء كائن `String` جديد وسيتم تخصيص موقع ذاكرة جديد في `Heap` الذاكرة [(انقر هنا لمعرفة المزيد)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) . خيط يتم تخزين العناصر الحرفية وعبارات السلسلة الثابتة في وقت التحويل البرمجي. يضعها المترجم في "سلسلة Literal تجمع" لمنع التكرارات وتحسين استهلاك الذاكرة. تخصيص كائن مكلف ويزيد هذا الأداء الأداء أثناء إنشاء سلاسل. إذا كنت تستخدم نفس الحرفي مرة أخرى ، يستخدم JVM نفس الكائن. إن استخدام المُعْلَم كما هو مذكور أعلاه هو دائمًا خيارًا أسوأ.

في مقتطف الشفرة هذا ، كم عدد كائنات السلسلة التي تم إنشاؤها؟

 `String str = "This is a string"; 
 String str2 = "This is a string"; 
 String str3 = new String("This is a string"); 
` 

الإجابة هي: يتم إنشاء كائنات سلسلة 2. `str` و `str2` كلاهما يشيران إلى نفس الكائن. `str3` لديه نفس المحتوى ولكن باستخدام القسري `new` خلق كائن جديد ومتميز.

عند إنشاء حرفية سلسلة ، يتحقق JVM داخليًا ، ما يعرف باسم "مجموعة `String pool` ، لمعرفة ما إذا كان يمكنه العثور على ما شابه (المحتوى الحكيم) كائن السلسلة. إذا وجدته ، فإنه يعيد نفس المرجع. وإلا ، فإنه يمضي قدما ويخلق كائن سلسلة جديد في التجمع بحيث يمكن إجراء نفس التدقيق في المستقبل.

يمكنك اختبار ذلك باستخدام swallow أو fast Object Compar `==` و `equals()` .

 `System.out.println(str == str2); // This prints 'true' 
 System.out.println(str == str3); // This prints 'false' 
 System.out.println(str.equals(str3)); // This prints 'true' 
` 

فيما يلي مثال آخر حول كيفية إنشاء سلسلة في Java باستخدام الطرق المختلفة:

 `public class StringExample{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creating string by Java string literal 
      char ch[] = {'s','t','r','i','n','g','s'}; 
      String s2 = new String(ch);  // converting char array to string 
      String s3 = new String("example");  // creating Java string by new keyword 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
` 

#### مقارنة الاوتار

إذا كنت ترغب في مقارنة قيمة متغيرين للسلسلة ، فلا يمكنك استخدام ==. هذا يرجع إلى حقيقة أن هذا سوف يقارن إشارات المتغيرات وليس القيم المرتبطة بها. لمقارنة القيم المخزنة من السلاسل التي تستخدمها تساوي هذه الطريقة.

 `boolean equals(Object obj) 
` 

تقوم بإرجاع true إذا كان كائنان متساويان و false على خلاف ذلك.

 `String str = "Hello world"; 
 String str2 = "Hello world"; 
 
 System.out.println(str == str2); // This prints false 
 System.out.println(str.equals(str2); // This prints true 
` 

المقارنة الأولى غير صحيحة لأن "==" ينظر إلى المراجع وهي ليست متماثلة.

المقارنة الثانية هي true لأن المتغيرات تخزن نفس القيم. في هذه الحالة "مرحبا بالعالم".

لدينا عدة طرق يحمل في ثناياه عوامل في سلسلة. فيما يلي مثال لطريقة طول السلسلة ().

 `public class StringDemo { 
 
   public static void main(String args[]) { 
      String palindrome = "Dot saw I was Tod"; 
      int len = palindrome.length(); 
      System.out.println( "String Length is : " + len ); 
   } 
 } 
` 

سيؤدي ذلك إلى - `String Length is : 17`

**الإجابة هي:** يتم إنشاء كائنات سلسلة **2** . **ملاحظات**

1.  تستخدم أساليب السلسلة فهارس الصفر ، باستثناء الوسيطة الثانية من `substring()` .
2.  فصل السلسلة نهائي - لا يمكن تجاوز الأساليب.
3.  عندما يتم العثور على حرفي String بواسطة JVM ، يتم إضافته إلى تجمّع حرج السلسلة.
4.  تمتلك فئة String `length()` اسم الأسلوب `length()` ، بينما تحتوي الصفائف على طول تسمية سمة.
5.  في جافا ، كائنات السلسلة غير قابلة للتغيير. غير قابل للتغيير ببساطة يعني غير قابل للتعديل أو غير قابل للتغيير. بمجرد إنشاء كائن سلسلة البيانات الخاصة به أو لا يمكن تغيير الحالة ولكن يتم إنشاء كائن سلسلة جديد.

طول سلسلة

"طول" السلسلة هو مجرد عدد الأحرف الموجودة فيه. حتى "hi" هي طول 2 و "Hello" هي length 5. ترجع طريقة length () على سلسلة طولها ، كما يلي:

 `String a = "Hello"; 
 int len = a.length();  // len is 5 
` 

#### طرق المقارنة الأخرى التي يمكن استخدامها أيضًا في السلسلة هي:

1.  equalsIgnoreCase (): - يقارن السلسلة دون الأخذ بعين الاعتبار حساسية الحالة.

 `String a = "HELLO"; 
 String b = "hello"; 
 System.out.println(a.equalsIgnoreCase(b));   // It will print true 
` 

2.  قارنTo: - يقارن قيمة lexicographically وإرجاع عدد صحيح.

 `String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 since (a>b) 
 System.out.println(c.compareTo(a));       // -1 since (c<a) 
`