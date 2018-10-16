---
title: Timing Events
localeTitle: أحداث التوقيت
---
## أحداث التوقيت

يستخدم المبرمجون أحداث التوقيت لتأخير تنفيذ التعليمات البرمجية أو تكرار التعليمات البرمجية في فاصل زمني محدد.

هناك وظيفتان أصليتان في مكتبة JavaScript المستخدمة لإنجاز هذه المهام: `setTimeout()` و `setInterval()` .

يمكنك استخدام `setTimeout()` لتأخير تنفيذ الدالة التي تم تمريرها بواسطة مقدار محدد من الوقت. هناك `setTimeout()` يمكنك `setTimeout()` إلى `setTimeout()` : الوظيفة التي تريد الاتصال بها ، ومقدار الوقت بالمللي ثانية. (هناك 1000 ميلي ثانية (مللي ثانية) في ثانية 1. Ex: 5000 ms = 5 ثوان. `setTimeout()` سيتم تنفيذ `setTimeout()` مرة واحدة بعد انقضاء الوقت المحدد.

مثال `setTimeout()` :

 `var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
` 

عندما يتم استدعاء الدالة delayTimer فإنه سيتم تشغيل setTimeout. بعد مرور 3 ثوانٍ ، سيتم تنفيذ الأمر delayedFunction الذي سيرسل تنبيهًا.

استخدم `setInterval()` لتحديد وظيفة لتكرار مع تأخير زمني بين execuions. مرة أخرى ، يتم تمرير معلمتين إلى `setInterval()` : الدالة التي تريد الاتصال بها ومقدار الوقت بالمللي ثانية. سيستمر `setInterval()` في التنفيذ حتى يتم مسحها.

مثال `setInterval()` :

 `var intervalID; 
 
 function repeatEverySecond() { 
  intervalID = setInterval(sendMessage, 1000); 
 } 
 
 function sendMessage() { 
  console.log(“One second elapsed.”); 
 } 
` 

عند استدعاء التعليمات البرمجية الخاصة بك الدالة repeatEverySecond سيتم تشغيله setInterval. سوف setInterval تشغيل وظيفة sendMessage كل 1000 ميلي ثانية.

هناك أيضا الوظائف الأصلية المقابلة لوقف أحداث التوقيت: `clearTimeout()` و `clearInterval()` .

ربما لاحظت أن كل دالة مؤقت يتم حفظها إلى متغير. عند تشغيل وظيفة المجموعة ، يتم تعيين رقم يتم حفظه لهذا المتغير. هذا العدد المولد فريد لكل مثيل من المؤقتات. هذا الرقم المخصص هو أيضًا كيفية تحديد الموقتات التي يتم إيقافها. لهذا السبب ، يجب عليك دائمًا ضبط المؤقت على متغير.

لتوضيح التعليمة البرمجية الخاصة بك ، يجب أن تتطابق دائمًا مع `clearTimeout()` إلى `setTimeout()` و `clearInterval()` إلى `setInterval()` .

لإيقاف جهاز ضبط الوقت ، قم بالاتصال بالوظيفة المقابلة المناظرة واجتياز متغير معرف المؤقت الذي يطابق المؤقت الذي ترغب في إيقافه. بناء جملة `clearInterval()` و `clearTimeout()` هي نفسها.

مثال:

 `var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
 
 function clearAlert() { 
  clearTimeout(timeoutID); 
 } 
`