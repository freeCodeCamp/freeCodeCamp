---
title: Creating a new container
localeTitle: 创建一个新容器
---
使用Docker CLI创建容器

```yaml
docker create [OPTIONS] IMAGE [COMMAND] [ARG...] 
```

# 例子

创建并启动容器

```shell
$ docker create -t -i fedora bash 

```