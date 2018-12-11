---
title: Getting Started with Back End Projects
localeTitle: الابتداء مع مشاريع النهاية الخلفية
---
إن المنهج الذي يؤدي إلى أول مشروع للجهة الخلفية ليس شاملاً للغاية. في ما يلي عدد من الموارد المشتركة التي وجدها المعسكرون الآخرون مفيدة.

*   مقدمة إلى Yeoman - الكثير من النصائح والحيل المفيدة لإعداد Yeoman Angular Fullstack
*   [مولد الزاوي](https://github.com/DaftMonk/generator-angular-fullstack#generators) - مولد يستخدمه Yeoman ، يمكنك العثور على بناء الجملة وملفات ما يخلق

## واجهات برمجة التطبيقات

*   API لتخطيط سوق الأسهم: [https://www.quandl.com/help/api](https://www.quandl.com/help/api)

## معني مرقص التعليمية ومقاطع الفيديو

*   5 الجزء سلسلة على إعداد كومة MEAN  
    [https://www.youtube.com/watch؟v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   برنامج تعليمي خاص بنظام MAN يخلق نسخة بسيطة من Twitter  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Clementine هو كومة MAN مجردة أسفل ، عظيم لتعلم الأساسيات.  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   المصادقة مع Passport لـ مكدس MEAN:  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   قائمة مذهلة من الموارد لتعلم رصة MEAN:  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## دروس سكوتش IO

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## عقدة / اكسبرس

*   [التصحيح عبر الإنترنت لـ Node.js / Express](http://stackoverflow.com/a/16512303/1420506)

## سحابة 9 الحيل

### تسريع إعادة تحميل المتصفح

1.  افتح gruntfile.js وحرر كلتا `livereload: true` to `livereload: false` .
2.  افتح الخادم / config / express.js وقم بتعليق سطر `app.use(require('connect-livereload')());`