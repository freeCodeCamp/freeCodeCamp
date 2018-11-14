---
title: Docker
localeTitle: 搬运工人
---
## 搬运工人

Docker是一个用于构建，发布和运行分布式应用程序的开放平台。它是用Go编写的。它于2013年首次发布，由Docker，Inc。开发。

Docker用于运行名为“containers”的包。容器彼此隔离并与操作系统隔离。它们比虚拟机更轻量级，因为它们不使用主机来运行操作系统。

容器化是一种部署和运行应用程序的方法，它运行在Linux内核上本机运行的独立服务。可以为Docker中的每个容器手动设置内存。

Docker用于简化配置，并确保顺畅的持续集成和部署流程。可以为开发，登台和生产环境指定特定容器。根据Docker手册，生产中容器的真正实现是将其作为服务运行，使用`docker-compose.yml`文件进行设置。这是一个YAML文件，用于定义Docker容器在生产中的行为方式。

Docker最大的优势之一是它可以由使用不同操作系统的团队使用来构建项目，而无需担心软件冲突。

### 安装

*   Ubuntu： `sudo apt install docker`
    
*   RedHat： `yum install docker-ce`
    
*   Windows / macOS： [下载](https://www.docker.com/get-started)
    
*   Linux的：
    
```
curl -fsSL https://get.docker.com -o get-docker.sh 
 sh get-docker.sh 
```

#### 更多信息：

*   有关下载和文档，请查看docker官方站点： [Docker官方站点](https://www.docker.com)
*   有关容器化的更多信息，请结帐[搜索IT操作](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization)
*   Docker 101课程[Docker 101](https://github.com/docker/labs/tree/master/beginner/)