---
title: A simple web server in Go
localeTitle: Go中的一个简单Web服务器
---Go编程语言以拥有内置Web服务器而闻名。在本文中，您将了解如何使用Go轻松创建自己的Web服务器。除了已经内置的软件包之外，您不需要任何其他软件包！

首先，跳转到文本编辑器。然后创建一个名为`webserver.go`的文件并输入以下代码：

```go
package main 
 
 import ( 
  "net/http" 
  "io" 
 ) 
 
 func main() { 
  http.HandleFunc("/", servePage) 
    http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  io.WriteString(writer, "Hello world!") 
 } 
```

让我们分解上面的代码块。我们导入`net/http`包：这个包包含Web服务器本身。然后我们还导入了`io`包，我们稍后会利用它来实际为客户端提供服务。

在`main`函数中我们做了两件事。首先，我们指示服务器让名为`servePage`的函数处理所有传入的流量到`/` - 在这种情况下，它意味着它处理对_任何_ `URL`请求。我们做的第二件事实际上是激活服务器。我们使用名为`ListenAndServe`的函数执行此操作。这个函数需要两个参数： `port` （作为`string` ），在这种情况下它是`8080` ， `handler` （作为`Handler` ） - 但是最后一个还不重要。我们只会把它变成`nil` ，一切都会好起来的。

在`servePage`我们现在只做一件简单的事情。使用`io`包和它包含的`WriteString`函数，我们可以使用文本`Hello world!`响应客户端的请求`Hello world!` （或任何其他字符串，当然）。您可能还注意到`servePage`函数有两个参数： `writer`和`request` 。使用编写器，您实际上可以响应`HTTP`请求，并且通过`request`您可以获得有关请求本身的更多信息。

恭喜！您刚刚创建了第一个Web服务器！如果你想测试它：只需运行`go run webserver.go` ，启动浏览器并导航到`http://localhost:8080` ！