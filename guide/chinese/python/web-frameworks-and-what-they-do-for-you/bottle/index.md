---
title: Bottle
localeTitle: 瓶子
---
瓶子框架使我们能够非常快速，轻松地启动和运行基本的Web应用程序。

以下详细介绍了如何编写和运行简单的问候Web应用程序，我们可以在表单中输入我们的名称，按提交并回复问候语。

1.  使用`pip`安装瓶子包装。
    
    ```
    pip install bottle 
    
    ```
    
2.  创建加载站点时要提供的`html`文件。例如`index.html` 。
    
    让我们在此页面中添加标题和基本表单。
    
    ```html
    
    <h3>Say Hello</h3> 
     
     <form action="/hello" method="get"> 
     Name: 
        <input type="text" name="name"><br><br> 
        <input type="submit"> 
     </form> 
    
    ```
    
3.  创建一个新的python文件，例如`main.py`
    
4.  在文件的第一行，我们需要从瓶模块导入get，request和run函数。
    
    ```python
    from bottle import get, request, run 
    
    ```
    
5.  现在我们定义我们的函数来在访问根页面时提供html文件。
    
    这里我们使用`@get`装饰器，它指定此函数应响应`HTTP GET`请求并传入`'/'`作为函数将被调用的路径。
    
    接下来，我们使用`def`关键字定义`index()`函数。
    
    要读取并返回我们在步骤2中创建的html文件，我们使用所谓的上下文管理器。它为我们处理打开和关闭文件，允许我们读取文件和内容并使用`return`语句返回它们。
    
    ```python
    @get('/') 
     def index(): 
        with open('./index.html') as f: 
            return f.read() 
    
    ```
    
6.  为了让网站运行并监听请求，我们需要添加对瓶框架`run`函数的调用，如下所示。
    
    在这里，我们传入将运行Web应用程序的主机，在本例中为`localhost` ，以及它应该侦听HTTP请求的端口。
    
7.  运行应用程序并将其加载到浏览器http：// localhost：8080 /中，您应该看到我们在浏览器中创建的eariler渲染的html文件。
    
    如果我们输入我们的名字并按现在提交，我们将收到`HTTP 404`错误，因为我们尚未定义响应此请求的功能。
    
    ```python
    run(host='localhost', port=8080) 
    
    ```
    
8.  回到我们的`main.py`文件中，我们现在需要定义在汇总表单时要响应的函数。
    
    我们再次在这里使用`@get`装饰器，但是这次我们传入`'/.hello'`作为路径。您可能会注意到，这与我们在`index.html`中的表单的action属性中定义的路径相同。
    
    接下来我们从url中检索`name`值，在提交表单时，表单数据的url编码如下：http：// localhost：8080 / hello？name = Jon + Snow
    
    最后，我们返回问候语，附上表格中输入的姓名。
    
    ```python
    @get('/hello') 
     def hello(): 
        name = request.query['name'] 
        return f'Hello {name}' 
    
    ```
    

### 来源

https://bottlepy.org/docs/dev/