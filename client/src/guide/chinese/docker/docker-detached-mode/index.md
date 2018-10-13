---
title: Docker detached mode
localeTitle: Docker分离模式
---
## Docker分离模式

分离模式（由`--detach`或`-d`选项显示）表示Docker容器在终端的后台运行。它不接收输入或显示输出。
```
docker run -d IMAGE 
```

如果您在后台运行容器，可以使用`docker ps`找到它们的详细信息，然后将终端重新连接到其输入和输出。

#### 更多信息：

*   [连接到正在运行的容器和从中分离Docker文档](https://docs.docker.com/engine/reference/commandline/attach/#examples)
*   [分离vs前景| Docker文档](https://docs.docker.com/engine/reference/run/#detached-vs-foreground)