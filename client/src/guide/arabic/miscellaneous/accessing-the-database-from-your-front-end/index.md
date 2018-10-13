---
title: Accessing the Database from Your Front End
localeTitle: الوصول إلى قاعدة البيانات من طرفك الأمامي
---
يجب أن تكون قد لاحظت في **main.controller.js** كيف تم استرداد _الأشياء_ من قاعدة البيانات وعرضها:

 `$http.get('/api/things').success(function(awesomeThings){ 
    $scope.awesomeThings = awesomeThings; 
 }); 
` 

هذا ما يفعله هو استدعاء API مع طلب "الحصول على"، الذي ثم توجيهها من قبل **/server/api/things/index.js** إلى وظيفة _exports.index_ في **things.controller.js.** ستلاحظ أيضًا في **main.controller.js** أن هناك أمثلة متضمنة _لميزتي http.post_ و _$ http.delete_ أيضًا! كم هذا جميل!