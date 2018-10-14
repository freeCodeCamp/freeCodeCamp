---
title: Git Remote
localeTitle: غيت عن بعد
---
## غيت عن بعد

يسمح لك الأمر `git remote` بإدارة مستودعات Git عن بعد. المستودعات عن بعد هي مراجع لمستودعات Git الأخرى التي تعمل على نفس مصدر الكود.

تستطيع [أسحب من](https://guide.freecodecamp.org/git/git-pull/) و [يدفع الى](https://guide.freecodecamp.org/git/git-push/) المستودعات عن بعد.

يمكنك الدفع أو السحب إلى عنوان URL لبروتوكول HTTPS ، مثل `https://github.com/user/repo.git` أو عنوان URL لـ SSH ، مثل `git@github.com:user/repo.git` .

لا تقلق ، في كل مرة تدفع فيها شيئًا ، لن تحتاج إلى كتابة عنوان URL بأكمله. تربط Git بعنوان URL بعيدًا باسم ، والاسم الذي يستخدمه معظم الأشخاص هو `origin` .

### قائمة جميع مستودعات بعيد تكوينها

 `git remote -v 
` 

يسرد هذا الأمر جميع المستودعات البعيدة بجانب موقعها.

يشار إلى المستودعات عن بعد بالاسم. وكما ذكر أعلاه ، فإن المستودع الرئيسي لمشروع ما يطلق عليه عادة `origin` .

عندما تستخدمها [استنساخ git](https://guide.freecodecamp.org/git/git-clone/) للحصول على نسخة من مستودع ، تقوم Git بإعداد الموقع _الأصلي_ كمستودع بعيد _للأصل_ .

### إضافة مستودع عن بعد

لإضافة مستودع تخزين عن بعد إلى مشروعك ، يمكنك تشغيل الأمر التالي:

 `git remote add REMOTE-NAME REMOTE-URL 
` 

يمكن أن يكون `REMOTE-URL` إما HTTPS أو SSH. يمكنك العثور على عنوان URL على GitHub بالنقر على القائمة المنسدلة "نسخ أو تنزيل" في المستودع.

على سبيل المثال ، إذا كنت ترغب في إضافة مستودع تخزين بعيد ووصفه `example` ، فيمكنك تشغيل:

 `git remote add example https://example.org/my-repo.git 
` 

### تحديث عنوان URL بعيد

إذا تغير عنوان URL لمستودع تخزين عن بعد ، فيمكنك تحديثه باستخدام الأمر التالي ، حيث `example` هو اسم جهاز التحكم عن بعد:

 `git remote set-url example https://example.org/my-new-repo.git 
` 

### حذف أجهزة التحكم عن بعد

يتم حذف أجهزة التحكم عن بعد مثل:

 `git remote rm REMOTE-NAME 
` 

يمكنك التأكد من اختفاء جهاز التحكم عن بعد من خلال عرض قائمة أجهزة التحكم عن بعد الموجودة لديك:

 `git remote -v 
` 

### معلومات اكثر:

*   [Git الوثائق عن بعد](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)