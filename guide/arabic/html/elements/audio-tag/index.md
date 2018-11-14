---
title: Audio Tag
localeTitle: علامة الصوت
---
## علامة الصوت

تحدد العلامة < **_audio_** > عنصرًا صوتيًا ، يمكن استخدامه لإضافة مورد وسائط صوتية إلى مستند HTML يتم تشغيله بواسطة دعم أصلي لتشغيل الصوت مضمن في المستعرض بدلاً من مكون إضافي للمتصفح.

تدعم علامة الصوت حاليًا ثلاثة تنسيقات ملفات OGG و MP3 و WAV والتي يمكن إضافتها إلى html الخاصة بك كما يلي.

##### إضافة OGG

 `<audio controls> 
  <source src="file.ogg" type="audio/ogg"> 
 </audio> 
` 

##### إضافة MP3

 `<audio controls> 
  <source src="file.mp3" type="audio/mpeg"> 
 </audio> 
` 

##### إضافة WAV

 `<audio controls> 
  <source src="file.wav" type="audio/wav"> 
 </audio> 
` 

قد يحتوي على واحد أو أكثر من مصادر الصوت ، ممثلة باستخدام السمة src أو عنصر المصدر.

##### إضافة ملفات صوت متعددة

 `<audio controls> 
  <source src="file-1.wav" type="audio/wav"> 
  <source src="file-2.ogg" type="audio/ogg"> 
  <source src="file-3.mp3" type="audio/mpeg"> 
 </audio> 
` 

#### دعم المستعرض لأنواع مختلفة من filetypes كما يلي

| متصفح | mp3 | Wav | سطين | |: -------: |: ---: |: ---: |: ---: | | إنترنت إكسبلورر | نعم لا | لا | | جوجل كروم | نعم نعم نعم موزيلا فايرفوكس | نعم نعم نعم | سفاري | نعم نعم لا يوجد | الأوبرا | نعم نعم نعم فعلا

### السمات المدعومة

| السمة | القيمة | الوصف | |: -------: |: ---: |: ---: | | autoplay | autoplay | سيبدأ تشغيل الصوت بمجرد أن يصبح جاهزًا | | عناصر التحكم | عناصر التحكم | سيتم عرض الصوت (مثل زر التشغيل / الإيقاف المؤقت ، الخ) | حلقة | حلقة | الصوت سيبدأ من جديد ، في كل مرة يتم الانتهاء | | | كتم | كتم | سيتم كتم إخراج الصوت | | src | URL | يحدد عنوان URL للملف الصوتي

#### معلومات اكثر:

[https://www.w3schools.com/tags/tag\_audio.asp](https://www.w3schools.com/tags/tag_audio.asp) [https://html.com/tags/audio/](https://html.com/tags/audio/) [https://html.com/tags/audio/#ixzz5Sg4QbtH8](https://html.com/tags/audio/#ixzz5Sg4QbtH8)