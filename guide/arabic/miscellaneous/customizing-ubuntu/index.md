---
title: Customizing Ubuntu
localeTitle: تخصيص أوبونتو
---
يوضح لك هذا البرنامج التعليمي كيفية إضافة الأسماء المستعارة إلى الوحدة الطرفية ، وتغيير الوحدة وإزالة bloatware المثبتة مسبقًا.

## خطوات:

### إزالة Bloatware

لإزالة جميع bloatware المثبتة مسبقا بسبب مخاوف الخصوصية أو للحفاظ على نظام التشغيل الخاص بك الحد الأدنى ، تحقق من [هذا](https://gist.github.com/ansell/61313400e26cd42289f8) gist.

### اسماء مستعارة

يمكنك إنشاء اسم مستعار مؤقت مثل هذا:

 `alias alias_name="command_to_run" 
` 

ومع ذلك ، عند إغلاق جلسة shell الخاصة بك ، هذا الاسم المستعار سوف يتوقف عن الوجود.

لإنشاء اسم مستعار دائم ، ستحتاج إلى إنشاء ملف `~/.bash_aliases` باستخدام الأمر `touch ~/.bash_aliases` . بمجرد فتح هذا الملف باستخدام محرر النص الذي تختاره ، أضف سطرًا في أسفل المستند ، على غرار المثال أعلاه.

لمعرفة المزيد ، يحتوي برنامج DigitalOcean على برنامج تعليمي رائع يمكن العثور عليه [هنا](https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions) .

### وحدة أداة Tweak

توفر أداة Unity Tweak للمستخدمين عددًا كبيرًا من خيارات التهيئة لتغيير حجم سطح المكتب Unity.

لتثبيت أداة Unity Tweak Tool ، اكتب `sudo apt install unity-tweak-tool` أداة `sudo apt install unity-tweak-tool` ، وإطلاقها ، `unity-tweak-tool` .

[هنا](http://www.techrepublic.com/blog/linux-and-open-source/six-must-have-ubuntu-unity-tweaks/) قائمة من ستة يجب أن يكون بين أوبونتو الوحدة Tweaks.

[**تنزيل وتثبيت أوبونتو سطح المكتب**](//forum.freecodecamp.com/t/download-and-install-ubuntu-desktop/18383) [**جدول المحتويات**](//forum.freecodecamp.com/t/setting-up-ubuntu-for-programming/18388) | [**جاز حتى المحطة**](//forum.freecodecamp.com/t/jazzing-up-the-terminal/18386)