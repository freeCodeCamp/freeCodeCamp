---
title: Git Push
localeTitle: Git Push
---
## Git Push

يسمح لك الأمر `git push` بإرسال (أو _دفع_ ) الإلتزامات من الفرع المحلي في مستودع Git المحلي إلى المستودع البعيد.

حتى تتمكن من الدفع إلى مستودع التخزين عن بعد ، يجب عليك التأكد من أن **جميع التغييرات التي أجريتها على المستودع المحلي ملتزمة** .

بناء جملة هذا الأمر هو كما يلي:

 `git push <repo name> <branch name> 
` 

هناك عدد من الخيارات المختلفة التي يمكنك تمريرها باستخدام الأمر ، يمكنك معرفة المزيد عنها في [وثائق Git](https://git-scm.com/docs/git-push#_options_a_id_options_a) أو تشغيل `git push --help` .

### ادفع إلى مستودع ومستودع بعيد

لدفع الرمز ، يجب عليك أولاً استنساخ مستودع إلى جهازك المحلي.

 ``# Once a repo is cloned, you'll be working inside of the default branch (the default is `master`) 
 git clone https://github.com/<git-user>/<repo-name> && cd <repo-name> 
 # make changes and stage your files (repeat the `git add` command for each file, or use `git add .` to stage all) 
 git add <filename> 
 # now commit your code 
 git commit -m "added some changes to my repo!" 
 # push changes in `master` branch to github 
 git push origin master 
`` 

لمعرفة المزيد عن الفروع ، تحقق من الروابط أدناه:

*   [بوابة الخروج](https://github.com/renington/guides/blob/master/src/pages/git/git-checkout/index.md)
*   [فرع بوابة](https://github.com/renington/guides/blob/master/src/pages/git/git-branch/index.md)

### ادفع إلى مستودع بعيد عن بعد وكل الفروع فيه

إذا كنت ترغب في دفع جميع التغييرات الخاصة بك إلى مستودع بعيد وجميع الفروع في ذلك ، يمكنك استخدام:

 `git push --all <REMOTE-NAME> 
` 

بحيث:

*   `--all` العلم الذي يشير إلى أنك تريد دفع جميع الفروع إلى مستودع بعيد
*   `REMOTE-NAME` هو اسم مستودع التخزين عن بعد الذي تريد الضغط عليه

### ادفع إلى فرع معين باستخدام معلمة القوة

إذا كنت ترغب في تجاهل التغييرات المحلية التي تم إجراؤها على مستودع Git في Github (الذي يفعله معظم المطورين للحصول على إصلاح سريع لخادم التطوير) ، يمكنك استخدام الأمر -force للدفع عن طريق تجاهل تلك التغييرات.

 `git push --force <REMOTE-NAME> <BRANCH-NAME> 
` 

بحيث:

*   `REMOTE-NAME` هو اسم مستودع التخزين عن بعد الذي تريد دفع التغييرات إليه
*   `BRANCH-NAME` هو اسم الفرع البعيد الذي تريد دفع تغييراتك إليه

### دفع تجاهل هوك Git قبل الضغط

افتراضيا ستطلق `git push` مفتاح `--verify` . وهذا يعني أن بوابة git ستنفذ أي برنامج نصي مسبق الدفع من جانب العميل قد يكون تم تكوينه. إذا فشلت النصوص التمهيدية ، فستدفع البوابة. (الخطافات مسبقة الدفع هي جيدة للقيام بأشياء مثل ، والتحقق مما إذا كانت رسائل الالتزام تؤكد معايير الشركة ، أو تشغيل اختبارات الوحدة ، الخ ...). قد ترغب أحيانًا في تجاهل هذا السلوك الافتراضي ، على سبيل المثال في السيناريو الذي ترغب فيه في دفع تغييراتك إلى فرع ميزة لمساهم آخر لسحبه ، ولكن تغييرات عملك في التقدم تخترق اختبارات الوحدة. لتجاهل الخطاف ، ما عليك سوى إدخال أمر الدفع وإضافة العلامة `--no-verify`

 `git push --no-verify 
` 

### معلومات اكثر:

*   [وثائق جيت - دفع](https://git-scm.com/docs/git-push)
*   [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)