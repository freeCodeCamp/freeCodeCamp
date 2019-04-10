---
title: Docker rmi
localeTitle: Docker rmi
---
## Docker rmi

`docker rmi`通过ID删除图像。

要删除图像，首先需要列出所有图像以获取图像ID，图像名称和其他详细信息。通过运行简单的命令`docker images -a`或`docker images` 。

之后你确定要删除哪个图像，执行这个简单的命令`docker rmi <your-image-id>` 。然后，您可以通过列出所有图像确认图像是否已被删除并检查。

### 删除多个图像

当您想要删除多个特定图像时，有一种方法可以一次删除多个图像。因此，首先通过列出图像然后执行简单的跟随命令来获取图像ID。

`docker rmi <your-image-id> <your-image-id> ...`

在命令中写入图像ID，后跟它们之间的空格。

### 一次删除所有图像

要删除所有图像，只需执行一个简单的命令即可。 `docker rmi $(docker images -q)`

在上面的命令中，有两个命令，第一个在`$()`执行的命令是shell语法，并返回在该语法中执行的结果。所以在这个`-q- is a option is used to provide to return the unique IDs,` $（）返回图像ID的结果，然后`docker rmi`删除所有这些图像。

#### 欲获得更多信息：

*   [Docker CLI文档：rmi](https://docs.docker.com/engine/reference/commandline/rm/)