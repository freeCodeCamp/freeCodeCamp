---
title: Checkout a Remote Branch in Git
localeTitle: الخروج فرع بعيد في جيت
---
# الخروج سير عمل فرع بعيد

اعتمادا على عدد أجهزة التحكم عن بعد المتاحة للرجوع المحلي الخاص بك ، اتبع التدفق المناسب.

## بالنسبة لـ repos مع جهاز تحكم عن بعد واحد:

إذا كان الريبو المحلي الخاص بك يحتوي على جهاز تحكم عن بُعد واحد فقط ، على سبيل المثال ، `origin` فقط:

 `git remote -v 
 origin  https://github.com/my_username/AwesomeRepo.git (fetch) 
 origin  https://github.com/my_username/AwesomeRepo.git (push) 
` 

ثم يمكنك ببساطة القيام بما يلي:

`git fetch`

`git checkout some_branch_name`

## بالنسبة لـ Repos مع جهاز تحكم عن بُعد:

إذا كان الريبو المحلي الخاص بك لديه أجهزة التحكم عن بعد متعددة:

 `git remote -v 
 origin      https://github.com/raisedadead/wiki.git (fetch) 
 origin      https://github.com/raisedadead/wiki.git (push) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (fetch) 
 upstream    https://github.com/FreeCodeCamp/wiki.git (push) 
` 

ثم عليك تحديد جهاز تحكم عن بعد أيضًا:  
`git fetch`  
`git checkout -b some_branch_name <remote>/some_branch_name`  
حيث `<remote>` في هذا المثال هو إما `upstream` أو `origin` .