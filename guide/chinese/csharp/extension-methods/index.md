---
title: Extension Mehods
localeTitle: 扩展Mehods
---
## 扩展方法

扩展方法使您可以向现有类型“添加”方法，而无需创建新的派生类型，重新编译或以其他方式修改原始类型。对于用C＃编写的客户端代码，调用扩展方法和实际在类型中定义的方法之间没有明显区别。

最常见的扩展方法是LINQ标准查询运算符，它将查询功能添加到现有的System.Collections.IEnumerable和System.Collections.Generic.IEnumerable 类型。

### 用法

扩展方法被定义为静态方法，但是通过使用实例方法语法来调用。它们的第一个参数指定方法操作的类型，参数前面有this修饰符。当您**使用using**指令将命名空间显式导入源代码时，扩展方法仅在范围内。

### 例

以下示例显示为**System.String**类定义的扩展方法。
```
namespace ExtensionMethods 
 { 
    public static class MyExtensions 
    { 
        public static int WordCount(this String str) 
        { 
            return str.Split(new char[] { ' ', '.', '?' }, 
                             StringSplitOptions.RemoveEmptyEntries).Length; 
        } 
    } 
 } 
```

现在，您可以**使用**指令将**WordCount**方法引入作用域：
```
using ExtensionMethods; 
```

您可以使用以下语法从应用程序中调用它：
```
string s = "Hello Extension Methods"; 
 int i = s.WordCount(); 
```

#### 更多信息：

[如何：实现和调用自定义扩展方法（C＃编程指南）](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-and-call-a-custom-extension-method)