---
title: Removing All Locally Stored Challenges
localeTitle: إزالة جميع التحديات المخزنة محليًا
---
ستؤدي إزالة جميع التحديات المخزنة محليًا إلى حل العديد من المشكلات المتعلقة بتعطل المتصفح على FreeCodeCamp

في Chrome:

*   على [freecodecamp](https://freecodecamp.com) فتح وحدة التحكم الخاصة بك
    *   نظام التشغيل Windows: `Ctrl` + `Shift` + `J`
    *   نظام التشغيل Mac OS: `Cmd` + `Opt` + `J`
*   انتقل إلى علامة التبويب الموارد (الكروم).
    *   انقر على الرابط "التخزين المحلي" في شريط التنقل على اليسار.
*   قم بحذف جميع الإدخالات على الجانب الأيمن ، أو قم بتشغيل هذا الأمر في وحدة تحكم المستعرض الخاص بك لمسح كافة الإدخالات من localStorage: `localStorage.clear();`
*   تحقق مما إذا كان هذا يحل مشكلتك

![](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9ea6a9cf48282cbf2aa766a6aa5ce59218c80528.png)

بدلاً من ذلك ، إذا كنت تواجه مشكلات تتعلق بتحدٍ معين بتجميد المتصفح ، [فابحث عن اسم هذا التحدي في وحدة التخزين المحلية واحذف هذا التحدي](http://forum.freecodecamp.com/t/clear-specific-values-from-your-browser-local-storage/19128) .