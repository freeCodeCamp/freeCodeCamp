---
title: Class
localeTitle: 类
---
## 类

C＃中的类被定义为引用类型。为了使用引用类型实例化变量，必须指定`new`关键字，否则该变量将具有默认值`null` 。请参阅下面的示例。

```csharp
// The value of variableOne is null at this point. 
 NewClass variableOne; 
 
 // Now the value of variableOne will be an instance of the class NewClass 
 variableOne = new NewClass(); 
```

在运行时，在创建类时，将足够的内存分配给堆，以用于该变量保存的类的特定实例。

#### 创建类

要在C＃中创建一个类，我们需要使用`class`关键字后跟唯一标识符。

与其他语言一样，C＃创建一个不接受任何参数的默认构造函数。如果我们需要接受特殊参数或在构造函数中使用自定义initlization步骤，我们也可以指定我们自己的构造函数。

```csharp
public class NewClass 
 { 
    NewClass(string name) 
    { 
        // Initialization steps... 
    } 
 } 
```

类是创建对象的原型或蓝图。在C＃中，使用关键字class定义类。类用于将一些方法，属性，字段，事件和委托组合到一个单元中。类也可以包含嵌套类。

#### 示例：考虑以下Employee Class的情况：

```csharp
using System; 
 
 namespace CPrograms 
 { 
    class Employee 
    { 
        private string name; 
        private int employeeId; 
 
        public Employee(string name, int employeeId) 
        { 
            this.name = name; 
            this.employeeId = employeeId; 
        } 
        public void PrintEmployee() 
        { 
            Console.WriteLine("Employee Name: {0} , Employee ID: {1}", this.name, this.employeeId); 
        } 
    } 
 
    class Program 
    { 
        static void Main(string[] args) 
        { 
            Employee employeeObject = new Employee("John Doe", 420156); 
            employeeObject.PrintEmployee(); 
        } 
    } 
 } 
```

类只能从一个基类继承。但是，它可以从多个接口实现。

## 更多信息

了解更多关于类[在这里](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/class)