<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# 如何局部性地捕获外发电子邮件（用于电子邮件工作流程）

> **注意:** 这是**可选**步骤 - 仅在使用电子邮件工作流程时需要

## 介绍

某些电子邮件工作流程（如更新用户的电子邮件）需要后端api-server发送电子邮件。在开发过程中，您可以使用工具在局部性地捕获这些电子邮件，而不必使用电子邮件提供商发送实际的电子邮件。 MailHog就是一种开发人员使用的电子邮件测试工具，可以捕获本地freeCodeCamp实例发送的电子邮件。

## 安装MailHog

如何安装和运行MailHog取决于您的操作系统

 - [在macOS上安装MailHog](#在macOS上安装MailHog)
 - [在Windows上安装MailHog](#在Windows上安装MailHog)
 - [在Linux上安装MailHog](#在Linux上安装MailHog)

### 在macOS上安装MailHog

以下是如何使用[Homebrew](https://brew.sh/) 在macOS上设置MailHog：

```bash
brew install mailhog
brew services start mailhog
```

这将在后台启动mailhog服务。

接下来，您可以转到[使用MailHog](#使用MailHog)。

### 在Windows上安装MailHog

从[MailHog的官方存储库](https://github.com/mailhog/MailHog/releases) 下载最新的MailHog版本。单击Windows版本（32或64位）的链接，然后将.exe文件下载到您的电脑。

完成下载后，点击文件。您可能会收到Windows防火墙通知，您必须允许MailHog连接。完成后，Windows将打开标准命令行提示符。这时，MailHog已在运行。

要关闭MailHog，请关闭命令行界面。想再次启动它，请单击相同的.exe文件。您无需从新下载。

接下来，您可以转到[使用MailHog](#使用MailHog)。

### 在Linux上安装MailHog

首先安装[Go](https://golang.org)。

基于Debian系统，如Ubuntu和Linux Mint使用者，运行：

```bash
sudo apt-get install golang
```

CentOS，Fedora，Red Hat Linux和其他基于RPM的系统使用者，运行：

```bash
sudo dnf install golang
```

或者：

```bash
sudo yum install golang
```

设置Go的路径：

```bash
echo“export GOPATH = $ HOME / go”>>〜/ .profile
echo'export PATH = $ PATH：/ usr / local / go / bin：$ GOPATH / bin'>>〜/ .profile
source 〜/ .profile
```

然后安装并运行MailHog：

```bash
go get github.com/mailhog/MailHog
sudo cp / home / $（whoami）/ go / bin / MailHog / usr / local / bin / mailhog
mailhog
```

接下来，您可以转到[使用MailHog](#使用MailHog)。

## 使用MailHog

安装MailHog并开始运行后，您需要在浏览器中打开MailHog收件箱，打开新选项卡或窗口并导航到[http://localhost：8025](http://localhost:8025) 。
您现在应该看到如下屏幕：

![MailHog Screenshot 1](../../images/mailhog/1.jpg)

当您的freeCodeCamp安装发送电子邮件时，你会看到它出现在这里。如下所示：

![MailHog Screenshot 2](../../images/mailhog/2.jpg)

打开邮件，您应该看到两个选项卡让您查看内容 - 纯文本和源文件。请确保您在纯文本选项卡上。

![MailHog Screenshot 3](../../images/mailhog/3.jpg)

电子邮件中的任何链接都应该是可点击的。

## 有用的链接

 - 有关MailHog的任何其他问题或有关自定义配置的说明，请查看[MailHog](https://github.com/mailhog/MailHog)存储库。
