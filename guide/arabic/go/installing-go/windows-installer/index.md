---
title: Installing Go in Windows using the MSI Installer
localeTitle: تثبيت Go في Windows باستخدام MSI Installer
---
### تثبيت Go في Windows باستخدام MSI Installer

من [صفحة تنزيل golang](https://golang.org/dl/) ، احصل على مثبت Windows MSI وقم بتشغيله. سيكون عليك الاختيار بين الإصدارات 64 بت و 32 بت. إذا كنت لا تعرف البنية التي يعمل بها إصدار Windows ، فقم بإجراء بحث سريع على Google لمعرفة ذلك.

> معظم الإصدارات الحالية من Windows هي 64 بت ، لذا يجب أن تكون موافقًا للحصول على الإصدار 64 بت في قسم التنزيلات المميز ، ولكن إذا كان الكمبيوتر قديمًا ، فيجب أن يكون الإصدار 32 بت هو الرهان الأكثر أمانًا.

##### 64-بت Windodows المثبت

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "ويندوز إكس 64 رابط msi المثبت")

##### 32-بت Windodows المثبت

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "x86 نوافذ رابط msi المثبت")

#### تحقق من التثبيت وإصدار من الذهاب

للتحقق مما إذا تم تشغيل go بنجاح ، افتح موجه الأوامر واستخدم:

 `> go version 
` 

يجب أن يطبع هذا إلى إصدار وحدة التحكم ، بينما يتأكد في نفس الوقت من أن عملية التثبيت سارت بسلاسة.