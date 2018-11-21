<table>
    <tr>
        <!-- Do not translate this table -->
        <td> Read these guidelines in </td>
        <td><a href="/CONTRIBUTING.md"> English </a></td>
        <td><a href="/docs/chinese/CONTRIBUTING.md"> 中文 </a></td>
        <td><a href="/docs/russian/CONTRIBUTING.md"> русский </a></td>
        <td><a href="/docs/arabic/CONTRIBUTING.md"> عربي </a></td>
        <td><a href="/docs/spanish/CONTRIBUTING.md"> Español </a></td>
        <td><a href="/docs/portuguese/CONTRIBUTING.md"> Português </a></td>
    </tr>
</table>

＃如何在本地捕获外发电子邮件（用于电子邮件工作流程）

> **注意：**这是**可选**步骤 - 仅在使用电子邮件工作流程时需要

＃＃ 介绍

某些电子邮件工作流程（如更新用户的电子邮件）需要后端api-server发送电子邮件。在开发过程中，您可以使用工具在本地捕获这些电子邮件，而不必使用电子邮件提供商并发送实际的电子邮件。 MailHog是一种用于开发人员的电子邮件测试工具，可以捕获本地freeCodeCamp实例发送的电子邮件。

##安装MailHog

如何安装和运行MailHog取决于您的操作系统

 -  [在macOS上安装MailHog]（#instalting-mailhog-on-macos）
 -  [在Windows上安装MailHog]（#instalting-mailhog-on-windows）
 -  [在Linux上安装MailHog]（#instalting-mailhog-on-linux）

###在macOS上安装MailHog

以下是如何使用[Homebrew]（https://brew.sh/）在macOS上设置MailHog：

```庆典
brew安装mailhog
brew服务启动mailhog
```

这将在后台启动mailhog服务。

接下来，您可以转到[使用MailHog]（＃using-mailhog）。

###在Windows上安装MailHog

从[MailHog的官方存储库]（https://github.com/mailhog/MailHog/releases）下载最新的MailHog版本。单击Windows版本（32或64位）的链接，然后将.exe文件下载到您的计算机。

完成下载后，单击该文件。您可能会收到Windows防火墙通知，您必须允许访问MailHog。完成后，将打开标准Windows命令行提示符，MailHog已在运行。

要关闭MailHog，请关闭命令提示符。要再次运行它，请单击相同的.exe文件。您无需下载新的。

接下来，您可以转到[使用MailHog]（＃using-mailhog）。

###在Linux上安装MailHog

首先安装[Go](https://golang.org）。

对于像Ubuntu和Linux Mint这样的基于Debian的系统，运行：

```庆典
sudo apt-get install golang
```

对于CentOS，Fedora，Red Hat Linux和其他基于RPM的系统，运行：

```庆典
sudo dnf install golang
```

要么：

```庆典
sudo yum install golang
```

设置Go的路径：

```庆典
echo“export GOPATH = $ HOME / go”>>〜/ .profile
echo'export PATH = $ PATH：/ usr / local / go / bin：$ GOPATH / bin'>>〜/ .profile
来源〜/ .profile
```

然后安装并运行MailHog：

```庆典
去获取github.com/mailhog/MailHog
sudo cp / home / $（whoami）/ go / bin / MailHog / usr / local / bin / mailhog
mailhog
```

接下来，您可以转到[使用MailHog]（＃using-mailhog）。

##使用MailHog

安装MailHog并开始运行后，需要在浏览器中打开MailHog收件箱，打开新选项卡或窗口并导航到[http：// localhost：8025]（http：// localhost：8025）。
您现在应该看到如下屏幕：

![MailHog截屏1]（images / mailhog / 1.jpg）

当你的freeCodeCamp安装发送电子邮件时，你会看到它出现在这里。如下所示：

![MailHog截图2]（images / mailhog / 2.jpg）

打开邮件，您应该看到两个选项卡，您可以在其中查看内容 - 纯文本和源文件。确保您在纯文本选项卡上。

![MailHog截屏3]（images / mailhog / 3.jpg）

电子邮件中的任何链接都应该是可点击的。

##有用的链接

 - 有关MailHog的任何其他问题或有关自定义配置的说明，请查看[MailHog]（https://github.com/mailhog/MailHog）存储库。
