---
title: Python Import Statements
localeTitle: Python导入语句
---
在学习编程和阅读一些资源时，您会遇到“抽象”这个词，它只是意味着尽可能地减少和重用代码。

函数和模块有助于抽象。如果要在文件中重复执行某些操作，可以创建函数。

当您想要在不同的源文件中重用一组函数时，模块会出现。模块在构建程序时也很有用。

*   使用标准库和其他第三方模块：
*   构建程序

## 使用标准库

示例：您可以在官方Python文档中详细了解所有标准库的方法/功能。
```
import time 
 for i in range(100): 
    time.sleep(1)   # Waits for 1 second and then executes the next command 
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CS6C)
```
# To calculate the execution time of a part of program 
 import time 
 start = time.time() 
 # code here 
 end = time.time() 
 print('Execution time:' , end-start) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CS6C/1)
```
# Using math Module 
 import math 
 print(math.sqrt(100))   # prints 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CS6C/2)

## 使用第三方模块

第三方模块没有与python捆绑在一起，但我们必须使用包管理器（如[`pip`](https://bootstrap.pypa.io/get-pip.py)和[`easy install`](https://bootstrap.pypa.io/ez_setup.py)在外部安装它
```
# To make http requests 
 import requests 
 rq = requests.get(target_url) 
 print(rq.status_code) 
```

[在此处](http://docs.python-requests.org/en/master/)了解有关python-requests模块的更多信息

## 构建程序

我们想要制作一个具有关于素数的各种函数的程序。让我们开始吧。我们将在`prime_functions.py`定义所有函数
```
# prime_functions.py 
 from math import ceil, sqrt 
 def isPrime(a): 
    if a == 2: 
        return True 
    elif a % 2 == 0: 
        return False 
    else: 
        for i in range(3,ceil(sqrt(a)) + 1,2): 
            if a % i == 0: 
                return False 
        return True 
 
 def print_n_primes(a): 
    i = 0 
    m = 2 
    while True: 
        if isPrime(m) ==True: 
            print(m) 
            i += 1 
        m += 1 
        if i == a: 
            break 
```

现在我们想要使用我们刚刚在`prime_functions.py`创建的函数，因此我们创建了一个新文件`playground.py`来使用这些函数。

> _请注意，这个程序太简单了，不能制作两个单独的文件，只是为了演示。但是当有大型复杂程序时，制作不同的文件确实非常有用。_
```
# playground.py 
 import prime_functions 
 print(prime_functions.isPrime(29)) # returns True 
```

## 排序进口

好的做法是将`import`模块分为三组 - 标准库导入，相关的第三方导入和本地导入。在每个组中，按模块名称按字母顺序排序是明智的。您可以[在PEP8中](https://www.python.org/dev/peps/pep-0008/?#imports)找到[更多信息](https://www.python.org/dev/peps/pep-0008/?#imports) 。

Python语言最重要的一点是易读性，按字母顺序排序的模块可以更快地读取和搜索。此外，更容易验证某些内容是否已导入，并避免重复导入。