---
title: Windows Command Prompt
localeTitle: موجه الأوامر ويندوز
---# باستخدام موجه الأوامر في ويندوز

يحتوي Windows و MacOS و Linux على واجهات سطر الأوامر. سطر الأوامر الافتراضي لـ Windows هو موجه الأوامر. يسمح موجه الأوامر للمستخدمين باستخدام أجهزة الكمبيوتر الخاصة بهم دون الإشارة والنقر باستخدام الماوس. موجه الأوامر هو شاشة سوداء حيث يكتب المستخدمون الأوامر لاستخدام الكمبيوتر الخاص بهم. نفس المهام التي يمكن القيام بها عن طريق الإشارة والنقر بالماوس يمكن أيضًا تنفيذها باستخدام موجه الأوامر. الفرق هو أن العديد من المهام مثل إنشاء مجلدات وحذف الملفات يمكن القيام بها بشكل أسرع في موجه الأوامر. كما أنه يسمح للمستخدمين بتكوين أجهزة الكمبيوتر الخاصة بهم وتشغيل البرامج التي لا يمكنهم القيام بها عن طريق الإشارة والنقر.

## فتح موجه الأوامر

للوصول إلى موجه الأوامر ، انقر فوق قائمة ابدأ في Windows الموجودة على شريط أدوات سطح المكتب (يمكنك أيضًا الضغط على زر Windows على لوحة المفاتيح) واكتب `cmd` واضغط على `enter` . سيظهر موجه الأوامر ، سيعرض نصًا ما مثل النص التالي: \`\` \` C: \\ المستخدمين \\ هو yourusername>

 ``## Navigating Directories (Moving through folders) 
 `C:\Users\YourUserName` is called your current working directory (directory is another way to say folder). It is like a street address that tells you where you are on your computer. The current working directory can be a guide as you navigate through your computer. On the right of the `>` we can type `cd`, which stands for Change Directory, and the name of a directory that you want to navigate to. In this case we will type `Documents`. Enter `cd Documents` and your current working directory should look like the following: 
`` 

C: \\ المستخدمين \\ هو yourusername \\ الوثائق>

 ``To go back one directory type and enter `cd..`. Your current working directory should return to this: 
`` 

C: \\ المستخدمين \\ هو yourusername>

 ``With the `cd` and `cd ..` commands you can move back and forth through directories. This might seem very basic at first but as you learn more commands the command prompt will become a very useful and efficient tool. 
 
 ## Here is a list of common commands: 
 | Command | Description  | 
 |---------|--------------| 
 |`help`   |Lists commands that can be used| 
 |  `dir`  |Lists the current directories contents| 
 |`dir /a` |Shows hidden files| 
 | `mkdir` |Creates a new directory| 
 | `rmdir` |Deletes a directory (if empty)| 
 | `rmdir /s`|Deletes a folder and its contents 
 | `cls`  |Clears the command prompt screen 
 | `exit`|Closes the command prompt 
 
 ## Usage Examples: 
 #### Making a Directory 
`` 

اسم mkdir _من_ _الدليل_ الذي _تريد_ to\_make

 `#### Getting Info on a Command 
` 

your\_command /؟

 `#### Deleting a File and Contents 
` 

جمهورية مقدونيا / ث _اسم_ الدليل _الذي_ _تريد_ حذفه \`\` \`

## نصائح مفيدة:

*   يعرض الأمر `Ipconfig` عنوان IP لجهاز الكمبيوتر الخاص بك
*   إذا قمت بكتابة جزء من اسم دليل واضغطت على مفتاح `tab` ، فسيقوم موجه الأوامر بإكماله تلقائيًا ، وإذا قمت بضرب مفتاح `tab` بشكل متكرر ، فسوف يتنقل عبر الدلائل التي تبدأ بالحرف نفسه.
*   يمكنك استخدام قذائف أو أدوات أخرى مثل gause bash أو cmder لإضافة المزيد من الأوامر والوظائف إلى موجه الأوامر
*   تتطلب بعض المهام منك تشغيل موجه الأوامر كمسؤول تقوم بالنقر فوق زر Windows وكتابة `cmd admin` ثم تضغط مفتاح `enter`
*   إذا كنت تعرف أن المسار إلى ملف أو دليل يمكنه كتابة `cd PATH_TO_YOUR_DIRECTORY` بدلاً من تغيير الأدلة عدة مرات للوصول إلى دليل أو ملف
*   عندما تضغط على مفتاح السهم لأعلى ، سيظهر الأمر الذي أدخلته مسبقًا ، وإذا ضربته بشكل متكرر فسوف يتدفق عبر جميع الأوامر التي تم إدخالها مسبقًا