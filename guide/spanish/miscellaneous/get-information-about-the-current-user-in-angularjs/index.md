---
title: Get Information About the Current User in Angularjs
localeTitle: Obtener información sobre el usuario actual en Angularjs
---
Es posible que haya notado si abrió **/client/app/admin/admin.controller.js** que llama al módulo _Auth_ así:
```
.controller('AdminCtrl', function ($scope, $http, Auth … 
```

Puedes incluir Auth en tus otros controladores de la misma manera. Es bastante útil tener _Auth_ disponible en su controlador para detectar si un usuario ha iniciado sesión o para obtener información sobre el usuario actual. En el cuerpo de tu controlador puedes agregar
```
$scope.getCurrentUser = Auth.getCurrentUser; 
 $scope.isLoggedIn = Auth.isLoggedIn; 
```

¡Y luego puede usar _isLoggedIn ()_ o _getCurrentUser ()_ en la vista HTML de su controlador!