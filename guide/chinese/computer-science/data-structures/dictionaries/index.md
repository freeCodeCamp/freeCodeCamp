---
title: Dictionaries
localeTitle: 字典
---
## 字典

我们假设我们有一个同类列表。我们想要计算列表中每个项目出现的次数。我们怎么能这样做，而不使用Python的内置方法，如Python收集模块中的count或Counter？谷歌搜索“如何计算列表中项目的出现次数？”将返回Stack Overflow答案，指向count方法和collections模块，但出于学习目的，我们尝试在不使用这些工具的情况下解决问题。

这是我们将要使用的列表：

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
```

此代码使用嵌套for循环生成正确答案，将答案存储在“count”列表中：

```python
count = [] 
 for flavor in ice_cream: 
  found = False 
  for entry in count: 
    if entry[0] == flavor: 
      entry[1] += 1 
      found = True 
  if not found: 
      count.append([flavor, 1]) 
 
 # Print. 
 for (entry, total) in count: 
  print (entry, total) 
```

尽管此代码给出了正确的答案，但它有两个问题。首先，它很复杂。程序包含的嵌套循环越多，理解，修复和扩展就越困难。而且效率低下。在这个小例子中，这可能不是问题，但想象一下包含数千或数百万个项目的列表。无论计算机有多快，每次进行观察时扫描条目列表都需要非常长的时间。在研究诸如大O符号和比较搜索和排序算法等主题时，这是一个更充分的主题。

更好的答案是使用另一种称为**字典**或**地图的**数据结构。此数据结构是_键/值_对的_无序，可变_集合。想象一下像电话簿这样的字典，其中键是人的姓名，值是电话号码。字典中的键形成一个集合，这意味着它们只能出现一次，并且它们不能被更改（它们是不可变的），尽管可以更改与键相关联的值。

通过将键/值对放在大括号内来创建字典。要获取与键关联的值，请将键放在方括号中。

以下是一些代码示例：

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream) 
 >> {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream['strawberry']) 
 >> 1 
```

要测试密钥是否在字典中，请在d中使用k：

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 if 'chocolate' in ice_cream: 
    print ('chocolate is in the list') 
 ... 
 
 del ice_cream['chocolate'] 
 if 'chocolate' in ice_cream: 
    print ('oops: why is chocolate still there?') 
```

**更新和会员资格** 要更新词典，只需为键指定值即可。如果密钥已经在字典中，则会更改与其关联的值。

如果密钥不存在，则会添加该值以及值：

```python
ice_cream = {} 
 ice_cream['chocolate'] = 33 
 ice_cream['vanilla'] = 999 # oops 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 999} 
 ice_cream['vanilla'] = 9 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 9} 
```

使用_del d \[k\]_ ，从字典中删除一个条目，其中_d_是字典名称， _k_是要删除的密钥。只能删除存在的条目;尝试删除不存在的那个导致错误：

```python
ice_cream = {'chocolate' : 33, vanilla' : 9} 
 del ice_cream['chocolate'] 
 print (ice_cream) 
 >> {'vanilla' : 9} 
 del ice_cream['strawberry'] 
 >> Traceback (most recent call last): 
   File "<stdin>", line 5, in <module> 
   KeyError: 'strawberry' 
```

**循环** 由于字典是集合（以及列表，元组和集合），我们将要遍历它们 内容。我们使用for循环执行此操作，该循环将字典中的每个键依次分配给循环变量：

```python
ice_cream = {'chocolate' : 183, 
             'vanilla' : 71, 
             'strawberry' : 63, 
             'banana', 1} 
 for flavor in ice_cream: 
  print (flavor, ice_cream[flavor]) 
 
 >> 'banana' 1 
   'vanilla' 71 
   'chocolate' 183 
   'strawberry' 63 
```

与set元素一样，Python以任意顺序循环遍历字典中的条目。无法保证按字母顺序或按顺序查看它们，它们会被添加到字典中。顺便提一下，注意循环字典与循环列表略有不同。当Python循环遍历列表时，列表中的值将分配给循环变量。另一方面，当它在字典上循环时，它会分配键。 Python的设计师选择这样做是因为：

*   循环遍历列表的索引并不是很有趣，因为 程序总是得到序列0,1,2，...;和
*   从字典键到关联值更容易 而不是获取值并找到相关的键。

**字典方法** 字典是对象，就像列表，元组和集合一样。一些常见的字典方法是：

*   _d.clear（）_ - 清除字典
*   _d.get（x，99）_ - 返回与键关联的值，如果键不存在则返回默认值。
*   _d.keys（）_ - 返回键
*   _d.items（）_ - 返回键，值对的列表
*   _d.values（）_ - 将值作为列表返回，值可能不是唯一的
*   _d.update（）_ - 用另一个内容更新字典

项的一个常见用途是将字典中的键和值循环在一起： for（key，value）in dictionary.items（）： ......用钥匙和价值做点事......

这对于大型字典来说效率很低，因为items（）实际上构造了一个（键，值）对的列表。一个名为_iteritems（）的_类似方法根据需要将这些对逐个移回： for（key，value）in dictionary.iteritems（）： ......用钥匙和价值做点事......

让我们回到原始示例 - 我们如何使用字典计算ice\_cream列表中的项目数？

```python
# Count all the flavors. 
 ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 count = {} 
 for flavor in ice_cream: 
  if flavor in count: 
    count[flavor] = count[flavor] + 1 
  else: 
    count[flavor] = 1 
 
 # Print. 
 for b in count: 
  print (b, count[b]) 
```

为此，我们创建一个最初为空的字典。每次我们遍历ice\_cream列表时，我们都会检查 看看这个味道是否已经在计数词典中。如果是，我们在其计数中添加一个。 如果不是，我们将名称添加到字典中，值为1。

我们可以使用方法_dict.get（）_稍微缩短这个程序。这将返回与键关联的值或我们提供的某个默认值。在这种情况下，我们得到我们已经看到一个味道或零的次数，将该方法返回的值加1，然后将其存储在字典中：

```python
# Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Print. 
 keys = count.keys() 
 keys.sort() 
 for b in keys: 
  print (b, count[b]) 
 
 # Print. 
 for key in sorted(count): 
  print (key, count[key]) 
```

请注意，我们使用两种不同的方式来打印密钥和值：一种使用Python的排序方法，另一种不使用。

如果我们想按频率顺序打印味道，我们需要**反转字典** 。这意味着我们需要将值用作键，将键用作值。由于无法保证值是唯一的，因此我们需要采取措施避免_冲突_ 。

解决方案是使用某种集合（例如列表）来存储反向字典的值。如果我们走这条路线，前面显示的字典的倒数将是{1：\['a'，'b'，'c'\]}。这是一个做我们想要的程序：

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 # Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Invert the dictionary. 
 freq = {} 
 for (flavor, times) in count.items(): 
  if times in freq: 
    freq[times].append(flavor) 
  else: 
    freq[times] = [flavor] 
 
 # Print. 
 for key in freq: 
  for flavor in sorted(freq[key]): 
    print (key,":", " ", flavor) 
```

#### 更多信息：