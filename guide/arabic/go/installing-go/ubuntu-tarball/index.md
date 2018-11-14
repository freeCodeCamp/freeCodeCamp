---
title: Installing Go in Ubuntu using a tarball
localeTitle: تثبيت Go في Ubuntu باستخدام tarball
---
### تثبيت Go في Ubuntu باستخدام tarball

> هذه هي الطريقة الموصى بها لتثبيت go إذا كنت ترغب في الحصول على أحدث إصدار ثابت متوفر من موقع golang على الويب.

#### تحقق من بنية النظام الخاص بك

قبل المتابعة تأكد من معرفة ما إذا كان النظام الخاص بك هو 32 أو 64 بت. إذا كنت لا تعرف ، فقم بتشغيل الأمر التالي لمعرفة ما يلي:

 `$ lscpu | grep Architecture 
` 

إذا كنت ترى `Architecture: x86_64` النظام الخاص بك هو 64 بت ، وإلا إذا حصلت على `Architecture: i686` ، فإن النظام الخاص بك هو 32 بت. الآن بعد أن تعرفت على بنية النظام الخاص بك ، دعونا المضي قدما.

#### انتقاء الصحيح كرات

من [صفحة تنزيل golang](https://golang.org/dl/) ، ستحتاج إلى الحصول على الرابط لملف tarball الصحيح (.tar.gz) لنظامك.

إذا كان النظام الخاص بك 64 بت ، فقم بنسخ الرابط إلى ملف .tar.gz لأنظمة Linux ذات هندسة x86\_64. على سبيل المثال ، أحدث إصدار مستقر لأنظمة 64 بت حتى كتابة هذه `go1.9.1.linux-amd64.tar.gz` هو `go1.9.1.linux-amd64.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "رابط x64 tarball")

إذا كان النظام الخاص بك هو 32 بت ، فقم بنسخ الرابط إلى ملف .tar.gz لأنظمة Linux باستخدام هندسة x86. حتى كتابة هذه السطور ، أحدث ملف هو `go1.9.1.linux-386.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "رابط x86")

بعد نسخ الرابط ، ما عليك سوى استبدال الرابط الموجود في عملية التثبيت الموجودة أدناه بالارتباط الذي حصلت عليه من صفحة التنزيل.

#### عملية التثبيت

> في عملية التثبيت هذه ، سنستخدم الروابط إلى go 1.9.1 tarballs كمثال. بالنسبة إلى الإصدار الأحدث أو الأقدم ، ما عليك سوى استبدال الرابط في الخطوة الأولى. تحقق من [صفحة تنزيل golang](https://golang.org/dl/) لترى الإصدارات المتوفرة حاليًا.

##### انتقل 1.9.1 لأنظمة 64 بت:

 `$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
` 

##### انتقل 1.9.1 لأنظمة 32bit:

 `$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
` 

#### تحقق من التثبيت وإصدار من الذهاب

للتحقق مما إذا تم تشغيل go بنجاح ، استخدم:

 `$ go version 
 > go version go1.9.1 linux/amd64 
` 

سيطبع هذا إلى إصدار وحدة التحكم ، بينما يتأكد في نفس الوقت من أن عملية التثبيت سارت بسلاسة.