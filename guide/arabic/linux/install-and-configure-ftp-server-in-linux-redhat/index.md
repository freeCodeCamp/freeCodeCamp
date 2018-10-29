---
title: Install and configure FTP server in Redhat/Centos Linux
localeTitle: قم بتثبيت وتكوين خادم FTP في Redhat / Centos Linux
---
## قم بتثبيت وتكوين خادم FTP في Redhat / Centos Linux

FTP لتقف على بروتوكول نقل الملفات. كتبه Abhay Bhushan ونشرت كـ RFC 114 في 16 أبريل 1971. وهو مدعوم من قبل كل نظام التشغيل والمتصفحات. وهي مبنية على بنية خادم العميل.

## قم بتثبيت وتكوين خادم FTP في Redhat / Centos Linux

الخطوة 1: سنستخدم localhost لجهازنا لإعداد خادم ftp.

الخطوة 2: قم بتثبيت الحزمة vsftpd (أمان بروتوكول نقل الملفات الخفي).

`yum install -y vsftpd`

الخطوة 3: بدء خادم FTP عند تشغيل النظام.

`systemctl enable vsftpd.service`

الخطوة 4: التحقق من حالة خادم ftp

`systemctl status vsftpd.service`

الخطوة 5: تكوين حزمة vsftpd. سنقوم بتحرير `/etc/vsftpd/vsftpd.conf`

`Change the line which contain anonymous_enable=NO to anonymous_enable=YES` `This will give permit any one to access FTP server with authentication.` `Change the following to YES` `local_enable=YES` `write_enable=YES<br>`

الخطوة 6: بدء خادم FTP `systemctl start vsftpd.service`

الخطوة 7: تثبيت عميل FTP `yum install -y lftpd`

الخطوة 8: قم بتوصيل ftp بـ localhost `lftp localhost`