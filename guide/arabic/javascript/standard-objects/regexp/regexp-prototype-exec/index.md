---
title: RegExp prototype exec
localeTitle: RegExp prototype exec
---
## RegExp prototype exec

ينفّذ الأسلوب **`exec()`** بحثًا عن تطابق في سلسلة محددة. إرجاع مصفوفة ناتجة ، أو [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "تمثل القيمة null غيابًا مقصودًا لأي قيمة كائن. انها واحدة من القيم البدائية لجافا سكريبت.") .

إذا كنت تقوم بتنفيذ مطابقة ببساطة للبحث عن true أو false ، استخدم الأسلوب [`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "تقوم طريقة test () بتنفيذ بحث عن تطابق بين تعبير عادي وسلسلة محددة. يرجع صواب أو خطأ.") أو الأسلوب [`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "تقوم طريقة البحث () بتنفيذ بحث عن مطابقة بين تعبير عادي وعنصر السلسلة هذا.") .

### بناء الجملة

 `regexObj.exec(str) 
` 

### المعلمات

`str`

السلسلة المقابلة لمطابقة التعبير العادي.

### قيمة الإرجاع

إذا نجحت المطابقة ، ترجع الطريقة `exec()` صفيف وتحديث خصائص كائن التعبير العادي. يحتوي الصفيف الذي تم إرجاعه على النص المطابق باعتباره العنصر الأول ، ثم عنصرًا واحدًا لكل أقواس التقاط مطابقة تحتوي على النص الذي تم التقاطه.

إذا فشل المطابقة ، ترجع الأسلوب `exec()` [`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "تمثل القيمة null غيابًا مقصودًا لأي قيمة كائن. انها واحدة من القيم البدائية لجافا سكريبت.") .

### وصف

خذ بعين الاعتبار المثال التالي:

 `// Match "quick brown" followed by "jumps", ignoring characters in between 
 // Remember "brown" and "jumps" 
 // Ignore case 
 var re = /quick\s(brown).+?(jumps)/ig; 
 var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 
` 

يعرض الجدول التالي نتائج هذا البرنامج النصي:

### أمثلة

#### العثور على مباريات متتالية

إذا كان التعبير العادي الخاص بك يستخدم علامة " `g` " ، يمكنك استخدام الأسلوب `exec()` عدة مرات للعثور على مطابقات متتالية في نفس السلسلة. عند القيام بذلك ، يبدأ البحث في سلسلة فرعية من `str` المحدد بواسطة خاصية [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex هي خاصية عدد صحيح للقراءة / الكتابة لمثيلات التعبير العادية التي تحدد الفهرس الذي يبدأ عنده التطابق التالي.") للتعبير العادي ( [`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "تقوم طريقة test () بتنفيذ بحث عن تطابق بين تعبير عادي وسلسلة محددة. يرجع صواب أو خطأ.") سيقدم خاصية [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex هي خاصية عدد صحيح للقراءة / الكتابة لمثيلات التعبير العادية التي تحدد الفهرس الذي يبدأ عنده التطابق التالي.") أيضًا). على سبيل المثال ، افترض أن لديك هذا البرنامج النصي:

 `var myRe = /ab*/g; 
 var str = 'abbcdefabh'; 
 var myArray; 
 while ((myArray = myRe.exec(str)) !== null) { 
  var msg = 'Found ' + myArray[0] + '. '; 
  msg += 'Next match starts at ' + myRe.lastIndex; 
  console.log(msg); 
 } 
` 

يعرض هذا النص النص التالي:

 `Found abb. Next match starts at 3 
 Found ab. Next match starts at 9 
` 

ملاحظة: لا تضع التعبير الحرفي العادي (أو مُنشئ [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "ينشئ منشئ RegExp كائن تعبير عادي لمطابقة النص بنمط.") ) ضمن الشرط `while` أو سيقوم بإنشاء حلقة لا نهائية إذا كان هناك تطابق بسبب خاصية [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "LastIndex هي خاصية عدد صحيح للقراءة / الكتابة لمثيلات التعبير العادية التي تحدد الفهرس الذي يبدأ عنده التطابق التالي.") التي تتم إعادة تعيينها عند كل عملية تكرار. تأكد أيضًا من تعيين العلامة العامة أو حدوث حلقة هنا أيضًا.

#### باستخدام `exec()` مع القيم الحرفية `RegExp`

يمكنك أيضًا استخدام `exec()` بدون إنشاء كائن [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "ينشئ منشئ RegExp كائن تعبير عادي لمطابقة النص بنمط.") :

 `var matches = /(hello \S+)/.exec('This is a hello world!'); 
 console.log(matches[1]); 
` 

سيؤدي ذلك إلى تسجيل رسالة تحتوي على "hello world!".