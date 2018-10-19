---
title: Ansible
localeTitle: Ansible
---
## Ansible

Ansible是一个易于使用的自动化工具。 Ansible可用于自动化部署，更新，安全性，系统管理，容器配置等。配置文件易于管理用简单英语编写的YAML文件。安装很简单，由于其Master-Push格式，远程机器上不需要代理。与远程机器的通信是通过SSH进行的。

Ansible 架構圖如下所示，使用者透過 Ansible 編配操控公有與私有雲或 CMDB（組態管理資料庫）中的主機，其中 Ansible 編排是由Inventory(主機與群組規則)、API、Modules(模組)與Plugins(插件)組合而成。



Ansible 與其他管理工具最大差異在於不需要任何 Agent，預設使用 SSH 來做遠端操控與配置，並採用 YAML 格式來描述配置資訊。

Ansible 提供了一個 Playbook 分享平台，可以讓管理與開發者上傳自己的功能與角色配置的 Playbook，該網址為 Ansible Galaxy。

優點：

開發社群活躍。
playbook 使用的 yaml 語言，很簡潔。
社群相關文件容易理解。。
沒有 Agent 端。
安裝與執行的速度快
配置簡單、功能強大、擴展性強
可透過 Python 擴展功能
提供用好的 Web 管理介面與 REST API 介面（AWX 平台）
缺點：

Web UI 需要收費。
官方資料都比較淺顯。

### 在Ubuntu服务器14.04或更高版本上安装

建议在Ubuntu服务器上通过Ansible PPA进行安装。

首先确保您的系统是最新的。
```
$ sudo apt-get update 
 $ sudo apt-get upgrade 
```

接下来，您需要将以下包添加到系统中
```
$ sudo apt-get install software-properties-common 
```

将ppa：ansible / ansible添加到您的系统中
```
$ sudo apt-add-repository ppa:ansible/ansible 
```

再次更新您的回购
```
$ sudo apt-get update 
```

将代码部署到生产中（到实际站点）通常涉及几个步骤。随着您的站点/应用程序/ Web应用程序变得越来越大，越来越复杂，步骤数也会增加。

解决方案是自动部署。自动化以脚本的形式出现，作为一组指令（就像所有代码一样）概述了每个步骤。

Ansible是一种自动化工具，通常用于如上所述的部署，但越来越多地用于其他复杂的自动化。

它使用一种名为[YAML](https://en.wikipedia.org/wiki/YAML)的语言，它允许您描述接近普通英语的示例，正​​如您在Ansible模块示例中所看到的：

```YAML
--- 
 - yum: name={{contact.item}} state=installed 
 with_items: 
 - app_server 
 - acme_software 
 
 
 - service: name=app_server state=running enabled=yes 
```

最后，安装包
```
$ sudo apt-get install ansible 
```

使用Ansible的一个显着好处是它默认使用SSH（Secure SHell），并且模块可以驻留在不需要服务器，守护进程或数据库的任何机器（计算机）上。

Ansible的真正力量在于使用剧本。在[Ansible的官方文档](https://docs.ansible.com/ansible/latest/index.html)中阅读有关[Ansible的](https://docs.ansible.com/ansible/latest/index.html)配置和使用的更多信息。

Ansible模块，是小型任务特定程序。一旦它们用于预期目的，例如运行部署脚本，Ansible就会删除这些模块。

#### 更多信息：

*   [详细了解Ansible的工作原理](https://www.ansible.com/how-ansible-works/)
*   [Ansible文档](http://docs.ansible.com/)
