---
title: Transferring a Heroku Project Between Nonprofit Project Owners
localeTitle: نقل مشروع Heroku بين مالكي المشروع غير الربحيين
---
## Heroku:

بمجرد أن يقوم الشخص الذي سيحصل على تطبيق Heroku بإنشاء حساب Heroku ، اتبع الخطوات الموجودة هنا لنقلها إليهم: [https://devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB:

إنشاء حساب "مستخدم" MLAB للشخص الذي تريد نقل قاعدة MLAB الخاصة بك: [http://docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

بعد ذلك سيحتاجون إلى إعادة تعيين امتيازات المشرف إلى الحساب الذي أنشأته للتو: [http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub أو BitBucket

يمكن لمالكي المشروع الجديد إما أن يفرغوا الريبو الحالي أو يمكنك نقل ملكية لهم في جيثب: [https://help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

لنقلها في BitBucket: [https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)

## تأكد من عدم بقاء أي مفاتيح في سجل Git الخاص بك

إذا كان مشروعك مفتوح المصدر ، فاحرص على إزالة أي مفاتيح (يجب ألا تكون قد ارتكبت في المقام الأول ، ولكن من الأفضل التأخر في إزالتها). فيما يلي كيفية البحث خلال سجل الشفرة الخاصة بك:

إذا عثرت على مفتاح في مكان ما في المستودع الخاص بك ، أو اكتشفت أن ملفًا حساسًا مثل ملف .env كان ملتزمًا بطريقة ما عند نقطة واحدة ، يمكنك إزالته من سجل git الخاص بك مع BFG: [https://help.github.com/articles / إزالة الحساسة البيانات /](https://help.github.com/articles/remove-sensitive-data/)