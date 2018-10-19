---
title: Get Information About the Current User in Angularjs
localeTitle: Obter informações sobre o usuário atual no Angularjs
---
Você deve ter notado se você abriu **/client/app/admin/admin.controller.js** que chama o módulo _Auth_ assim:
```
.controller('AdminCtrl', function ($scope, $http, Auth … 
```

Você pode incluir Auth em seus outros controladores da mesma maneira. É muito útil ter o _Auth_ disponível em seu controlador para detectar se um usuário está logado ou para obter informações sobre o usuário atual. No corpo do seu controlador você pode adicionar
```
$scope.getCurrentUser = Auth.getCurrentUser; 
 $scope.isLoggedIn = Auth.isLoggedIn; 
```

E então você pode usar _isLoggedIn ()_ ou _getCurrentUser ()_ na visão HTML para o seu controlador!