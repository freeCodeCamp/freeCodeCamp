---
title: For Loop Statements
localeTitle: 对于循环语句
---
## 对于循环语句

Python利用for循环迭代元素列表。与C或Java不同，后者使用for循环在步骤中更改值并使用该值访问诸如数组之类的内容。

For循环遍历基于集合的数据结构，如列表，元组和字典。

基本语法是：

```python
for value in list_of_values: 
  # use value inside this block 
```

通常，您可以使用任何内容作为迭代器值，其中可以为iterable的条目赋值。例如，您可以从元组列表中解压缩元组：

```python
list_of_tuples = [(1,2), (3,4)] 
 
 for a, b in list_of_tuples: 
  print("a:", a, "b:", b) 
```

另一方面，您可以遍历任何可迭代的东西。您可以调用函数或使用列表文字。

```python
for person in load_persons(): 
  print("The name is:", person.name) 
```

```python
for character in ["P", "y", "t", "h", "o", "n"]: 
  print("Give me a '{}'!".format(character)) 
```

使用For循环的一些方法：

**迭代range（）函数**

```python
for i in range(10): 
    print(i) 
```

范围实际上是一个不可变的序列类型，而不是一个函数。 输出将包含来自下限的结果，即0到上限，即10但不包括10.默认情况下，下限或起始索引设置为零。 输出：
```
> 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
 9 
 > 
```

另外，可以通过添加第二和第三参数来指定序列的下限甚至序列的步骤。

```python
for i in range(4,10,2): #From 4 to 9 using a step of two 
    print(i) 
```

输出：
```
> 
 4 
 6 
 8 
 > 
```

**xrange（）函数**

在大多数情况下，xrange和range在功能方面完全相同。它们都提供了一种生成整数列表供您使用的方法，但是您可以随意使用。唯一的区别是range返回一个Python列表对象，xrange返回一个xrange对象。这意味着xrange实际上并不像运行时那样在运行时生成静态列表。它使用称为yielding的特殊技术根据需要创建值。该技术与一种称为生成器的对象一起使用。

还有一件事要补充。在Python 3.x中，xrange函数不再存在。范围函数现在执行xrange在Python 2.x中的功能

**迭代列表或元组中的值**

```python
A = ["hello", 1, 65, "thank you", [2, 3]] 
 for value in A: 
    print(value) 
```

输出：
```
> 
 hello 
 1 
 65 
 thank you 
 [2, 3] 
 > 
```

**迭代字典中的键（也称为hashmap）**

```python
fruits_to_colors = {"apple": "#ff0000", 
                    "lemon": "#ffff00", 
                    "orange": "#ffa500"} 
 
 for key in fruits_to_colors: 
    print(key, fruits_to_colors[key]) 
```

输出：
```
> 
 apple #ff0000 
 lemon #ffff00 
 orange #ffa500 
 > 
```

**使用zip（）函数在单个循环中迭代两个相同大小的列表**

\`\`\`蟒蛇 A = \[“a”，“b”，“c”\] B = \[“a”，“d”，“e”\]

对于a，b为拉链（A，B）： 打印a，b，a == b
```
Output: 
```

\> 真的 bd错误 是的假 >
```
**Iterate over a list and get the corresponding index with the enumerate() function** 
```

蟒蛇 A = \[“this”，“is”，“something”，“fun”\]

对于索引，枚举中的单词（A）： 打印（索引，单词）
```
Output: 
```

\> 0这个 1是 2件事 3有趣 >
```
A common use case is iterating over a dictionary: 
```

蟒蛇 名称，contacts.items（）中的phonenumber： print（名称，“可以在”，phonenumber下）
```
If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead: 
```

蟒蛇 对于index，枚举项（shopping\_basket）： print（“Item”，index，“is a”，item）
```
**for/else statements** 
 Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed. 
```

蟒蛇 周日_\= \['星期一'，'星期二'，'星期三'，'星期四'，'星期五'\] 今天='星期六' 对于天工作日_ ： if day == today： 打印（'今天是一周工作日'） 打破 其他： 打印（'今天不是一周工作日'）
```
In the above case the output will be `today is not a week day` since the break within the loop will never be executed. 
 
 **Iterate over a list using inline loop function** 
 
 We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following: 
```

蟒蛇 A = \[“this”，“is”，“awesome”，“shinning”，“star”\]

UPPERCASE = \[Word中的单词的\[word.upper（）\] 打印（大写）
```
Output: 
```

\> \['这'，'是'，'太棒了'，'SHINNING'，'明星'\] > \`\`\`

#### 更多信息：

*   [Python2 for循环文档](https://docs.python.org/2.7/tutorial/controlflow.html#for-statements)
    
*   [Python3 for循环文档](https://docs.python.org/3/tutorial/controlflow.html#for-statements)