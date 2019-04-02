---
title: String Split Method
localeTitle: 字符串拆分方法
---
`split()`函数通常用于Python中的字符串拆分。

#### `split()`方法

模板： `string.split(separator, maxsplit)`

`separator` ：分隔符字符串。您可以根据此字符拆分字符串。例如。它可能是 ” ”， ”：”， ”;”等等

`maxsplit` ：基于`separator`拆分字符串的次数。如果未指定或-1，则根据`separator`所有匹配项拆分字符串

此方法返回的分隔字符串的列表`separator`

#### 例子

1）在空格上拆分字符串：“”

```python
string = "freeCodeCamp is fun." 
 print(string.split(" ")) 
```

输出：

```python
['freeCodeCamp', 'is', 'fun.'] 
```

2）用逗号分隔字符串：“，”

```python
string = "freeCodeCamp,is fun, and informative" 
 print(string.split(",")) 
```

输出：

```python
['freeCodeCamp', 'is fun', ' and informative'] 
```

3）未指定`separator`符

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split()) 
```

输出：

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

注意：如果未指定`separator`符，则会删除**所有**空格的字符串

```python
string = "freeCodeCamp        is     fun and    informative" 
 print(string.split()) 
```

输出：

```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative'] 
```

3）使用`maxsplit`拆分字符串。这里我们将字符串拆分为两次：

```python
string = "freeCodeCamp is fun and informative" 
 print(string.split(" ", 2)) 
```

输出：

```python
['freeCodeCamp', 'is', 'fun and informative'] 
```

#### 更多信息

查看[有关字符串拆分](https://docs.python.org/2/library/stdtypes.html#str.split)的[Python文档](https://docs.python.org/2/library/stdtypes.html#str.split)