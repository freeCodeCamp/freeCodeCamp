---
title: Git Revert
localeTitle: Git Revert
---
## Git Revert

الأمر `git revert` revert يلغي الالتزام ، ولكن بخلاف `git reset` ، التي تزيل الالتزام من تاريخ الالتزام ، فإنها تلحق التزامًا جديدًا بالمحتوى الناتج. هذا يمنع Git من فقدان التاريخ ، وهو أمر مهم لسلامة سجل النُسخ السابقة وللتعاون الموثوق به. عندما تعمل على مستودع مع مطورين آخرين ، يكون استخدام `git reset` خطيراً للغاية لأنك تقوم بتغيير تاريخ الإلتزامات مما يجعل من الصعب جدًا الحفاظ على تاريخ ثابت للالتزامات مع مطورين آخرين.

### خيارات مشتركة

1.) هذا هو خيار افتراضي ولا يحتاج إلى تحديد. سيؤدي هذا الخيار إلى فتح محرر النظام المكوّن ويطالبك بتحرير رسالة الالتزام قبل ارتكاب الإعادة.

 `  -e 
  --edit 
` 

2.) هذا هو معكوس الخيار -e. لن `revert` إعادة المحرر.

 `  --no-edit 
` 

3.) يؤدي تمرير هذا الخيار إلى منع `git revert` من `git revert` عن إنشاء التزام جديد يلغي الالتزام المستهدف. بدلاً من إنشاء الالتزام الجديد ، سيضيف هذا الخيار التغييرات العكسيّة إلى فهرس التدريج ودليل العمل.

 `  -n 
  --no-edit 
` 

### مثال.

دعونا نتخيل الوضع التالي. 1.) أنت تعمل على ملف وتضيف وتلتزم بالتغييرات. 2.) ثم تعمل على بعض الأشياء الأخرى ، وجعل بعض أكثر تلتزم. 3.) الآن أنت تدرك ، ثلاث أو أربع مرات مضت ، فعلت شيئًا ترغب في التراجع عنه - كيف يمكنك فعل هذا؟

قد تفكر ، فقط استخدم `git reset` ، لكن هذا سيزيل كل الإلتزامات بعد الشخص الذي تود تغييره - `git revert` إلى الإنقاذ! دعونا نسير في هذا المثال:

 ``mkdir learn_revert # Create a folder called `learn_revert` 
 cd learn_revert # `cd` into the folder `learn_revert` 
 git init # Initialize a git repository 
 
 touch first.txt # Create a file called `first.txt` 
 echo Start >> first.txt # Add the text "Start" to `first.txt` 
 
 git add . # Add the `first.txt` file 
 git commit -m "adding first" # Commit with the message "Adding first.txt" 
 
 echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt` 
 git add . # Add the `wrong.txt` file 
 git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt" 
 
 echo More >> first.txt # Add the text "More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt" 
 
 echo Even More >> first.txt # Add the text "Even More" to `first.txt` 
 git add . # Add the `first.txt` file 
 git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt" 
 
 # OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit) 
 
 git revert HEAD~2 # this will put us in a text editor where we can modify the commit message. 
 
 ls # wrong.txt is not there any more! 
 git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt` 
`` 

#### معلومات اكثر:

*   [Git التراجع الوثائق](https://git-scm.com/docs/git-revert)
*   [Git revert البرنامج التعليمي التفاعلي](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)