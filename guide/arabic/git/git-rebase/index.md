---
title: Git Rebase
localeTitle: الذهاب Rebase
---
## جيت ريباس

إعادة بناء فرع في Git هي طريقة لنقل كامل فرع إلى نقطة أخرى في الشجرة. أبسط مثال هو نقل فرع أبعد في الشجرة. لنفترض أن لدينا فرعًا يختلف عن الفرع الرئيسي عند النقطة A:

 `        /o-----o---o--o-----o--------- branch 
 --oo--A--o---o---o---o----o--ooo--- master 
` 

عندما تتمرد ، يمكنك تحريكه على النحو التالي:

 `                                   /o-----o---o--o-----o------ branch 
 --oo--A--o---o---o---o----o--ooo master 
` 

للمراجعة ، تأكد من حصولك على جميع الإلتزامات التي تريدها في rebase في فرعك الرئيسي. تحقق من الفرع الذي ترغب في إعادة توجيهه واكتب `git rebase master` (حيث الرئيسي هو الفرع الذي ترغب في إعادة تعيينه).

من الممكن أيضًا إعادة التمرير على فرع مختلف ، بحيث يتم إعادة سحب فرع كان يستند إلى فرع آخر (دعنا نسميه ميزة) على العنوان الرئيسي:

 `                            /---oo branch 
           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
` 

بعد الحصول على `git rebase master branch` أو `git rebase master` عندما تقوم بسحب الفرع ، ستحصل على:

 `           /---oooo---o--o------ feature 
 ----o--ooA----o---o--ooo--o--o- master 
                                  \---oo branch 
` 

### Git rebase تفاعلية في وحدة التحكم

لاستخدام `git rebase` في وحدة التحكم مع قائمة بالالتزامات ، يمكنك اختيار أو تعديل أو إسقاط rebase:

*   أدخل `git rebase -i HEAD~5` مع الرقم الأخير أي عدد من الإلتزامات من أحدث الإصدارات التي تريد مراجعتها.
*   في vim ، اضغط على `esc` ، ثم `i` لبدء تحرير الاختبار.
*   على الجانب الأيسر يمكنك الكتابة فوق `pick` واحد من الأوامر أدناه. إذا كنت تريد إسقاط التزام في السابق وتجاهل رسالة الالتزام ، أدخل `f` في مكان `pick` الالتزام.

 `pick 452b159 <message for this commit> 
 pick 7fd4192 <message for this commit> 
 pick c1af3e5 <message for this commit> 
 pick 5f5e8d3 <message for this commit> 
 pick 5186a9f <message for this commit> 
 
 # Rebase 0617e63..5186a9f onto 0617e63 (30 commands) 
 # 
 # Commands: 
 # p, pick = use commit 
 # r, reword = use commit, but edit the commit message 
 # e, edit = use commit, but stop for amending 
 # s, squash = use commit, but meld into previous commit 
 # f, fixup = like "squash", but discard this commit's log message 
 # x, exec = run command (the rest of the line) using shell 
 # d, drop = remove commit 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
` 

*   أدخل `esc` متبوعة `:wq` .
*   إذا تم إعادة تعيينها بنجاح ، فستحتاج إلى فرض التغييرات على `git push -f` باستخدام `git push -f` لإضافة الإصدار المعاد توجيهه إلى repub github.
*   إذا كان هناك تعارض دمج ، فهناك عدد من الطرق لإصلاح هذا ، بما في ذلك اتباع الاقتراحات الواردة في [هذا الدليل](https://help.github.com/enterprise/2.11/user/articles/resolving-a-merge-conflict-using-the-command-line/) . إحدى الطرق هي فتح الملفات في محرر نصي وحذف أجزاء من الرمز الذي لا تريده. ثم استخدم `git add <file name>` متبوعًا `git rebase --continue` . يمكنك تخطي الالتزام المتضارب بإدخال `git rebase --skip` ، الخروج من git rebase بإدخال `git rebase --abort` في وحدة التحكم الخاصة بك.

### معلومات اكثر:

*   [وثائق جيت: rebase](https://git-scm.com/docs/git-rebase)
*   [Thoughbot دليل تفاعلي ل git rebase](https://robots.thoughtbot.com/git-interactive-rebase-squash-amend-rewriting-history)