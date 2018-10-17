---
title: Variables
localeTitle: المتغيرات
---
# المتغيرات

متغيرات تخزين القيم. وهي الكيان الأساسي المستخدم لتخزين البيانات مثل النص والأرقام وما إلى ذلك في أي برنامج.

في [Java](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) ، يتم [_كتابة_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) المتغيرات [_بقوة_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) ، مما يعني أنه عليك تحديد النوع لكل متغير كلما قمت بتعريفه. خلاف ذلك ، سوف يلقي المترجم خطأ في [وقت التحويل البرمجي](https://en.wikipedia.org/wiki/Compile_time) . لذلك ، يحتوي كل متغير على " [نوع بيانات](https://guide.freecodecamp.org/java/data-types) " مقترن بإحدى الطرق التالية:

*   النوع البدائي: `int` ، `short` ، `char` ، `long` ، `boolean` ، `byte` ، `float` ، `double`
*   نوع المجمع: `Integer` ، `Short` ، `Char` ، `Long` ، `Boolean` ، `Byte` ، `Float` ، `Double`
*   نوع المرجع: `String` ، `StringBuilder` ، `Calendar` ، `ArrayList` ، وما إلى ذلك

ربما لاحظت أن **نوع الالتفاف** يتكون من أنواع مكتوبة بالضبط مثل **النوع البدائي** ، باستثناء الحروف الأبجدية في البداية (مثل **نوع المرجع** ). ويرجع ذلك إلى أن أنواع الالتفاف هي في الواقع جزء من أنواع المراجع العامة ، ولكنها _مرتبطة ارتباطًا وثيقًا_ بنظيراتها البدائية من خلال [autoboxing و unboxing](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html) . الآن ، تحتاج فقط إلى معرفة أن مثل "نوع التفاف" موجود.

عادة ، يمكنك أن _تعلن_ (أي إنشاء) المتغيرات وفقا للبناء التالي: < _data-type_ > < _variableName_ >؛

 `// Primitive Data Type 
 int i; 
 
 // Reference Data Type 
 Float myFloat; 
` 

يمكنك _تعيين_ قيمة للمتغير إما في نفس الوقت الذي تقوم فيه بالتصريح (الذي يسمى _التهيئة_ ) ، أو في أي مكان في الكود بعد أن تقوم بإعلانه. الرمز **\=** يستخدم لنفسه.

 `// Initialise the variable of Primitive Data Type 'int' to store the value 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note the single quotes 
 
 //Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // initiates an Float object with value 1.0 
 // variable myFloat now points to the object 
 Float myFloat = new Float(1.0); 
 
 //Bytes are one of types in Java and can be 
 //represented with this code 
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
` 

كما يتضح من المثال أعلاه ، فإن متغيرات النوع البدائي تتصرف بشكل مختلف قليلاً عن متغيرات النوع المرجعي (& التفاف) - بينما المتغيرات الأولية _تخزن_ القيمة الفعلية ، _تشير_ المتغيرات المرجعية _إلى_ "كائن" يحتوي على القيمة الفعلية. يمكنك معرفة المزيد في الأقسام المرتبطة أدناه.

# موارد آخرى

*   [أنواع البيانات](https://guide.freecodecamp.org/java/data-types)
*   [الطبقات والكائنات](https://guide.freecodecamp.org/java/classes-and-objects)