---
title: Error Handling
localeTitle: 错误处理
---
## 错误处理

错误处理，在更大程度上，异常处理，是为了返回有关数据操作的重要信息而编写的函数/方法。错误处理通常与Promises和Callbacks一起使用。 错误处理是每个开发人员在编程时应该关心的非常重要的事情。在这里，我将解释如何使用try-catch块处理运行时发生的错误，并在C＃程序中使用示例。 Try-catch语句可用于所有主要编程语言，语法相似。

### try-catch块如何工作。

try-catch语句由**try**块和**catch**块以及可选的**finally**块组成。可以抛出异常的代码应该放在try块中。 catch块接受可以作为参数抛出的异常，然后在块内处理该异常。在运行时，首先执行try块中的代码。如果抛出异常，它将被抛出到catch块以进行处理。如果没有catch块，程序将显示未处理的异常错误并停止运行。如果try块中的代码可能抛出多个异常，则使用多个catch块。无论是否抛出异常，还有一个可选的**finally**块，它将在其中执行代码。

下面是一个示例程序，它使用C＃库中的预定义类来处理除零异常。异常是所有异常的基类。

`c# using System; namespace ErrorHandling { class DivideByZero { int result; DivideByZero() { result = 0; } public void division(int num1, int num2) { try { result = num1 / num2; } catch (DivideByZeroException e) { Console.WriteLine("Exception caught: {0}", e); } catch(Exception ex) { Console.WriteLine("Exception caught: {0}", ex); } finally { Console.WriteLine("Result: {0}", result); } } static void Main(string[] args) { DivideByZero d = new DivideByZero(); d.division(10, 0); Console.ReadKey(); } } }`

*   在上面的程序中传递0作为第二个参数将抛出DivideByZeroExceptions。
    
*   此异常将由具有DivideByZeroException类的catch块处理。如果发生除DivideByZeroExceptions之外的任何异常，它们将由异常捕获块处理。
    
    异常是C＃库中可用的所有异常类的基类。即使您想编写自己的异常，也必须将Exception基类继承到程序中。
    

#### 更多信息：

https://quizlet.com/135129010/computer-science-error-handling-flash-cards/ https://en.wikipedia.org/wiki/Exception\_handling