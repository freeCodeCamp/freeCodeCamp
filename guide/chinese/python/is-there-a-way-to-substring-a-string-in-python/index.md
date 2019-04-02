---
title: Is There a Way to Substring a String in Python
localeTitle: 有没有办法在Python中子串字符串
---
## 有没有办法在Python中子串字符串

Python提供了许多方法来对字符串进行子串。它通常被称为“切片”。

它遵循以下模板：

```python
string[start: end: step] 
```

哪里，

`start` ：子字符串的起始索引。此索引处的字符包含在子字符串中。如果不包括_start_ ，则假定它等于0。

`end` ：子字符串的终止索引。此索引处的字符_不_包含在子字符串中。如果未包括_end_ ，或者指定的值超出字符串长度，则默认情况下假定它等于字符串的长度。

`step` ：包含当前字符后的每个“step”字符。默认值为1.如果省略_步长_值，则假定它等于1。

#### 模板

`string[start:end]` ：获取从index _start_到_end-1的_所有字符

`string[:end]` ：获取从字符串开头到_end-1的_所有字符

`string[start:]` ：获取索引_start_到字符串末尾的所有字符

`string[start:end:step]` ：从_开始_到_结束-1_获取每个_步骤_字符的所有字符

#### 例子

*   **获取字符串的前5个字符**

```python
string = "freeCodeCamp" 
 print(string[0:5]) 
```

输出：

```shell
> freeC 
```

注意： `print(string[:5])`返回与`print(string[0:5])`相同的结果`print(string[0:5])`

*   **从字符串的第3个字符获取长度为4的子字符串**

```python
string = "freeCodeCamp" 
 print(string[2:6]) 
```

输出：

```shell
> eeCo 
```

请注意，开始或结束索引可能是负数。负索引意味着您从字符串的末尾开始计数而不是从开头（即从右到左）开始计数。索引-1表示字符串的最后一个字符，-2表示倒数第二个字符，依此类推......

*   **获取字符串的最后一个字符**

```python
string = "freeCodeCamp" 
 print(string[-1]) 
```

输出：

```shell
> p 
```

*   **获取字符串的最后5个字符**

```python
string = "freeCodeCamp" 
 print(string[-5:]) 
```

输出：

```shell
> eCamp 
```

*   **获取包含除最后4个字符和第1个字符之外的所有字符的子字符串**

```python
string = "freeCodeCamp" 
 print(string[1:-4]) 
```

输出：

```shell
> reeCode 
```

#### 更多例子

```py
str = “freeCodeCamp” 
 
 print str[-5:-2] # prints 'eCa' 
 print str[-1:-2] # prints '' (empty string) 
```

*   **从字符串中获取每个其他字符**

```python
string = "freeCodeCamp" 
 print(string[::2]) 
```

输出：

```shell
> feCdCm 

```