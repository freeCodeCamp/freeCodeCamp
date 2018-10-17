---
title: Dynamic Urls Using Routeparams in Angular
localeTitle: ديناميات ديناميكية باستخدام Routeparams في Angular
---
ماذا لو كان لديك الكثير من المستخدمين الذين ينشرون _أشياء_ لموقعك على الويب؟ ربما يريد المستخدمون لديك ملفًا شخصيًا أو جدارًا _للأشياء_ التي نشروها ، ويريدون أن يتمكنوا من مشاركتها مع أصدقائهم باستخدام عنوان url؟ يمكنك القيام بذلك ، لا biggie!

لنفترض أنك استخدمت

 `>> yo angular-fullstack:route wall 
` 

لإنشاء مسار http://myapp.wherever.com/wall/ لمستخدميك. أنت تريد رابطًا إلى http://myapp.wherever.com/wall/someUsername لعرض _أشياء_ خاصة بمستخدم معين.  
استعرض إلى **/client/app/wall/wall.js ولاحظ** أنه يكتشف عنوان URL الذي يطلبه المستخدم قبل التصرف عليه:

 `$routeProvider.when('/wall', … 
` 

يمكنك تخصيص هذا المسار للاحتفاظ به عندما يحاول المستخدم مشاهدة ملف شخصي مرتبط باسم مستخدم معين مثل:

 `$routeProvider.when('/wall/:username', … 
` 

يشير النقطتين قبل "username" إلى أن هذا متغير ، ثم يتم تمريره إلى الوحدة _$ routeParams_ . في **wall.controller.js** ، _أدخل $ routeParams_ :

 `.controller('WallCtrl', function ($scope, $routeParams) { … 
` 

ثم لاحقًا في **wall.controller.js** ، يمكنك معرفة اسم المستخدم المطلوب في عنوان URL بالرجوع إلى المتغير الذي تم إنشاؤه بواسطة _$ routeProvider_ باستخدام شيء ما مثل

 `var wallOwner = $routeParams.username; 
`