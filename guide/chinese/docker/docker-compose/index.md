---
title: Docker compose
localeTitle: Docker撰写
---
## Docker撰写

Docker-Compose是一个用于定义和运行多容器Docker应用程序的工具。使用Compose，您可以使用YAML文件来配置应用程序的服务。

使用docker-compose的步骤是
```
1)create a Dockerfile which defines the image and can be produsable every where. 
```

```
2)create a docke-compose yml file to run the services 
```

```
3)use docker-compose up to start the sevices specified in docker-compose.yml file 
```

#### docker-compose中的基本命令

*   运行docker-containers的命令
```
docker-compose -f docker-compose.yml up 
```

*   用于以分离模式运行容器的命令
```
docker-compose -f docker-compose.yml up -d 
```

*   再次构建映像后运行容器的命令（注意：我们第一次运行docker container build会自动发生）
```
docker-compose -f docker-compose.yml --build -d 
```

*   在分离模式下运行时停止容器的命令
```
docker-compose -f docker-compose.yml down 
```

#### 更多信息：

*   \[有关Docker-compose的更多信息\] （https://docs.docker.com/compose/）