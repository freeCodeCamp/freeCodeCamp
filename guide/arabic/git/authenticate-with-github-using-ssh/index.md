---
title: How to authenticate with GitHub using SSH
localeTitle: كيفية المصادقة باستخدام GitHub باستخدام SSH
---
# كيفية المصادقة باستخدام GitHub باستخدام SSH

تحقق من عدم وجود ملفات `rsa` هنا قبل المتابعة ، استخدم:

```shell
ls -al ~/.ssh
``` 

إذا لم يكن هناك ما يتم سرده (على سبيل المثال `: No such file or directory` ) ، فاستخدم:

```shell
mkdir $HOME/.ssh
``` 

إذا لم يكن هناك شيء هناك ، قم بإنشاء keygen جديد مع:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com
``` 

الآن باستخدام `ls -al ~/.ssh` سوف تظهر لدينا `id_rsa.pub` الملف.

أضف مفتاح SSH إلى وكيل SSH:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash
``` 

 ``eval `ssh-agent -s` 
 ssh-agent -s # for Windows 
`` 

إضافة مفتاح RSA إلى SHH مع:

```shell
ssh-add ~/.ssh/id_rsa
``` 

انسخ مفتاحك إلى الحافظة

```shell
clip < ~/.ssh/id_rsa.pub # Windows
``` 

```shell
cat ~/.ssh/id_rsa.pub # Linux
``` 

انتقل إلى صفحة [إعدادات](https://github.com/settings/keys) GitHub وانقر على زر "New SSH key" في المفتاح الذي تم إنشاؤه.

ثم توثيق مع:

```shell
ssh -T git@github.com
```