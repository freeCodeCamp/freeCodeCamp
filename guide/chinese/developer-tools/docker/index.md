---
title: Docker
localeTitle: 搬运工人
---
Docker是一个旨在促进应用程序部署的开源软件。它提供了构建容器的可能性，包括操作系统， 库以及运行应用程序所需的一切。因此，您的应用程序可以部署在任何计算机上。它的轻量级结构使您能够 在同一台机器上运行几个容器。容器映像是一个轻巧，独立，可执行的软件包，包含所有内容 需要运行它。

### 特征

在一台机器上运行的Docker容器共享该机器的操作系统内核;它们立即启动并使用较少的计算和RAM。图像是 从文件系统层构造并共享公共文件。这样可以最大限度地减少磁盘使

Docker容器基于开放标准，可在所有主要的\* nix发行版，Microsoft Windows以及包括虚拟机，裸机在内的任何基础架构上运行 在云端。

Docker容器将应用程序彼此隔离，并与底层基础架构隔离。 Docker提供了最强的默认隔离来限制应用程序 问题发生在单个容器而不是整个机器上。

## 概观

容器映像是一个轻量级，独立的，可执行的软件包，包含运行它所需的一切：代码，运行时，系统工具，系统库，设置。适用于基于Linux和Windows的应用程序，无论环境如何，容器化软件都将始终运行相同。容器将软件与周围环境隔离开来，例如开发和登台环境之间的差异，有助于减少在同一基础架构上运行不同软件的团队之间的冲突。

### 也可以看看

*   Docker Compose：同时创建和管理多个容器。

### 容器与虚拟机

*   容器虚拟化操作系统使其更具可移植性，而虚拟机虚拟化硬件。
*   容器是应用程序层的抽象，它将代码和依赖关系打包在一起。虚拟机是物理硬件的抽象，将一台服务器转变为多台服务器。 Hypervisor可帮助VM执行此操作。
*   [容器不是VMS](https://blog.docker.com/2016/03/containers-are-not-vms/)

### 安装Docker

Docker有两个版本：Community Edition（CE）和Enterprise Edition（EE）。

[从这里安装它](https://docs.docker.com/engine/installation/)

一旦安装，试试这个
```
$ docker run hello-world 
 
 Hello from Docker! 
```

此消息表明您的安装似乎正常工作。

### 在哪里使用Docker

*   [8种经过验证的实际使用Docker的方法](https://www.airpair.com/docker/posts/8-proven-real-world-ways-to-use-docker)
    
*   [什么是Docker以及何时使用它](https://www.ctl.io/developers/blog/post/what-is-docker-and-when-to-use-it/)
    

### Docker教程

*   [文档](https://docs.docker.com/get-started/)
    
*   [适合初学者的Docker](https://docker-curriculum.com/)
    
*   [Docker教程和课程](https://hackr.io/tutorials/learn-docker)
    
*   [Docker培训。从Docker学习Docker。官方Docker培训。](https://training.docker.com/)
    

#### 更多信息：

您可以在以下站点中找到大量信息：

*   [Docker网站](https://www.docker.com/)
*   [Docker文档](https://docs.docker.com/)
*   [DockerHub](https://hub.docker.com/)