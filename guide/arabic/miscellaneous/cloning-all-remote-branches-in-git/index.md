---
title: Cloning All Remote Branches in Git
localeTitle: استنساخ جميع الفروع النائية في جيت
---
لاستنساخ مستودع git بعيد ، أدخل ما يلي في المحطة الطرفية:

> ملاحظة: تأكد من وجودك في مجلد جذر مثل `webdev` بدلاً من مجلد خاص بالمشروع.

 `git clone <remote_repo> 
 cd <remote_repo> 
` 

قائمة الفروع الخاصة بك باستخدام هذه الأوامر:

 `git branch // Lists local branches 
 git branch -a // Lists local and remote branches 
` 

للتحقق من فرع بعيد محليًا:

 `git checkout <branch> 
` 

إليك مثال لجلب الفرع `master` البعيد من FreeCodeCamp:

 `git clone https://github.com/FreeCodeCamp/FreeCodeCamp.git 
 cd FreeCodeCamp 
 git checkout master 
`