---
title: List Extend Method
localeTitle: 列表扩展方法
---
## 列表扩展方法

列表有很多方法，您可以通过在python控制台中键入`help(list)`来探索所有这些方法。 其中之一是扩展函数，正如名称所示，通过将列表的所有项（作为参数传递）添加到结尾来扩展列表。

#### 示例用法

```py
cities = ["San Francisco", "Los Angeles", "New York"] 
 cities_in_texas = ["San Antonio", "Austin", "Dallas"] 
 cities.extend(cities_in_texas) 
 print(cities) 
```

#### 产量
```
["San Francisco", "Los Angeles", "New York", "San Antonio", "Austin", "Dallas"] 
```

#### 更多信息：

可以在[此处](https://docs.python.org/3.6/tutorial/datastructures.html)找到`extend()`的官方文档