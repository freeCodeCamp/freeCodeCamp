---
title: Use Destructuring Assignment to Assign Variables from Arrays
localeTitle: استخدم Destructuring Assignment لتعيين متغيرات من صفائف
---
## استخدم Destructuring Assignment لتعيين متغيرات من صفائف

علينا اتخاذ بعض الاحتياطات في هذه الحالة.

1.  لا حاجة للثابتة \[ب ، أ\] لأنها ستحافظ على تأثير الواجب المحلي.
    
2.  const \[b، a\] = \[a، b\] سيؤدي إلى قيمة a ، مثل b غير محددة (قاعدة تخصيص بسيطة من اليسار إلى اليمين).
    

ومن هنا حل هذه المشكلة \[b، a\] = \[a، b\]