---
title: Setting Up Yum Repositories in RedHat/CentOS Linux
localeTitle: إعداد مستودعات Yum في RedHat / CentOS Linux
---
مستودعات YUM هي مستودعات لبرامج Linux (ملفات حزمة RPM).

ملف حزمة RPM هو عبارة عن ملف Red Hat Package Manager ويتيح تثبيت البرامج بسرعة وسهولة على Red Hat / CentOS Linux.

## إعداد مستودعات Yum في RedHat CentOS Linux

الخطوة 1: التحقق من وجود مستودعات حالية أم لا.

 `#yum repolist 
` 

سوف تجد أنه لا يوجد مستودعات.

الخطوة 2: تغيير الدليل إلى

 `#cd /etc/yum.repos.d 
` 

الخطوة 3: إنشاء ملف جديد

 `#vim myrepo.repo 
` 

الخطوة 4: اكتب الأسطر التالية في الملف

 `[file-name] 
 name=filename 
 baseurl="location of yum repositories" 
 gpgcheck=0 
` 

الخطوة 5: حفظ وخروج

الخطوة 6: كرر الخطوة 1

 `You Will find repositories 
`