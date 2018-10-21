---
title: Expression Bodied Methods and Properties
localeTitle: 表达方法和性质
---
# 表达方法和性质

您可以将方法和属性声明为lambda表达式，而无需语句块。用于简单实现，这种语法比声明常规方法或属性更简洁，因为它消除了对一些花括号的需要和使用显式返回语句。

以下是常规方法声明的示例：

```csharp
public Point CreatePoint(int x, int y) 
 { 
    return new Point(x, y); 
 } 
```

以下给出了相同的结果，但是作为表达式身体方法编写：

```csharp
public Point CreatePoint(int x, int y) => new Point(x, y); 
```

您还可以使用此语法声明属性。以下代码是我们如何声明没有lambda表达式的get-only属性：

```csharp
public Point Location 
 { 
    get 
    { 
        return _location; 
    } 
 } 
```

通过表达式方法，我们可以将此代码缩小到只有一行：

```csharp
public Point Location => _location 

```