---
title: Docker build
localeTitle: Docker构建
---
## Docker构建

docker `docker build`从Dockerfile和“context”创建了一个docker镜像。上下文可以是URL或本地PATH。您可以使用可选的`-t`标记命名图像。

Dockerfile将在构建命令期间从指定的URL或本地PATH安装依赖项。必须在Dockerfile中指定容器中所需的任何依赖项。

您的映像现在存储在计算机的本地Docker映像注册表中。

构建Docker容器后，可以使用相应的运行命令运行应用程序。

#### 更多信息：

*   [Docker CLI docs：build](https://docs.docker.com/engine/reference/commandline/rm/)
*   [Docker构建您的应用程序](https://docs.docker.com/get-started/part2/#build-the-app)