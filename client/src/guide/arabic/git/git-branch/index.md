---
title: Git Branch
localeTitle: بوابة فرع
---
## بوابة فرع

تتيح لك وظيفة Git المتفرعة إنشاء فروع جديدة لمشروع لاختبار الأفكار أو عزل الميزات الجديدة أو التجربة دون التأثير على المشروع الرئيسي.

**جدول المحتويات**

*   [عرض الفروع](#view-branches)
*   [الخروج فرع](#checkout-a-branch)
*   [إنشاء فرع جديد](#create-a-new-branch)
*   [إعادة تسمية فرع](#rename-a-branch)
*   [حذف فرع](#delete-a-branch)
*   [قارن الفروع](#compare-branches)
*   [مساعدة في Git Branch](#help-with-git-branch)
*   [معلومات اكثر](#more-information)

### عرض الفروع

لعرض الفروع في مستودع Git ، قم بتشغيل الأمر:

 `git branch 
` 

لعرض كل من فروع التتبع عن بعد والفروع المحلية ، قم بتشغيل الأمر:

 `git branch -a 
` 

سيكون هناك علامة نجمية (\*) بجوار الفرع الذي تعمل عليه حاليًا.

هناك عدد من الخيارات المختلفة التي يمكنك تضمينها مع `git branch` لمشاهدة معلومات مختلفة. لمزيد من التفاصيل حول الفروع ، يمكنك استخدام الخيار `-v` (أو `-vv` ، أو `--verbose` ). ستشمل قائمة الفروع قيمة SHA-1 وخط الموضوع المخصص `HEAD` كل فرع بجانب اسمه.

يمكنك استخدام الخيار `-a` (أو `--all` ) لعرض الفروع المحلية وأي فروع بعيدة لمستودع. إذا كنت تريد فقط رؤية الفروع البعيدة ، فاستخدم خيار `-r` (أو `--remotes` ).

### الخروج فرع

للتحقق من فرع موجود ، قم بتشغيل الأمر:

 `git checkout BRANCH-NAME 
` 

بشكل عام ، لن تسمح لك Git بالتسجيل في فرع آخر ما لم يكن دليل عملك نظيفًا ، لأنك ستفقد أي تغييرات في دليل العمل غير ملتزم بها. لديك ثلاثة خيارات للتعامل مع تغييراتك: 1) القمامة لهم (انظر [بوابة الخروج للحصول على التفاصيل](https://guide.freecodecamp.org/git/git-checkout/) ) أو 2) ارتكابها (انظر [Git ارتكاب التفاصيل](https://guide.freecodecamp.org/git/git-commit/) ) أو 3) خبأهم (انظر [خبأ Git لمزيد من التفاصيل](https://guide.freecodecamp.org/git/git-stash/) ).

### إنشاء فرع جديد

لإنشاء فرع جديد ، قم بتشغيل الأمر:

 `git branch NEW-BRANCH-NAME 
` 

لاحظ أن هذا الأمر يقوم بإنشاء الفرع الجديد فقط. ستحتاج إلى تشغيل `git checkout NEW-BRANCH-NAME` للتبديل إليه.

هناك اختصار لإنشاء واختبار فرع جديد في وقت واحد. يمكنك تمرير الخيار `-b` (للفرع) مع `git checkout` . الأوامر التالية تفعل الشيء نفسه:

 `# Two-step method 
 git branch NEW-BRANCH-NAME 
 git checkout NEW-BRANCH-NAME 
 
 # Shortcut 
 git checkout -b NEW-BRANCH-NAME 
` 

عندما تنشئ فرعًا جديدًا ، سيتضمن كل الإلتزامات من الفرع الرئيسي. الفرع الأم هو الفرع الذي تتواجد فيه عندما تقوم بإنشاء الفرع الجديد.

### إعادة تسمية فرع

لإعادة تسمية فرع ، قم بتشغيل الأمر:

 `git branch -m OLD-BRANCH-NAME NEW-BRANCH-NAME 
 
 # Alternative 
 git branch --move OLD-BRANCH-NAME NEW-BRANCH-NAME 
` 

### حذف فرع

لن تسمح لك Git بحذف فرع أنت موجود حاليًا. يجب عليك أولاً الخروج من فرع مختلف ، ثم تشغيل الأمر:

 `git branch -d BRANCH-TO-DELETE 
 
 # Alternative: 
 git branch --delete BRANCH-TO-DELETE 
` 

الفرع الذي تقوم بالتبديل إلى إحداث فرق. سيطرح Git خطأً إذا لم يتم دمج التغييرات في الفرع الذي تحاول حذفه بالكامل في الفرع الحالي. يمكنك تجاوز هذا والقوة بوابة لحذف فرع مع `-D` الخيار (لاحظ حرف) أو باستخدام `--force` الخيار مع `-d` أو `--delete` :

 `git branch -D BRANCH-TO-DELETE 
 
 # Alternatives 
 git branch -d --force BRANCH-TO-DELETE 
 git branch --delete --force BRANCH-TO-DELETE 
` 

### قارن الفروع

يمكنك مقارنة الفروع باستخدام الأمر `git diff` :

 `git diff FIRST-BRANCH..SECOND-BRANCH 
` 

سترى الإخراج الملون للتغييرات بين الفروع. بالنسبة إلى جميع الأسطر التي تغيرت ، سيكون إصدار `SECOND-BRANCH` خطًا أخضر يبدأ بـ "+" ، وسيكون إصدار `FIRST-BRANCH` خطًا أحمر يبدأ بـ "-". إذا كنت لا ترغب في أن يقوم Git بعرض سطرين لكل تغيير ، فيمكنك استخدام الخيار `--color-words` . بدلاً من ذلك ، سيعرض Git سطرًا واحدًا مع النص المحذوف باللون الأحمر ، وإضافة النص باللون الأخضر.

إذا كنت ترغب في رؤية قائمة بجميع الفروع التي تم دمجها بالكامل في فرعك الحالي (وبعبارة أخرى ، يتضمن الفرع الحالي جميع التغييرات في الفروع الأخرى المدرجة) ، قم بتشغيل الأمر `git branch --merged` .

### مساعدة في Git Branch

إذا كنت قد نسيت كيفية استخدام أحد الخيارات أو تريد استكشاف وظائف أخرى حول الأمر `git branch` ، فيمكنك تشغيل أي من هذه الأوامر:

 `git help branch 
 git branch --help 
 man git-branch 
` 

### معلومات اكثر:

*   الأمر `git merge` : [fCC Guide](https://guide.freecodecamp.org/git/git-merge/)
*   الأمر `git checkout` : [fcc Guide](https://guide.freecodecamp.org/git/git-checkout/)
*   الأمر `git commit` : [fCC Guide](https://guide.freecodecamp.org/git/git-commit/)
*   الأمر [gh](https://guide.freecodecamp.org/git/git-stash/) `git stash` : [دليل fcc](https://guide.freecodecamp.org/git/git-stash/)
*   وثائق جيت: [فرع](https://git-scm.com/docs/git-branch)