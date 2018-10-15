---
title: Creating Singleton In JavaScript
localeTitle: خلق سينجلتون في جافا سكريبت
---
## خلق سينجلتون في دليل جافا سكريبت

هذه المادة هي حول إنشاء Singletons في جافا سكريبت الأصلي (الصرفة). هذا المفهوم يمكن أن يكون مفيدا للحفاظ على كود نظيف.

إذا كنت ترغب في الحفاظ على شفرتك أو يجب أن تظل somedata نفسها خلال تطبيقك ، فإن هذه هي الطريقة التي يمكنك إنجازها.

**علم مسبق** هذا فقط لمساعدتك على فهم المفهوم بسهولة أكبر ، وإلا يمكنك دائمًا نسخ الشفرة وتغييرها وفقًا لذلك.

*   بناء جافا سكريبت الأساسي
*   وظائف جافا سكريبت
*   IIFE في Javascript

### هيا بنا نبدأ

دعونا إنشاء كائن مع الدالة IIFE التي سيتم تنفيذها على الفور لتعطينا تأثير سينجلتون.

 `var singletonFn = (function(){ //Created IIFE Function 
  var dataCounter = 0; 
  return { //Any code inside this return stuff will be accessible directly using objectname. 
 
    getDataCounter: function(){ 
      return dataCounter; 
    }, 
 
    setDataCounter: function(val){ 
      dataCounter = val; 
    }, 
 
    fishNames: ["SimpleFish"] //Can create variables, Arrays, etc. 
  } 
 })(); 
` 

الآن لتنفيذ أو استخدام المفرد الخاص بك. في المتصفح بعد حفظ هذا الملف js وتحميله.

 `console.log(singletonFn.getDataCounter()); //0 as bydefault it will be 0. 
 
 singletonFn.setDataCounter(20); 
 
 console.log(singletonFn.getDataCounter()); //20 as we assigned. 
 
 console.log(fishNames); //will Print array with "SimpleFish". 
` 

الآن مع هذه المعرفة يمكنك تحديد الثوابت ، التعدادات أو أي شيء يحتاج إلى استخدام متعددة في مشروع مكتوب هنا. أو شيء من هذا القبيل التكوينات.

نأمل ، وهذا سوف تساعدك على كتابة رموز أفضل. الترميز سعيد :)