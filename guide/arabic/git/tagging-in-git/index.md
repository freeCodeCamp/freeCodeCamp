---
title: Tagging in Git
localeTitle: وضع العلامات في جيت
---
يتيح التمييز للمطورين وضع علامات على نقاط التفتيش المهمة في سياق تطوير مشاريعهم. على سبيل المثال ، يمكن تمييز إصدارات إصدارات البرامج. (مثال: v1.3.2) إنه يسمح لك بشكل أساسي بإعطاء التزام اسم خاص (علامة).

لعرض جميع العلامات المنشأة بترتيب أبجدي:

 `git tag 
` 

للحصول على مزيد من المعلومات حول علامة:

 `git show v1.4 
` 

هناك نوعان من العلامات:

1.  المشروح

 `git tag -a v1.2 -m "my version 1.4" 
` 

2.  وزن خفيف

 `git tag v1.2 
` 

تختلف في الطريقة التي يتم تخزينها.  
هذه خلق علامات على التزامك الحالي.

إذا كنت تريد وضع علامة على التزام سابق ، فحدد رقم تعريف الالتزام الذي ترغب في وضع علامة عليه:

 `git tag -a v1.2 9fceb02 
` 

يمكن استخدام أسماء العلامات بدلًا من استخدام المعرفات أثناء السحب والدفع بالالتزامات إلى repo بعيد.

#### معلومات اكثر:

