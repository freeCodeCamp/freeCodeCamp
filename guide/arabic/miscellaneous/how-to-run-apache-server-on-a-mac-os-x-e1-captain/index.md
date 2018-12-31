---
title: How to Run Apache Server on a Mac Os X E1 Captain
localeTitle: كيفية تشغيل خادم أباتشي على الكابتن Mac X X E1
---
يتم إنشاء خادم [Apache](http://www.apache.org/) مسبقًا على نظام التشغيل Mac OS X ، دون الحاجة إلى تثبيت أدوات الطرف الثالث WAMP و LAMP و MAMP و XAMPP لتشغيل خادم Apache على نظام Mac.

عندما تفكر في تشغيل خادم [Apache](http://www.apache.org/) على Mac OS X E1 Captain / OS X Yosemite ، يكون مختلفًا عن الإصدارات السابقة. هنا يجب عليك من نوافذ المحطة الطرفية ، خيارات سابقة من واجهة المستخدم الرسومية لوضع علامة كخادم الويب من نافذة تحكم النظام.

اكتب على نافذة المحطة الطرفية الخاصة بك:

 `httpd -v 
` 

انها تعطي نسخة الخادم وتاريخ البناء.

هنا يقف HTTP ل Hypertext Transfer Protocol d يقف لبرنامج Daemon وهو برنامج يستخدم لتعدد المهام كما يستخدم على Mac OS X. `httpd` هو برنامج خادم Apache HyperText Transfer Protocol (HTTP). تم تصميمه ليتم تشغيله كعملية daemon مستقلة. نوع

 `sudo apachectl start 
` 

على نافذة المحطة الطرفية الخاصة بك والذهاب إلى المستعرض الخاص بك واكتب `http://localhost` ستحصل ، `It works!` على متصفحك