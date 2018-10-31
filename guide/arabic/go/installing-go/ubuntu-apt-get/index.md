---
title: Installing Go in Ubuntu using apt-get
localeTitle: تثبيت Go في Ubuntu باستخدام apt-get
---
### تثبيت Go في Ubuntu باستخدام apt-get

إن استخدام مدير حزم المصدر في Ubuntu (apt-get) هو أسهل طريقة لتثبيت Go. لن تحصل على أحدث نسخة مستقرة ، ولكن لغرض التعلم ، يجب أن يكون هذا كافياً.

> حتى كتابة هذه السطور ، فإن نسخة Ubuntu Xenial من go هي 1.6.1 ، بينما الأحدث إصدار مستقر هو 1.9.1

 `$ sudo apt-get update 
 $ sudo apt-get install golang-go 
` 

#### تحقق من التثبيت وإصدار من الذهاب

للتحقق مما إذا تم تشغيل go بنجاح ، استخدم:

 `$ go version 
 > go version go1.9.1 linux/amd64 
` 

سيطبع هذا إلى إصدار وحدة التحكم ، بينما يتأكد في نفس الوقت من أن عملية التثبيت سارت بسلاسة.