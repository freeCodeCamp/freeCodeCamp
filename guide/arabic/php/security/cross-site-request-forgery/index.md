---
title: Cross Site Request Forgery
localeTitle: تزوير عبر الموقع
---
## تزوير عبر الموقع

Cross Site Request Forgery هي نقطة ضعف في التطبيق بسبب عدم قيام مبرمج بالتحقق من المكان الذي تم إرسال طلب منه - يتم إرسال هذا الهجوم إلى مستخدم مستوى امتياز عالي للحصول على مستوى أعلى من الوصول إلى التطبيق.

### مثال عبر موقع هجوم طلب التزوير

تسمح مدونة إلكترونية للمستخدمين بإرسال تعليقات وتضمين صورة في التعليق ، حيث تسمح لوحة الإدارة للمدونة `/admin/deletecomment.php?id=123` المدونة بحذف تعليق عن طريق تحميل عنوان URL `/admin/deletecomment.php?id=123` . يمكن لمستخدم ضار إنشاء علامة صورة `<img src="/admin/deletecomment.php?id=123" />` عنوان url الخاص بالتعليق على سبيل المثال `<img src="/admin/deletecomment.php?id=123" />` حتى في المرة القادمة التي يقوم فيها المشرف بعرض التعليق ، يقوم جهاز الكمبيوتر الخاص `<img src="/admin/deletecomment.php?id=123" />` بتحميل عنوان url وحذف التعليق رقم 123.

### الدفاع عن موقع الويب الخاص بك من موقع التقاطع طلب هجمات التزوير في PHP

للدفاع ضد هجوم موقع التزوير طلب التزوير ، يجب عليك التحقق من رمز مميز تم تغييره بشكل منتظم. `/admin/deletecomment.php?id=123` عنوان url `/admin/deletecomment.php?id=123` إلى `/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here` .

 `<?php 
 // Checking a request's CSRF Token (if true the comment is deleted, if false the comment remains.) 
 session_start(); 
 if ($_GET['csrf-token'] == $_SESSION['csrf-token']){ 
  return true; 
 } else { 
  return false; 
 } 
` 

**نصائح:**

*   احتفظ بـ CSRF Token عشوائيًا تمامًا وتغييرًا لكل جلسة (يمكن أن تساعد وظائف openssl في ذلك)
*   تعتبر جلسات PHP مفيدة لتخزين CSRF Token في متناول كل من المستخدم والخادم ، يمكنك أيضًا جعل قاعدة بيانات هذه العملية مدفوعة إذا كنت مائلاً.
*   غيّر رمز CSRF في جلسة كل 24 ساعة. في أحد التطبيقات عالية المخاطر ، قد ترغب في تغييره بناءً على كل طلب ناجح ، ومع ذلك سيؤدي ذلك إلى مشكلات مع المستخدمين الذين يستخدمون علامات تبويب متعددة.

#### توليد آمن لسلسلة

عند تحديد CSRF Token ، من المهم أن يكون من المستحيل تخمين المفتاح. يمكن أن تؤدي وظائف OpenSSL في PHP إلى إنشاء مفتاح عشوائي لك وتخزينه كمتغير جلسة عمل.

 `<?php 
 session_start(); 
 $_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16)); 
` 

#### استخدام رمز CSRF لإكمال الطلبات الشرعية

يمكنك تضمين متغير الجلسة الذي قمت بحفظه مسبقًا مع رمز CSRF الخاص بك في عنوان URL تأكد من أنه مسموح للمسؤول الشرعي بحذف التعليقات. بدون الرمز الصحيح سيتم حظر الطلب.

 `<?php 
 session_start(); 
 echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful. 
` 

#### معلومات اكثر:

*   [OWASP Wiki - Cross Site Request Forgery](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
*   [php.net bin2hex () دليل](https://secure.php.net/manual/en/function.bin2hex.php)
*   [php.net openssl\_random\_pseudo\_bytes () دليل](https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php)