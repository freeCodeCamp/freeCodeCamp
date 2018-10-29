---
title: Accessing the Database from Your Front End
localeTitle: 从前端访问数据库
---
你一定注意到在**main.controller.js** _事情_是如何从数据库中检索并显示：
```
$http.get('/api/things').success(function(awesomeThings){ 
    $scope.awesomeThings = awesomeThings; 
 }); 
```

这样做是调用API与“取”请求，然后由**/server/api/things/index.js**路由到**things.controller.js**的_exports.index_功能。您还会在**main.controller.js**中注意到，还包含了_$ http.post_和_$ http.delete_函数的示例！多好！