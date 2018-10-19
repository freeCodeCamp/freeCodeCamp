---
title: Seed Data in Angular
localeTitle: Angular中的种子数据
---
这显示在您的应用程序的主视图中的_事情_是被添加到你的数据库（包括测试和管理用户）每次重新启动您的应用程序时（通过运行一些种子数据的一部分`grunt serve`在命令行）。此数据在**/server/config/seed.js中**定义。

您可以在此文件中添加，删除或更改数据，它将写入您的数据库，在您下次运行`grunt serve`时覆盖任何重复项。如果覆盖了**seed.js中**定义的对象，则数据库将分配一个新对象_。_ ID\_属性（我们会覆盖_。_在下一节ID\_属性），这可能会给你一些问题，后来在测试。为避免这种情况，您可以通过在**/server/config/environment/development.js中**设置`seedDB: false`来关闭种子设定。