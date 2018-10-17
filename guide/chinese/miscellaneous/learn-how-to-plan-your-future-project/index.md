---
title: Learn How to Plan Your Future Project
localeTitle: 学习如何规划未来的项目
---
一盎司的准备值得一磅治疗。这在医学上是正确的，这在软件开发中肯定是正确的。

这是一个结构化的10步工作流程，将指导您完成应用规划流程，目的是避免编写大量不必要的代码。

我们将共同制定一个简单的“待办事项”单页网络应用程序。我们还计划为未来的移动应用程序提供API后端。

## 1）创建我们的Trello板

[Trello](https://trello.com/)是一种有趣，免费的方式，可以将您的计划和开发过程分解为可以跟踪的小任务。

![Trello板的图像](https://lh3.googleusercontent.com/EI4AQ4NINm3B2DHR_YIS29JyKVa5dTPiT3RtITylmndFlpshTHepsKuO8_1KQNfdPDSBjslDReHCuPFeH1GNrDtgOwTyq6ZtGf3DFBmq1AsAhPHKt_0pLXQLf0o4ZbDuKVj4-Bo)

[这就是我们的Trello板最终会是什么样子](https://trello.com/b/O9MZcYyY/todo-app) 。我更喜欢将我的任务分成3列（取决于项目的复杂性）：

*   待办事项 - 剩下要做的事情
*   正在进行 - 人们正在进行的任务
*   完成 - 完成并准备好进行测试的任务

## 2）编写用户故事

以下是一些示例用户故事。这些将指导我们如何思考应用程序的特性和功能。请注意，它们都遵循类似的结构：作为一个[人，我可以\[做某事\]。](https://lh5.googleusercontent.com/2v6iIMbCrLSKVfqttEToum7OA3YGQCBKWUHcSCB1KEbEcijXxQtKJKY6fhLXeecJiO27P4icOuPlkVc9_uNXolzlzNXOo_TPh09GZsAqRH-JISqPrpx0PZdtbHOr0RIuQUbTbaw)

*   作为登录用户，我可以看到我的待办事项列表。
*   作为登录用户，我可以添加新的待办事项。
*   作为登录用户，我可以删除待办事项（仅限我的待办事项 - 而不是其他用户）。
*   作为登录用户，我可以完成待办事项（只有我的待办事项 - 而不是其他用户）。
*   作为匿名用户，我可以注册新帐户，恢复密码或使用现有帐户登录应用程序。

## 3）创建我们的用例模型

我们的用例模型将帮助我们可视化我们的用户故事，以便我们更好地了解如何实现它们。

！\[匿名用户案例图

![经过身份验证的用户案例图](https://lh6.googleusercontent.com/3V6dVvAcyjqFkaOukimucYOX0CfwBBYNN9SvjmnVy40Pdhs4Wtrr34i3E-9pbV7tFsp4jHm77IFQvFupjq6OWyxqEgCzcQ995Ayh52Msczu6TfwKeNhL9PYHyxSgmPYA1TR6l6Q)

## 4）创建我们的活动图

我们的活动图将显示用户可以通过我们的应用程序采取的不同路径。

![活动图图片](https://lh6.googleusercontent.com/jAQL4myqWOPA3gk2iTpGyAQBrO6p1GlPe8BQQ1Se6a-Di40X3Zw1p0wfJewZUL-YyDmedYzX5Lxvo2GW2Qnr6I-6kuKe1sDb9_5F_n46cKoawWReWW_ZoZCIJO6Semc4fvsiuHc)

用户访问我们的待办事项应用程序。

*   如果用户未登录，她将看到我们的登录页面。
    
*   如果她已有帐户，则可以登录。
    
*   如果她有帐户，但忘记了密码，她可以恢复密码。
    
*   如果她没有帐户，她可以创建一个帐户。
    
*   “创建帐户”和“恢复密码”都需要电子邮件验证。用户只有在确认了自己的电子邮件地址后才能登录我们的应用程序。
    
*   如果她已登录，她将看到她的待办事项列表（如果她尚未添加任何待办事项，则可以为空）。
    
*   登录用户：
    
    *   能够看到她的任务列表
        
    *   能够将列表中的任务标记为已完成
        
    *   能够在她的任务列表中搜索
        
    *   能够从她的列表中删除任务
        
    *   可以退出。
        
*   用户可以随时退出应用程序。
    

## 5）创建我们的模型

我们的模型显示了我们的应用程序应该是什么样子。迭代一个模型比在工作代码上这样做要快得多。

![样机图片](https://lh3.googleusercontent.com/GBFhmBkfr-xM5YSXlR0Fm9y8b24ivdRlUtRWQOHJ8skNxEgjTkAef0e5nZ-CcHKNUq2p4V4hgDuAm9LSEuvbovlVborH1ZioAUXVlEblWZ4hN_d2tGEpxhfTkKH9os2JS1pab4w)

## 6）为我们的项目选择合适的技术

因为这是一个单页面应用程序，我们将严重依赖 - 或者在这种情况下专门 - 依赖于JavaScript。让我们使用最流行的JavaScript堆栈之一：MEAN堆栈。 MEAN堆栈的一大好处是它的所有组件都是免费和开源的。还有大量资源可用于学习MEAN堆栈，并在您不可避免地遇到错误时进行调试。

您可以在不到一小时的时间[内在](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects)云端启动并运行[MEAN堆栈开发环境](http://www.freecodecamp.com/challenges/get-set-for-our-back-end-development-projects) ，免费。

以下是我们将使用的组件：

1.  [MongoDB](http://mongodb.org/)用于我们的数据库
2.  [Node.js](http://nodejs.org/)和[Express.js](http://expressjs.com/)用于实现我们的API
3.  [AngularJS](http://angularjs.org/) ，以及用于客户端应用程序的HTML和CSS（以及Bootstrap）
4.  [Mongoose](http://mongoosejs.com/)将我们的应用程序连接到MongoDB

## 7）设计我们的数据库模式

即使对于我们的简单应用程序，设计数据库模式也是值得的。

我们将有两个集合：我们的“用户”集合将存储我们的用户数据，而我们的“ToDo”集合将容纳我们需要完成的任务。一个用户可以在她的待办事项列表中拥有零个，一个或多个任务，因此我们的两个集合之间将存在一对多（1：m）的关系。

![数据库架构图](https://lh6.googleusercontent.com/5uSb_xnSSc5CWXJD0yyUGVJsL92RRZl3Bex_3wjuzl5Xr69Ks0j3od-yFju24SAd5wWMBNy9uqBrvOzdrUWluOkbcr4H5zFg-ZemJX3ZRWS12D42OowuvWnxA7wWIGrhhzaQ0aw)

## 8）定义我们的用例

1.  与删除帐户的用户相关的待办事项会发生什么？当用户删除她的帐户时，还应删除与该用户相关的待办事项。
2.  如果没有附加到确认的用户，则无法添加任何待办事项。
3.  待办事项只能由其所有者删除。
4.  没有用户可以添加空用户名或密码。
5.  没有待办事项可以添加空任务。

要记住的事情：

1.  当用户删除她的帐户时，使用Mongoose中间件删除依赖文档，例如待办事项。
2.  在模型上使用Mongoose验证规则以防止将空字段添加到我们的数据库中。

## 9）设计和测试我们的API

我使用了一个名为Apiary的免费产品[来记录我们的API](http://docs.fcctodoapp.apiary.io/) 。

这是我用来[创建这个简单的BluePrint](https://jsapi.apiary.io/apis/fcctodoapp.apib)的语法。

我建议你创建一个帐户并开始玩它。如果您将[GitHub](http://github.com/)帐户与Apiary链接，您可以确保您的文档始终保持最新。您还可以直观地测试数据，而无需实际访问API端点。如果您更喜欢从命令行测试API，下面[是一个如何执行此操作的示例](http://docs.agendor.apiary.io/) 。

之后，一旦您使用Node.js和Express.js实现了API，您只需要在Apiary中设置您的URL。然后你就可以开始测试你的电话了。我们当前的主机网址（ [http://fcctodoapp.apiblueprint.org/](http://fcctodoapp.apiblueprint.org/) ）将替换为您的API网址。

![应用演示图片](https://lh6.googleusercontent.com/hU3ilG_y9FqtL_zajQ_KOjWy8Qx590Go8nkNvA1j0oR50YJTpjJhL1lAPgjyeLTAS06tq6V62EcJrLQyT_TR2BK49DYiX6kksU6s9cqJDvvaS6jvepIM6uiO4JMbXuu-oXhdsas)

## 10）开始编写代码！

这是有趣的部分，它将占用您项目的大部分时间。如果您需要帮助，请加入我们并学习编码。