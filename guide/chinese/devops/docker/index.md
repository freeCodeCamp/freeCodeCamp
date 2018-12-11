---
title: Docker
localeTitle: 搬运工人
---
## 搬运工人

Docker是一个基于Linux容器的开源项目。它使用Linux内核功能（如命名空间和控制组）在操作系统之上创建容器。

Docker使用容器（图像的运行时实例）来创建可以轻松构建，发布和运行应用程序的环境。主要的好处是Docker容器默认情况下与主机环境完全隔离，只有在配置时才访问主机文件和端口。这是通常资源密集型的虚拟机（VM）的绝佳替代方案。虚拟机磁盘映像和应用程序状态是操作系统设置，系统安装的依赖关系，操作系统安全补丁以及其他容易丢失，难以复制的ephemera的纠缠。

Docker是一种执行操作系统级虚拟化的计算机程序，也称为“容器化”。

Docker是开发人员和系统管理员使用容器开发，部署和运行应用程序的平台。使用Linux容器部署应用程序称为容器化。容器不是新的，但它们用于轻松部署应用程序。

容器化越来越受欢迎，因为容器是：

*   灵活：即使是最复杂的应用也可以集装箱化。
*   轻量级：容器利用并共享主机内核。
*   可互换：您可以即时部署更新和升级。
*   便携式：您可以在本地构建，部署到云，并在任何地方运行。
*   可扩展：您可以增加并自动分发容器副本。
*   可堆叠：您可以垂直和即时堆叠服务。

适用于[Mac的](https://docs.docker.com/docker-for-mac/install/)安装

适用于[Windows的](https://docs.docker.com/docker-for-windows/install/)安装

安装[Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_所有这些链接都适用于Docker CE（社区版）_

* * *

## 测试Docker版本

要测试应用程序是否运行良好，请运行：
```
docker --version 
```

确保您有一个如下所示的输出：
```
Docker version 18.06.1-ce, build e68fc7a 
```

* * *

## 测试Docker安装

通过运行简单的Docker镜像hello-world来测试您的安装是否有效：
```
docker run hello-world 
 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
```

### 那么什么是集装箱化：

简而言之，它只不过是一个进程/应用程序的打包，它依赖于可以独立运行的可分发映像。

### 为什么我们需要Docker：

它使软件工程师的生活非常顺利，因为他们将始终在相同的开发环境中工作。 它有助于与客户/其他团队共享最终产品，而无需担心环境问题。 它通过不浪费不必要的操作系统层来减少运行应用程序所需的硬件数量。

## 基本的Docker概念

### Docker引擎

Docker引擎是Docker运行的层。它是一个轻量级的运行时和工具，可以管理容器，图像，构建等。它在Linux系统上本机运行，由以下部分组成：

1.  在主机中运行的Docker守护程序。
    
2.  Docker客户端，然后与Docker守护程序通信以执行命令。
    
3.  用于远程与Docker守护程序交互的REST API。
    

### Docker客户端

Docker客户端就像Docker的最终用户一样与之通信。可以把它想象成Docker的UI。

### Docker守护进程

Docker守护程序实际上是执行发送到Docker Client的命令 - 比如构建，运行和分发容器。 Docker守护程序在主机上运行，​​但作为用户，您永远不会直接与守护程序通信。 Docker Client也可以在主机上运行，​​但不是必需的。它可以在不同的计算机上运行，​​并与在主机上运行的Docker守护程序进行通信。

### Dockerfile

您可以在Dockerfile中编写构建Docker镜像的说明。这些说明可以是： **运行apt-get y install some-package** ：安装软件包 **EXPOSE 8000** ：暴露端口 **ENV ANT\_HOME / usr / local / apache-ant**传递环境变量等等。一旦设置了Dockerfile，就可以使用docker build命令从中构建映像。这是Dockerfile的一个例子：
```
# Start with ubuntu 14.04 
 FROM ubuntu:14.04 
 
 MAINTAINER freeCodeCamp@gmail.com 
 
 # For SSH access and port redirection 
 ENV ROOTPASSWORD sample 
 
 # Turn off prompts during installations 
 ENV DEBIAN_FRONTEND noninteractive 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 seen true" | debconf-set-selections 
 
 # Update packages 
 RUN apt-get -y update 
 
 # Install system tools / libraries 
 RUN apt-get -y install python3-software-properties \ 
    software-properties-common \ 
    bzip2 \ 
    ssh \ 
    net-tools \ 
    vim \ 
    curl \ 
    expect \ 
    git \ 
    nano \ 
    wget \ 
    build-essential \ 
    dialog \ 
    make \ 
    build-essential \ 
    checkinstall \ 
    bridge-utils \ 
    virt-viewer \ 
    python-pip \ 
    python-setuptools \ 
    python-dev 
 
 # Install Node, npm 
 RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - 
 RUN apt-get install -y nodejs 
 
 # Add oracle-jdk7 to repositories 
 RUN add-apt-repository ppa:webupd8team/java 
 
 # Make sure the package repository is up to date 
 RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list 
 
 # Update apt 
 RUN apt-get -y update 
 
 # Install oracle-jdk7 
 RUN apt-get -y install oracle-java7-installer 
 
 # Export JAVA_HOME variable 
 ENV JAVA_HOME /usr/lib/jvm/java-7-oracle 
 
 # Run sshd 
 RUN apt-get install -y openssh-server 
 RUN mkdir /var/run/sshd 
 RUN echo "root:$ROOTPASSWORD" | chpasswd 
 RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config 
 
 # SSH login fix. Otherwise user is kicked off after login 
 RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd 
 
 # Expose Node.js app port 
 EXPOSE 8000 
 
 # Create tap-to-android app directory 
 RUN mkdir -p /usr/src/my-app 
 WORKDIR /usr/src/my-app 
 
 # Install app dependencies 
 COPY . /usr/src/my-app 
 RUN npm install 
 
 # Add entrypoint 
 ADD entrypoint.sh /entrypoint.sh 
 RUN chmod +x /entrypoint.sh 
 ENTRYPOINT ["/entrypoint.sh"] 
 
 CMD ["npm", "start"] 
```

#### 更多信息：

*   [初学友好的文档](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
*   [Docker官方文档](https://docs.docker.com/get-started/)
*   [试试Docker Online](http://training.play-with-docker.com/)