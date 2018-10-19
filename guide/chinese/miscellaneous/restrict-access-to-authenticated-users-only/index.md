---
title: Restrict Access to Authenticated Users Only
localeTitle: 限制仅对经过身份验证的用户的访问
---
假设您有一条要限制为登录用户的路线;也许你有一个`/profile`页面可以让你的用户填写一些关于他们自己的信息，但如果他们没有登录则无法工作。打开**/client/app/profile/profile.js** ，并添加`authenticate: true`到传递给_$ routeProvider.when_的选项如下：
```
    $routeProvider 
      .when('/profile', { 
        templateUrl: 'app/profile/profile.html', 
        controller: 'ProfileCtrl', 
        authenticate: true // restrict to authenticated users 
      }); 
```

这样，如果用户在尝试访问`/profile`页面时未经过身份验证，则会在继续访问其配置文件页面之前将其重定向到您的登录屏幕进行身份验证。