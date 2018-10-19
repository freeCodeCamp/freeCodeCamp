---
title: Override Local Files with Git Pull
localeTitle: تجاوز الملفات المحلية مع سحب جيت
---
# متى تحتاج إلى الكتابة فوق الملفات المحلية؟

إذا شعرت بالحاجة إلى تجاهل جميع التغييرات المحلية الخاصة بك وإعادة تعيين / الكتابة فوق كل شيء بنسخة من الفرع البعيد ، فعليك اتباع هذا الدليل.

هام: إذا كان لديك أي تغييرات محلية ، فسيتم فقدها. مع أو بدون `--hard` خيار `--hard` ، سيتم فقدان أي تعهدات محلية لم يتم دفعها.  
إذا كان لديك أي ملفات لا يتم تتبعها بواسطة Git (مثل محتوى المستخدم الذي تم تحميله) ، فلن تتأثر هذه الملفات.

## سير العمل فوق الكتابة:

للكتابة فوق الملفات المحلية ، قم بما يلي:

 `git fetch --all 
 git reset --hard <remote>/<branch_name> 
` 

فمثلا:

 `git fetch --all 
 git reset --hard origin/master 
` 

## كيف تعمل:

`git fetch` download the latest from remote without try to merge or rebase anything.

ثم يعيد تعيين GET إعادة تعيين الفرع الرئيسي إلى ما جلبته للتو. يقوم الخيار `--hard` بتغيير كل الملفات في شجرة العمل الخاصة بك لمطابقة الملفات في `origin/master` .

## معلومة اضافية:

تجدر الإشارة إلى أنه من الممكن الحفاظ على الالتزام المحلي الحالي عن طريق إنشاء فرع من الفرع `master` أو الفرع الذي تريد العمل عليه قبل إعادة التعيين:

فمثلا:

 `git checkout master 
 git branch new-branch-to-save-current-commits 
 git fetch --all 
 git reset --hard origin/master 
` 

بعد ذلك ، سيتم الاحتفاظ بجميع الإلتزامات القديمة في الالتزامات `new-branch-to-save-current-commits` . ومع ذلك ، سيتم فقدان التغييرات غير الملتزم بها (حتى يتم تقسيمها). تأكد من خبأ وارتكاب أي شيء تحتاجه.

## النسبة:

_تستند هذه المقالة إلى سؤال Stack Overflow [هنا](http://stackoverflow.com/questions/1125968/force-git-to-overwrite-local-files-on-pull/8888015#8888015)_