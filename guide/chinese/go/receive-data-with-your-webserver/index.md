---
title: Receive data with your web server
localeTitle: 使用Web服务器接收数据
---一旦设置了Web服务器并确保它可以提供一些有用的内容，您可能希望通过让它接受数据来使其更具交互性。让我们开始编写一些代码：

```go
package main 
 
 import ( 
  "net/http" 
  "html/template" 
 ) 
 
 type PAGE struct { 
  NAME string 
 } 
 
 var page PAGE 
 
 func main() { 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  page.NAME = request.FormValue("name") 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

让我们打破这段代码吧。首先，我们首先导入Web服务器的`net/http`和`html/template` 。本文假设您已经知道如何在Go中模板。如果你还不知道，你应该先阅读有关模板的文章。

然后我们创建一个名为`PAGE`的类型，其中有一个名为`NAME`插槽（这是一个`string` ）。我们还创建了一个名为`page`的全局变量，它的类型为`PAGE` ：我们刚刚创建的结构。

在`servePage`函数中，有一件事对本文非常重要：我们在`request`上运行的`FormValue`方法。

在我们继续之前，您首先需要知道如何构建`URL` 。我们以下面的`URL`为例：
```
https://google.com/search?q=free+code+camp 
```

如果您在浏览器中输入上述`URL` ，则会执行Google搜索`free code camp`搜索。 `URL`构建如下：

1.  `https://` - 这是协议
2.  `google.com` - 这是域名和端口（在这种情况下没有提到端口 - 所以浏览器使用协议的默认端口）
3.  `/search` - 这是路径
4.  `q=free+code+camp` - 这是`query`

查询是我们在本文中讨论的部分。 Google服务器看到此`URL`并且由于查询中的属性`q`和`q`的值 - 在这种情况下为`free+code+camp` - 它知道它应该搜索的位置。

我们也可以将它应用于我们的服务器。让我们启动程序并浏览浏览器：
```
http://localhost:8080/?name=world 
```

答复将是：
```
Hello world! 
```

这个怎么用？好吧，我们给`FormValue`一个`name`参数。这种方式`FormValue`知道我们想要查询中`name`属性的值。在这种情况下，这是`world` ，所以该方法返回`world` 。然后将该字符串放入`page`变量中，模板完成剩下的工作。

这当然是这个函数的一个非常简单的实现，但你可以用它做很多事情。例如：您可以接受电子邮件地址，并让程序将这些存储在文件中。