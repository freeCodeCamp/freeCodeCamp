---
title: Git Squash
localeTitle: جيت سكواش
---
## جيت سكواش

أحد الأشياء التي يسمعها مطورو البرامج في كثير من الأحيان بخصوص طلبات السحب الخاصة بهم هو شيء مثل "يبدو ذلك جيدًا بالنسبة إليّ ، يُرجى الإسكار والدمج". الجزء الممتع هو أنه لا يوجد مثل هذا الأمر مثل `git squash` (إلا إذا قمت بإنشاء [اسم مستعار](https://guide.freecodecamp.org/git/git-rebase) لها). إن طلب سحب `squash` يعني عادةً ضغط كل الإلتزامات في هذا الطلب إلى واحد (نادراً إلى رقم آخر) لجعله أكثر إيجازًا وقابلاً للقراءة وليس لتلوث تاريخ الفرع الرئيسي. لتحقيق هذا المطور يحتاج إلى استخدام **الوضع التفاعلي** لأمر [Git Rebase](https://guide.freecodecamp.org/git/git-rebase) .

في كثير من الأحيان عندما تقوم بتطوير بعض الميزات الجديدة ينتهي بك الأمر مع العديد من الإلتزامات المتقطعة في تاريخك - تتطور بشكل تدريجي بعد كل شيء. قد يكون هذا مجرد بعض الأخطاء المطبعية أو الخطوات إلى الحل النهائي. في معظم الأوقات ، لا يكون هناك أي استخدام في وضع كل هذه الإلتزامات في النسخة العامة النهائية من الكود ، لذلك من الأفضل أن يتم دمجها كلها في واحد ، واحد ، وآخر نهائي.

لذلك لنفترض أنك قمت باتباع سجل الإلتزام في الفرع الذي تريد دمجه كجزء من طلب السحب:

 `$ git log --pretty=oneline --abbrev-commit 
 30374054 Add Jupyter Notebook stub to Data Science Tools 
 8490f5fc Minor formatting and Punctuation changes 
 3233cb21 Prototype for Notebook page 
` 

من الواضح أننا نفضل أن يكون هناك التزام واحد هنا ، حيث أنه لا فائدة من معرفة ما بدأناه في الكتابة وما هي الأخطاء التي حددناها في وقت لاحق ، فإن النتيجة النهائية هي فقط ذات أهمية.

إذن ما نفعله هو بدء جلسة rebase تفاعلية من **HEAD** الحالي (ارتكبت **30374054** ) لارتكاب **3233cb21** ، مع نية الجمع بين **3** آخر التزام في واحد:

 `$ git rebase -i HEAD~3 
` 

سيؤدي ذلك إلى فتح محرر يحتوي على ما يلي:

 `pick 3233cb21 Prototype for Notebook page 
 pick 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
 # Rebase 
 # 
 # Commands: 
 #  p, pick = use commit 
 #  r, reword = use commit, but edit the commit message 
 #  e, edit = use commit, but stop for amending 
 #  s, squash = use commit, but meld into previous commit 
 #  f, fixup = like "squash", but discard this commit's log message 
 #  x, exec = run command (the rest of the line) using shell 
 # 
 # These lines can be re-ordered; they are executed from top to bottom. 
 # 
 # If you remove a line here THAT COMMIT WILL BE LOST. 
 # 
 # However, if you remove everything, the rebase will be aborted. 
 # 
 # Note that empty commits are commented out 
` 

كما هو الحال دائمًا ، تقدم لنا Git رسالة مساعدة لطيفة للغاية حيث يمكنك رؤية خيار `squash` هذا الذي نبحث عنه.

حاليا تعليمات لrebase التفاعلية وتقول ل `pick` كل المحدد ارتكاب **والحفاظ** على المقابلة ارتكاب الرسالة. هذا هو - لا تغير أي شيء. لكننا نريد أن يكون لدينا التزام واحد فقط في النهاية. ببساطة قم بتحرير النص في محرر يمكنك استبدال `pick` مع `squash` (أو فقط `s` ) بجانب كل التزام نرغب في التخلص منه وحفظ / الخروج من المحرر. قد يبدو هذا كما يلي:

 `s 3233cb21 Prototype for Notebook page 
 s 8490f5fc Minor formatting and Punctuation changes 
 pick 30374054 Add Jupyter Notebook to Data Science Tools 
` 

عند إغلاق المحرر بحفظ هذه التغييرات ، سيتم إعادة فتحه على الفور ، مما يشير إلى اختيار رسائل الالتزام وإعادة صياغتها. شيء مثل

 `# This is a combination of 3 commits. 
 # The first commit's message is: 
 Prototype for Notebook page 
 
 # This is the 2nd commit message: 
 
 Minor formatting and Punctuation changes 
 
 # This is the 3rd commit message: 
 
 Add Jupyter Notebook to Data Science Tools 
 
 # Please enter the commit message for your changes. Lines starting 
 # with '#' will be ignored, and an empty message aborts the commit. 
` 

في هذه المرحلة ، يمكنك حذف جميع الرسائل التي لا تريد تضمينها في نسخة الالتزام النهائية ، أو إعادة كتابتها أو مجرد كتابة رسالة التزام من نقطة الصفر. فقط تذكر أن الإصدار الجديد سيشتمل على جميع الأسطر التي لا تبدأ بحرف `#` . مرة أخرى ، قم بحفظ محررك والخروج منه.

يجب أن تعرض الوحدة الطرفية الخاصة بك الآن رسالة نجاح تتضمن `Successfully rebased and updated <branch name>` ويجب أن يُظهر سجل git محفوظات لطيفة مضغوطة مع التزام واحد فقط. لقد اختفت جميع الالتزامات الوسيطة ، ونحن على استعداد للاندماج!

### تحذير حول عدم تطابق التاريخ التزامن المحلية والبعيدة

هذه العملية خطيرة بعض الشيء إذا كان لديك فرع منشورة بالفعل في مستودع عن بعد - فأنت تقوم بتعديل سجل الالتزام بعد كل شيء. لذلك من الأفضل أن تقوم بعملية السكواش في الفرع المحلي قبل أن **تدفع** . في بعض الأحيان ، سيتم دفعه بالفعل - كيف يمكنك إنشاء طلب سحب بعد كل شيء؟ في هذه الحالة ، سيكون عليك **فرض** التغييرات على الفرع البعيد بعد إجراء عملية الضرب ، نظرًا لأن السجل المحلي والسجل الفرعي في مستودع التخزين البعيد مختلفان:

`shell $ git push origin +my-branch-name`

ابذل قصارى جهدك للتأكد من أنك الشخص الوحيد الذي يستخدم هذا الفرع البعيد في هذه المرحلة ، أو ستجعل حياتك أكثر صعوبة في عدم تطابق التاريخ. ولكن بما أن عملية **السحق** تتم عادة كعملية نهائية على فرع قبل التخلص منه ، فعادةً ما لا تكون كبيرة على القلق.