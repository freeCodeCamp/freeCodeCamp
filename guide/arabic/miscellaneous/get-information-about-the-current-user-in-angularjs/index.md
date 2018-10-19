---
title: Get Information About the Current User in Angularjs
localeTitle: الحصول على معلومات حول المستخدم الحالي في Angularjs
---
ربما تكون قد لاحظت ما إذا كنت قد فتحت **/client/app/admin/admin.controller.js** بحيث تستدعي وحدة _Auth_ مثل:

 `.controller('AdminCtrl', function ($scope, $http, Auth … 
` 

يمكنك تضمين Auth في وحدات التحكم الأخرى بنفس الطريقة. من المفيد جدًا أن يتوفر لديك _Auth_ في وحدة التحكم الخاصة بك لاكتشاف ما إذا كان المستخدم قد قام بتسجيل الدخول أو للحصول على معلومات حول المستخدم الحالي. في جسم وحدة التحكم الخاصة بك يمكنك إضافة

 `$scope.getCurrentUser = Auth.getCurrentUser; 
 $scope.isLoggedIn = Auth.isLoggedIn; 
` 

ثم يمكنك استخدام _isLoggedIn ()_ أو _getCurrentUser ()_ في عرض HTML لوحدة التحكم الخاصة بك!