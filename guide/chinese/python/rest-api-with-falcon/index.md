---
title: REST APIs with Falcon
localeTitle: 使用Falcon的REST API
---
## 介绍

RESTful API是任何架构良好的堆栈的主要组件，而Python恰好有一些很好的框架可用于快速编写API。其中一个框架被称为[Falcon](https://falconframework.org) - 它很棒！基本上是一个微框架，它具有相当多的优点：

1.  它很快。真的很快查看[这里](https://falconframework.org/#sectionBenchmarks)的基准。
    
2.  HTTP资源被定义为类，其中类方法用于对这些资源的不同REST操作。这有助于维护干净的代码库。
    
3.  这是相当可扩展的 - 请查看他们的维基上的[这一部分](https://github.com/falconry/falcon/wiki/Complementary-Packages) ，以了解它。
    
4.  它基于WSGI - Web应用程序的Pythonic标准 - 因此它适用于Python 2.6,2.7和3.3+。如果您需要更高的性能，请使用PyPy运行它！
    

## 入门

首先，让我们为环境做好准备。就个人而言，在虚拟环境中工作总是很棒 - 你可以使用`virtualenv` ， `virtualenvwrapper`或`venv` 。接下来，使用`pip` ： `pip install falcon`安装Falcon。

我们将开发一个小样本API，为我们进行非常基本的时区操作。它将以UTC显示当前时间以及相应的纪元时间。为此，我们将获得一个名为`arrow`的漂亮库： `pip install arrow` 。

您可以在[https://github.com/rudimk/freecodecamp-guides-rest-api-falcon](https://github.com/rudimk/freecodecamp-guides-rest-api-falcon)找到完成的样本。

## 资源

将资源视为API需要操作的实体。在我们的例子中，最好的资源是`Timestamp` 。我们的路由通常是这样的：
```
GET /timestamp 
```

这里， `GET`是用于调用此端点的HTTP动词， `/timestamp`是URL本身。现在我们已经把这一点放开了，让我们创建一个模块！

`$ touch timestamp.py`

是时候导入Falcon库了：

```python
import json 
 
 import falcon 
 
 import arrow 
```

注意我们还导入了`json`包和`arrow`库。现在，让我们为我们的资源定义一个类：

```python
class Timestamp(object): 
 
    def on_get(self, req, resp): 
        payload = {} 
        payload['utc'] = arrow.utcnow().format('YYYY-MM-DD HH:mm:SS') 
        payload['unix'] = arrow.utcnow().timestamp 
 
        resp.body = json.dumps(payload) 
        resp.status = falcon.HTTP_200 
```

我们来看看这个片段。我们定义了一个`Timestamp`类，并定义了一个名为`on_get`的类方法 - 该函数告诉Falcon当向该资源的端点发出`GET`请求时，运行`on_get`函数并提供请求和响应对象作为参数。之后，它一帆风顺 - 我们创建一个空字典，用当前的UTC和UNIX时间戳填充它，将其转换为JSON并将其附加到响应对象。

很简单吧？但遗憾的是，并非全部。我们现在需要创建一个Falcon服务器并将我们刚刚定义的资源类连接到实际端点。

`$ touch app.py`

现在，添加以下代码：

```python
import falcon 
 
 from timestamp import Timestamp 
 
 api = application = falcon.API() 
 
 timestamp = Timestamp() 
 
 api.add_route('/timestamp', timestamp) 
```

在这里，我们定义了一个Falcon API，并初始化了我们之前创建的资源类的实例。然后，我们将`/timestamp`端点与类实例连接起来 - 现在我们很高兴！要测试这个API安装`gunicorn` （ `pip install gunicorn` ），并运行`gunicorn app` 。使用Postman或简单的`cURL`来测试这个：
```
$ curl http://localhost:8000/timestamp 
 {"utc": "2017-10-20 06:03:14", "unix": 1508479437} 
```

就是这样！

## 继续

一旦掌握了Falcon，构建与数据库或消息队列交互的强大RESTful API非常容易。查看[Falcon文档](https://falcon.readthedocs.io/en/stable/index.html) ，以及有趣的Falcon模块的PyPI，这些模块不断涌现。