---
title: String Interpolation
localeTitle: 字符串插值
---
# 字符串插值

在C＃中，通常要连接字符串，您可以使用“+”运算符或复合格式与String.Format之类的方法。通过复合格式化，我指的是带有索引占位符（格式项）的格式字符串以及要在占位符中使用的对象列表。

# ＃
```
string message = "Hello " + firstName + " " + lastName + "!"; 
 
 string message2 = string.Format("Hello {0} {1}!", firstName, lastName); 
```

对于插值字符串表达式，您有一个包含表达式的字符串，该表达式将替换为表达式的结果。您必须在字符串文字前面加上美元符号（$）。您希望包含在字符串中的表达式以花括号括起来。上面的消息现在看起来像这样：

# ＃
```
string message = $"Hello {firstName} {lastName}!"; 
```

**一点点有用的信息** 在字符串插值中，您可以调用函数，属性和三元运算符：
```
int a = 3; 
 int b = 454; 
 string result = $"{a}+{b} = {a+b}"; 

```