---
title: Get Information About the Current User in Angularjs
localeTitle: 获取有关Angularjs中当前用户的信息
---
您可能已经注意到，如果您打开**/client/app/admin/admin.controller.js** ，它会调用_Auth_模块，如下所示：
```
.controller('AdminCtrl', function ($scope, $http, Auth … 
```

您可以以相同的方式在其他控制器中包含Auth。在控制器中使用_Auth_可以检测用户是否已登录，或获取有关当前用户的信息，这非常有用。在控制器的主体中，您可以添加
```
$scope.getCurrentUser = Auth.getCurrentUser; 
 $scope.isLoggedIn = Auth.isLoggedIn; 
```

然后，您可以在控制器的HTML视图中使用_isLoggedIn（）_或_getCurrentUser（）_ ！