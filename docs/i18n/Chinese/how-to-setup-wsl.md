# 在 Windows 子系统上为 Linux (WSL) 设置 FreeCodeCamp

> [!注意] 在您遵循这些说明之前，请确保您的系统符合要求
> 
> **WSL 2**: Windows 10 64-bit (2004版本，构建19041 或更高) - 适用于包括Windows 10 Home在内的所有分发。
> 
> **Docker Desktop for Windows**: See respective requirements for [Windows 10 Pro](https://docs.docker.com/docker-for-windows/install/#system-requirements) and [Windows 10 Home](https://docs.docker.com/docker-for-windows/install-windows-home/#system-requirements)

本指南涵盖一些通用步骤，并设置了WSL2。 一旦解决了WSL2的一些共同问题。 您应该能够遵循我们的本地设置指南，在运行WSL 磁盘的Windows上使用 FreeCodeCodeCamp，比如Ubuntu。

## 启用 WSL

按照 [官方文档](https://docs.microsoft.com/en-us/windows/wsl/install-win10) 上的说明安装 WSL1，然后升级到 WSL2。

## Install Ubuntu

1. 我们建议使用 Ubuntu-18.04 或更高版本的 WSL2。

   > [!注意]
   > 
   > 虽然你可以使用其他非德语的碎片，但他们都有自己的东西，超出了本指南的范围。

2. 更新操作系统的依赖关系

   ```console
   sudo apt update 更新
   sudo apt 升级 -y

   # 清理
   sudo apt autoremove -y
   ```

## 设置 Git

Git 是通过 Ubuntu 18.04 预先安装的，请确认您的 Git 版本是 `git --version`。

```output
~
变量--version
git 版本 2.25.1
```

(Optional but recommended) You can now proceed to [setting up your ssh keys](https://help.github.com/articles/generating-an-ssh-key) with GitHub.

## 安装代码编辑器

我们强烈建议在 Windows 10 上安装 [Visual Studio 代码](https://code.visualstudio.com)。 它非常支持WSL 并自动在您的 WSL 磁盘上安装所有必要的扩展。

基本上，您将编辑和存储在 Ubuntu-18.04 上的 VS 代码安装在 Windows上。

## 安装 Docker 桌面

**Windows停靠桌面** 允许您安装和运行数据库和服务，如MongoDB、NGINX等。 这有助于避免在Windows或WSL2上直接安装MongoDB或其他服务的常见陷阱。

在 [官方文档](https://docs.docker.com/docker-for-windows/install) 上跟随指令并安装 Docker 桌面以进行Windows分发。

最佳经验有一些最起码的硬件要求。

## 配置 WSL 的 Docker 桌面

安装Docker 桌面后， [按照这些说明](https://docs.docker.com/docker-for-windows/wsl) 进行配置以使用 Ubuntu-18.04 安装作为后端。

这样容器就可以在WSL一边运行，而不是在Windows上运行。 您可以在 Windows 和 Ubuntu 上访问 `http://localhost` 服务。

## 从 Docker Hub 安装 MongoDB

一旦您配置Docker 桌面与 WSL 2 合作，按照这些步骤启动 MongoDB 服务：

1. 启动一个新的 Ubuntu-18.04 终端

2. 从Docker枢纽拉取 `MongoDB 3.6`

   ```console
   docker pull mongo:3
   ```

3. 在端口 `27017`启动MongoDB 服务，并配置它在系统重启时自动运行

   ```console
   docker 运行 -it \
     -v mongodata:/data/db \
     -p 27017:27017 \
     --name mongodb
     --rehread unless-standarded \
     -d mongo:3
   ```

4. 您现在可以在 `mongodb://localhost:27017` 访问Windows或Ubuntu 的服务。

## 安装 Node.js 和 npm

我们建议您用节点版本管理器安装 Node.js LTS 版本号 - [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)。

安装后使用这些命令来安装和使用Node.js版本所需的

```console
nvm install --lts

# 或
# nvm install <version>

nvm install 14

# 用法
# nvm 使用 <version>

nvm 使用 12
```

Node.js 与 `npm`捆绑在一起，您可以更新到 `npm` 的最新版本：

```console
npm 安装-g npm@最新版本
```

## 本地设置免费CodeCamp

既然您已经安装了前提条件，按照 [我们的本地设置指南](https://contribute.freecodecamp.org/#/how-to-setup-freecodecamp-locally) 克隆、在您的机器上安装和安装免费CodeCamp。

> [!警告]
> 
> 请注意目前为Cypress测试(以及相关的GUI需要)设置的工作正在进行之中。 您仍然应该能够在大部分代码片段上工作。

## 有用的链接

- [一个 WSL2 开发与Ubuntu 20.04, Node.js, MongoDB, VS Code and Docker](https://devlog.sh/wsl2-dev-setup-with-ubuntu-nodejs-mongodb-and-docker) - 一篇由Mrugesh Mohamapatra 编写的文章 (免费CodeCamp.org员工开发者)
- 经常提出的问题有：
  - [Linux Windows子系统](https://docs.microsoft.com/en-us/windows/wsl/faq)
  - [Windows停靠桌面](https://docs.docker.com/docker-for-windows/faqs)
