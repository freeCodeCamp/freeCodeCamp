---
title: Backend File Structures in Angular
localeTitle: Angular中的后端文件结构
---
您的应用程序与数据库交互的后端api位于**/ server / api中**  
我们来看看**/ server / api / thing** ：

1.  **index.js** ：此文件将从应用程序前端发出的$ http API请求路由到**thing.controller.js中**的相应函数
2.  **thing.controller.js** ：这是我们实际处理数据库的地方！花点时间浏览一下，看看发生了什么。这些函数将：返回集合中的所有项目，在传递其id时从集合返回单个项目，将项目发布到集合，更新集合中的项目（这实际上并不像预期的那样工作，我们将在一分钟内修复它，当然，从集合中删除一个项目。
3.  **thing.model.js** ：这里定义了一个_事物_对象的实际结构。您可以在_事物_模型中添加或删除任何您想要的字段，只要它们在语法上是正确的，它们就不会破坏任何内容，即使数据库中已存在具有不同模式的_事物_ 。但！您不必编辑_事物_模型来创建新类型的集合，因为generator-angular-fullstack可以为您完成！