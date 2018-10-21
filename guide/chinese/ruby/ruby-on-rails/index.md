---
title: Ruby on Rails
localeTitle: Ruby on Rails
---
# Ruby on Rails

[Ruby on Rails](http://rubyonrails.org/)是一个基于Ruby语言构建网站的服务器端框架（gem）。 Rails使Web开发更快，更容易，更有趣。它包括构建精彩应用程序所需的一切，并拥有一个庞大的社区。 Rails由David Heinemeir Hansson创建，目前是第5版。 Rails强调使用其他众所周知的软件工程模式和范例，包括[约定优于配置（CoC）](https://en.wikipedia.org/wiki/Convention_over_configuration) ， [不重复自己（DRY）](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)和活动记录模式。 Rails是一个[模型 - 视图 - 控制器（MVC）](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)框架，为数据库，Web服务和Web页面提供默认结构。最近，Rails集成了一个API模块，可以更快，更轻松地创建Web服务。

## 安装Rails

Rails的下载方式与任何其他Ruby gem相同：使用`gem install`命令。在我们下载它之前，我们需要[下载Ruby](https://www.ruby-lang.org) 。之后我们距离Ruby on Rails只有3个字：

```shell
$ gem install rails 
```

## 设置数据库

Rails附带sqlite3作为默认数据库，这是磁盘上的一个简单文件。如果你想使用更强大的东西，你需要安装MySQL或PostgreSQL。

## 创建Rails应用程序

1.  在安装Ruby on Rails之后，创建一个全新的应用程序非常简单，我们只需要3个单词：

```shell
$ rails new your_application_name 
```

*   如果你想使用MySQL `shell $ rails new <application_name> -d mysql`
*   如果你想使用Postgres `shell $ rails new <application_name> -d postgresql`

1.  此命令将创建一个文件夹，其中包含_您_在上一个命令中通知_的_应用程序_名称_ 。下一步是转到刚刚创建的新目录：

```shell
$ cd your_application_name 
```

3.  在运行应用程序之前获取必要的gem和软件包：

```shell
$ bundle install 
```

4.  要运行rails服务器并查看是否所有内容都相应快速：

```shell
$ rails server 
```

它不能再简单了！好吧，这实际上并非100％正确，我们可以通过将`rails server`命令减少为：

```shell
$ rails s 
```

5.  现在，使用您首选的浏览器，转到`http://localhost:3000` ，您将看到：“是的！您正在使用Rails！”

### 创建Rails应用程序的替代方法

1.  创建一个新目录：
    
    ```shell
    $ mkdir <application_name> 
    
    ```
    
2.  进入新目录：
    
    ```shell
    $ cd <application_name> 
    
    ```
    
3.  使用Unix点表示法创建Rails应用程序。这导致将目录的名称分配给新应用程序。
    
    ```shell
    $ rails new . 
    
    ```
    
4.  开始探索刚刚创建的应用程序的框架。文件夹结构根据下表组织：
    

|文件/文件夹|目的|  
| ----------- ------- |  
| app / |包含应用程序的控制器，模型，视图，帮助程序，邮件程序，通道，作业和资产。您将在本指南的其余部分重点介绍此文件夹。 |  
| bin / |包含启动应用程序的rails脚本，可以包含用于设置，更新，部署或运行​​应用程序的其他脚本。 |  
| config / |配置应用程序的路由，数据库等。配置Rails应用程序中将对此进行更详细的介绍。 |  
| config.ru |用于启动应用程序的基于机架的服务器的机架配置。 |  
| db / |包含当前数据库架构以及数据库迁移。 |  
| Gemfile，Gemfile.lock |这些文件允许您指定Rails应用程序所需的gem依赖项。这些文件由Bundler gem使用。有关Bundler的更多信息，请参阅Bundler网站。 |  
| lib / |适合您应用的扩展模块。 |  
| log / |应用程序日志文件|  
|公共/ |世界上唯一看到的文件夹。包含静态文件和编译资产。 |  
| Rakefile |此文件定位并加载可从命令行运行的任务。任务定义都是在Rails的各个组件中定义的。您应该通过将文件添加到应用程序的lib / tasks目录来添加自己的任务，而不是更改Rakefile。 |  
| README.md |这是您的应用程序的简要说明手册。您应该编辑此文件以告诉其他人您的应用程序的功能，如何设置，等等。 |  
|测试/ |单元测试，固定装置和其他测试设备。这些在测试Rails应用程序中介绍。 |  
| tmp / |临时文件（如缓存和pid文件）。 |  
|供应商/ |所有第三方代码的地方。在典型的Rails应用程序中，这包括销售的宝石。 |  
| .gitignore |该文件告诉git它应该忽略哪些文件（或模式）。有关忽略文件的详细信息，请参阅Github - 忽略文件。 |

开始使用这个令人敬畏的框架的好地方是阅读他的[入门页面](http://guides.rubyonrails.org/getting_started.html) 。

## 约定优于配置

_约定优于配置_意味着开发人员只需要指定应用程序的非常规方面。例如，如果模型中有类`Sale` ，则默认情况下，数据库中的相应表称为`sales` 。只有当一个人偏离这个约定时，例如调用表“售出的产品”，开发人员才需要编写有关这些名称的代码。通常，Ruby on Rails约定导致更少的代码和更少的重复。

## 什么是MVC？

模型（活动记录）包含业务逻辑并与数据库交互。 视图（Action视图）所有HTML文件和结构。 控制器（动作控制器）与视图和模型交互以指导应用程序的动作。

## 干 - 不要重复自己

_不要重复自己_意味着信息位于一个明确的地方。例如，使用Rails的ActiveRecord模块，开发人员不需要在类定义中指定数据库列名。相反，Ruby on Rails可以根据类名从数据库中检索此信息。

## Ruby on Rails是开源的

它不仅可以免费使用，还可以帮助它变得更好。超过4500人已经为[Rails](https://github.com/rails/rails)贡献了代码。比你想象的更容易成为其中之一。