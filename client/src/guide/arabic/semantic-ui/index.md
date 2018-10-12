---
title: Semantic UI
localeTitle: واجهة المستخدم الدلالية
---
## واجهة المستخدم الدلالية

#### المقدمة

واجهة المستخدم الدلالية هي إطار تطوير أمامي يشبه برنامج التمهيد الذي تم تصميمه للاستخدام. يحتوي على مكونات دلالية مبنية مسبقًا تساعد في إنشاء تخطيطات جميلة وسريعة الاستجابة باستخدام HTML سهل الاستخدام.

وفقًا لموقع الويب المستخدم في واجهة المستخدم ، يستخدم إطار العمل HTML المختصر وجافا سكريبت البديهي ، وتصحيح الأخطاء المبسطة لجعل التطوير الأمامي تجربة ممتعة وممتعة. وهو يتكامل مع React و Angular و Meteor و Ember والعديد من الأطر الأخرى للمساعدة في تنظيم طبقة واجهة المستخدم جنبًا إلى جنب مع منطق التطبيق.

#### تاريخ النسخة

يظهر الإصدار التجريبي الأول في جيثب في سبتمبر 2013 ، الذي أنشأه [Jack Lukic](https://github.com/jlukic) .

UI الدلالي `1.x` صدر لأول مرة في نوفمبر 2014 مع كسر التغييرات إلى الإصدارات السابقة السابقة.

تم إصدار واجهة المستخدم الدلالية `2.x` لأول مرة في يونيو 2015 وقدمت واجهة مستخدم جديدة وعدة إصلاحات للأخطاء وتحسينات وإدخال تحسينات على المظهر الافتراضي.

#### دعم المتصفح

يدعم الإصدار الحالي `2.2.x` المتصفحات التالية

*   آخر 2 إصدارات FF ، Chrome ، Safari Mac
*   IE 11+
*   Android 4.4+ ، Chrome for Android 44+
*   iOS Safari 7+
*   مايكروسوفت ايدج 12+

#### التركيب

هناك عدة طرق لتثبيت واجهة المستخدم الدلالية ، بعض من أبسط الطرق هي كما يلي:

1.  **عبر شبكة تسليم المحتوى (CDN)**

هو إلى حد بعيد أسهل للمبتدئين. قم بإنشاء ملف HTML على النحو التالي

 `
<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Semantic UI</title> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"> 
    <!-- Add custom stylesheet here --> 
  </head> 
  <body> 
 
    <!-- Write your html code here --> 
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.js"></script> 
  </body> 
 </html> 
` 

`NOTE:` سيشمل ارتباط CDN أعلاه على السطر 5 جميع المكونات المتاحة في واجهة المستخدم الدلالية. إذا كنت ترغب في تثبيت مكون معين ، [انقر هنا](https://cdnjs.com/libraries/semantic-ui) لرؤية ارتباط CDN الخاص به.

2.  **باستخدام أدوات البناء**

هذا سوف يفترض أنك تستخدم نظام التشغيل Ubuntu Linux مع `node` و `npm` ، لأنظمة التشغيل الأخرى [انقر هنا](https://semantic-ui.com/introduction/getting-started.html)

في دليل المشروع الخاص بك ، قم بتثبيت gulp عالميًا باستخدام npm

 `npm install -g gulp 
` 

تثبيت واجهة المستخدم الدلالية

 `npm install semantic-ui --save 
 cd semantic/ 
 gulp build 
` 

تضمين في HTML

 `
<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css"> 
 <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> 
 <script src="semantic/dist/semantic.min.js"></script> 
` 

تحديث عن طريق npm

 `npm update 
` 

3.  **التكامل مع الأطر الأخرى**

يمكنك دمج واجهة المستخدم الدلالية مع أطر تطوير الواجهة الأمامية الأخرى مثل React أو Angular أو Ember أو Meteor. [انقر هنا](https://semantic-ui.com/introduction/integrations.html) لمزيد من المعلومات وإرشادات التكامل.

#### معلومات اكثر

تحتوي واجهة المستخدم الدلالية على وثائق شاملة ومنظمة تنظيماً جيداً ، والتي ستنقلك في أي وقت من الأوقات. الروابط التالية ستكون مفيدة في رحلتك في واجهة المستخدم.

*   [موقع واجهة المستخدم الدلالية](https://semantic-ui.com/)
*   [الابتداء مع واجهة المستخدم الدلالية](https://semantic-ui.com/introduction/getting-started.html)
*   [عينة قوالب UI الدلالية](https://semantic-ui.com/usage/layout.html#pages)
*   [تخصيص وإنشاء سمات UI الدلالية](http://learnsemantic.com/)