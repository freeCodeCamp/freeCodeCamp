---
title: String Join Method
localeTitle: 字符串连接方法
---
## 字符串连接方法

`str.join(iterable)`方法用于连接具有指定字符串`str`的`iterable`所有元素。 如果iterable包含任何非字符串值，则会引发TypeError异常。

`iterable` ：字符串的所有迭代。可以是字符串列表，字符串元组甚至是普通字符串。

#### 例子

1）用`":"`加入字符串ist

```python
print ":".join(["freeCodeCamp", "is", "fun"]) 
```

产量

```shell
freeCodeCamp:is:fun 
```

2）用`" and "`加入一个字符串元组

```python
print " and ".join(["A", "B", "C"]) 
```

产量

```shell
A and B and C 
```

3）在字符串中的每个字符后面插入一个`" "`

```python
print " ".join("freeCodeCamp") 
```

输出：

```shell
free C ode C amp 
```

4）加入空字符串。

```python
list1 = ['p','r','o','g','r','a','m'] 
 print("".join(list1)) 
```

输出：

```shell
program 
```

5）加入套装。

```python
test =  {'2', '1', '3'} 
 s = ', ' 
 print(s.join(test)) 
```

输出：

```shell
2, 3, 1 
```

#### 更多信息：

[字符串连接的Python文档](https://docs.python.org/2/library/stdtypes.html#str.join)