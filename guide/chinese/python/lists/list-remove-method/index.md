---
title: List Remove Method
localeTitle: 列表删除方法
---
## 列表删除方法

`remove()`方法从列表中删除给定的参数。

#### 示例用法

```py
words = ["I", "love", "Python"] 
 words.remove("I") 
 print(words) 
```

#### 产量

```py
["love","Python"] 
```

请注意，如果在列表中找不到要删除的元素，则会返回错误，如下例所示。

```py
kiss = ["keep", "it", "simple", "stupid"] 
 kiss.remove("complex") 
 print(kiss) 
```

#### 产量
```
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
```

#### 更多信息：

有关`remove()`更多信息，请[访问此处](https://docs.python.org/3.6/tutorial/datastructures.html)