---
title: User management on Linux
localeTitle: إدارة المستخدم على لينكس
---
#### ملاحظة: لتشغيل أمر `sudo` يجب أن يكون لديك حساب مستخدم sudo (مسؤول)

## كيف تصنع مستخدم

#### استخدم الأمر `adduser` أو `useradd` لإضافة مستخدم جديد إلى نظامك.

 `$ sudo adduser username 
` 

تأكد من استبدال `username` بالمستخدم الذي ترغب في إنشائه.

#### استخدم الأمر `passwd` لتحديث كلمة مرور المستخدم الجديد.

 `$ sudo passwd username 
` 

ينصح بشدة كلمة مرور قوية!

## كيفية إنشاء مستخدم سودو

لإنشاء مستخدم `sudo` ، تحتاج إلى إنشاء مستخدم عادي أولاً باستخدام الأمر أعلاه ، ثم إضافة هذا المستخدم إلى مجموعة `sudoers` باستخدام الأمر `usermod` .

##### على أنظمة ديبيان (أوبونتو / لينكس مينت / ElementryOS)، وأعضاء `sudo` مجموعة لديه امتيازات سودو.

 `$ sudo usermod -aG sudo username 
` 

##### على syhels مقرها RHEL (فيدورا / CentOs) ، أعضاء مجموعة `wheel` لديهم sudo privilages.

 `$ sudo usermod -aG wheel username 
` 

## كيفية حذف مستخدم

##### لديبيان (أوبونتو)

 `$ sudo deluser username 
` 

##### ل RHEL (فيدورا / CentOS)

 `$ sudo userdel username 
` 

##### إنشاء مجموعات وإضافة مستخدمين

 `$ sudo groupadd editorial 
 $ sudo usermod -a -G editorial username 
` 

#### ملاحظة: يمكن تنفيذ جميع الأوامر المذكورة أعلاه بدون sudo في وضع `root`

للتبديل إلى الجذر على ubuntu ، قم بتشغيل الأمر `su -i` متبوعاً بكلمة مرور المستخدم الذي قام بتسجيل الدخول. تغييرات سريعة على `#` insted of `$`

##### على أنظمة ديبيان (أوبونتو / لينكس مينت / ElementryOS)، وأعضاء `sudo` مجموعة لديه امتيازات سودو.

 `$ sudo usermod -aG sudo username 
` 

## كيف تصنع مجموعة

لإنشاء مجموعة ، استخدم الأمر `groupadd`

 `$ sudo groupadd groupname 
` 

## كيفية حذف المجموعة

لحذف مجموعة ، استخدم الأمر 'groupdel'

`` ` $ sudo groupdel grouname``

#### المراجع

[ديبيان (أوبونتو)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-16-04)

[RHEL (CentOS / Fedora)](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-a-centos-7-server)