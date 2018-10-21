---
title: Develop Back End Projects Locally and Run on C9
localeTitle: تطوير المشاريع الخلفية على المستوى المحلي وتشغيلها على C9
---
إذا كنت ، مثلي ، تقوم بتطوير "مشروع النهاية الخلفية" محليًا وتريد تشغيله على c9 ، فقد يساعدك ذلك.

1.  دفع مشروعك لجيثاب
2.  قم بإنشاء مساحة عمل جديدة في c9 وقم بتعيين 'Clone from Git أو Mercurial URL (اختياري)' مع عنوان URL الخاص بمستودع تخزين github. بعد إرسال صفحة الإنشاء الخاصة بك ، سوف تقوم c9 بنسخ مشروعك نيابة عنك.
3.  تشغيل في نافذة محطة c9 الخاصة بك

`bash echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/v0.10.35/lib/node_modules" >> ~/.bashrc && source ~/.bashrc`

1.  تشغيل `bower install && sudo npm install`
2.  تشغيل `mkdir data && echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod && chmod a+x mongod && ./mongod`
3.  تشغيل `grunt serve` في نافذة طرفية أخرى