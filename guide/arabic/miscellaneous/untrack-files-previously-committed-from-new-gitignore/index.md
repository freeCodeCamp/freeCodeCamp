---
title: Untrack Files Previously Committed from New Gitignore
localeTitle: ملفات Untrack سابقاً من New Gitignore
---
لإلغاء تعقب ملف _واحد_ ، أي توقف عن تتبع الملف دون حذفه من استخدام النظام:

`git rm --cached filename`

لuntrack _كل_ ملف في `.gitignore` :

أولاً ، **ارتكب** أي تغييرات معلقة في التعليمات البرمجية ، ثم قم بتشغيل:

`git rm -r --cached`

يؤدي ذلك إلى إزالة أي ملفات تم تغييرها من الفهرس (منطقة التدريج) ، ثم تشغيل:

`git add .`

الالتزام بها:

`git commit -m ".gitignore is now working"`

للتراجع عن `git rm --cached filename` ، استخدم `git add filename`