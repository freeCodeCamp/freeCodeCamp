---
title: Session Hijacking
localeTitle: اختطاف الجلسة
---
## اختطاف الجلسة

اختطاف الجلسة عبارة عن ثغرة أمنية ناجمة عن قيام أحد المهاجمين بالوصول إلى معرف جلسة العمل الخاص بالمستخدم والتمكن من استخدام حساب مستخدم آخر ينتحل صفته. يستخدم هذا غالباً للوصول إلى حساب مستخدم إداري.

### الدفاع ضد هجمات اختطاف الجلسة في PHP

للدفاع ضد هجمات اختطاف جلسة العمل ، يلزمك التحقق من معلومات المتصفح والموقع الحالي للمستخدم مقابل المعلومات المخزنة حول الجلسة. فيما يلي مثال للتنفيذ يمكن أن يساعد في تخفيف آثار هجوم اختطاف جلسة العمل. يقوم بالتحقق من عنوان IP و "وكيل المستخدم" ، وإذا انتهت الجلسة ، قم بإزالة جلسة قبل استئنافها.

 `<?php 
 session_start(); 
 
 // Does IP Address match? 
 if ($_SERVER['REMOTE_ADDR'] != $_SESSION['ipaddress']) 
 { 
 session_unset(); 
 session_destroy(); 
 } 
 
 // Does user agent match? 
 if ($_SERVER['HTTP_USER_AGENT'] != $_SESSION['useragent']) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 
 // Is the last access over an hour ago? 
 if (time() > ($_SESSION['lastaccess'] + 3600)) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 else 
 { 
  $_SESSION['lastaccess'] = time(); 
 } 
` 

#### معلومات اكثر:

*   [دليل أمان جلسة عمل php.net](https://secure.php.net/manual/en/session.security.php)