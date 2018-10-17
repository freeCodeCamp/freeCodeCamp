---
title: Restrict Access to Authenticated Users Only
localeTitle: تقييد الوصول إلى Authenticated Users فقط
---
لنفترض أن لديك مسارًا تريد تقييده للمستخدمين المسجلين ؛ ربما لديك صفحة `/profile` تسمح لمستخدميك بتعبئة بعض المعلومات عن أنفسهم ، ولكنها لن تعمل إذا لم يتم تسجيل الدخول. افتح **/client/app/profile/profile.js** وأضف `authenticate: true` to الخيارات التي تم تمريرها إلى _$ routeProvider.when_ مثل:

 `    $routeProvider 
      .when('/profile', { 
        templateUrl: 'app/profile/profile.html', 
        controller: 'ProfileCtrl', 
        authenticate: true // restrict to authenticated users 
      }); 
` 

بهذه الطريقة ، إذا لم تتم مصادقة المستخدم عند محاولة الوصول إلى صفحة `/profile` ، فسيتم إعادة توجيهه إلى شاشة تسجيل الدخول للمصادقة قبل المتابعة إلى صفحة ملفه الشخصي.