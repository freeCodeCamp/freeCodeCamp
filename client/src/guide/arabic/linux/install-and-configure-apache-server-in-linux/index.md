---
title: Install and Configure Apache Server in Linux
localeTitle: تثبيت وتكوين خادم أباتشي في لينكس
---
خادم Apache HTTP ، الذي يطلق عليه اسم Apache ، هو مجاني ومفتوح المصدر برنامج خادم الويب عبر منصة. تم تطوير Apache وصيانتها بواسطة مجتمع مفتوح للمطورين تحت رعاية مؤسسة Apache Software Foundation.

## تثبيت وتكوين خادم أباتشي في لينكس

الخطوة 1: تثبيت Apache Server `yum install httpd`

الخطوة 2: تكوين http على شبكة الإنترنت `cd /etc/httpd/conf.d`

الخطوة 3: إنشاء ملف تكوين مخصص بالملحق .conf. `vim *.conf`

الخطوة 4: بدء تشغيل خادم Apache `systemctl start httpd.service`

الخطوة 5: بدء تشغيل Apache Server تلقائيًا عند بدء تشغيل نظام التشغيل. `systemctl enable httpd.service`

الخطوة 6: إضافة إذن جدار الحماية. `firewall-cmd --add-service=http --permanent`