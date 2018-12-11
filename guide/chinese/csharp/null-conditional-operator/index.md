---
title: Null-conditional Operator
localeTitle: 空条件运算符
---
# 空条件运算符

空条件运算符允许使用最少量的代码进行空检查。例如，如果你有 一个Employee类型的employee变量，其属性类型为Address，您可以执行null检查，如下所示：

```csharp
Address address = null; 
 if (employee != null) 
 { 
    address = employee.Address; 
 } 
```

您可以使用标准条件运算符来使检查更简洁：

```csharp
Address address = employee != null ? employee.Address : null; 
```

但是，在C＃6.0中引入了空条件运算符，所以现在上面的行可以简单了 表示如下：

```csharp
Address address = student?.Address; 
```

如果employee为null，则只会将地址指定为null，并且不会发生NullReferenceExeception。 对于更深层的对象图，这变得更有用，因为您可以处理一系列条件成员访问。

例如：

```csharp
string city = student?.Address?.City; 
```

空条件运算符是短路的，因此只要检查一下条件成员的访问权限即可 返回null，其余的不会发生。

# 空结合运算符

另一个有用的空检查选项是null-coalescing运算符。如果操作数不为null，则返回左侧操作数;否则它返回右手操作数。

例如：

```csharp
public string GetStringValue() 
 { 
    return null; 
 } 
 
 // Display the value of s if s is NOT null. If x IS null, display the string "It was null." 
 
 string x = GetStringValue(); 
 
 Console.WriteLine(x ?? "It was null."); 
 
 // Result: 
 
 "It was null." 

```