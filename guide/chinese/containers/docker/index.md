---
title: Docker
localeTitle: 搬运工人
---
## 搬运工人

[Docker](https://www.docker.com/)是一个广泛使用的容器平台，可用于Linux，Windows和Mac，以及AWS和Azure等云提供商。

一个常见的用例是将应用程序及其所有要求打包到容器中。然后可以在开发期间使用该容器，将其传递到质量保证/测试，以及生产/操作。这消除了“在我的机器上工作”的心态，因为容器实际上_是_机器，无论它可能运行的是什么实际硬件。

完成设置计算机和安装docker之后，只需运行命令即可测试Docker：

```shell
$ docker run hello-world 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
```

如果您在本地没有hello-world映像，Docker会自动将其下载到您的计算机上。 您可以通过运行命令列出已下载或创建到您的计算机的映像：

```shell
$ docker image ls 
```

[Docker Store](https://hub.docker.com/explore/)包含许多打包到容器中并可以使用的常见应用程序。

## 进一步阅读

*   [Docker文档](https://docs.docker.com)