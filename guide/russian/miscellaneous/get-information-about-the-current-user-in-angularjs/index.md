---
title: Get Information About the Current User in Angularjs
localeTitle: Получить информацию о текущем пользователе в Angularjs
---
Возможно, вы заметили, что вы открыли **/client/app/admin/admin.controller.js,** что он вызывает модуль _Auth_ следующим образом:
```
.controller('AdminCtrl', function ($scope, $http, Auth … 
```

Вы можете включить Auth в другие контроллеры таким же образом. Очень полезно иметь _Auth_ в вашем контроллере, чтобы определить, зарегистрирован ли пользователь или получить информацию о текущем пользователе. В теле вашего контроллера вы можете добавить
```
$scope.getCurrentUser = Auth.getCurrentUser; 
 $scope.isLoggedIn = Auth.isLoggedIn; 
```

И тогда вы можете использовать _isLoggedIn ()_ или _getCurrentUser ()_ в представлении HTML для своего контроллера!