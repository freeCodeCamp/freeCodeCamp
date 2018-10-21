---
title: The C Programming Language
localeTitle: C程序设计语言
---
## 基本

*   建立
*   你的第一个C＃程序
*   类型和变量
*   流量控制声明
*   运营商
*   字符串
*   类，对象，接口和主要方法
*   字段和属性
*   范围和可访问性修饰符
*   处理例外情况

## 中间

*   泛型
*   事件，代表和Lambda表达式
*   集合框架
*   LINQ

## 高级

*   异步编程（异步和等待）
*   任务并行库

## C＃6有什么新功能

*   空条件运算符
*   自动属性初始化程序
*   表达的名称
*   表达身体的功能和属性
*   其他特性

## 面向对象原则（OOP）

*   封装
*   抽象化
*   遗产
*   多态性

## 坚实的原则

*   单一责任原则
*   开放封闭原则
*   利斯科夫替代原则
*   接口隔离原理
*   依赖倒置原则

## C＃最佳实践，设计模式和测试驱动开发（TDD）

## 建立

[LinqPad](http://www.linqpad.net/)是一个.NET暂存器，用于快速测试您的C＃代码片段。标准版是免费的，是初学者执行语言陈述，表达式和程序的完美工具。

或者，您也可以下载[Visual Studio Community 2015](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) ，它是大多数专业人员用于创建企业应用程序的可扩展[IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) 。

## 你的第一个C＃程序
```
//this is the single line comment 
 
 /** This is multiline comment, 
 compiler ignores any code inside comment blocks. 
 **/ 
 
 //This is the namespace, part of the standard .NET Framework Class Library 
 using System; 
 // namespace defines the scope of related objects into packages 
 namespace Learning.CSharp 
 { 
  // name of the class, should be same as of .cs file 
  public class Program 
  { 
    //entry point method for console applications 
   public static void Main() 
    { 
      //print lines on console 
      Console.WriteLine("Hello, World!"); 
      //Reads the next line of characters from the standard input stream.Most common use is to pause program execution before clearing the console. 
      Console.ReadLine(); 
    } 
  } 
 } 
```

每个C＃控制台应用程序都必须有一个[Main方法](https://msdn.microsoft.com/en-gb/library/acy3edy3.aspx) ，它是程序的入口点。

在.NET Fiddle中编辑[HelloWorld](https://dotnetfiddle.net/kY7QRm) ，这是一个受[JSFiddle](http://jsfiddle.net)启发的工具，您可以在其中更改代码片段并[自行](http://jsfiddle.net)检查输出。请注意，这只是为了共享和测试代码片段，而不是用于开发应用程序。

如果您使用的是Visual Studio，请按照本[教程](https://msdn.microsoft.com/en-us/library/k1sx6ed2.aspx)创建控制台应用程序并了解您的第一个C＃程序。

## 类型和变量

C＃是一种强类型语言。每个变量都有一个类型。每个表达式或语句都计算为一个值。 C＃中有两种类型

*   价值类型
*   参考类型。

**值类型** ： **值类型的**变量直接包含值。将一个值类型变量分配给另一个值复制包含的值。

[在.NET小提琴中编辑](https://dotnetfiddle.net/JCkTxb)
```
int a = 10; 
 int b = 20; 
 a=b; 
 Console.WriteLine(a); //prints 20 
 Console.WriteLine(b); //prints 20 
```

请注意，在其他动态语言中，这可能会有所不同，但在C＃中，这始终是值副本。创建值类型时，会创建最有可能在[堆栈中](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2)的单个空间，这是一个“LIFO”（后进先出）数据结构。堆栈具有大小限制并且存储器操作是有效的。内置数据类型的几个例子是`int, float, double, decimal, char and string` 。

输入|示例|描述  
\--------- | -------------------------------------------------- --------------------------- | -------------------------------------------------- -------------------------------------------------- -----------------------------  
_整数_ | `int fooInt = 7;` | **签名32位**整数  
_长_ | `long fooLong = 3000L;` | **有符号的64位**整数。 **L用于指定此变量值的类型为long / ulong**  
_双_ | `double fooDouble = 20.99;` |精度： **15-16位**  
_浮动_ | `float fooFloat = 314.5f;` |精度： **7位数** 。 **F用于指定此变量值的类型为float**  
_十进制_ | `decimal fooDecimal = 23.3m;` |精度： **28-29位。**它更精确，更小的范围使其适用于**财务和货币计算**  
_Char_ | `char fooChar = 'Z';` |单个**16位Unicode字符**  
_布尔_ | `bool fooBoolean = false;` | Boolean - **true和false**  
_字符串_ | `string fooString = "\"escape\" quotes and add \n (new lines) and \t (tabs);` | **一串Unicode字符。**

有关所有内置数据类型的完整列表，请参见[此处](https://msdn.microsoft.com/en-us/library/ms228360)

[**引用类型**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx) ： [**引用类型的**](https://msdn.microsoft.com/en-us/library/490f96s2.aspx)变量存储对其对象的引用，这意味着它们将地址存储到[堆栈](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline2)上的数据位置，也称为指针。实际数据存储在[堆](http://gribblelab.org/CBootcamp/7_Memory_Stack_vs_Heap.html#orgheadline3)内存中。将引用类型分配给另一个不会复制数据，而是创建指向堆上相同位置的第二个引用副本。

在堆中，对象以随机顺序分配和释放，这就是为什么这需要内存管理和[垃圾收集](https://msdn.microsoft.com/en-us/library/hh156531(v=vs.110)的开销.aspx）。

除非您编写[不安全的代码](https://msdn.microsoft.com/en-us/library/t2yzs44b.aspx)或处理[非托管代码](https://msdn.microsoft.com/en-us/library/sd10k43k(v=vs.100) .aspx），否则您无需担心内存位置的生命周期。 .NET编译器和CLR会处理这个问题，但为了优化应用程序的性能，保持这种思路仍然是好的。

更多信息[在这里](http://www.c-sharpcorner.com/UploadFile/rmcochran/csharp_memory01122006130034PM/csharp_memory.aspx?ArticleID=9adb0e3c-b3f6-40b5-98b5-413b6d348b91)

## 流量控制声明

*   [如果是else](https://msdn.microsoft.com/en-us/library/5011f09h.aspx)语句： [在.NET小提琴中编辑](https://dotnetfiddle.net/IFVB33)
    
    ```
            int myScore = 700; 
            if (myScore == 700) 
            { 
                Console.WriteLine("I get printed on the console"); 
            } 
            else if (myScore > 10) 
            { 
                Console.WriteLine("I don't"); 
            } 
            else 
            { 
                Console.WriteLine("I also don't"); 
            }
    ```
    
*   [Switch](https://msdn.microsoft.com/en-GB/library/06tc147t.aspx)语句： [在.NET Fiddle中编辑](https://dotnetfiddle.net/lPZftO)
    
    使用系统;
    
    公共课程 { public static void Main（） { int myNumber = 0; 开关（myNumber） { //切换部分可以有多个案例标签。 案例0： 情况1： { Console.WriteLine（“案例0或1”）; 打破; }
    
    ```
            // Most switch sections contain a jump statement, such as a break, goto, or return.; 
            case 2: 
                Console.WriteLine("Case 2"); 
                break; 
            // 7 - 4 in the following line evaluates to 3. 
            case 7 - 4: 
                Console.WriteLine("Case 3"); 
                break; 
            // If the value of myNumber is not 0, 1, 2, or 3 the 
            //default case is executed.* 
            default: 
                Console.WriteLine("Default case. This is also optional"); 
                break; // could also throw new Exception() instead 
        } 
     } 
    
    ```
    
    }
    
*   [For](https://msdn.microsoft.com/en-us/library/ch45axte.aspx) ＆ [Foreach](https://msdn.microsoft.com/en-gb/library/ttw7t8t6.aspx) ： [在.NET小提琴中编辑](https://dotnetfiddle.net/edxtvq)
    
    for（int i = 0; i <10; i ++） { Console.WriteLine（ⅰ）; //打印0-9 }
    
    Console.WriteLine（Environment.NewLine）; for（int i = 0; i <= 10; i ++） { Console.WriteLine（ⅰ）; //打印0-10 }
    
    Console.WriteLine（Environment.NewLine）; for（int i = 10 - 1; i> = 0; i--）//递减循环 { Console.WriteLine（ⅰ）; //打印9-0 }
    
    Console.WriteLine（Environment.NewLine）; // for（;;） { //所有表达式都是可选的。这个说法 //创建一个无限循环。\* //  
    }
    
*   [虽然](https://msdn.microsoft.com/en-us/library/2aeyhxcd.aspx) ＆ [do-while](https://msdn.microsoft.com/en-us/library/370s1zax.aspx) ： [在.NET小提琴中编辑](https://dotnetfiddle.net/O5hOF1)
    
    //继续while循环，直到index等于10。 int i = 0; 而（i <10） { Console.Write（“While语句”）; Console.WriteLine（i）; //将索引写入屏幕。 i ++; //增加变量。 }
    
    int number = 0; //首先工作，直到满足条件，即数字等于4时终止。 做 { Console.WriteLine（number）; //打印0-4的值 号++; //将一个添加到数字。 } while（number <= 4）;