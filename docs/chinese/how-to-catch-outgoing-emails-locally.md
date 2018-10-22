# 如何在本地接收对外发送的电子邮件（用于电子邮件工作流）

> **注意：**这是**可选**步骤 - 仅在使用电子邮件工作流时需要

## 介绍

某些电子邮件工作流（如更新用户的电子邮件）需要后端api-server发送电子邮件。在开发过程中，您可以使用工具在本地接收这些电子邮件，而不必使用电子邮件服务并发送真实的电子邮件。 MailHog是一个为开发人员设计的电子邮件测试工具，可以用来获取本地freeCodeCamp实例发送的电子邮件。

## 安装MailHog

如何安装和运行MailHog取决于您的操作系统

 -  [在macOS上安装MailHog](#instalting-mailhog-on-macos)
 -  [在Windows上安装MailHog](#instalting-mailhog-on-windows)
 -  [在Linux上安装MailHog](#instalting-mailhog-on-linux)

### 在macOS上安装MailHog

以下是如何使用[Homebrew](https://brew.sh/)来在macOS上设置MailHog：

```bash
brew install mailhog
brew services start mailhog
```

这将在后台启动mailhog服务。

接下来，您可以跳转到[使用MailHog](#using-mailhog)。

### 在Windows上安装MailHog

从[MailHog官方仓库](https://github.com/mailhog/MailHog/releases)下载最新版本的MailHog。选择您的Windows版本（32或64位）对应的链接，将.exe文件下载到您的计算机上。

完成下载后，单击该文件。如果收到Windows防火墙通知，请设置访问MailHog的权限。当您启动该文件时，将自动开启一个标准Windows命令行窗口，此时MailHog已处于运行状态。

要关闭MailHog，请关闭命令行窗口。要再次运行它，请单击相同的.exe文件。您无需下载新的文件。

接下来，您可以跳转到[使用MailHog](#using-mailhog)。

### 在Linux上安装MailHog

首先安装[Go](https://golang.org)。

对于像Ubuntu和Linux Mint一类基于Debian的系统，运行：

```bash
sudo apt-get install golang
```

对于CentOS，Fedora，Red Hat Linux和其他基于RPM的系统，运行：

```bash
sudo dnf install golang
```

或者运行：

```bash
sudo yum install golang
```

设置Go的路径：

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

然后安装并运行MailHog：

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

接下来，您可以跳转到[使用MailHog](#using-mailhog)。

## 使用MailHog

安装MailHog并开始运行后，需要在浏览器中打开MailHog收件箱，打开新选项卡或窗口并导航到[http://localhost:8025](http://localhost:8025)。
您现在应该看到如下的界面：

![MailHog 截屏1](images/mailhog/1.jpg)

当你的freeCodeCamp本地实例发送电子邮件时，你会看到它显示在这里。如下所示：

![MailHog截图2](images/mailhog/2.jpg)

打开邮件，您应该看到两个选项卡，您可以在其中查看内容 - 纯文本文件和源文件。请确保您在纯文本选项卡上。

![MailHog截屏3](images/mailhog/3.jpg)

电子邮件中的任何链接都应该是可点击的。

## 有用的链接

 - 有关MailHog的任何其他问题或有关自定义配置的说明，请查看[MailHog](https://github.com/mailhog/MailHog)仓库。
