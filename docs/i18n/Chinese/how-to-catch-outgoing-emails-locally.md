> **注意：** 这是一个 **可选的** 步骤，并且仅在处理电子邮件工作流时需要

## 一. 导言

一些电子邮件工作流，如更新用户的电子邮件，需要后端api-server发送发送电子邮件。 一个替代使用电子邮件服务提供商发送实际邮件信息的替代办法 Mailhog 是电子邮件测试的开发者工具，它将捕获您的FreeCodeCamp实例发送的邮件。

## 正在安装 MailHog

MailHog可以在 macOS, Windows 和 Linux 上安装。

- [一. 导言](#introduction)
- [正在安装 MailHog](#installing-mailhog)
  - [在 macOS 上安装 MailHog。](#installing-mailhog-on-macos)
  - [在 Windows 上安装 MailHog](#installing-mailhog-on-windows)
  - [在 Linux 上安装 MailHog。](#installing-mailhog-on-linux)
- [使用 MailHog](#using-mailhog)
- [有用的链接](#useful-links)

### 在 macOS 上安装 MailHog。

使用 [自制程序](https://brew.sh/) 在 macOS 上安装 MailHog：

```bash
酿造安装mailhog
酿造服务开始邮件hog。
```

上述命令将在后台启动邮件钩子服务。

安装完成后，您可以使用 MailHog</a> 启动

。</p> 



### 在 Windows 上安装 MailHog

从 [MailHog的官方存储库](https://github.com/mailhog/MailHog/releases) 下载最新版本的 MailHog。 定位并点击您的 Windows 版本 (32 或64 位) 的链接，一个 .exe 文件将下载到您的计算机。

下载完成后，点击打开文件。 可能出现了 Windows 防火墙通知，请求访问 MailHog的权限。 标准的 Windows 命令行提示将打开，一旦获得防火墙访问许可，MailHog将在那里运行。

关闭命令提示窗口以关闭 MailHog。 若要再次启动 MailHog，请点击MailHog可执行文件 (。)。 (xe) 最初下载的文件 - 无需下载新的 MailHog安装文件。

使用 MailHog</a> 启动 。</p> 



### 在 Linux 上安装 MailHog。

首先，安装 [升级](https://golang.org)。

运行以下命令，在基于 Debian的系统上安装 GO，如Ubuntu 和 Linux Mint 。



```bash
sudo apt-get install golang
```


运行以下命令，在基于 RPM 的系统上安装GO，如CentOS、Fedora、Red Hat Linux 等。



```bash
sudo dnf install golang
```


或者，运行下面的命令来安装GO。



```bash
sudo yum install golang
```


现在设置下面命令的路径。



```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```


最后，输入下面的命令来安装和运行 MailHog。



```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```


使用 MailHog</a> 启动 。</p> 



## 使用 MailHog

打开一个新的浏览器标签页或窗口，并导航到 [http://localhost:8025](http://localhost:8025) 来打开您的 MailHog收件箱，当MailHog安装完成并且正在运行 MailHog。 收件箱将显示类似于下面的屏幕截图。

![MailHog屏幕截图 1](images/mailhog/1.jpg)

您的免费CodeCamp安装发送的电子邮件将显示在下方：

![MailHog屏幕截图 2](images/mailhog/2.jpg)

当您打开指定的电子邮件时，允许您查看纯文本或源内容的两个选项卡。 确保下面选择纯文本标签。

![MailHog屏幕截图 3](images/mailhog/3.jpg)

电子邮件中的所有链接都应该可以点击并解决到他们的URL。



## 有用的链接

- 查看 [MailHog](https://github.com/mailhog/MailHog) 存储库以获取更多与 MailHog相关的信息。 关于自定义MailHog配置的额外信息也可用。
