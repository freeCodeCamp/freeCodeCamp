---
title: How to Use SFTP to Securely Transfer Files with a Remote Server
localeTitle: كيفية استخدام SFTP لنقل الملفات بشكل آمن مع خادم عن بعد
---
## كيفية استخدام SFTP لنقل الملفات بشكل آمن مع خادم عن بعد

هذه المقالة عبارة عن برنامج تعليمي سريع حول كيفية استخدام بروتوكول نقل الملفات الآمن (SFTP) لتبادل الملفات مع خادم. هذا مفيد للبرمجة ، لأنه يسمح لك برمز واختبار محلي ، ثم إرسال عملك إلى الخادم عند الانتهاء.

### اختبار SSH

إذا لم تكن قد قمت بذلك بالفعل ، اختبر قدرتك على SSH في الخادم. تستخدم SFTP بروتوكول Secure Shell (SSH) ، لذلك إذا كنت غير قادر على SSH ، فلن تتمكن على الأرجح من SFTP.

```unix
ssh your_username@hostname_or_ip_address
``` 

### بدء جلسة SFTP

يستخدم هذا نفس بنية SSH ويفتح جلسة يمكنك فيها نقل الملفات.

```unix
sftp your_username@hostname_or_ip_address
``` 

لإدراج أوامر مفيدة:

```unix
help
``` 

### نقل الملفات والمجلدات

لتنزيل ملف:

```unix
get <filename>
``` 

لتنزيل مجلد ومحتوياته ، استخدم علامة "-r" (كما يعمل للتحميل):

```unix
get -r <foldername>
``` 

لتحميل ملف:

```unix
put <filename>
``` 

### تغيير المجلدات

لتغيير المجلد المحلي:

```unix
lcd <path/to/folder>
``` 

لتغيير المجلد البعيد:

```unix
cd <path/to/folder>
```