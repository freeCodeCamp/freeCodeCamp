---
title: Git Aliases
localeTitle: Git Aliases
---
## جيت الياس

لا يقوم Git باستنتاج الأمر تلقائيًا إذا قمت بكتابته جزئيًا. إذا كنت لا تريد كتابة النص الكامل لكل من أوامر Git ، فيمكنك بسهولة إعداد اسم مستعار لكل أمر باستخدام git config. إليك بعض الأمثلة التي قد ترغب في إعدادها:

 `$ git config --global alias.co checkout 
 $ git config --global alias.br branch 
 $ git config --global alias.ci commit 
 $ git config --global alias.st status 
` 

هذا يعني ، على سبيل المثال ، بدلاً من كتابة ارتكاب بوابة ، تحتاج فقط إلى كتابة git ci. أثناء استخدام Git ، ستستخدم على الأرجح الأوامر الأخرى بشكل متكرر أيضًا ؛ لا تتردد في إنشاء أسماء مستعارة جديدة.

يمكن أن تكون هذه التقنية مفيدة جدًا في إنشاء الأوامر التي تعتقد أنها يجب أن تكون موجودة. على سبيل المثال ، لتصحيح مشكلة قابلية الاستخدام التي واجهتها مع unstage ملف ، يمكنك إضافة اسم مستعار unstage الخاصة بك إلى Git:

 `$ git config --global alias.unstage 'reset HEAD --' 
` 

هذا يجعل الأمرين التاليين مساويين:

 `$ git unstage fileA 
 $ git reset HEAD fileA 
` 

هذا يبدو أكثر وضوحا بعض الشيء. من الشائع أيضًا إضافة أمر آخر ، على النحو التالي:

 `$ git config --global alias.last 'log -1 HEAD' 
` 

بهذه الطريقة ، يمكنك أن ترى آخر التزام بسهولة:

 `$ git last 
 commit 66938dae3329c7aebe598c2246a8e6af90d04646 
 Author: Josh Goebel <dreamer3@example.com> 
 Date:   Tue Aug 26 19:48:51 2008 +0800 
 
    test for current head 
 
    Signed-off-by: Scott Chacon <schacon@example.com> 
` 

 `$ git config --global alias.st status --short --branch 
` 

عند تشغيل الأمر `git st` ، سيتم عرض الحالة git بتنسيق مبسط لطيف.

### عرض وتحرير وحذف الأسماء المستعارة

لعرض جميع الأسماء المستعارة التي قمت بإنشائها على جهازك ، قم بتشغيل الأمر:

 `cat ~/.gitconfig 
` 

سيسمح لك استبدال `cat` باستخدام `nano` بتحريرها أو إزالتها تمامًا.

### الاسم المستعار لعرض جميع الأسماء المستعارة

لإضافة اسم مستعار لعرض كل ما تم إنشاؤه على جهازك ، أضف الاسم المستعار

 `    git config --global alias.aliases 'config --get-regexp alias' 
`