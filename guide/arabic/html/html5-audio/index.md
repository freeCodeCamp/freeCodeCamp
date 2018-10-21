---
title: HTML5 Audio
localeTitle: صوت HTML5
---
## صوت HTML5

قبل HTML5 ، كان يجب تشغيل الملفات الصوتية في متصفح باستخدام مكون إضافي مثل Adobe Flash. HTML

يستخدم عنصر لتضمين محتوى الصوت في المستندات. قد يحتوي على واحد أو أكثر من مصادر الصوت ، ممثلة باستخدام السمة src أو عنصر [المصدر](source)

يضيف مقتطف الشفرة التالي ملفًا صوتيًا باسم الملف `tutorial.ogg` أو `tutorial.mp3` . ال  يشير العنصر إلى ملفات صوتية بديلة قد يختارها المتصفح. سوف يستخدم المتصفح أول تنسيق معترف به.

#### مثال 1

 `
<audio controls> 
  <source src="tutorial.ogg" type="audio/ogg"> 
  <source src="tutorial.mp3" type="audio/mpeg"> 
 Your browser does not support the audio element. 
 </audio> 
` 

#### مثال 2

 `
<audio src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" controls loop autoplay> 
 </audio> 
` 

تتضمن سمة `controls` الصوتية مثل التشغيل والإيقاف المؤقت ومستوى الصوت. إذا لم تستخدم هذه السمة ، فلن يتم عرض أي عناصر تحكم.

يمكّنك العنصر `<source>` من الإشارة إلى الملفات الصوتية البديلة التي قد يختارها المتصفح. سيستخدم المتصفح تنسيق التعرف الأول. قد يظهر النص الموجود بين علامتي `<audio>` و `</audio>` في المتصفح الذي لا يدعم عنصر `<audio>` HTML5.

ستقوم خاصية التشغيل التلقائي بتشغيل ملف الصوت تلقائيًا في الخلفية. من الأفضل ممارسة السماح للزوار باختيار تشغيل الصوت.

تشير السمة preload إلى ما يجب على المستعرض فعله إذا لم يتم تعيين المشغل على التشغيل التلقائي.

ستقوم السمة loop بتشغيل ملف الصوت الخاص بك في حلقة مستمرة إذا تم ذكرها

نظرًا لأن هذا html5 ، لا يدعمه بعض المتصفحات. يمكنك التحقق من ذلك في https://caniuse.com/#search=audio

#### معلومات اكثر:

https://caniuse.com/#search=audio

https://www.w3schools.com/html/html5\_audio.asp

https://msdn.microsoft.com/en-us/library/gg589529(v=vs.85).aspx