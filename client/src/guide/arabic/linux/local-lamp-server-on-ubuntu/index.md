---
title: local-lamp-server-on-ubuntu
localeTitle: محلي مصباح خادم على أساس أوبونتو
---## خادم LAMP المحلي على Ubuntu

الغرض من هذا الدليل الموجز هو أن تأخذك خلال عملية إعداد خادم LAMP (Linux ، Apache ، MySQL ، PHP) على جهاز Ubuntu Linux المحلي أو الجهاز الظاهري. هذا سيسمح للمطور بالتطوير باستخدام PHP و MySQL (مع phpMyAdmin). هذا هو مكدس شائع ضروري لتطوير وورد.

### قم بتثبيت الحزم الضرورية

ستحتاج إلى تثبيت الحزم التالية لخادم LAMP. يمكنك تثبيتها كلها مرة واحدة بفصل كل حزمة بمسافة ، أو واحدة في كل مرة كما هو موضح. أنا أفضل تنزيل واحد في كل مرة لأنه من الأسهل معرفة ما إذا كان هناك أي أخطاء. أدخل المحطة واكتب ما يلي:

*   `sudo apt-get install apache2`
*   `sudo apt-get install php`
*   `sudo apt-get install php-mysql`
*   `sudo apt-get install mysql-server`

يجب حينئذٍ مطالبتك بتعيين كلمة مرور لمستخدم الجذر MySQL. بعد الانتهاء من تثبيت كلمة المرور ، قم بتثبيت:

*   `sudo apt-get install libapache2-mod-php`
*   `sudo apt-get install php-mcrypt`
*   `sudo apt-get install phpmyadmin`

يجب أن تتم مطالبتك بعد ذلك باستخدام الخادم لتحديد apache بالضغط على Enter. اختر لا لإعداد الخادم المتقدم.

### تغيير الأذونات إلى / var / www / html

لكي يتم تشغيل البرامج النصية وملفات php بواسطة خادم LAMP ، يجب حفظها في الدليل var / www / html. يمكنك التفكير في هذا الموقع كخادم محلي لديك. من أجل إجراء تغييرات على هذا الدليل ، نحتاج إلى تغيير الأذونات عليه. في المحطة أدخل الأمر:

*   `sudo chown {your ubuntu username} /var/www/html`

### قم بإنشاء ارتباط رمزي لـ phpMyAdmin

افتراضيًا ، يتم تثبيت phpMyAdmin في الدليل / usr / share /. نحن بحاجة إلى نقله إلى دليل الخادم المحلي لدينا. ننتقل إلى دليل الخادم الذي نريد الارتباط به من خلال:

*   `cd /var/www/html`

ثم قم بإنشاء الرابط عن طريق إدخال الأمر:

*   `ln -s /usr/share/phpmyadmin phpmyadmin`

### إعادة تشغيل اباتشي والاختبار

قم بتشغيل الأمر التالي لإعادة تشغيل Apache وإعداد التغييرات التي تم إجراؤها:

*   `sudo systemctl restart apache2`

يجب أن تتمكن بعد ذلك من إنشاء ملف info.php في الدليل / var / www / html.

*   `touch /var/www/html/info.php`

في نوع الملف ، رمز PHP التالي:

*   `<?php phpinfo(); ?>`

ثم افتح متصفحًا واكتب in localhost / info.php يجب أن تشاهد صفحة من ملف php الذي كتبته للتو والتي تمنحك معلومات عن php.

أخيرًا ، للوصول إلى phpMyAdmin ، انتقل إلى localhost / phpmyadmin في متصفحك. اسم المستخدم root defualt هو "root" وكلمة المرور هي كلمة المرور التي اخترتها في وقت سابق لقاعدة بيانات MySQL.

### معلومات اكثر