---
title: Create a New Route in Angular
localeTitle: 在Angular中创建一个新路径
---
> > yo angular-fullstack：路由新页面

在命令行中输入上述内容将为您的应用生成新页面**/**路线！它会自动生成**/ client / app / newpage**文件夹中的所有必要文件，例如**/ client / app / main**文件夹，包含**newpage.controller.js** ， **newpage.controller.spec.js** ， **newpage.js**和**newpage。 HTML** 。这些都非常像**主/**路线中的那些。如果您正在访问新页面控制器中的数据库，则需要将new _http_添加到**newpage.controller.js**中的依赖项列表，方法与**main.controller.js中**包含的**相同** ：
```
angular.module('myApp') 
  .controller('MainCtrl', function ($scope, $http) { ... 

```