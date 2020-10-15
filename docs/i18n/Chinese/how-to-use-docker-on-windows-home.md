# 如何在 Windows Home 上使用 Docker

在WindowsHome上设置停靠台时要避免一些陷阱。 首先，您必须使用 [Docker 工具箱](https://docs.docker.com/toolbox/toolbox_install_windows/) 作为管理员。 很抱歉，Windows Home 不支持 Docker for Windows Desktop，所以必须使用工具箱。 它必须作为管理员运行，因为安装使用符号链接，否则无法创建。

安装工具箱后，作为管理员运行Docker Quickstart 终端。 如果它不存在，它将创建 `默认` 虚拟机. 一旦发生这种情况，关闭终端和打开 VirtualBox (再次作为管理员)。 您应该能看到 `默认` 机。 站点资源非常密集，所以停止虚拟机并尽可能提高设置 - 尤其是内存。 它已被证实与4GB ram合作。

一旦你很高兴Docker正在运行，请克隆免费CodeCamp仓库到 `C:\User` 内的目录。 这些目录是共享的 Docker 访问它在安装期间需要的本地目录的权限。

如果您看到的消息就像这样了

```shell
bash: change_volumes_owners.sh: 没有这样的文件或目录
```

当你 `npm 运行docker:init` 这可能是罪魁祸首。
