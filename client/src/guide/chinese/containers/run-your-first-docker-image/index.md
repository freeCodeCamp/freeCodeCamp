---
title: Run Your First Docker Image
localeTitle: 运行你的第一个Docker镜像
---
## 运行你的第一个Docker镜像

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

更多信息：

测试Docker安装[文档](https://docs.docker.com/get-started/#test-docker-installation) 。