---
title: While Loop Statements
localeTitle: 循环语句
---
## 循环语句

Python使用`while`循环与其他流行语言类似。 `while`循环计算条件，然后在条件为真时执行代码块。代码块重复执行，直到条件变为false。

基本语法是：

```python
counter = 0 
 while counter < 10: 
   # Execute the block of code here as 
   # long as counter is less than 10 
```

一个例子如下所示：

```python
days = 0 
 week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
 while days < 7: 
   print("Today is " + week[days]) 
   days += 1 
```

输出：
```
Today is Monday 
 Today is Tuesday 
 Today is Wednesday 
 Today is Thursday 
 Today is Friday 
 Today is Saturday 
 Today is Sunday 
```

逐行解释上述代码：

1.  变量'days'设置为值0。
2.  将变量周分配给包含一周中所有日期的列表。
3.  while循环开始
4.  代码块将被执行，直到条件返回'true'。
5.  条件是'days <7'，其中rougly说运行while循环直到变量天数小于7
6.  所以当days = 7时，while循环停止执行。
7.  days变量在每次迭代时都会更新。
8.  当while循环第一次运行时，“Today is Monday”行被打印到控制台上，变量days变为等于1。
9.  由于变量天数等于1，小于7，因此再次执行while循环。
10.  它一次又一次地进行，当控制台打印出“今天是星期天”时，变量天数现在等于7，而while循环停止执行。

#### 更多信息：

*   [Python `while`语句文档](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)