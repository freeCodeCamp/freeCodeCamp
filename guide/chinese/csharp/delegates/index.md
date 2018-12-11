---
title: Delegates
localeTitle: 代表
---
## 代表

AC＃delegate表示对具有给定集的方法的引用 参数和给定的返回类型。实例化委托时，可以将其关联 任何与委托类型兼容的方法：具有相同数量的参数，每个参数都是 相同的类型和返回值的类型也是相同的。

将它指定给委托时，可以使用实例方法或静态方法。

Delegate允许您将方法作为参数传递给其他方法。

委托通常用于实现回调函数。最典型的例子是事件处理程序：您注册 每当某个事件发生时要调用的方法（例如，单击鼠标按钮）。

### 开发人员的简短说明

委托就像C或C ++等C类语言中的函数指针。但是，它们是类型安全的。 与简单的函数指针不同 包含有关在调用委托时将调用其方法的对象实例的信息，并且具有 严格类型检查函数的参数和返回值。

## 例

您声明一个类似于声明函数的`delegate` ，但添加`delegate`关键字。例如：

```csharp
    public delegate string StringOperation ( string s1, string s2 ); 
```

任何采用两个`string`参数并返回`string`都可以分配给此委托类型的变量。

创建委托类型后，您可以像使用任何其他类型一样使用它。你可以声明一个局部变量， 其他类成员或将它们作为参数传递给其他方法。

```csharp
    StringOperation a; 
```

在调用委托之前，您需要为其分配一个值。我们假设我们有一个连接方法 具有以下实现：

```csharp
    private string Concatenate ( string one, string two ) { 
        return one + " " + two; 
    } 
```

然后，您可以将其分配给委托变量并像函数一样调用它。

```csharp
    StringOperation op = Concatenate; 
 
    string result = op("Hello", "World"); 
 
    Console.WriteLine ( result ); // print "Hello World" to the console 
```

## 更多信息

阅读更多关于代表的[信息](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/) 。