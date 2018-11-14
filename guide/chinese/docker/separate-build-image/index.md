---
title: Separate Build Image
localeTitle: 单独构建映像
---
## 概观

制作轻量级泊坞窗图像是拥有快速开发/部署管道的关键。对于已编译的代码，在docker容器内构建二进制文件的好处是可重复和标准化的构建过程。然而，这可能会产生非常大的图像，这可能成为一个问题。

## 我们的代码

在这个例子中，我们将使用[Go中](https://golang.org/)编写的简单Web服务器。以下代码只是一个简单的hello world webserver，它监听端口`8080` 。

```go
package main 
 
 import ( 
    "fmt" 
    "log" 
    "net/http" 
 ) 
 
 func handler(w http.ResponseWriter, r *http.Request) { 
    fmt.Fprint(w, "Hello world!") 
 } 
 
 func main() { 
    http.HandleFunc("/", handler) 
    log.Fatal(http.ListenAndServe(":8080", nil)) 
 } 
```

### Dockerfile

此代码的Dockerfile可能如下所示
```
FROM golang:1.11 
 
 ADD . /app 
 
 WORKDIR /app 
 
 RUN go build -o /myserver . 
 
 EXPOSE 8080 
 
 CMD [ "/myserver" ] 
```

构建此图像会生成大小为783MB的图像！使用适合简单应用程序的大小的图像，很容易看出这在部署时如何减慢速度。

## 更好的解决方案

更好的解决方案是使用单独的构建映像来构建二进制文件，然后将其复制到最终图像。由于Go生成一个独立的二进制文件，我们可以使用`scratch` docker镜像作为基础，它的大小一样小！

### Dockerfile

以下Dockerfile将首先在golang图像中构建二进制文件，然后从头开始构建新图像，将二进制文件从第一个图像复制到第二个图像。
```
FROM golang:1.11 as build 
 
 ADD . /app 
 
 WORKDIR /app 
 
 RUN go build -o /myserver . 
 
 
 FROM scratch 
 
 COPY --from=build /myserver /myserver 
 
 EXPOSE 8080 
 
 CMD [ "myserver" ] 
```

从这个dockerfile构建，最终图像大小只有6.55MB！这比我们的第一次尝试**小100多倍** ，使得从注册表中提取图像的速度提高了100倍！

### 奖金福利

我们现在不仅为我们的应用程序提供了一个很小的docker镜像，我们也只需担心应用程序的安全性，因为容器内没有其他软件运行。