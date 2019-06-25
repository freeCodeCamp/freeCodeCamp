---
title: Null-coalescing Operator
localeTitle: 空结合运算符
---
# 空结合运算符

C＃中的null-coalescing运算符用于帮助将一个变量分配给另一个变量，如果源值为`null` ，则指定备用值。 C＃中的null-coalescing运算符是`??` 。

## 例1

由于`name`为`null` ， `clientName`将为`clientName`分配值“John Doe”。

```csharp
string name = null; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> John Doe 
```

## 例2

由于`name`不为`null` ， `clientName`将为`clientName`分配`name`的值，即“Jane Smith”。

```csharp
string name = "Jane Smith"; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
```

```csharp
> Jane Smith 
```

## 替代if ... else语句

您可以使用`if...else`语句来测试是否存在`null`并分配不同的值。

```csharp
string clientName; 
 
 if (name != null) 
    clientName = name; 
 else 
    clientName = "John Doe"; 
```

但是，使用null-coalescing运算符可以大大简化这一点。

```csharp
string clientName = name ?? "John Doe"; 
```

## 条件（三元）运算符的替代

也可以使用条件运算符来测试`null`的存在并分配不同的值。

```csharp
string clientName = name != null ? name : "John Doe"; 
```

同样，这可以使用null-coalescing运算符进行简化。

```csharp
string clientName = name ?? "John Doe"; 
```

## 参考

*   [??运算符（C＃参考）](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)