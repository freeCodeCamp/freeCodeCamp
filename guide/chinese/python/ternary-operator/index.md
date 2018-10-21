---
title: Python Ternary Operater
localeTitle: Python三元歌剧
---
# Python中的三元运算符

Python中的三元操作（通常也称为条件表达式）允许程序员执行评估并根据给定条件的真实性返回值。

三元运算符与标准`if` ， `else` ， `elif`结构的区别在于它不是控制流结构，并且在Python语言中表现得更像其他运算符，例如`==`或`!=` 。

### 例

在此示例中，如果`val`变量为偶数，则返回字符串`Even` ，否则返回字符串`Odd` 。然后将返回的字符串分配给`is_even`变量并打印到控制台。

#### 输入

```python
for val in range(1, 11): 
    is_even = "Even" if val % 2 == 0 else "Odd" 
    print(val, is_even, sep=' = ') 
```

#### 产量
```
1 = Odd 
 2 = Even 
 3 = Odd 
 4 = Even 
 5 = Odd 
 6 = Even 
 7 = Odd 
 8 = Even 
 9 = Odd 
 10 = Even 
```

### 来源

https://docs.python.org/2.5/whatsnew/pep-308.html