*   وثائق جيت: [التوثيق](https://git-scm.com/docs/git-tag)
*   Git Tagging Chapter: [Book](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

يمكنك إدراج جميع العلامات المتاحة في مشروع باستخدام الأمر `git tag` (nate that they will appear بالترتيب الأبجدي):

 `$ git tag 
 v1.0 
 v2.0 
 v3.0 
` 

تعد هذه الطريقة من علامات الإدراج رائعة للمشروعات الصغيرة ، ولكن يمكن أن تتضمن المشروعات الأكبر مئات العلامات ، لذلك قد تحتاج إلى ترشيحها عند البحث عن نقطة مهمة في التاريخ. يمكنك العثور على العلامات التي تحتوي على أحرف محددة تضيف - `-l` إلى أمر `git tag` :

 `$ git tag -l "v2.0*" 
 v2.0.1 
 v2.0.2 
 v2.0.3 
 v2.0.4 
` 

## قم بإنشاء علامة

يمكنك إنشاء نوعين من العلامات: مشروح وخفيف الوزن. أولها هي كائنات منافسة في قاعدة بيانات GIT: يتم فحصها ، وتطلب رسالة (مثل الإلتزامات) وتخزين بيانات أخرى مهمة مثل الاسم والبريد الإلكتروني والتاريخ. من ناحية أخرى ، لا تتطلب علامات خفيفة الوزن مسحا أو تخزين بيانات أخرى ، تعمل فقط كمؤشر لنقطة محددة في المشروع.

### قم بإنشاء علامة توضيحية

لإنشاء علامة مشفرة ، قم بإضافة علامة `-a tagname -m "tag message"` إلى أمر `git tag` :

 `$ git tag -a v4.0 -m "release version 4.0" 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
` 

كما ترى ، يحدد `-a` أنك تقوم بإنشاء علامة توضيحية ، بعد أن يأتي اسم العلامة وأخيراً ، `-m` متبوعة برسالة العلامة للتخزين في قاعدة البيانات Git.

### قم بإنشاء علامة خفيفة الوزن

علامات خفيفة الوزن تحتوي فقط على المجموع الاختباري المرتبط (لا يتم تخزين أي معلومات أخرى). لإنشاء واحدة ، ما عليك سوى تشغيل الأمر `git tag` بدون أي خيارات أخرى (يتم استخدام الأحرف -lw في نهاية الاسم للإشارة إلى علامات خفيفة ، ولكن يمكنك تمييزها كما تريد):

 `$ git tag v4.1-lw 
 $ git tag 
 v1.0 
 v2.0 
 v3.0 
 v4.0 
 v4.1-lw 
` 

في هذه المرة لم تحدد رسالة أو بيانات أخرى ذات صلة ، لذلك تحتوي العلامة على المجموع الاختباري للالتزام المرتبط فقط.

## عرض بيانات العلامة

يمكنك تشغيل أمر `git show` لعرض البيانات المخزنة في علامة. في حالة العلامات التوضيحية ، سترى بيانات العلامة وبيانات الالتزام:

 `$ git show v4.0 
 tag v4.0 
 Tagger: John Cash <john@cash.com> 
 Date:   Mon Sat 28 15:00:25 2017 -0700 
 
 release version 4.0 
 
 commit da43a5fss745av88d47839247990022a98419093 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
` 

إذا كانت العلامة التي تشاهدها علامة خفيفة ، فسترى بيانات الالتزام المحالة فقط:

 `$ git show v1.4-lw 
 commit da43a5f7389adcb9201ab0a289c389ed022a910b 
 Author: John Cash <john@cash.com> 
 Date:   Fri Feb 20 20:30:05 2015 -0700 
 
  finished details 
` 

## وضع علامات على الالتزام القديم

يمكنك أيضًا وضع علامة على الالتزام السابق باستخدام علامة git. من أجل القيام بذلك ، ستحتاج إلى تحديد المجموع الاختباري للالتزام (أو على الأقل جزء منه) في سطر الأمر.

أولاً ، قم بتشغيل git log للتعرف على المجموع الاختباري للالتزام المطلوب:

 `$ git log --pretty=oneline 
 ac2998acf289102dba00823821bee04276aad9ca added products section 
 d09034bdea0097726fd8383c0393faa0072829a7 refactorization 
 a029ac120245ab012bed1ca771349eb9cca01c0b modified styles 
 da43a5f7389adcb9201ab0a289c389ed022a910b finished details 
 0adb03ca013901c1e02174924486a08cea9293a2 small fix in search textarea styles 
` 

عندما يكون لديك المجموع الاختباري المطلوب ، أضفه في نهاية سطر إنشاء العلامة:

 `$ git tag -a v3.5 a029ac 
` 

سترى علامة تم إضافة `git tag` بشكل صحيح:

 `$ git tag 
 v1.0 
 v2.0 
 v3.0 
 v3.5 
 v4.0 
 v4.1-lw 
` 

## دفع علامات

لا تدفع Git العلامات افتراضيًا عند تشغيل أمر git push. لذا ، لنجعل علامة بنجاح إلى الخادم سيكون عليك تنفيذ أمر `git push origin` :

 `$ git push origin v4.0 
 Counting objects: 14, done. 
 Delta compression using up to 8 threads. 
 Compressing objects: 100% (16/16), done. 
 Writing objects: 100% (18/18), 3.15 KiB | 0 bytes/s, done. 
 Total 18 (delta 4), reused 0 (delta 0) 
 To git@github.com:jcash/gitmanual.git 
 * [new tag]         v4.0 -> v4.0 
 ``` 
 
 You can also use the ```--tags``` option to add multiple tags at once with the ```git push origin``` command: 
` 

$ git push origin - علامات عد الكائنات: 1 ، القيام به. كائنات الكتابة: 100٪ (1/1) ، 160 بايت | 0 بايت / ثانية ، القيام به. المجموع 1 (دلتا 0) ، أعيد استخدامها 0 (دلتا 0) إلى git@github.com: jcash / gitmanual.git

*   \[علامة جديدة\] v4.0 -> v4.0
*   \[new tag\] v4.1-lw -> v4.1-lw

 `## Checking out Tags 
 
 You can use ```git checkout``` to checkout to a tag like you would normally do. But you need to keep in mind that this would result a *detached HEAD* state. 
` 

$ git checkout v0.0.3 ملاحظة: التحقق من "v0.0.3".

أنت في حالة "فصل الرأس". يمكنك أن تنظر حولك وتجعلها تجريبية التغييرات والالتزام بها ، ويمكنك تجاهل أي تعهدات تجريها في هذا الشأن دون التأثير على أي فروع عن طريق إجراء عملية دفع أخرى.

 `## Deleting a Tag 
 
 You may find a situation were you want to delete a certain tag. There's a very useful command for this situations: 
` 

علامة git $ - حذف v0.0.2 علامة git $ v0.0.1 v0.0.3 v0.0.4 \`\` \`

### معلومات اكثر

*   [Git Pro - أساسيات التمييز](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
*   [جيت برو - التوثيق](https://git-scm.com/docs/git-tag)
*   [بوابة HowTo](https://githowto.com/tagging_versions)
*   [غيغا غيض: العلامات](http://alblue.bandlem.com/2011/04/git-tip-of-week-tags.html)
*   [خلق علامة](https://www.drupal.org/node/1066342)

### مصادر

وثائق جيت: [العلامات](https://git-scm.com/book/en/v2/Git-Basics-Tagging)