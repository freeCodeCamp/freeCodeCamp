---
title: Data Types
localeTitle: أنواع البيانات
---
# أنواع البيانات

جافا هي لغة مكتوبة بقوة. هذا يعني أنه في Java ، يكون لكل نوع بيانات تعريف خاص به. لا توجد تحويلات نوع بيانات ضمنية عند حدوث أي تعارضات بين أنواع البيانات. أي تغيير في أنواع البيانات يجب أن يتم التصريح به صراحة من قبل المبرمج.

تقوم Java بتعريف 8 أنواع من البيانات البدائية: `byte` ، `short` ، `int` ، `long` ، `char` ، `float` ، `double` و `boolean` .

وهي مقسمة إلى الفئات التالية:

*   الأعداد الصحيحة
*   أرقام النقطة العائمة
*   الشخصيات
*   اكتب منطقي

تفاصيل كل نوع من أنواع البيانات مذكورة أدناه:

## الأعداد الصحيحة:

هذه هي من أربعة أنواع: `byte` ، `short` ، `int` ، `long` . من المهم ملاحظة أن هذه القيم موجبة وسالبة. يتم تخزين الأعداد الصحيحة في جهاز الكمبيوتر باستخدام [مكمل 2](http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html) . ويتكون من قيم سلبية وإيجابية ولكن بصيغ مختلفة مثل `(-1 to -128)` أو `(0 to +127)` . يمكن أن يحتوى عدد صحيح غير موقعة على قيمة موجبة أكبر ، ولا توجد قيمة سالبة مثل `(0 to 255)` . على عكس C ++ لا يوجد عدد صحيح غير موقعة في Java.

### بايت:

نوع البيانات بايت هو عدد صحيح مكمل 8 بت موقعة اثنين.

 `Wrapper Class: Byte 
 
 Minimum value: -128 (-2^7) 
 
 Maximum value: 127 (2^7 -1) 
 
 Default value: 0 
 
 Example: byte a = 10 , byte b = -50; 
` 

### قصيرة:

نوع البيانات القصير هو عدد صحيح مكمل من 16 بت موقعة اثنين.

 `Wrapper Class: Short 
 
 Minimum value: -32,768 (-2^15) 
 
 Maximum value: 32,767 (2^15 -1) 
 
 Default value: 0. 
 
 Example: short s = 10, short r = -1000; 
` 

### الباحث:

نوع البيانات IN هو عدد صحيح مكمل 32 بت موقعة اثنين. يتم استخدامه بشكل عام كنوع بيانات افتراضي للقيم المتكاملة إلا إذا كان هناك قلق حول الذاكرة.

 `Wrapper Class: Integer 
 
 Minimum value: (-2^31) 
 
 Maximum value: (2^31 -1) 
 
 The default value: 0. 
 
 Example: int a = 50000, int b = -20 
` 

### طويل:

نوع بيانات طويل هو عدد صحيح مكمل 64 بت موقعة اثنين.

 `Wrapper Class: Long 
 
 Minimum value: (-2^63) 
 
 Maximum value: (2^63 -1) 
 
 Default value: 0L. 
 
 Example: long a = 100000L, long b = -600000L; 
 
 By default all integer type variable is "int". So long num=600851475143  will give an error. 
 But it can be specified as long by appending the suffix L (or l) 
` 

## نقطة عائمة:

تسمى هذه أيضًا أرقامًا حقيقية وتستخدم للتعبيرات التي تتضمن دقة كسرية. هذه من نوعين: `float` ، `double` . يتم تجنب Float فعليًا في حالة البيانات الدقيقة مثل بيانات العملات أو الأبحاث.

### تطفو:

نوع بيانات عائم عبارة عن [نقطة عائمة IEEE 754](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) ذات دقة واحدة 32 بت.

 `Wrapper Class: Float 
 
 Float is mainly used to save memory in large arrays of floating point numbers. 
 
 Default value: 0.0f. 
 
 Example: float f1 = 24.5f; 
 
 The default data type of floating-point number is double. So float f = 24.5 will introduce an error. 
 However, we can append the suffix F (or f) to designate the data type as float. 
` 

### مزدوج:

نوع بيانات مزدوج هو [نقطة عائم IEEE 754](http://steve.hollasch.net/cgindex/coding/ieeefloat.html) مزدوجة الدقة 64 بت. عادةً ما يكون نوع البيانات هذا هو الخيار الافتراضي. يجب عدم استخدام نوع البيانات هذا مطلقًا للقيم الدقيقة ، مثل العملة.

 `Wrapper Class: Double 
 
 This data type is generally used as the default data type for decimal values. 
 
 Default value: 0.0d. 
 
 Example: double d1 = 123.400778; 
` 

## حرف:

نستخدم نوع البيانات هذا لتخزين الأحرف. هذا ليس هو نفسه مثل شار في C / C ++. تستخدم Java مجموعة `UNICODE` ، مجموعة الأحرف المقبولة دوليًا. شار في جاوة هو 16 بت في حين أن في C / C ++ 8 بت.

 `Wrapper Class: Character 
 
 Minimum value: '\u0000' (or 0). 
 
 Maximum value: '\uffff' (or 65,535). 
 
 Default value: null ('\u0000'). 
 
 Example: char letterA ='a'; 
` 

## منطقية:

يستخدم هذا لتخزين القيم المنطقية. يمكن أن يكون للنوع المنطقي قيمة صحيحة أو خاطئة. يتم إرجاع هذا النوع بشكل عام بواسطة عوامل العلائقية.

 `There are only two possible values: true and false. 
 
 Wrapper Class: Boolean 
 
 This data type is used for simple flags that track true/false conditions. 
 
 Default value is false. 
 
 Example: boolean b = true, boolean b1 = 1(this is not possible in java and give incompatible type error), boolean b2; 
` 

## أنواع البيانات المرجعية:

بصرف النظر عن أنواع البيانات البدائية ، هناك متغيرات مرجعية تم إنشاؤها باستخدام أدوات بناء من فئات مختلفة. يتم استخدام المتغيرات المرجعية لأي فئة بالإضافة إلى الصفيف ، السلسلة ، الماسح الضوئي ، العشوائي ، إلخ. يتم تهيئة المتغيرات المرجعية باستخدام الكلمة الأساسية الجديدة.

مثال:

 `public class Box{ 
 
    int length, breadth, height; 
 
    public Box(){ 
        length=5; 
        breadth=3; 
        height=2; 
    } 
 } 
 
 class demo{ 
 
    public static void main(String args[]) { 
        Box box1 = new Box();                //box1 is the reference variable 
        char[] arr = new char[10];           //arr is the reference variable 
    } 
 } 
` 

## خيط:

لا يعد String نوع بيانات أولية ، ولكنه يسمح لك بتخزين أنواع متعددة من بيانات الأحرف في صفيف ولديه العديد من الطرق التي يمكن استخدامها. يتم استخدامه بشكل شائع عند قيام المستخدم بكتابة البيانات ويجب عليك التلاعب بها.

في المثال أدناه ، نحاول إزالة جميع الأحرف من السلسلة وإخراجها:

 `String input = "My birthday is 10 January 1984 and my favorite number is 42"; 
 String output = ""; 
 
 for(int i=0;i<input.length();i++){ 
 
 //if the character at index i on the string is a letter or a space, move on to the next index 
 if(Character.isLetter(input.charAt(i)) || input.charAt(i)==' '){ 
 
    continue; 
 } 
 
 output = output + input.charAt(i); //the number is added onto the output 
 
 } 
 
 System.out.println(output); 
` 

انتاج:

 `10198442 
`