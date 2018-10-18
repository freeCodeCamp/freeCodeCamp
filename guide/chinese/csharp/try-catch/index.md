---
title: Try Catch Finally
localeTitle: 尝试抓住最后
---
# 尝试抓住最后

Try-Catch-Finally块用于避免破坏应用程序的未处理异常。当您的代码`throws`一个位于`try`部分之间的异常时，它将被捕获在语句的`catch`部分，您可以根据需要处理它。 `finally`语句总是在`finally`运行，通常用于清理非托管资源。您并不总是需要存在三个块，下面是有效选项。

*   的try-catch-最后
*   试着抓
*   尝试，最后

## 句法

```csharp
try 
 { 
   // Code which could potentially throw an exception 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 catch(Exception e) 
 { 
    // Code to handle the exception 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 finally 
 { 
    // Code which will always run no matter what. 
    Console.WriteLine("Try-Catch block has finished execution"); 
 } 
```

在上面的例子中，我们试图将'abcde'转换为数值。此行将抛出异常，因为它无法成功转换为数字。 execption将被捕获到catch块中，异常消息和其他详细信息将存储在catch块中指定的变量中（上例中的字母“e”）。完成所有这些后，将执行“finally”部分以完成它。

## 尝试阻止

try块应放在可能与普通行为不同的代码周围，并导致`Exception`并破坏您的应用程序。通过尝试阻止您可以保护自己免受致命的应用程序崩溃。重要的是要注意，一旦您的应用程序出现错误并抛出异常， `Try`块中的其余代码将**不会**被执行。

try块有自己的方法范围，因此在try块内部无法访问try块内声明的任何变量。

```csharp
try 
 { 
    // Read user input from the console. 
    var userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Not correct 
```

以上将为您提供编译时错误，因为无法访问值'userInput'。如果需要访问try-catch块之外的变量，则需要在try块之前声明变量。

```csharp
var userInput = ""; 
 try 
 { 
    // Read user input from the console. 
    userInput = Console.ReadLine(); 
 } 
 catch(Exception e) 
 { 
    Console.WriteLine("Exception: " + e.Message); 
 } 
 
 //Outside the Try block 
 var parsedUserInput = Int32.Parse(userInput);  // Correct 
```

## 抓住块

您可以在此块中指定要捕获的`Exception`类型。如果要捕获所有可能的异常，可以使用`Exception`基类。如果您只想捕获特定类型的异常，则可以指定该异常。其他异常类型的一些示例是`ArgumentException` ， `OutOfMemoryException`和`FormatException` 。

```csharp
try 
 { 
   var parsedValue = Int32.Parse("abcde"); 
 } 
 // Only FormatExceptions will be caught in this catch block. 
 catch(FormatException exceptionVariable) 
 { 
    Console.WriteLine(exceptionVariable.Message); 
 } 
```

在异常类型之后声明的变量将包含异常的所有数据，并且可以在`Catch`块中使用。

## 最后阻止

在`Try`和`Catch`块之后，finally块**始终**在最后运行。无论是否抛出异常，此部分通常用于**必须**在最后发生的事情。 例如，假设我们需要一个变量，以便在它一直被操纵之后总是重新初始化为特定的数字。

```csharp
int initalValue = 12; 
 try 
 { 
    // Code which manipulates 'initialValue' 
 } 
 finally 
 { 
    Console.WriteLine("re-initalising value back to 12"); 
    initialValue = 12; 
 } 

```