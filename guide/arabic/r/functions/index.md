---
title: Functions in R
localeTitle: وظائف في R
---
تسمح لك الوظيفة بتعريف كتلة قابلة لإعادة الاستخدام من التعليمات البرمجية التي يمكن تنفيذها عدة مرات داخل البرنامج.

يمكن تسمية الوظائف واستدعائها مرارًا وتكرارًا أو يمكن تشغيلها بشكل مجهول في مكان ما (مثل وظائف lambda في python).

يتطلب تطوير الفهم الكامل لوظائف R فهم البيئات. البيئات هي ببساطة طريقة لإدارة الأشياء. مثال على البيئات في العمل هو أنه يمكنك استخدام متغير متكرر الاسم داخل وظيفة ، لن يتأثر ذلك إذا كان وقت التشغيل الأكبر يحتوي بالفعل على نفس المتغير. بالإضافة إلى ذلك ، إذا كان الدالة تستدعي متغيرًا غير معرَّف داخل الدالة ، سيتحقق من بيئة المستوى الأعلى لهذا المتغير.

### بناء الجملة

في R ، يحتوي تعريف الدالة على الميزات التالية:

1.  `function` الكلمة الرئيسية
2.  اسم وظيفة
3.  معلمات الإدخال (اختياري)
4.  بعض كتلة من التعليمات البرمجية للتنفيذ
5.  بيان الإرجاع (اختياري)

 `# a function with no parameters or returned values 
 sayHello() = function(){ 
  "Hello!" 
 } 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 helloWithName = function(name){ 
  paste0("Hello, ", name, "!") 
 } 
 
 helloWithName("Ada")  # calls the function, 'Hello, Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 multiply = function(val1, val2){ 
  val1 * val2 
 } 
 
 multiply(3, 5)  # prints 15 to the console 
` 

دالات هي كتل من التعليمات البرمجية التي يمكن إعادة استخدامها ببساطة عن طريق استدعاء الدالة. ويتيح ذلك إعادة استخدام رمز بسيط وأنيق دون إعادة كتابة أجزاء من التعليمات البرمجية بشكل صريح. هذا يجعل التعليمات البرمجية أكثر قابلية للقراءة ، مما يجعل تصحيح الأخطاء أسهل ، ويحد من أخطاء الكتابة.

يتم إنشاء الدالات في R باستخدام الكلمة الأساسية `function` ، إلى جانب اسم الدالة ومعلمات الدالة داخل الأقواس.

يمكن استخدام الدالة `return()` بواسطة الدالة لإرجاع قيمة ، ويتم استخدامها عادة لفرض الإنهاء المبكر لدالة ذات قيمة تم إرجاعها. بدلاً من ذلك ، ستقوم الدالة بإرجاع القيمة المطبوعة النهائية.

 `# return a value explicitly or simply by printing 
 sum = function(a, b){ 
  c = a + b 
  return(c) 
 } 
 
 sum = function(a, b){ 
  a + b 
 } 
 
 
 result = sum(1, 2) 
 # result = 3 
` 

يمكنك أيضًا تعريف القيم الافتراضية للمعلمات ، والتي ستستخدمها R عند عدم تحديد متغير أثناء استدعاء الدالة.

 `sum = function(a, b = 3){ 
  a + b 
 } 
 
 result = sum(a = 1) 
 # result = 4 
` 

يمكنك أيضًا تمرير المعلمات بالترتيب الذي تريده ، باستخدام اسم المعلمة.

 `result = sum(b=2, a=2) 
 # result = 4 
` 

يمكن لـ R أيضًا قبول معلمات إضافية اختيارية باستخدام "..."

 `sum = function(a, b, ...){ 
  a + b + ... 
 } 
 
 sum(1, 2, 3) #returns 6 
` 

يمكن أيضًا تشغيل الوظائف بشكل مجهول. هذه مفيدة للغاية في تركيبة مع عائلة "تطبيق" من الوظائف.

 `# loop through 1, 2, 3 - add 1 to each 
 sapply(1:3, 
       function(i){ 
         i + 1 
         }) 
` 

### ملاحظات

*   إذا تضمن تعريف الدالة وسيطات بدون قيم افتراضية محددة ، فيجب تضمين قيم هذه القيم.
    
     `sum = function(a, b = 3){ 
     a + b 
     } 
     
     sum(b = 2) # Error in sum(b = 2) : argument "a" is missing, with no default 
    ` 
    
*   توجد المتغيرات المحددة داخل الدالة فقط داخل نطاق تلك الوظيفة ، ولكنها ستتحقق من بيئة أكبر إذا لم يتم تحديد متغير
    
     `double = function(a){ 
     a * 2 
     } 
     
     double(x)  # Error in double(x) : object 'x' not found 
     
     
     double = function(){ 
     a * 2 
     } 
     
     a = 3 
     double() # 6 
    ` 
    

## وظائف مدمجة في R

*   R يأتي مع العديد من الوظائف التي يمكنك استخدامها للقيام بمهام متطورة مثل عشوائي أخذ العينات.
    
*   على سبيل المثال ، يمكنك تقريب رقم مع `round()` أو حسابه مع عامل به مع `factorial()` .
    

 `> round(4.147) 
 [1] 4 
 > factorial(3) 
 [1] 6 
 > round(mean(1:6)) 
 [1] 4 
` 

*   تسمى البيانات التي تمررها إلى الدالة وسيطة الدالة.
    
*   يمكنك محاكاة لفة من الموت مع الدالة R `sample()` . تأخذ الدالة `sample()` الوسيطتين: المتجه المسمى x ورقم المسمى بالحجم. فمثلا:
    

 `> sample(x = 1:4, size = 2) 
 [] 4 2 
 > sample(x = die, size = 1) 
 [] 3 
 >dice <- sample(die, size = 2, replace = TRUE) 
 >dice 
 [1] 2 4 
 >sum(dice) 
 [1] 6 
` 

*   إذا لم تكن متأكدًا من الأسماء التي ستستخدمها مع إحدى الوظائف ، فيمكنك البحث عن الوظيفة الحجج مع args.

 `> args(round) 
 [1] function(x, digits=0) 
` 

## مصادر

[المستندات الرسمية](https://cran.r-project.org/manuals.html) [خيارات-R](https://www.statmethods.net/management/functions.html) [كرا](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Functions) [R المتقدم: وظائف](http://adv-r.had.co.nz/Functions.html)