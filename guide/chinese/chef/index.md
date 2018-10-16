---
title: Chef
localeTitle: 领导者
---
## 厨师

Chef是一个强大的自动化平台，可将基础架构转换为代码。无论您是在云端，本地还是在混合环境中运行，Chef都可以自动化网络中基础架构的配置，部署和管理方式，无论其大小如何。

#### 厨师如何运作

厨师在食谱中存储食谱的集合。一本食谱应该涉及单个任务，但可以涉及许多不同的服务器配置（例如，带有数据库的Web应用程序，将具有两个配方，每个部分一个，一起存储在食谱中）。

有一个Chef服务器存储每个这些cookbook，并且当一个新的Chef客户端节点检入服务器时，会发送配方告诉节点如何配置自己。

然后，客户端将不时检查以确保没有发生任何更改，并且不需要更改任何内容。如果是，则客户处理它。通过更改配方，可以在整个基础架构上推出修补程序和更新。无需单独与每台机器进行交互。

#### 厨师配置

![图片标题](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg)

#### 更多信息：

*   [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
*   [官方文件](https://docs.chef.io/chef_overview.html)
*   [厨师教程](http://gettingstartedwithchef.com/)