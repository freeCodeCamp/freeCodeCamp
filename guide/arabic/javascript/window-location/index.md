---
title: Window Location
localeTitle: موقع النافذة
---
## موقع النافذة

يمكن استخدام كائن `window.location` للحصول على معلومات حول عنوان الصفحة الحالي (URL) ولإعادة توجيه المستعرض إلى صفحة جديدة.

و `window.location` الكائن يمكن كتابة دون `window` البادئة، مجرد `location` .

#### بعض الأمثلة:

*   `window.location.href` بإرجاع href (عنوان URL) الخاص بالصفحة الحالية
*   `window.location.hostname` بإرجاع اسم المجال لمضيف الويب
*   `window.location.host` بإرجاع اسم المضيف وأي منفذ مرتبط به
*   `window.location.pathname` بإرجاع المسار واسم الصفحة الحالية
*   `window.location.protocol` يعيد بروتوكول الويب المستخدم (http: أو https :)
*   تحميل `window.location.assign()` مستند جديد

#### معلومات اكثر:

[W3C](https://www.w3schools.com/js/js_window_location.asp)

[MDN](https://developer.mozilla.org/docs/Web/API/Window/location)