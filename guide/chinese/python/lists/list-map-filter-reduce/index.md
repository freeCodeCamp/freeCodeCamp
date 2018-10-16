---
title: Map, Reduce, Filter
localeTitle: 地图，减少，过滤
---# 地图，缩小和过滤

大多数工程师使用列表来处理订单/用户列表等。如果使用多个for循环和嵌套循环，分析列表会变得复杂和混乱。因此，上述方法可以简化列表操作的使用。

## 地图

如果您的任务是将特定方法应用于列表的每个元素，那么map将派上用场。比如，您有一个度数值列表，并且您希望将所有这些值转换为华氏度单位的值列表。

#### 示例用法

```py
inputs = [10,32,5,40,25] 
 
 def degreesToFahren(deg): 
    fahrenheit = (9.0/5)*deg +32 
    return fahrenheit 
 
 # The most common way of doing this 
 result=[] 
 for i in inputs: 
    iTofahren = degreesToFahren(i) 
    result.append(iTofahren) 
 print(result)   # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

```py
# Using Map 
 result = list(map(degreesToFahren,inputs)) 
 print(result) # [50.0, 89.6, 41.0, 104.0, 77.0] 
```

您可能已经注意到，使用map只是一个单行操作。通常，如果你有data = `[a1,a2,...,an]`和函数`f()` ，那么`map(f,data):`返回一个迭代器而不是`f(a1),f(a2)...f(an).`使用`list()`将迭代器对象转换为python列表。

## 过滤

过滤功能会删除您需要/不需要的列表中的数据，因此会删除名称。比如，您希望根据不需要的值过滤列表，例如高于2的值。

#### 示例用法

```py
data = [1.2,2.5,5.8,0.4,4.7,9.9] 
 result = list(filter(lambda x:x > 2,data)) 
 print(result) 
```

#### 产量
```
[2.5, 5.8, 4.7, 9.9] 
```

这也是一个简单的1线程，类似于上面的map（）函数。如果您发现此术语不熟悉，请参阅有关lambda函数的教程。

## 减少

来自Python的创造者Guido van Rossum `"Use functools.reduce if you really need it; however, 99% of the time an explicit for loop is more readable"`

它通常做的是将函数`f()`应用于列表中的数据元素，并将该结果用于列表中的下一个值。 在视觉上，

数据= \[a 1 ，a 2 ，...，a n \] function = f（x，y）

减少（F，数据）： 第1步：val 1 = f（a 1 ，a 2 ） 第2步：val 2 = f（val 1 ，a 3 ） 第3步：val 3 = f（val 2 ，a 4 ） 。 。 。 步骤n-1：val n-1 = f（val n-2 ，a n ）

例如，您希望将列表中的所有数字相乘。

#### 示例用法

```py
from functools import reduce 
 
 input = [1,2,3,4,5,6] 
 multiplier = lambda x,y:x*y 
 answer = reduce(multiplier,input) 
 print(answer) 
```

#### 产量
```
720 
```

但是，可以使用简单的for循环来计算上述内容，并且优选使用这些方法。

#### 更多信息：

有关上述方法的官方文档，请访问http://book.pythontips.com/en/latest/map\_filter.html