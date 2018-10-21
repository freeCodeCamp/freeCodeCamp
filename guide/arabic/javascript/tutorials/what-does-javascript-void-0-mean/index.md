---
title: What Does JavaScript Void 0 Mean
localeTitle: ماذا يفعل جافا سكريبت Void 0 Mean
---
## ماذا يفعل جافا سكريبت Void 0 Mean

**يقوم عامل تشغيل void في JavaScript بتقييم تعبير وإرجاع غير محدد** .

استخدام وحدة التحكم للتحقق من نفسه: -

![ConsoleOutput](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

**_ملاحظة:_** - **الفراغ** بغض النظر عن أي قيمة تم تمريرها على طول، _ويعود دائما **غير معروف** كما هو مبين أعلاه._ لكن ، **الفراغ مع المعامل 0 المفضل** .

**طريقتان لاستخدام المعامل 0 -> void (0) أو void 0.** كلاهما على ما يرام.

#### متى تستخدم جافا سكريبت باطلة (0)؟

عند النقر فوق الارتباط ، لا تريد أن يقوم المتصفح بتحميل صفحة جديدة أو تحديث الصفحة نفسها (حسب عنوان URL المحدد). بدلاً من ذلك ، قم بإرفاق جافا سكريبت بالرابط.

#### مثال 1 نموذج مع void Javascript (0):

 `
<html> 
 <body> 
 <a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a> 
 </body> 
 </html> 
` 

#### انتاج :

عند النقر فوق ارتباط ClickMe ، يظهر تنبيه على النحو التالي:

![Output1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### مثال 2 نموذج مع void Javascript (0):

 `
<html> 
 <body> 
 <a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a> 
 </body> 
 </html> 
` 

#### انتاج :

عندما تنقر نقرًا مزدوجًا على الرابط ، سينبثق تنبيه دون أي تحديث للصفحة.

#### مثال 3 نموذج مع void Javascript (0):

 `
<html> 
 <body> 
 <a href="javascript:void(0);https://www.google.co.in/" 
 ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a> 
 </body> 
 </html> 
` 

#### انتاج :

عندما تنقر نقرًا مزدوجًا على الرابط ، سينبثق تنبيه ، ولن يؤدي إغلاقه أيضًا إلى إعادة التوجيه إلى google.com.

#### مثال نموذج دون void Javascript (0):

 `
<html> 
 <body> 
 <a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a> 
 </body> 
 </html> 
` 

#### انتاج :

عندما تنقر نقرًا مزدوجًا على الرابط ، سينبثق تنبيه ، وسيؤدي غلقه إلى إعادة التوجيه إلى google.com.

#### استنتاج :

عامل **الفراغ** مفيد عندما تحتاج إلى منع أي تحديث أو إعادة توجيه غير مرغوب فيه للصفحة. بدلاً من ذلك ، قم بتنفيذ بعض عملية javascript.

#### معلومات اكثر:

1) [مستندات Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 2) [فهم الفراغ 0](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)