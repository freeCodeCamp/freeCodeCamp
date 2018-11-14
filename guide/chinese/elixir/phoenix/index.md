---
title: Phoenix
localeTitle: 凤凰
---
## 什么是凤凰城

Phoenix是一个用Elixir编写的Web开发框架，由Chris McCord创建。这个开源框架实现了服务器端MVC模式，并且与其他Web框架（如Ruby on Rails或Django for Python）有许多相似之处。 Phoenix的编写重点是开发人员友好，同时还具有出色的生产力和高应用程序性能。 Phoenix框架包括一些非常强大的功能，例如用于处理实时通信的“通道”和用于ORM（对象关系映射）的神奇工具Ecto。

## 安装Phoenix

Phoenix的安装相对简单，但在我们能够做到这一点之前，我们需要确保Elixir，Hex包管理器和Erlang已经在我们的系统上工作。 Elixir网站为Elixir和Erlang提供了精彩的[安装指南](https://elixir-lang.org/install.html) 。成功设置完成后，只需运行：

```shell
$ mix local.hex 
```

要安装Hex包管理器，然后安装Phoenix存档运行：

```shell
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez 
```

## 创建Phoenix应用程序：

1.  安装Phoenix后，创建应用程序很简单：

```shell
$ mix phx.new <application_name> 
```

2.  运行此命令，生成目录结构以及上一个命令中使用的_application\_name_所需的所有基本文件。然后会提示您为应用程序安装基本依赖项，因此我们会对此说“是”。
    
3.  接下来，我们将提示您切换到我们的项目目录：
    

```shell
$ cd <application_name> 
```

4.  默认情况下，Phoenix假设我们将使用PostgreSQL作为我们的应用程序，用户名和密码为“postgres”。如果不是这样，您需要更改配置 - 否则我们需要做的就是创建我们的数据库：

```shell
$ mix ecto.create 
```

5.  最后，我们将启动我们的服务器：

```shell
$ mix phx.server 
```

6.  现在，跳转浏览器并导航到localhost：4000并查看欢迎页面！恭喜你，你有一个有效的凤凰应用程序。