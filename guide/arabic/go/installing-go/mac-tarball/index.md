---
title: Installing Go in Mac OS X using a tarball
localeTitle: تثبيت Go in Mac OS X باستخدام tarball
---
### تثبيت Go in Mac OS X باستخدام tarball

#### رابط إلى tarball

يمكنك الحصول على الرابط إلى أرشيف نظام التشغيل Mac OS من قسم "آخر مستقر" في [صفحة تنزيل golang](https://golang.org/dl/) .

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "رابط Mac tarball")

#### عملية التثبيت

> في عملية التثبيت هذه ، سنستخدم أحدث إصدار ثابت اعتبارًا من هذه الكتابة (انتقل إلى 1.9.1). بالنسبة إلى الإصدار الأحدث أو الأقدم ، ما عليك سوى استبدال الرابط في الخطوة الأولى. تحقق من [صفحة تنزيل golang](https://golang.org/dl/) لترى الإصدارات المتوفرة حاليًا.

##### تثبيت Go 1.9.1

 `$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
` 

#### تحقق من التثبيت وإصدار من الذهاب

للتحقق مما إذا تم تشغيل go بنجاح ، استخدم:

 `$ go version 
` 

يجب أن يطبع هذا إلى إصدار وحدة التحكم ، بينما يتأكد في نفس الوقت من أن عملية التثبيت سارت بسلاسة.