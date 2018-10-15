---
title: Sleep How Can I Make a Time Delay in Python
localeTitle: 睡眠如何在Python中延迟时间
---
## 睡眠如何在Python中延迟时间

Python标准库中的`time`模块包含函数`sleep()` ，该函数将程序暂停给定的秒数。

例：
```
import time 
 
 for letter in 'hello, world!': 
    print(letter) 
    time.sleep(2)  # sleep 2 seconds between each print 
```

浮点数可以作为`sleep()`的参数给出，以获得更精确的睡眠时间。

#### 更多信息：

关于睡眠功能的时间模块[文档](https://docs.python.org/3/library/time.html#time.sleep) 。