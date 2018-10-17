---
title: How to Install the Mean Stack on Mac Osx
localeTitle: كيفية تثبيت متوسط ​​المكدس على ماك Osx
---
لتثبيت MongoDB ، يجب أن يكون لديك Mac OS X 10.6 (Snow Leopard) أو أعلى. لمعرفة إصدار OS X الذي تملكه ، انقر فوق الرمز in في الزاوية العلوية اليسرى من الشاشة وحدد `About This Mac` .

![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":تحذير:") **تحذير: قم** بعمل نسخة احتياطية من جهاز تايم ما قبل تنفيذ أي من الخطوات التالية!

## الخطوة 1: تثبيت MongoDB

أسهل طريقة لتثبيت MongoDB على OS X تستخدم [HomeBrew](http://brew.sh/) . إذا لم تكن قد استخدمت HomeBrew من قبل ، فقم ببساطة بتنفيذ الأمر التالي في نافذة طرفية:

 `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" 
` 

بعد تثبيت HomeBrew بنجاح ، اتبع الأمر التالي:

 `brew update && brew install mongodb 
` 

سيقوم برنامج HomeBrew بتثبيت جميع الاعتمادات لك تلقائيًا.

## الخطوة 2: تثبيت Node.js

مرة أخرى ، سوف ندع HomeBrew يقوم بالرفع الثقيل:

 `brew install node 
` 

يتم بالفعل تضمين الملف القابل للتنفيذ npm في حزمة Node.js.

قبل المتابعة ، دعونا نتأكد من أن وحدات Node.js يمكن العثور عليها من قبل الآخرين ( ![:warning:](//forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=2 ":تحذير:") **تنبيه** : من الأفضل نسخ هذه الأوامر ولصقها ، حيث ستفقد المحتويات الأصلية لملف `.bashrc` إذا قمت بكتابة `>` بدلاً من `>>` ):

 `echo 'export NODE_PATH="./node_modules:/usr/local/lib/node_modules"' >> ~/.bashrc && source ~/.bashrc 
` 

للتحقق مما إذا كانت التهيئة سارية أم لا ، قم بتنفيذ ما يلي:

 `echo $NODE_PATH 
` 

يجب أن تشاهد `./node_modules:/usr/local/lib/node_modules` المطبوعة أدناه الأمر الخاص بك.

إذا كنت تستخدم غلافًا مختلفًا عن Bash ، `~/.bashrc` عليك سوى استبدال `~/.bashrc` بملف تهيئة shell.

## الخطوة 3: تثبيت أدوات fullstack

 `npm install -g express yo grunt grunt-cli generator-angular-fullstack bower 
` 

## الخطوة 4: إنشاء تطبيق fullstack

قم بعمل دليل لمشاريعك في مشروع النهاية الخلفية. بافتراض أن سطح المكتب الخاص بك هو مساحة عملك الفعلية:

 `mkdir ~/Desktop/Back End Projects && cd ~/Desktop/Back End Projects 
` 

والآن بعد أن أصبحت جميع الاستعدادات جاهزة ، حان الوقت للحدث الرئيسي:

 `yo angular-fullstack 
` 

أجب على الأسئلة وفقًا لعناصر قائمة التحقق \# 13-23 من [التحدي: الحصول على تعيين لمشاريع النهاية الخلفية](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) . استشر \# 24-27 إذا واجهتك أخطاء. سيؤدي هذا إلى تنزيل ملفات بقيمة 350 ميجابايت في دليلك الحالي.

قبل المتابعة ، نحتاج إلى إصلاح [مشكلة معروفة](https://github.com/clnhll/guidetobasejumps#fixing-exportsupdate) في بعض الملفات التي تم إنشاؤها:

 `echo "sed -i '' -e 's/_.merge/_.extend/' server/api/*/*.controller.js" > \ 
 fix-exports-update.sh && chmod +x fix-exports-update.sh && \ 
 ./fix-exports-update.sh 
` 

تحتاج إلى تشغيل `./fix-exports-update.sh` كل مرة تقوم فيها بإنشاء نقطة نهاية API جديدة (حتى يتم إصلاح هذا المنبع ، أي).

## الخطوة 5: بدء تشغيل مستودع Git المحلي

اخبر Git بعدم تتبع قاعدة البيانات الخاصة بك:

 `echo "data" >> .gitignore 
` 

قم بإدارة الدليل الذي يوجد فيه تطبيقك في مستودع Git عن طريق تشغيل الأوامر التالية:

 `git init && git add . && git commit -am 'initial commit' 
` 

## الخطوة 6: بدء تشغيل MongoDB

لبدء MongoDB لأول مرة في دليل التطبيق الخاص بك ، قم بتشغيل الأوامر التالية في الجهاز الخاص بك:

 `mkdir data && echo 'mongod --config /usr/local/etc/mongod.conf --dbpath=data --rest "$@" --httpinterface' > mongod.sh && chmod a+x mongod.sh && ./mongod.sh 
` 

من هذه النقطة يمكنك ببساطة بدء `./mongod.sh` بتنفيذ `./mongod.sh` . هناك عدد قليل من الأشياء ملاحظة:

*   و `.conf` ملف يوجه `mongod` لكتابة الرسائل إلى ملف السجل بدلا من المعياري. لعرض السجل ، قم بتشغيل التالي في علامة تبويب محطة طرفية منفصلة: `less /usr/local/var/log/mongodb/mongo.log` .
*   بما أننا لسنا في Cloud9 ، لا نحتاج إلى الخيار `--nojournal` . `mongod` تمكنك من استعادة قاعدة البيانات في حالة حدوث تعطل في `mongod` .
*   يجب عليك إنشاء قاعدة بيانات نظيفة لكل مشروع. إذا قمت بنسخ دليل `data` من مشروع سابق ، `mongod` تشغيل `mongod` . إذا كان هذا هو الحال ، فقط `rm -rf data && mkdir data && ./mongod.sh` .

## الخطوة 7: بدء تشغيل Grunt

افتح علامة تبويب محطة طرفية جديدة بالضغط على `⌘T` ، ثم قم بتشغيل الأمر التالي:

 `grunt serve 
` 

يجب أن يقوم Grunt تلقائيًا بفتح صفحة فهرس موقع Angular الجديد الخاص بك بمجرد الانتهاء من بدء التشغيل.

الآن يجب أن تكون قادراً على اتباع بقية تعليمات التحدي للدفع إلى GitHub و Heroku. فقط تجاهل الجزء المتعلق بمفتاح SSH (# 33-36) واستبدل `~/workspace` بمسار دليل التطبيق الخاص بك.

## حاشية

تم اختبار الخطوات المذكورة أعلاه وفقًا للتكوين التالي:

*   OS X 10.10.5
*   zsh 5.0.8 (x86\_64-apple-darwin14.3.0)
*   عقدة v0.12.7
*   npm 2.11.3