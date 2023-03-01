> **注意：** 这是一个 **可选的** 步骤，并且仅在处理电子邮件工作流时需要

- [Introduction](#introduction)
- [Installing MailHog](#installing-mailhog)
- [Using MailHog](#using-mailhog)
- [Useful Links](#useful-links)

## Introduction

Some email workflows, like updating a user's email, requires the back-end api-server to send outgoing emails. MailHog is an alternative to using an email service provider to send actual email messages. It is a developer tool for email testing that will catch the email messages sent by your freeCodeCamp instance.

## Installing MailHog

MailHog can be installed on macOS, Windows and Linux or used via Docker

<details><summary>Installing MailHog with Docker</summary>

If you have Docker installed then you can use

```bash
docker run -d --name mailhog --network host --rm mailhog/mailhog
```

to start MailHog in the background and

```bash
docker stop mailhog
```

to stop it.

When the installation completes, you can start [using MailHog](#using-mailhog).

</details>

<details><summary>Installing MailHog on macOS</summary>

使用 [Homebrew](https://brew.sh/) 在 macOS 上安装 MailHog：

```bash
brew install mailhog
brew services start mailhog
```

The above commands will start a mailhog service in the background.

安装完成后，你可以开始[使用 MailHog](#using-mailhog)。

</details>

<details><summary>Installing MailHog on Windows</summary>

Download the latest version of MailHog from [MailHog's official repository](https://github.com/mailhog/MailHog/releases). Locate and click on the link for your Windows version (32 or 64 bit) and a `.exe` file will be downloaded to your computer.

下载完成后，单击以打开文件。 可能会出现 Windows 防火墙通知，为 MailHog 请求访问权限。 一旦授予防火墙访问权限，将打开一个标准的 Windows 命令行提示符，MailHog 将在其中运行。

通过关闭命令提示符窗口来关闭 MailHog。 To start MailHog again, click on the MailHog executable (`.exe`) file that was downloaded initially - it is not necessary to download a new MailHog installation file.

开始[使用 MailHog](#using-mailhog)。

</details>

<details><summary>Installing MailHog on Linux</summary>

首先，安装 [Go](https://golang.org)。

在基于 Debian 的系统（如 Ubuntu 和 Linux Mint）上，运行以下命令安装 GO。

```bash
sudo apt-get install golang
```

在基于 RPM 的系统（如 CentOS、Fedora、Red Hat Linux 等）上，运行以下命令安装 GO。

```bash
sudo dnf install golang
```

或者，运行以下命令来安装 GO。

```bash
sudo yum install golang
```

现在使用以下命令设置 Go 的路径。

```bash
echo "export GOPATH=$HOME/go" >> ~/.profile
echo 'export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin' >> ~/.profile
source ~/.profile
```

最后，输入以下命令来安装和运行 MailHog。

```bash
go get github.com/mailhog/MailHog
sudo cp /home/$(whoami)/go/bin/MailHog /usr/local/bin/mailhog
mailhog
```

开始[使用 MailHog](#using-mailhog)。

</details>

## Using MailHog

Open a new browser tab or window and navigate to [http://localhost:8025](http://localhost:8025) to open your MailHog inbox when the MailHog installation has completed and MailHog is running.

## Useful Links

- Check out the [MailHog](https://github.com/mailhog/MailHog) repository for further information related to MailHog. Additional information is also available regarding custom MailHog configurations.
