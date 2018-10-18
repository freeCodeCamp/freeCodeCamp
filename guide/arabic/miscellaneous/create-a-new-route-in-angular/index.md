---
title: Create a New Route in Angular
localeTitle: إنشاء مسار جديد في Angular
---
> > يو الزاوي ، fullstack: الطريق newpage

ستؤدي كتابة ما سبق في سطر الأوامر إلى إنشاء **صفحة /** مسار جديد لتطبيقك! يقوم تلقائيًا بإنشاء جميع الملفات الضرورية داخل مجلد **/ client / app / newpage** ، مثل المجلد **/ client / app / main** ، مع **newpage.controller.js** و **newpage.controller.spec.js** و **newpage.js** **والصفحة الجديدة. أتش تي أم أل** . هذه كلها تتصرف إلى حد كبير مثل تلك الموجودة في الطريق **الرئيسي** . إذا كنت تقوم بالوصول إلى قاعدة البيانات في وحدة تحكم صفحتك الجديدة ، فستحتاج إلى إضافة _$ http_ إلى قائمة التبعيات في **newpage.controller.js** بنفس الطريقة المتضمنة في **main.controller.js** :

 `angular.module('myApp') 
  .controller('MainCtrl', function ($scope, $http) { ... 
`