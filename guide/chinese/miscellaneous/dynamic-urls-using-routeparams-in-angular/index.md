---
title: Dynamic Urls Using Routeparams in Angular
localeTitle: 动态网址在Angular中使用Routeparams
---
如果您有很多用户在您的网站上发布_内容_怎么办？也许您的用户希望拥有他们发布的_内容_的个人资料或隔离墙，他们希望能够通过网址与他们的朋友分享？你可以做到这一点，没什么大不了的！

假设您使用过
```
>> yo angular-fullstack:route wall 
```

为您的用户生成http://myapp.wherever.com/wall/路线。您需要指向http://myapp.wherever.com/wall/someUsername的链接以显示特定用户的_内容_ 。  
浏览到**/client/app/wall/wall.js**并注意它在检测之前检测到用户请求的URL：
```
$routeProvider.when('/wall', … 
```

您可以自定义该路径以在用户尝试查看与特定用户名关联的配置文件时捕获，如下所示：
```
$routeProvider.when('/wall/:username', … 
```

“username”之前的冒号表示这是一个变量，然后传递给_$ routeParams_模块。在**wall.controller.js中** ，包含_$ routeParams_ ：
```
.controller('WallCtrl', function ($scope, $routeParams) { … 
```

然后在**wall.controller.js中** ，您可以通过引用_$ routeProvider_生成的变量来查看URL中请求的用户名。
```
var wallOwner = $routeParams.username; 

```