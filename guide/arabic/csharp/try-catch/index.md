---
title: Try Catch Finally
localeTitle: حاول الصيد في النهاية
---
# حاول الصيد في النهاية

يتم استخدام كتلة Try-Catch-Finally لتجنب الاستثناءات غير المعالجة التي تخترق التطبيق الخاص بك. عندما `throws` الكود الاستثناء الذي يقع بين قسم `try` ، سيتم اكتشافه في جزء `catch` من البيان ، حيث يمكنك التعامل معه كما تشاء. و `finally` يتم تشغيل بيان دائما في النهاية وعادة ما يستخدم لتنظيف الموارد غير المدارة. لا تحتاج دائمًا إلى وجود الكتل الثلاث الموجودة ، وفيما يلي الخيارات الصحيحة.

*   محاولة تجميع مياه الأمطار وأخيرا
*   محاولة-الصيد
*   محاولة-وأخيرا

## بناء الجملة

 `try 
 { 
   // Code which could potentially throw an exception 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 catch(Exception e) 
 { 
    // Code to handle the exception 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 finally 
 { 
    // Code which will always run no matter what. 
    Console.WriteLine("Try-Catch block has finished execution"); 
 } 
` 

في المثال أعلاه ، نحاول تحويل "abcde" إلى قيمة عددية. سيقوم هذا الخط بطرح استثناء لأنه لا يمكن تحويله إلى رقم بنجاح. سيتم اكتشاف الاستثناء في كتلة catch وسيتم تخزين رسالة الاستثناء والتفاصيل الأخرى في المتغير المعين في كتلة catch (الحرف 'e' في المثال أعلاه). بعد تنفيذ كل هذا ، سيتم تنفيذ القسم "أخيرًا" لإنهائه.

## حاول الحظر

يجب وضع قالب المحاولة حول الكود الذي يمكن أن يتصرف بشكل طبيعي ويتسبب في حدوث `Exception` وكسر تطبيقك. من خلال وجود كتلة المحاولة تحمي نفسك من تعطل تطبيق قاتلة. ومن المهم أن نلاحظ في أقرب وقت التطبيق الخاص بك خطأ ويتم طرح استثناء، والباقي من التعليمات البرمجية في `Try` **لن** يتم تنفيذ كتلة.

كتلة المحاولة لها نطاق طريقة خاص بها ، لذلك لن يتم الوصول إلى أي من المتغيرات التي يتم الإعلان عنها داخل كتلة المحاولة خارج نطاق المحاولة.

 `try 
 { 
    // Read user input from the console. 
    var userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Not correct 
` 

سيعطيك ما سبق خطأ في وقت الترجمة لأن القيمة 'userInput' لا يمكن الوصول إليها. إذا كنت تحتاج إلى الوصول إلى متغير خارج كتلة try-catch ستحتاج إلى تعريف المتغير قبل كتلة المحاولة.

 `var userInput = ""; 
 try 
 { 
    // Read user input from the console. 
    userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Correct 
` 

## كتلة الصيد

هذه الكتلة هي المكان الذي تحدد فيه نوع `Exception` الذي تريد التقاطه. إذا كنت تريد التقاط كافة الاستثناءات الممكنة ، يمكنك استخدام الفئة الأساسية `Exception` . إذا كنت تريد فقط التقاط نوع معين من الاستثناء ، فيمكنك تحديد ذلك بدلاً من ذلك. بعض الأمثلة على أنواع الاستثناءات الأخرى هي `ArgumentException` و `OutOfMemoryException` و `FormatException` .

 `try 
 { 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 // Only FormatExceptions will be caught in this catch block. 
 catch(FormatException exceptionVariable) 
 { 
    Console.WriteLine(exceptionVariable.Message); 
 } 
` 

المتغير المعلن بعد نوع الاستثناء سيحتوي على كل بيانات الاستثناء ويمكن استخدامه داخل كتلة `Catch` .

## وأخيرا كتلة

يتم **دائمًا** تشغيل الكتلة الأخيرة في النهاية بعد كتل `Try` and `Catch` . وعادة ما يستخدم هذا القسم لعندما يكون هناك شيء **يجب أن** يحدث في نهاية بغض النظر عما إذا كان طرح استثناء أم لا. على سبيل المثال ، لنفترض أننا بحاجة إلى متغير ليتم إعادة تنشيطه مرة أخرى إلى رقم محدد بعد التلاعب به طوال الوقت.

 `int initalValue = 12; 
 try 
 { 
    // Code which manipulates 'initialValue' 
 } 
 finally 
 { 
    Console.WriteLine("re-initalising value back to 12"); 
    initialValue = 12; 
 } 
`