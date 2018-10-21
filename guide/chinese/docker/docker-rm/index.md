---
title: Docker rm
localeTitle: Docker rm
---
## Docker rm

`docker rm`按名称或ID删除容器。

当Docker容器运行时，首先需要在删除它们之前停止它们。

*   停止所有正在运行的容器： `docker stop $(docker ps -a -q)`
*   删除所有已停止的容器： `docker rm $(docker ps -a -q)`

### 删除多个容器

您可以通过将命令传递给要删除的容器列表来停止和删除多个容器。 shell语法`$()`返回括号内执行的结果。因此，您可以在其中创建容器列表以传递给`stop`和`rm`命令。

##### 这是docker ps -a -q的细分

*   `docker ps`列表容器
*   `-a`列出所有容器的选项，甚至是已停止的容器。如果没有这个，它默认只列出正在运行的容器
*   `-q` quiet选项只提供容器数字ID，而不是整个容器信息表

#### 更多信息：

*   [Docker CLI文档：rm](https://docs.docker.com/engine/reference/commandline/rm/)