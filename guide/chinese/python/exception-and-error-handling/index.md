---
title: Exceptions and Errors Handling
localeTitle: 异常和错误处理
---
## 异常和错误处理

在创建程序时，我们可能会犯错，最终会出现错误，而最糟糕的程序会停止运行， 如果我们在代码中找不到错误或错误，那会更烦人。 简单来说，错误是程序员在编写程序时避免的。 要在python中解决这个问题，我们可以使用`try`和`except`

例：

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except: 
 >>> . . . print "error" 
 error 
```

如果您想从代码中更详细地获取错误消息，可以添加`except Exception as err`参数`except Exception as err`

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except Exception as err: 
 >>> . . . print "error:\n"+str(err) 
 error: 
 cannot concatenate 'str' and 'int' objects 
```

更多信息：

错误和例外[文档](https://docs.python.org/2/tutorial/errors.html) 。