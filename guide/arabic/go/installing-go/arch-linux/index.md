---
title: Installing Go in Arch Linux using pacman
localeTitle: تثبيت Go في Arch Linux باستخدام pacman
---
### تثبيت Go في Arch Linux باستخدام pacman

استخدام Arc Linux Linux Manager (pacman) هو أسهل طريقة لتثبيت Go. استنادًا إلى فلسفة Arch Linux في تقديم إصدارات برامج جديدة بسرعة ، ستحصل على إصدار حالي جدًا من الانتقال. قبل أن تتمكن من تثبيت حزمة الانتقال ، يجب عليك تحديث النظام.

 `$ sudo pacman -Syu 
 $ sudo pacman -S go 
` 

#### تحقق من التثبيت وإصدار من الذهاب

للتحقق مما إذا تم تشغيل go بنجاح ، استخدم:

 `$ go version 
 > go version go2.11.1 linux/amd64 
` 

سيطبع هذا إلى إصدار وحدة التحكم ، بينما يتأكد في نفس الوقت من أن عملية التثبيت سارت بسلاسة.