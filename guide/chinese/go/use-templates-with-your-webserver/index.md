---
title: Using templates with your web server
localeTitle: 在Web服务器上使用模板
---如果您有Web服务器，则可能需要在响应中插入数据。我们来看一些代码：

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
  page.NAME = "Mark" 
  http.HandleFunc("/", servePage) 
  http.ListenAndServe(":8080", nil) 
 } 
 
 func servePage(writer http.ResponseWriter, reqest *http.Request) { 
  template := template.New("sayHello") 
  template, _ = template.Parse("Hello {{.NAME}}!") 
  template.Execute(writer, page) 
 } 
```

现在启动此程序并浏览您的浏览器：
```
http://localhost:8080/ 
```

答复将是：
```
Hello Mark! 
```

但是这是如何工作的以及代码的作用是什么？好吧，首先我们导入`net/http`包，这样我们就可以运行Web服务器了。然后我们导入`html/template`包。这启用了一个称为模板的功能;这就是本文的内容。

我们还创建了一个名为`PAGE`的类型，它有一个名为`NAME`字段作为`string` 。我们还创建了一个名为`PAGE` `page`的全局变量，我们刚创建的结构。在`main`函数中，我们给`page`的`NAME`字段一个值`Mark` - 我的名字，但随意使用你自己的名字！

`servePage`函数`servePage`有点困难。让我们把它分开：

```go
func servePage(writer http.ResponseWriter, reqest *http.Request) { 
 
  // 1. Creating a template 
  template := template.New("sayHello") 
 
  // 2. Filling the template 
  template, _ = template.Parse("Hello {{.NAME}}!") 
 
  // 3. Executing the template 
  template.Execute(writer, page) 
 } 
```

我们在这做什么？让我们一步一步看：

1.  我们创建了一个_模板_ 。您需要输入一个名称，但选择的名称并不重要。在这里，我选择了`sayHello` 。
2.  然后我们用一些文本填充模板。请注意`{{.NAME}}` 。
3.  最后，我们_执行_模板。这意味着模板已填写并发送给客户端。

但是我们如何从`{{.NAME}}`转到`Mark` ？那么，还记得我们使用`page`变量作为`Execute`方法的参数吗？此方法会查看模板中的数据并看到`{{.NAME}}` 。 `.NAME`表示它应该在调用`Execute`时指定为参数的变量中查找名为`NAME`的字段。在这种情况下，它会找到该字段，并注意到该值为`Mark` 。 `{{`和`}}`告诉`Execute`它应该用它找到的值替换`{{.NAME}}` 。所以最终结果将成为`Hello Mark!` 。

您可以拥有多个字段和多个`{{.XXX}}` 。这是一种非常简单的方法，您可以将数据插入到响应中，现在您就知道如何在Go中模板化了！