---
title: Strings
localeTitle: سلاسل
---
# سلاسل

السلسلة هي نوع بيانات أساسي في لغة برمجة. يتم تمثيل `String` بالنوع `String` . سلاسل غير قابلة للتغيير. يحتوي Kotlin على واجهة برمجة تطبيقات غنية للعمل مع السلاسل.

### الاستخدام الأساسي

#### إعلان

 `// Explicit type declaration 
 var firstName : String = "Elon" 
 
 // or Implicit type declaration and will still compile 
 val lastName = "Musk" 
` 

بالإضافة إلى ذلك ، لاحظ استخدام نوع متغير `val` ، وهنا كيف تتصرف

 `firstName = "Mark" // can be changed 
 lastName = "Zuckerberg" // cannot be changed 
 lastName = 12 // Error: type mismatch 
` 

#### سلسلة سلسلة

تظهر في مقتطف الشفرة ، تمامًا مثل جافا ، إلحاق `Int` ستؤدي `String` إلى إخراج `String`

 `var str = "abc" + 1 
 println(str + "def") 
` 

انتاج:

 `abc1def 
` 

حتى بدون تحويل قيمة `Int` 1 إلى كائن `String` أولاً ، لا يزال الإخراج الناتج عبارة عن `String` .

#### سلسلة مع خطوط متعددة

يمكن للمبرمجين الإعلان عن متغيرات `String` مع أسطر متعددة باستخدام علامات اقتباس ثلاثية بدلاً من علامات الاقتباس المزدوجة

 `var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """ 
 println(str) 
` 

انتاج:

 `        This is line 1 
        This is line 2 
        This is line 3 
` 

أو مع `.trimIndent()`

استخدام `trimIndent()` سيساعد بالإضافة إلى توفير تنسيق إخراج نظيف عن طريق إزالة indention الزائد و unrespour كل سطر. افحص مقتطف الشفرة أدناه:

 `var str = """ 
        This is line 1 
        This is line 2 
        This is line 3 
        """.trimIndent() 
 println(str) 
` 

انتاج:

 `This is line 1 
 This is line 2 
 This is line 3 
` 

### الوصول إلى أحرف سلسلة

#### مؤشر الوصول

يمكن للمبرمجين الوصول إلى العناصر (الأحرف) لسلسلة باستخدام معامل الوصول إلى الفهرس:

 `var str = "Example" 
 println(str[2]) 
` 

انتاج:

 `a 
` 

إنه مثل الوصول إلى عنصر من صفيف ، تحصل على:

 `var str = "Example" 
 println(str[9]) // Error: index out of bounds 
` 

#### تكرار عبر سلسلة

عناصر السلسلة هي أحرف يمكن الوصول إليها بواسطة عملية الفهرسة: `s[i]` .

 `var str = "Example" 
 for (c in str) { 
    println(c) 
 } 
` 

انتاج:

 `E 
 x 
 a 
 m 
 p 
 l 
 e 
` 

### ثبات سلسلة

تمامًا مثل جافا ، لا يمكنك تغيير العناصر الفردية `String`

 `var str = "Example" 
 str[2] = "b" // Error 
` 

#### إعادة تعيين قيم السلسلة

 `var str = "Example" 
 println(str) 
 str = "Example was changed" 
 println(str) 
` 

انتاج:

 `Example 
 Example was changed 
` 

### خصائص سلسلة

#### تحديد طول سلسلة

 `var str = "Example" 
 println(str.length) 
` 

انتاج:

 `7 
` 

### وظائف سلسلة

هذه بعض وظائف `String` الشائعة المتوفرة من إصدار Kotlin الحالي

### قارن ب

يقارن هذا الكائن بالعنصر المحدد للترتيب. يتم إرجاع الصفر إذا كان هذا الكائن مساويًا للكائن الآخر المحدد ، أو رقم سالب إذا كان أقل من رقم آخر ، أو رقم موجب إذا كان أكبر من الآخر.

 `var str = "Example" 
 var str2 = "Example123" 
 var str3 = "Example12345" 
 println(str.compareTo(str2)) 
 println(str.compareTo(str3)) 
 println(str3.compareTo(str)) 
 println(str.compareTo("Example")) 
` 

انتاج:

 `-3 
 -5 
 5 
 0 # Equal 
` 

### يساوي

يشير إلى ما إذا كان كائن `String` يساوي تمامًا كائن `String` آخر

 `var str = "Example" 
 var str2 = "Example2" 
 println(str.equals("Example")) 
 println(str2.equals("Example")) 
` 

انتاج:

 `true 
 false 
` 

### احصل على

إرجاع الحرف في الفهرس المحدد في تسلسل الأحرف هذا.

"" كوتلن var str = "مثال" println (str.get (3))

 `Output: 
` 

الصدف م

 `### toString 
 
 Returns a string representation of the object. 
` 

kotlin println (9. toString () + 10) println (9 + 10)

 `Output: 
` 

الصدف "910" 19 \`\` \`

#### مصادر

*   [Kotlin Basic Types](https://kotlinlang.org/docs/reference/basic-types.html)
*   [مرجع سلسلة Kotlin](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)