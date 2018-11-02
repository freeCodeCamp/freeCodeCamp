---
title: Deque
localeTitle: 和
---
## 使用列表作为队列

还可以使用列表作为队列，其中需要FIFO（“先进先出”）操作。列表效率不高 使用追加和弹出时的队列，因为它可能会变慢，因为每个追加/弹出都必须将所有元素移动一个。

要实现队列，请使用collections.deque，它设计为具有快速追加和两端弹出。

#### 示例用法

```py
from collections import deque 
 queue = deque(["January", "February", "March", "April"] ) 
 
 queue.append("May") 
 
 queue.popleft() 
 queue.popleft() 
 
 print "Spring months in the list: ", queue 
```

#### 产量
```
Spring months in the list:  deque(['March', 'April', 'May']) 
```

#### 更多信息：

`collections.deque`的官方文档可以在[这里](https://docs.python.org/3/library/collections.html#collections.deque)找到