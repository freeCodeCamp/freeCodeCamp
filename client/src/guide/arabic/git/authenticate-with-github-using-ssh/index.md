---
title: How to authenticate with GitHub using SSH
localeTitle: كيفية المصادقة باستخدام GitHub باستخدام SSH
---
# كيفية المصادقة باستخدام GitHub باستخدام SSH

تحقق من عدم وجود ملفات `rsa` هنا قبل المتابعة ، استخدم:

 `ls -al ~/.ssh 
` 

إذا لم يكن هناك ما يتم سرده (على سبيل المثال `: No such file or directory` ) ، فاستخدم:

 `mkdir $HOME/.ssh 
` 

إذا لم يكن هناك شيء هناك ، قم بإنشاء keygen جديد مع:

 `ssh-keygen -t rsa -b 4096 -C your@email.com 
` 

الآن باستخدام `ls -al ~/.ssh` سوف تظهر لدينا `id_rsa.pub` الملف.

أضف مفتاح SSH إلى وكيل SSH:

 `eval "$(ssh-agent -s)" # for mac and Linux from bash 
` 

 ``eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
`` 

إضافة مفتاح RSA إلى SHH مع:

 `ssh-add ~/.ssh/id_rsa 
` 

انسخ مفتاحك إلى الحافظة

 `clip < ~/.ssh/id_rsa.pub # Windows 
` 

 `cat ~/.ssh/id_rsa.pub # Linux 
` 

انتقل إلى صفحة [إعدادات](https://github.com/settings/keys) GitHub وانقر على زر "New SSH key" في المفتاح الذي تم إنشاؤه.

ثم توثيق مع:

 `ssh -T git@github.com 
`