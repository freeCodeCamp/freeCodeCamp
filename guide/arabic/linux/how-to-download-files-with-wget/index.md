---
title: How to download files using the "wget" utility in Linux
localeTitle: كيفية تنزيل الملفات باستخدام الأداة المساعدة "wget" في Linux
---
## كيفية تنزيل الملفات باستخدام الأداة المساعدة "wget" في Linux

هذه المادة هي تعليمي سريع على استخدام الأداة المساعدة `wget` على نظام التشغيل يونيكس القائمة. جنو Wget هو أداة مجانية للتنزيل غير التفاعلي للملفات من الويب. وهو يدعم بروتوكولات HTTP و HTTPS وبروتوكول نقل الملفات ، وكذلك الاسترداد من خلال وكلاء HTTP.

### تثبيت `wget`

الأداة المساعدة wget هي حزمة متاحة بحرية ومرخصة بموجب ترخيص GNU GPL. يمكن تثبيت هذه الأداة على أي نظام تشغيل يشبه Unix بما في ذلك Windows و MacOS.

### البنية الأساسية

البنية الأساسية لل `wget` هي ...

 `wget [option]... [URL]... 
` 

### تفاصيل wget

 `wget --version 
` 

 `wget --help 
` 

### تنزيل ملف واحد

 `wget http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
` 

### جارٍ التنزيل من FTP

 `wget ftp://ftp.gnu.org/gnu/wget/wget-1.10.1.tar.gz.sig 
` 

### تقييد حدود سرعة التنزيل

 `wget --limit-rate=100k http://ftp.gnu.org/gnu/wget/wget-1.5.3.tar.gz 
` 

يمكنك اللعب مع الميزات المتبقية من الأداة المساعدة `wget`