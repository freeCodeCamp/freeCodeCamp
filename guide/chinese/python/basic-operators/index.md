---
title: Basic Operators
localeTitle: 基本运营商
---
## 基本运营商

运算符是告诉解释器执行特定操作的符号（即算术，比较，逻辑等）

下面列出了Python中不同类型的运算符：

1.  算术运算符
2.  关系运算符
3.  按位运算符
4.  分配运营商
5.  逻辑运算符
6.  会员运营商
7.  身份运营商

#### 算术运算符

算术运算符将两个操作数作为输入，执行计算并返回结果。

考虑表达式**“a = 2 + 3”** 。这里， `2`和`3`是_操作数_ ， `+`是_算术运算符_ 。操作的结果存储在变量a中。

操作者

描述

用法

+

对操作数执行添加

12 + 3 = 15

\-

在操作数上执行减法。 从左操作数中减去右操作数

12 - 3 = 9

\*

对操作数执行乘法运算

12 \* 3 = 36

/

对操作数执行分区。 将左操作数除以右操作数

12/3 = 4

注意：当使用两个整数时，Python 2和Python 3之间的结果不同。

Python 2中5/2 = 2

Python 3中5/2 = 2.5

％

对操作数执行模数。 返回将左操作数除以右操作数时获得的余数

16％3 = 1

\*\*

执行指数操作。 左操作数被提升到右操作数的幂

12 \*\* 3 = 1728

//

执行Floor Division操作。 返回右操作数跳转左操作数后获得的商的整数部分

18 // 5 = 3

注意：要使结果为浮点类型，其中一个操作数也必须是float类型。

#### 关系运算符

关系运算符用于比较两个操作数以确定它们之间的关系。它根据条件返回一个布尔值。

操作者

描述

用法

\>

如果左操作数大于右操作数，则返回True 否则返回False

12> 3返回True

<

如果右操作数大于左操作数，则返回True 否则返回False

12 <3返回False

\==

如果两个操作数相等，则返回True 否则返回False

12 == 3返回False

\> =

如果左操作数大于或等于右操作数，则返回True 否则返回False

12> = 3返回True

<=

如果右操作数大于或等于左操作数，则返回True 否则返回False

12 <= 3返回False

！=

如果两个操作数不相等，则返回True 否则返回False

12！= 3返回True

#### 按位运算符

按位运算符逐位对操作数执行操作

对于以下用法，考虑a = 2（二进制表示法，10）和b = 3（二进制表示法，11）

操作者

描述

用法

＆

对操作数执行按位AND运算

a＆b = 2 二进制：10和11 = 10

|

对操作数执行按位OR运算

一个| b = 3 二进制：10 | 11 = 11

^

对操作数执行按位XOR运算

a ^ b = 1 二进制：10 ^ 11 = 01

〜

对操作数执行按位NOT运算 翻转操作数中的每一位

~a = -3 二进制：〜（00000010）=（11111101）

\>>

执行按位右移。将左操作数的位移位，右移指定为右操作数的位数

a >> b = 0 二进制：00000010 >> 00000011 = 0

<<

执行按位左移。移位左操作数的位，左移指定为右操作数的位数

a << b = 16 二进制：00000010 << 00000011 = 00001000

#### 分配运营商

赋值运算符用于为变量赋值。这通常与其他运算符（如算术，按位）组合，其中对操作数执行操作，结果分配给左操作数。

考虑以下示例， **a = 18** 。 Here `=`是赋值运算符，结果存储在变量a中。 **a + = 10** 。这里`+=`是赋值运算符，结果存储在变量a中。这与a = a + 10相同。

操作者

用法

\=

a = 5.将值5分配给变量a

\+ =

a + = 5相当于a = a + 5

\- =

a - = 5相当于a = a - 5

\* =

a \* = 3相当于a = a \* 3

/ =

a / = 3相当于a = a / 3

％=

a％= 3相当于a = a％3

\*\* =

a \*\* = 3相当于a = a \*\* 3

// =

a // = 3相当于a = a // 3

＆=

a＆= 3相当于a = a＆3

| =

a | = 3相当于a = a | 3

^ =

a ^ = 3相当于a = a ^ 3

\>> =

a >> = 3相当于a = a >> 3

<< =

a << = 3相当于a = a << 3

#### 逻辑运算符

逻辑运算符用于基于多个条件做出决策。 Python中使用的逻辑运算符是 `and` ， `or` `not`

操作者

描述

用法

和

如果两个操作数均为True，则返回True 否则返回False

a和b

要么

如果任何一个操作数为True，则返回True 否则返回False

a或b

不

如果操作数为False，则返回True 否则返回False

不是

#### 会员运营商

成员资格运算符用于标识任何序列（列表，字符串，元组）的成员资格。 `in`和`not in`会员运营商

`in`如果在序列中找到指定的值，则返回True。否则返回False。 `not in`返回true如果指定的值不是序列中发现的。否则返回False。

###### 示例用法

```py
a = [1,2,3,4,5] 
 
 #Is 3 in the list a? 
 print 3 in a # prints True 
 
 #Is 12 not in list a? 
 print 12 not in a # prints True 
 
 str = "Hello World" 
 
 #Does the string str contain World? 
 print "World" in str # prints True 
 
 #Does the string str contain world? (note: case sensitive) 
 print "world" in str # prints False 
 
 print "code" not in str # prints True 
```

#### 身份运营商

身份运算符用于检查两个变量是否共享相同的内存位置。 `is`和`is not`身份运营商

如果操作数引用同一个对象， `is`返回True。否则返回False。 如果操作数不引用同一对象， `is not`返回True。否则返回False。

请注意，两个值相等时，无需暗示它们是相同的。

###### 示例用法

```py
a = 3 
 b = 3 
 c = 4 
 print a is b # prints True 
 print a is not b # prints False 
 print a is not c # prints True 
 
 x = 1 
 y = x 
 z = y 
 print z is 1 # prints True 
 print z is x # prints True 
 
 str1 = "FreeCodeCamp" 
 str2 = "FreeCodeCamp" 
 
 print str1 is str2 # prints True 
 print "Code" is str2 # prints False 
 
 a = [10,20,30] 
 b = [10,20,30] 
 
 print a is b # prints False (since lists are mutable in Python) 

```