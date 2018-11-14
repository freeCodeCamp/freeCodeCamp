---
title: Puppet
localeTitle: 木偶
---
## 木偶

Puppet是一种配置管理工具，可让您自动配置和管理基础架构。这有助于您通过自动执行重复性任务并确保系统保持所需状态来节省时间。

Puppet有两个品种，Puppet Enterprise和开源Puppet。支持的平台包括大多数Linux发行版，各种UNIX平台和Windows。

Puppet由[Puppet Labs开发](https://puppet.com/company) 。

### 入门

您可以在客户端/服务器体系结构或独立体系结构中配置基础结构。前者使用的木偶`agent`对日伪的`master`应用程序，而后者使用的木偶`apply` aplication。

#### 代理/主建筑

在此体系结构中，一个或多个节点运行Puppet主应用程序。主服务器控制整个基础架构的配置信息。

受管节点将Puppet代理应用程序作为后台服务运行，并定期从Puppet主服务器请求其配置`catalog` 。

Puppet master使用多个信息源编译并返回每个节点目录。这些收集的信息被称为`facts` 。

一旦Puppet代理收到目录，它就会检查其中描述的每个资源。如果资源未处于所需状态，则代理会对其进行更正。

#### 独立架构

在此体系结构中，每个受管节点都具有完整配置的副本。

每个Puppet代理都将apply应用程序作为计划任务或cron作业运行。

与代理/主体架构一样，Puppet apply编译目录并检查每个描述的资源。如果资源未处于所需状态，Puppet apply将更正它。

与Puppet主应用程序一样，Puppet apply需要访问多个配置数据源，它用于为其管理的节点编译目录。

#### 目录

目录是指定计算机配置的文档。它列出了需要管理的所有资源，它们所需的状态以及它们之间的任何依赖关系。

Puppet通过首先编译catlog然后应用它来配置系统。

#### 事实

Puppet使用名为`facter`的工具收集有关所有节点的事实。 Facter收集配置系统所需的信息。例如，主机名，IP地址，操作系统名称等。但是，也可以添加其他事实。

有关更多信息，请参阅Puppet体系结构的文档。

#### 更多信息：

*   木偶官方[网站](https://puppet.com)
*   Puppet [架构](https://puppet.com/docs/puppet/5.3/architecture.html)概述
*   如何使用Puppet管理您的服务器。 [DigitalOcean的](https://www.digitalocean.com/community/tutorial_series/how-to-use-puppet-to-manage-your-servers-2)一系列教程